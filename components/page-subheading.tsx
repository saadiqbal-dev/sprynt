"use client";

import BlurFade from "@/components/ui/blur-fade";

export default function PageSubheading() {
  return (
    <div className="text-center md:text-lg font-medium text-black leading-tight flex flex-col items-center gap-2 max-w-xl md:my-12 px-4 z-20">
      <BlurFade inView delay={0.25 * 3}>
        Sprynt is a location-based platform designed to connect you with
        freelancers and skilled professionals in your area, instantly. Whether
        you need help for an event, a quick business task, or a creative
        project, Sprynt ensures you find the right match, right when you need
        it.
      </BlurFade>
    </div>
  );
}
