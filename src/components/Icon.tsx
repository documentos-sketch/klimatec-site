import {
  Snowflake, Flame, Refrigerator, Wind, Zap, Wrench, Ruler, SlidersHorizontal,
  Leaf, MessageSquare, CalendarCheck, Handshake, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  snowflake: Snowflake, flame: Flame, refrigerator: Refrigerator, wind: Wind, zap: Zap,
  wrench: Wrench, ruler: Ruler, sliders: SlidersHorizontal, leaf: Leaf,
  message: MessageSquare, calendar: CalendarCheck, handshake: Handshake,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Wrench;
  return <C className={className} aria-hidden="true" strokeWidth={1.8} />;
}
