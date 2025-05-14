import { 
  ChartContainer, 
  ChartTooltipContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { 
  ResponsiveContainer,
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import { statistics, recentCalls } from "@/utils/dummyData";
import { Phone, ShieldCheck, ShieldAlert, AlertCircle, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Data for charts
  const pieData = [
    { name: "Scam", value: statistics.scamCallsDetected, fill: "#FF4757" },
    { name: "Suspicious", value: statistics.callsAnalyzed - statistics.scamCallsDetected - (statistics.totalCallsBlocked - statistics.scamCallsDetected), fill: "#FFA502" },
    { name: "Safe", value: statistics.totalCallsBlocked - statistics.scamCallsDetected, fill: "#2ED573" }
  ];

  const barData = [
    { name: "Mon", scam: 12, suspicious: 5, safe: 18 },
    { name: "Tue", scam: 19, suspicious: 8, safe: 22 },
    { name: "Wed", scam: 15, suspicious: 7, safe: 25 },
    { name: "Thu", scam: 18, suspicious: 11, safe: 19 },
    { name: "Fri", scam: 21, suspicious: 13, safe: 23 },
    { name: "Sat", scam: 10, suspicious: 6, safe: 17 },
    { name: "Sun", scam: 8, suspicious: 4, safe: 12 }
  ];

  const lineData = [
    { date: "Week 1", blocked: 78, detected: 65 },
    { date: "Week 2", blocked: 85, detected: 73 },
    { date: "Week 3", blocked: 91, detected: 79 },
    { date: "Week 4", blocked: 127, detected: 83 }
  ];
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor and analyze your call protection activity
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <span className="stat-label">Calls Blocked</span>
              <ShieldCheck className="h-5 w-5 text-safe" />
            </div>
            <span className="stat-value">{statistics.totalCallsBlocked}</span>
            <span className="text-xs text-muted-foreground mt-1">This month</span>
          </div>
          
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <span className="stat-label">Scams Detected</span>
              <ShieldAlert className="h-5 w-5 text-scam" />
            </div>
            <span className="stat-value">{statistics.scamCallsDetected}</span>
            <span className="text-xs text-muted-foreground mt-1">This month</span>
          </div>
          
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <span className="stat-label">Calls Analyzed</span>
              <Phone className="h-5 w-5 text-app-blue" />
            </div>
            <span className="stat-value">{statistics.callsAnalyzed}</span>
            <span className="text-xs text-muted-foreground mt-1">This month</span>
          </div>
          
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <span className="stat-label">Scam Rate</span>
              <TrendingUp className="h-5 w-5 text-suspicious" />
            </div>
            <span className="stat-value">{statistics.dailyScamRate}%</span>
            <span className="text-xs text-muted-foreground mt-1">Daily average</span>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="font-medium mb-4">Weekly Call Analysis</h3>
            <div className="h-64">
              <ChartContainer
                id="bar-chart"
                config={{
                  scam: { color: "#FF4757" },
                  suspicious: { color: "#FFA502" },
                  safe: { color: "#2ED573" }
                }}
              >
                <BarChart
                  data={barData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                  <Legend />
                  <Bar dataKey="scam" fill="#FF4757" />
                  <Bar dataKey="suspicious" fill="#FFA502" />
                  <Bar dataKey="safe" fill="#2ED573" />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="font-medium mb-4">Monthly Trends</h3>
            <div className="h-64">
              <ChartContainer
                id="line-chart"
                config={{
                  blocked: { color: "#2E86DE" },
                  detected: { color: "#FF4757" }
                }}
              >
                <LineChart
                  data={lineData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="blocked" 
                    stroke="#2E86DE" 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="detected" 
                    stroke="#FF4757" 
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white p-5 rounded-xl shadow-sm border">
            <h3 className="font-medium mb-4">Call Distribution</h3>
            <div className="h-64">
              <ChartContainer
                id="pie-chart"
                config={{
                  scam: { color: "#FF4757" },
                  suspicious: { color: "#FFA502" },
                  safe: { color: "#2ED573" }
                }}
              >
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name}) => name}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center">
                  <span 
                    className="w-3 h-3 rounded-full mr-1.5"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-xs">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Recent Activity</h3>
              <a href="#" className="text-sm text-app-blue hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {recentCalls.slice(0, 4).map((call) => (
                <div key={call.id} className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mr-3">
                    {call.status === 'Scam' ? (
                      <div className="w-10 h-10 rounded-full bg-scam/10 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-scam" />
                      </div>
                    ) : call.status === 'Suspicious' ? (
                      <div className="w-10 h-10 rounded-full bg-suspicious/10 flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-suspicious" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-safe/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-safe" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{call.callerName || 'Unknown'}</span>
                        <span 
                          className={`scam-indicator ${
                            call.status === 'Scam' ? 'scam-indicator-high' : 
                            call.status === 'Suspicious' ? 'scam-indicator-medium' : 
                            'scam-indicator-low'
                          }`}
                        >
                          {call.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{call.phoneNumber}</span>
                        <span>{new Date(call.timestamp).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
