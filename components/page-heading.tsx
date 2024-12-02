"use client";

import BlurFade from "@/components/ui/blur-fade";

export default function PageHeading() {
  return (
    <div className="text-center">
      <h1 className="text-center text-4xl font-bold md:leading-tight text-black  md:text-6xl flex flex-col items-center gap-2 z-20">
        <span className="flex items-center gap-4">
          <BlurFade inView delay={0.25}>
            Meet Sprynt.
          </BlurFade>
        </span>
      </h1>
      <h1 className="text-center text-4xl font-thin md:leading-tight text-black  md:text-6xl flex flex-col items-center gap-2 z-20">
        <span className="flex items-center gap-4">
          <BlurFade inView delay={0.25}>
            Your Local Talent Connection
          </BlurFade>
        </span>
      </h1>
    </div>
  );
}
