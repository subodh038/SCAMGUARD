
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Bell, Shield, VolumeX, MessageSquare, Lock } from "lucide-react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoBlock, setAutoBlock] = useState(true);
  const [voiceAnalysis, setVoiceAnalysis] = useState(true);
  const [contributeCalls, setContributeCalls] = useState(false);
  const [threshold, setThreshold] = useState("75");
  
  return (
    <section className="py-8">
      <div className="container">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Settings</h2>
          <p className="text-muted-foreground">
            Configure your app preferences and protection levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-app-blue" />
                    Protection Settings
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-medium">Auto-block high-risk calls</div>
                        <div className="text-sm text-muted-foreground">
                          Automatically block calls identified as scams
                        </div>
                      </div>
                      <Switch checked={autoBlock} onCheckedChange={setAutoBlock} />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="font-medium mb-2">Scam detection threshold</div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Set the minimum probability to flag a call as suspicious
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="range"
                          min="50"
                          max="95"
                          step="5"
                          value={threshold}
                          onChange={(e) => setThreshold(e.target.value)}
                          className="w-full"
                        />
                        <div className="text-sm font-medium w-12">
                          {threshold}%
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Voice pattern analysis</span>
                          <Badge>Premium</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Use AI to analyze voice patterns for deception markers
                        </div>
                      </div>
                      <Switch checked={voiceAnalysis} onCheckedChange={setVoiceAnalysis} />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                    <Bell className="h-5 w-5 text-app-blue" />
                    Notification Settings
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-sm text-muted-foreground">
                          Receive alerts for suspicious calls
                        </div>
                      </div>
                      <Switch checked={notifications} onCheckedChange={setNotifications} />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="font-medium mb-2">Alert sound</div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Choose the alert sound for scam call notifications
                      </div>
                      <Select defaultValue="alert1">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select alert sound" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alert1">Standard Alert</SelectItem>
                          <SelectItem value="alert2">Urgent Alert</SelectItem>
                          <SelectItem value="alert3">Gentle Notification</SelectItem>
                          <SelectItem value="custom">Custom Sound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                    <MessageSquare className="h-5 w-5 text-app-blue" />
                    Community & Privacy
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-medium">Contribute to scam database</div>
                        <div className="text-sm text-muted-foreground">
                          Share anonymized data to improve scam detection for everyone
                        </div>
                      </div>
                      <Switch checked={contributeCalls} onCheckedChange={setContributeCalls} />
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="font-medium mb-2">Data sharing level</div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Control what information is shared with the community
                      </div>
                      <Select defaultValue="minimal">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select data sharing level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None - Privacy Mode</SelectItem>
                          <SelectItem value="minimal">Minimal - Numbers Only</SelectItem>
                          <SelectItem value="standard">Standard - Numbers & Times</SelectItem>
                          <SelectItem value="full">Full - Help Improve AI</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-8">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Settings</Button>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                <SettingsIcon className="h-5 w-5 text-app-blue" />
                Your Plan
              </h3>
              
              <div className="p-3 bg-muted/50 rounded-md mb-4">
                <div className="font-medium">Free Plan</div>
                <div className="text-sm text-muted-foreground">Basic protection</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-app-blue mr-2">✓</span> Scam call detection
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-app-blue mr-2">✓</span> Community database access
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-app-blue mr-2">✓</span> Basic number lookup
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2">✗</span> Advanced voice analysis
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2">✗</span> Real-time transcription
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2">✗</span> Call recording
                </li>
              </ul>
              
              <Button className="w-full" variant="outline">
                Upgrade to Premium
              </Button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-app-blue" />
                Account Security
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm font-medium mb-1.5">Email</div>
                  <Input type="email" value="user@example.com" disabled />
                </div>
                <div>
                  <div className="text-sm font-medium mb-1.5">Password</div>
                  <Input type="password" value="********" disabled />
                </div>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Change Email
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Change Password
                </Button>
                <Button variant="outline" size="sm" className="w-full text-scam hover:text-scam-dark">
                  Delete Account
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
