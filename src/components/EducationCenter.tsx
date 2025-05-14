
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { scamTypes } from "@/utils/dummyData";
import { CheckCircle, AlertTriangle, ShieldAlert } from "lucide-react";

const EducationCenter = () => {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Education Center</h2>
          <p className="text-muted-foreground">
            Learn how to identify and protect yourself from common scam tactics
          </p>
        </div>
        
        <Tabs defaultValue="scam-types">
          <TabsList className="mb-6">
            <TabsTrigger value="scam-types">Common Scam Types</TabsTrigger>
            <TabsTrigger value="protection">Protection Tips</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="scam-types" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {scamTypes.map((scamType) => (
                <Card key={scamType.id} className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-scam/10 text-scam">
                        <ShieldAlert className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{scamType.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-5">
                      {scamType.description}
                    </p>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="warning-signs">
                        <AccordionTrigger className="text-sm font-medium">
                          Warning Signs
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2.5 pl-5 text-sm">
                            {scamType.warningSignals.map((signal, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-suspicious shrink-0 mt-0.5" />
                                <span>{signal}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="prevention">
                        <AccordionTrigger className="text-sm font-medium">
                          Prevention Tips
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2.5 pl-5 text-sm">
                            {scamType.preventionTips.map((tip, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-safe shrink-0 mt-0.5" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="protection" className="mt-0">
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-5">General Protection Guidelines</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-scam/10 text-scam">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    Never Share Personal Information
                  </h4>
                  <p className="text-muted-foreground">
                    Legitimate organizations will never call you out of the blue and ask for sensitive personal information such as your Social Security number, banking details, or passwords. Be extremely cautious about sharing any personal information over the phone.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-suspicious/10 text-suspicious">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    Be Wary of Urgent Requests
                  </h4>
                  <p className="text-muted-foreground">
                    Scammers often create a false sense of urgency to pressure you into making hasty decisions. Take your time to verify the legitimacy of any urgent request before taking action, especially if it involves payment.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-safe/10 text-safe">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    Verify the Caller's Identity
                  </h4>
                  <p className="text-muted-foreground">
                    If you receive a call from someone claiming to be from a specific organization, hang up and call the organization directly using their official phone number from their website or a recent statement to verify if the call was legitimate.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-safe/10 text-safe">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    Use Call Blocking Tools
                  </h4>
                  <p className="text-muted-foreground">
                    Many phone services and mobile apps offer call-blocking features that can help reduce the number of unwanted calls you receive. Consider using these tools to filter out potential scam calls before they reach you.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-safe/10 text-safe">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    Report Suspicious Calls
                  </h4>
                  <p className="text-muted-foreground">
                    If you receive a suspicious call, report it to the appropriate authorities, such as the Federal Trade Commission (FTC) or your local consumer protection agency. This helps prevent others from falling victim to the same scam.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-medium mb-4">Official Resources</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      Federal Trade Commission (FTC)
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Report scams and get help with unwanted calls. Visit the official FTC website for more information.
                    </p>
                  </li>
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      Federal Communications Commission (FCC)
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn about call blocking tools and resources for consumers to stop unwanted calls.
                    </p>
                  </li>
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      National Do Not Call Registry
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Register your phone number to reduce telemarketing calls. Legitimate telemarketers should not call numbers on the registry.
                    </p>
                  </li>
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      Internet Crime Complaint Center (IC3)
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Report internet-related crime, including phone scams that involve online elements.
                    </p>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-medium mb-4">Educational Materials</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      How to Identify Phone Scams (Guide)
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      A comprehensive guide to recognizing the most common phone scam techniques.
                    </p>
                  </li>
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      Protecting Elderly Family Members from Scams
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tips and strategies for helping older adults avoid falling victim to phone scams.
                    </p>
                  </li>
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      Educational Videos on Scam Prevention
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Watch our series of videos demonstrating real scam calls and how to handle them properly.
                    </p>
                  </li>
                  <li>
                    <a href="#" className="font-medium hover:text-app-blue transition-colors">
                      Scam Alert Newsletter
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sign up to receive updates about new scam techniques and trends to stay informed.
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EducationCenter;
