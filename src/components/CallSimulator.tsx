
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScamAlert from "@/components/ScamAlert";
import { Phone, X, VolumeX, PhoneCall, Mic, Wand2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { recentCalls, Call } from "@/utils/dummyData";

interface CallLog {
  id: string;
  phoneNumber: string;
  callerName: string;
  timestamp: number;
  duration: number;
  status: "Safe" | "Suspicious" | "Scam";
}

const CallSimulator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [callerName, setCallerName] = useState("");
  const [callType, setCallType] = useState("incoming");
  const [isCalling, setIsCalling] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [scamProbability, setScamProbability] = useState(0);
  const [scamType, setScamType] = useState("");
  const [callStatus, setCallStatus] = useState<"Safe" | "Suspicious" | "Scam">("Safe");
  const [showScamAlert, setShowScamAlert] = useState(false);
  const [muted, setMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [callTimer, setCallTimer] = useState<NodeJS.Timeout | null>(null);
  
  // Convert recent calls from dummyData to match CallLog type
  const convertedCalls: CallLog[] = recentCalls.map(call => ({
    id: call.id,
    phoneNumber: call.phoneNumber,
    callerName: call.callerName || "",
    timestamp: call.timestamp.getTime(),
    duration: call.duration || 0,
    status: call.status as "Safe" | "Suspicious" | "Scam" // Type assertion to fix compatibility
  }));
  
  const [recentSimulations, setRecentSimulations] = useState<CallLog[]>(convertedCalls);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCalling) {
      timer = setInterval(() => {
        setCallDuration((prevDuration) => prevDuration + 1);
      }, 1000);
      setCallTimer(timer);
    } else {
      if (callTimer) {
        clearInterval(callTimer);
        setCallTimer(null);
      }
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [isCalling]);
  
  const handleSimulateCall = () => {
    setIsSimulating(true);
    // Simulate scam detection (replace with actual AI logic)
    setTimeout(() => {
      const randomProbability = Math.random() * 100;
      setScamProbability(randomProbability);
      
      if (randomProbability > 70) {
        setScamType("IRS Impersonation Scam");
        setCallStatus("Scam");
        setShowScamAlert(true);
      } else if (randomProbability > 40) {
        setCallStatus("Suspicious");
        setScamType("Potential Robocall");
      } else {
        setCallStatus("Safe");
        setScamType("No Threat Detected");
      }
      
      setIsSimulating(false);
    }, 2000);
  };
  
  const handleAnswerCall = () => {
    setIsCalling(true);
  };
  
  const handleEndCall = () => {
    setIsCalling(false);
    
    const newCallLog: CallLog = {
      id: Date.now().toString(),
      phoneNumber: phoneNumber,
      callerName: callerName,
      timestamp: Date.now(),
      duration: callDuration,
      status: callStatus,
    };
    
    setRecentSimulations((prevSimulations) => [newCallLog, ...prevSimulations]);
  };
  
  const toggleMute = () => {
    setMuted(!muted);
  };
  
  const handleCloseAlert = () => {
    setShowScamAlert(false);
  };
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Call Simulator</h2>
          <p className="text-muted-foreground">
            Test how our scam detection works with simulated calls
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-medium mb-4">Call Details</h3>
            <div className="space-y-4">
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Caller Name"
                  value={callerName}
                  onChange={(e) => setCallerName(e.target.value)}
                />
              </div>
              <div>
                <Select value={callType} onValueChange={setCallType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Call Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="incoming">Incoming</SelectItem>
                    <SelectItem value="outgoing">Outgoing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {!isCalling ? (
                <Button 
                  onClick={handleSimulateCall} 
                  disabled={isSimulating}
                  className="w-full"
                >
                  {isSimulating ? (
                    <>
                      <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                      Simulating...
                    </>
                  ) : (
                    <>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Simulate Call
                    </>
                  )}
                </Button>
              ) : (
                <div className="flex justify-between">
                  <Button 
                    variant="destructive" 
                    onClick={handleEndCall}
                  >
                    <X className="mr-2 h-4 w-4" />
                    End Call
                  </Button>
                  <Button 
                    variant="secondary" 
                    onClick={toggleMute}
                  >
                    {muted ? (
                      <>
                        <VolumeX className="mr-2 h-4 w-4" />
                        Unmute
                      </>
                    ) : (
                      <>
                        <Mic className="mr-2 h-4 w-4" />
                        Mute
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-lg font-medium mb-4">Call Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Status:</span>
                <Badge
                  className={cn(
                    callStatus === "Scam" && "bg-destructive text-white",
                    callStatus === "Suspicious" && "bg-amber-500 text-white",
                    callStatus === "Safe" && "bg-green-500 text-white"
                  )}
                >
                  {callStatus}
                </Badge>
              </div>
              
              <div>
                <span>Scam Probability:</span>
                <Badge>{scamProbability.toFixed(2)}%</Badge>
              </div>
              
              <div>
                <span>Scam Type:</span>
                <div>{scamType}</div>
              </div>
              
              {isCalling && (
                <div>
                  <span>Call Duration:</span>
                  <div>{callDuration} seconds</div>
                </div>
              )}
              
              {!isCalling && callStatus !== "Safe" && (
                <Button onClick={handleAnswerCall} className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Answer Call
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <ScamAlert
          probability={scamProbability}
          isOpen={showScamAlert}
          onClose={() => setShowScamAlert(false)}
          phoneNumber={phoneNumber}
          scamType={scamType}
        />
        
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Recent Simulations</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {recentSimulations.map((call) => (
              <div 
                key={call.id} 
                className="bg-white border rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{call.phoneNumber}</span>
                        <Badge 
                          variant={
                            call.status === "Scam" ? "destructive" : 
                            call.status === "Suspicious" ? "secondary" : 
                            "outline"
                          }
                        >
                          {call.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {new Date(call.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      Call Duration: {call.duration}s
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        <AlertCircle className="h-3.5 w-3.5 mr-1.5" />
                        Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSimulator;
