
import { useState, useEffect } from "react";
import { AlertCircle, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ScamAlertProps {
  probability?: number;
  reasons?: string[];
  onAccept?: () => void;
  onReject?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  phoneNumber?: string;
  scamType?: string;
}

const ScamAlert = ({ 
  probability = 80, 
  reasons = [],
  onAccept,
  onReject,
  isOpen,
  onClose,
  phoneNumber,
  scamType
}: ScamAlertProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("block");
  
  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(isOpen);
    } else {
      setIsVisible(true);
    }
    return () => setIsVisible(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };
  
  const getAlertType = () => {
    if (probability >= 80) return 'scam';
    if (probability >= 50) return 'suspicious';
    return 'safe';
  };
  
  const alertType = getAlertType();
  const alertColors = {
    scam: {
      bg: 'bg-scam/10',
      border: 'border-scam/30',
      text: 'text-scam-dark',
      icon: 'text-scam',
    },
    suspicious: {
      bg: 'bg-suspicious/10',
      border: 'border-suspicious/30',
      text: 'text-suspicious-dark',
      icon: 'text-suspicious',
    },
    safe: {
      bg: 'bg-safe/10',
      border: 'border-safe/30',
      text: 'text-safe-dark',
      icon: 'text-safe',
    },
  };

  if (!isVisible) return null;

  const displayMessage = scamType ? (
    <>Detected potential {scamType}. This call has been flagged as potentially fraudulent.</>
  ) : (
    <>Our AI has detected this call as potentially fraudulent ({probability}% probability).</>
  );

  return (
    <div
      className={cn(
        "border rounded-lg p-4 transition-all duration-300 transform",
        alertColors[alertType].bg,
        alertColors[alertType].border,
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <div className="flex items-start">
        <div className={cn("mr-3 mt-0.5", alertColors[alertType].icon)}>
          {alertType === 'scam' || alertType === 'suspicious' ? (
            <ShieldAlert className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
        </div>
        <div className="flex-1">
          <div className="font-medium">
            {alertType === 'scam' && 'High Risk Call Detected!'}
            {alertType === 'suspicious' && 'Suspicious Call - Be Careful'}
            {alertType === 'safe' && 'Call Appears Safe'}
          </div>
          <div className={cn("text-sm mt-1", alertColors[alertType].text)}>
            {alertType === 'scam' && displayMessage}
            {alertType === 'suspicious' && (
              <>This call shows some suspicious patterns ({probability}% probability). Proceed with caution.</>
            )}
            {alertType === 'safe' && (
              <>This call appears to be legitimate with low risk indicators.</>
            )}
            {phoneNumber && (
              <div className="mt-1">Phone number: {phoneNumber}</div>
            )}
          </div>

          {reasons && reasons.length > 0 && (
            <ul className="mt-2 pl-4 text-sm space-y-1 list-disc">
              {reasons.map((reason, index) => (
                <li key={index} className={alertColors[alertType].text}>
                  {reason}
                </li>
              ))}
            </ul>
          )}
          
          {/* Toggle Group for Action Selection at Bottom */}
          <div className="mt-4 border-t pt-3">
            <ToggleGroup type="single" value={selectedOption} onValueChange={(value) => value && setSelectedOption(value)} className="justify-between">
              <ToggleGroupItem value="block" aria-label="Block Call" className="flex-1">
                Block
              </ToggleGroupItem>
              <ToggleGroupItem value="report" aria-label="Report Call" className="flex-1">
                Report
              </ToggleGroupItem>
              <ToggleGroupItem value="allow" aria-label="Allow Call" className="flex-1">
                Allow
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          {(onAccept || onReject || onClose) && (
            <div className="mt-3 flex gap-2">
              {onReject && (
                <Button 
                  onClick={onReject}
                  variant="outline"
                  size="sm"
                >
                  {alertType === 'scam' ? 'Block Call' : 'Decline'}
                </Button>
              )}
              
              {onAccept && (
                <Button 
                  onClick={onAccept}
                  variant={alertType === 'scam' ? 'outline' : 'default'}
                  size="sm"
                  className={alertType === 'scam' ? 'text-scam hover:text-scam-dark' : ''}
                >
                  {alertType === 'scam' ? 'Answer At Risk' : 'Accept Call'}
                </Button>
              )}

              {onClose && (
                <Button 
                  onClick={handleClose}
                  variant="ghost"
                  size="sm"
                >
                  Dismiss
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScamAlert;
