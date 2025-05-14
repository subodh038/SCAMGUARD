import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { recentCalls, recentReports } from "@/utils/dummyData";
import { Search, ThumbsUp, ThumbsDown, AlertCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import CallCard from "./CallCard";

const ScamDatabase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger an API call to search the database
  };
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Scam Database</h2>
          <p className="text-muted-foreground">
            Search and contribute to our crowdsourced database of scam numbers
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
          <h3 className="text-lg font-medium mb-4">Search Phone Number</h3>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter a phone number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>

        <Tabs defaultValue="recent">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="recent">Recent Reports</TabsTrigger>
              <TabsTrigger value="calls">Call History</TabsTrigger>
              <TabsTrigger value="my">My Reports</TabsTrigger>
            </TabsList>
            
            <Button>
              <Phone className="h-4 w-4 mr-2" />
              Report a Number
            </Button>
          </div>
          
          <TabsContent value="recent" className="mt-0">
            <div className="space-y-6">
              {recentReports.map((report) => (
                <div key={report.id} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{report.phoneNumber}</span>
                          <Badge variant="destructive">{report.reportType}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Reported {new Date(report.reportedAt).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <ThumbsUp className="h-3.5 w-3.5 mr-1.5" />
                          {report.upvotes}
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <ThumbsDown className="h-3.5 w-3.5 mr-1.5" />
                          {report.downvotes}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-muted/50 p-3 rounded-md text-sm">
                      "{report.description}"
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">
                        Report ID: {report.id}
                      </div>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
                          Dispute
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          <Phone className="h-3.5 w-3.5 mr-1.5" />
                          Block
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="calls" className="mt-0">
            <div className="grid gap-4 sm:grid-cols-2">
              {recentCalls.map((call) => (
                <CallCard 
                  key={call.id}
                  call={call}
                  showDetails
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="my" className="mt-0">
            <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg border border-dashed">
              <div className="text-center">
                <AlertCircle className="h-8 w-8 text-muted-foreground mb-2 mx-auto" />
                <h3 className="font-medium mb-1">No Reports Yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You haven't reported any scam calls yet
                </p>
                <Button>Report a Number</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ScamDatabase;
