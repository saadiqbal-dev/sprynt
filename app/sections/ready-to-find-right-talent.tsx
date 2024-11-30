import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import BlurFade from "@/components/ui/blur-fade";
import { RainbowButton } from "@/components/ui/rainbow-button";
import TextReveal from "@/components/ui/text-reveal";

import { cn } from "@/lib/utils";

export default function ReadyToFindRightTalent() {
  return (
    <section id="ready-to-find-right-talent">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <TextReveal text="Ready To Find The Right Talent Near You?" />
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden md:p-20">
          <BlurFade inView delay={0.25}>
            <p className="z-10 text-4xl sm:text-5xl whitespace-pre-wrap text-center md:text-5xl tracking-tighter text-black">
              Whether it&apos;s a creative project, a business task, or event
              support, <span className="font-bold">Sprynt</span> is your go-to
              platform for local, reliable help on-demand.
            </p>
          </BlurFade>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
        </div>

        <BlurFade inView delay={0.25 * 2}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-32">
            <h5 className="text-4xl text-center">
              Join <span className="font-bold">Sprynt</span> today and get
              things done, fast and efficiently!
            </h5>
            <RainbowButton className="w-fit mx-auto">Join Now</RainbowButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
