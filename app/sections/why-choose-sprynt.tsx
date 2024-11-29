import BlurFade from "@/components/ui/blur-fade";
import Globe from "@/components/ui/globe";

const data = [
  {
    title: "Instant Talent Access",
    content: "Post a job and find a match immediately, saving you time.",
  },
  {
    title: "Local Expertise",
    content:
      "Work with professionals who understand your area and can respond quickly.",
  },
  {
    title: "Wide Range of Skills",
    content:
      "From creative tasks like graphic design to technical support like financial planning, Sprynt has you covered.",
  },
  {
    title: "Flexible & Cost-Effective",
    content:
      "Hire for as short or long as you need, with transparent pricing and no hidden fees.",
  },
];

export default function WhyChooseSprynt() {
  return (
    <section id="why-choose-sprynt" className="w-full">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl ">
        <h3 className="text-center space-y-4 pb-6 mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
          Why Choose Sprynt?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12">
          <div className="flex flex-col gap-6 mt-12 mx-12 md:mx-0">
            {data.map((item, index) => (
              <BlurFade key={index} inView delay={index * 0.25}>
                <div className="flex flex-col gap-2">
                  <div className="flex  gap-2">
                    <span className="text-xl font-bold">{item.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
          <div className="relative hidden md:block">
            <BlurFade inView delay={0.25}>
              <Globe className="top-0 left-0 size-[400px]" />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
