import Announcement from "@/components/announcement";
import PageHeading from "@/components/page-heading";
import PageSubheading from "@/components/page-subheading";

import { cn } from "@/lib/utils";

import HowSpryntWorks from "./sections/how-sprynt-works";
import FindTalentForAnyTask from "./sections/find-talent-for-any-task";
import DotPattern from "@/components/ui/dot-pattern";
import WhyChooseSprynt from "./sections/why-choose-sprynt";
import ReadyToFindRightTalent from "./sections/ready-to-find-right-talent";
import Examples from "./sections/examples";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 py-24 md:py-32">
      <div className="relative ">
        <div className="flex flex-col items-center gap-6 z-5">
          <Announcement />
          <PageHeading />
          <PageSubheading />
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

      {/* Sections */}
      <HowSpryntWorks />
      <FindTalentForAnyTask />
      <WhyChooseSprynt />
      <ReadyToFindRightTalent />
      <Examples />
    </div>
  );
}
