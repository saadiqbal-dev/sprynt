import Announcement from "@/components/announcement";
import PageHeading from "@/components/page-heading";
import PageSubheading from "@/components/page-subheading";

import HowSpryntWorks from "./sections/how-sprynt-works";
import FindTalentForAnyTask from "./sections/find-talent-for-any-task";
import WhyChooseSprynt from "./sections/why-choose-sprynt";
import ReadyToFindRightTalent from "./sections/ready-to-find-right-talent";
import Examples from "./sections/examples";
import BlurFade from "@/components/ui/blur-fade";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MarqueeDemo } from "./sections/marquee";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-[calc(100vh_-_50px)] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6 md:gap-0 justify-center z-10 py-24 md:py-16 ">
          <Announcement />
          <PageHeading />
          <PageSubheading />
          <BlurFade
            inView
            delay={0.25 * 4}
            className="flex flex-col items-center gap-6 md:gap-0 justify-center z-10 pt-8 md:pt-8 "
          >
            <RainbowButton>Join Now</RainbowButton>
          </BlurFade>
        </div>
        <BlurFade inView className="rounded-xl overflow-clip">
          <video
            autoPlay
            loop
            muted
            className="rounded-xl md:min-h-[calc(100vh_-_50px)] w-full object-cover z-0 px-4 md:px-0 aspect-video"
          >
            <source src={"/video/vid-bg.mp4"} type="video/mp4" />
          </video>
        </BlurFade>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-6 py-24 md:py-8">
        {/* Sections */}
        <HowSpryntWorks />
        <MarqueeDemo />
        <FindTalentForAnyTask />
        <WhyChooseSprynt />
        <ReadyToFindRightTalent />
        <Examples />
      </div>
    </>
  );
}
