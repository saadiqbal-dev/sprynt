"use client";

import BlurFade from "@/components/ui/blur-fade";

export default function PageHeading() {
  return (
    <h1 className="text-center text-4xl font-bold md:leading-tight text-foreground  md:text-6xl flex flex-col items-center gap-2">
      <span className="flex items-center gap-4">
        <BlurFade inView delay={0.25}>
          Your
        </BlurFade>
        <BlurFade inView delay={0.25}>
          Local
        </BlurFade>
      </span>
      <span className="flex items-center gap-4">
        <BlurFade inView delay={0.25 * 2}>
          Talent
        </BlurFade>
        <BlurFade inView delay={0.25 * 2}>
          Connection
        </BlurFade>
      </span>
    </h1>
  );
}
