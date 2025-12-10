import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={cn(
              "relative pl-16 animate-fade-up",
              { "opacity-0": false }
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Year Marker */}
            <div
              className={cn(
                "absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10",
                event.highlight
                  ? "bg-primary text-primary-foreground animate-pulse-glow"
                  : "bg-secondary text-foreground border border-border"
              )}
            >
              {event.year.slice(-2)}
            </div>

            {/* Content Card */}
            <div
              className={cn(
                "glass rounded-xl p-5 transition-all hover:scale-[1.02]",
                event.highlight && "border-primary/30"
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={cn(
                  "text-2xl font-bold",
                  event.highlight ? "text-primary" : "text-foreground"
                )}>
                  {event.year}
                </span>
                <span className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  event.highlight
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                )}>
                  {event.title}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
