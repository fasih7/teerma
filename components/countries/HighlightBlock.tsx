import type { CountryHighlightBlock } from "@/lib/country-data";

interface HighlightBlockProps {
  block: CountryHighlightBlock;
}

function styleForBlock(style?: CountryHighlightBlock["style"]) {
  switch (style) {
    case "green":
      return {
        bg: "#E8F5EC",
        border: "#1B6B2F",
        headingColor: "#1B6B2F",
        textColor: "#1A1A1A",
      };
    case "gold":
      return {
        bg: "#FFF9E6",
        border: "#B8860B",
        headingColor: "#B8860B",
        textColor: "#1A1A1A",
      };
    case "teal":
    default:
      return {
        bg: "#E8F8F7",
        border: "#4BBFB8",
        headingColor: "#2A2320",
        textColor: "#1A1A1A",
      };
  }
}

export default function HighlightBlock({ block }: HighlightBlockProps) {
  const s = styleForBlock(block.style);
  return (
    <div
      className="rounded-2xl p-6 sm:p-7 border overflow-hidden"
      style={{
        backgroundColor: s.bg,
        borderColor: `${s.border}40`,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      {block.heading && (
        <h3
          className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2"
          style={{ color: s.headingColor }}
        >
          <span
            className="w-1.5 h-6 rounded-full shrink-0"
            style={{ backgroundColor: s.border }}
          />
          {block.heading}
        </h3>
      )}
      <p
        className="text-[16px] sm:text-[17px] leading-[1.8] pl-5"
        style={{ color: s.textColor }}
      >
        {block.body}
      </p>
    </div>
  );
}
