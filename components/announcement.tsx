"use client";

import { FadeIn } from "@/components/ui/fade-in";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export default function Announcement() {
  return (
    <FadeIn direction="down">
      <AnimatedGradientText className="mb-6 flex items-center text-md gap-2 z-20 text-white bg-black/60 backdrop-blur-sm">
        <span className="font-bold">📣 Announcement:</span> Introducing Sprynt
      </AnimatedGradientText>
    </FadeIn>
  );
}
