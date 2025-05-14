
import { Call } from "@/utils/dummyData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Phone, Shield, Clock, Volume2 } from "lucide-react";

interface CallCardProps {
  call: Call;
  showDetails?: boolean;
  showActions?: boolean;
}

const CallCard = ({ call, showDetails = false, showActions = false }: CallCardProps) => {
  // Helper function to format duration (null or in seconds)
  const formatDuration = (seconds: number | null) => {
    if (seconds === null) return "Not answered";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{call.callerName || 'Unknown'}</span>
              <Badge 
                variant={call.status === 'Scam' ? 'destructive' : 
                        call.status === 'Suspicious' ? 'outline' : 
                        'secondary'}
              >
                {call.status}
              </Badge>
              {call.isBlocked && (
                <Badge variant="outline">Blocked</Badge>
              )}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {call.phoneNumber}
            </div>
          </div>
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${call.status === 'Scam' ? 'bg-scam/10' : 
              call.status === 'Suspicious' ? 'bg-suspicious/10' : 
              'bg-safe/10'}
          `}>
            {call.status === 'Scam' ? (
              <AlertCircle className={`h-5 w-5 text-scam`} />
            ) : call.status === 'Suspicious' ? (
              <AlertCircle className={`h-5 w-5 text-suspicious`} />
            ) : (
              <Shield className={`h-5 w-5 text-safe`} />
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{new Date(call.timestamp).toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{formatDuration(call.duration)}</span>
          </div>
        </div>
        
        {call.scamProbability > 0 && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Scam Probability</span>
              <span className={`font-medium ${
                call.scamProbability > 80 ? 'text-scam' : 
                call.scamProbability > 50 ? 'text-suspicious' : 
                'text-muted-foreground'
              }`}>
                {call.scamProbability}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${
                  call.scamProbability > 80 ? 'bg-scam' : 
                  call.scamProbability > 50 ? 'bg-suspicious' : 
                  'bg-safe'
                }`}
                style={{ width: `${call.scamProbability}%` }}
              />
            </div>
          </div>
        )}
        
        {showDetails && call.transcription && (
          <div className="mt-4 border-t pt-3">
            <h4 className="text-sm font-medium mb-2">Call Transcription</h4>
            <div className="bg-muted/50 rounded-md p-3 text-sm">
              "{call.transcription}"
            </div>
          </div>
        )}
        
        {showDetails && call.tags && call.tags.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {call.tags.map((tag, i) => (
                <Badge key={i} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {showActions && (
          <div className="mt-4 flex flex-wrap gap-2">
            <Button size="sm" variant="outline" className="text-xs">
              <Phone className="h-3 w-3 mr-1" /> Call Back
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <Shield className="h-3 w-3 mr-1" /> Block Number
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <Volume2 className="h-3 w-3 mr-1" /> Play Recording
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallCard;
