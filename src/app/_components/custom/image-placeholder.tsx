import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  shape?: "rect" | "square" | "icon";
  className?: string;
};

export function ImagePlaceholder({
  shape = "rect",
  className,
}: ImagePlaceholderProps) {
  const aspect =
    shape === "rect" ? "aspect-video" : shape === "square" ? "aspect-square" : "";

  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        "bg-gradient-to-br from-paper via-sage/30 to-terracotta/40",
        aspect,
        className
      )}
      role="img"
      aria-label="Placeholder image"
    >
      <svg
        viewBox="0 0 64 64"
        className={cn(
          "text-forest/25",
          shape === "icon" ? "w-1/2 h-1/2" : "w-1/4 h-1/4 min-w-8 min-h-8"
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="20" cy="18" r="4" />
        <circle cx="46" cy="14" r="4" />
        <circle cx="44" cy="42" r="4" />
        <circle cx="16" cy="46" r="4" />
        <line x1="23.2" y1="20.5" x2="42.8" y2="15.5" />
        <line x1="21.5" y1="21.5" x2="18.5" y2="42.5" />
        <line x1="43" y1="17.5" x2="44.5" y2="38.5" />
        <line x1="19.5" y1="44.5" x2="40.5" y2="42.5" />
      </svg>
    </div>
  );
}
