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

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[calc(100vh_-_50px)] flex flex-col items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-6 md:gap-0 justify-center z-10 py-24 md:py-32 h-[calc(100vh_-_50px)]">
          <Announcement />
          <PageHeading />
          <PageSubheading />
          <BlurFade inView delay={0.25 * 4}>
            <RainbowButton>Join Now</RainbowButton>
          </BlurFade>
        </div>
        <BlurFade
          inView
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 h-full w-full object-cover z-0"
          >
            <source src={"/video/vid-bg.mp4"} type="video/mp4" />{" "}
          </video>
        </BlurFade>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-6 py-24 md:py-32">
        {/* Sections */}
        <HowSpryntWorks />
        <FindTalentForAnyTask />
        <WhyChooseSprynt />
        <ReadyToFindRightTalent />
        <Examples />
      </div>
    </>
  );
}
