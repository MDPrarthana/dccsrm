import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComingSoonBlockProps {
  title: string;
  description: string;
  requiredData?: string;
  className?: string;
}

export function ComingSoonBlock({
  title,
  description,
  requiredData,
  className,
}: ComingSoonBlockProps) {
  return (
    <div className={cn("coming-soon-block", className)}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-disabled/20 flex items-center justify-center">
          <Clock className="w-4 h-4 text-disabled" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              {title}
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-medium text-disabled bg-disabled/20 px-2 py-0.5 rounded">
              Coming Soon
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          {requiredData && (
            <p className="text-xs text-disabled mt-2 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-disabled" />
              Requires: {requiredData}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
