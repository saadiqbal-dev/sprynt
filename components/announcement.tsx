"use client";

import { FadeIn } from "@/components/ui/fade-in";
import ShimmerButton from "./ui/shimmer-button";

export default function Announcement() {
  return (
    <FadeIn direction="down">
      <ShimmerButton className="mb-6 flex items-center gap-2 z-20">
        <span className="font-bold">📣 Announcement:</span> Introducing Sprynt
      </ShimmerButton>
    </FadeIn>
  );
}
