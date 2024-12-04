import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  { body: "Accounting & Bookkeeping" },
  { body: "Financial Planning" },
  { body: "Management Consulting & Analysis" },
  { body: "Personal & Professional Coaching" },
  { body: "Recruiting & Human Resources" },
  { body: "Other - Accounting & Consulting" },
  { body: "Data Entry & Transcription Services" },
  { body: "Market Research & Product Reviews" },
  { body: "Project Management" },
  { body: "Virtual Assistance" },
  { body: "Community Management & Tagging" },
  { body: "Customer Service & Tech Support" },
  { body: "AI & Machine Learning" },
  { body: "Data Analysis & Testing" },
  { body: "Data Extraction/ETL" },
  { body: "Data Mining & Management" },
  { body: "Art & Illustration" },
  { body: "Audio & Music Production" },
  { body: "Branding & Logo Design" },
  { body: "Graphic, Editorial & Presentation Design" },
  { body: "NFT, AR/VR & Game Art" },
  { body: "Performing Arts" },
  { body: "Photography" },
  { body: "Product Design" },
  { body: "Video & Animation" },
  { body: "3D Modeling & CAD" },
  { body: "Building & Landscape Architecture" },
  { body: "Chemical Engineering" },
  { body: "Civil & Structural Engineering" },
  { body: "Contract Manufacturing" },
  { body: "Electrical & Electronic Engineering" },
  { body: "Energy & Mechanical Engineering" },
  { body: "Interior & Trade Show Design" },
  { body: "Physical Sciences" },
  { body: "Database Management & Administration" },
  { body: "DevOps & Solution Architecture" },
  { body: "ERP/CRM Software" },
  { body: "Information Security & Compliance" },
  { body: "Network & System Administration" },
  { body: "Corporate & Contract Law" },
  { body: "Finance & Tax Law" },
  { body: "International & Immigration Law" },
  { body: "Public Law" },
  { body: "Digital Marketing" },
  { body: "Lead Generation & Telemarketing" },
  { body: "Marketing, PR & Brand Strategy" },
  { body: "Language Tutoring & Interpretation" },
  { body: "Translation & Localization Services" },
  { body: "AI Apps & Integration" },
  { body: "Blockchain, NFT & Cryptocurrency" },
  { body: "Desktop Application Development" },
  { body: "Ecommerce Development" },
  { body: "Game Design & Development" },
  { body: "Mobile Development" },
  { body: "Product Management & Scrum" },
  { body: "QA Testing" },
  { body: "Scripts & Utilities" },
  { body: "Web & Mobile Design" },
  { body: "Web Development" },
  { body: "Other - Software Development" },
  { body: "Content Writing" },
  { body: "Editing & Proofreading Services" },
  { body: "Professional & Business Writing" },
  { body: "Sales & Marketing Copywriting" },
  { body: "Food & Beverage" },
  { body: "Dining Facilities" },
  { body: "Retail" },
  { body: "Warehouse Workers" },
  { body: "Stadiums / Conventions / Events" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-90 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className="mt-2 text-sm flex-shrink-0">{body}</blockquote>
    </figure>
  );
};

const Heading = () => {
  return (
    <h5 className="text-center space-y-4 pb-6 mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
      Categories
    </h5>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Heading />
      <div>
        <Marquee pauseOnHover className="[--duration:80s] flex-shrink-0">
          {firstRow.map((review) => (
            <ReviewCard key={`${review.body}-${Math.random()}`} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:80s] flex-shrink-0"
        >
          {secondRow.map((review) => (
            <ReviewCard key={`${review.body}-${Math.random()}`} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:80s] flex-shrink-0">
          {thirdRow.map((review) => (
            <ReviewCard key={`${review.body}-${Math.random()}`} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
