import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder "Listen & Learn" player.
 * No real audio yet — a friendly animated player UI children can tap.
 */
export function ListenLearn({ label = "Listen & Learn", className }: { label?: string; className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-pressed={playing}
        className={cn(
          "inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-extrabold shadow-lg transition-transform hover:scale-105 active:scale-95 sm:text-xl",
          playing
            ? "bg-lavender text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 fill-current" />}
        {playing ? "Pause" : label}
      </button>
      <div className="flex h-7 items-end gap-1.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={cn(
              "w-1.5 rounded-full bg-butter",
              playing ? "soundbar" : "opacity-40"
            )}
            style={{ height: playing ? 28 - Math.abs(i - 2) * 5 : 10, animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
        <Volume2 className="h-4 w-4" />
        {playing ? "♪ playing sample audio ♪" : "Sample audio — real voices coming soon!"}
      </p>
    </div>
  );
}
