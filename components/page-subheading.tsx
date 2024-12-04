"use client";

import BlurFade from "@/components/ui/blur-fade";

export default function PageSubheading() {
  return (
    <div className="text-center text-sm md:text-base font-medium text-black leading-tight flex flex-col items-center gap-2 max-w-xl md:my-6 px-4 z-20">
      <BlurFade inView delay={0.25 * 3}>
        Tired of posting jobs and getting flooded with proposals? Frustrated
        with hearing, &quot;I&apos;m overbooked at the moment&quot;? The future
        of work is changing, and Sprynt is here to lead the way.
      </BlurFade>
    </div>
  );
}
