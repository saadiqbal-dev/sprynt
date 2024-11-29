"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { BusinessSupportAnimation } from "./how-sprynt-works/business-support-animation";
import BlurFade from "@/components/ui/blur-fade";
import { EventPersonalTasksAnimation } from "./how-sprynt-works/event-personal-tasks-animation";

export default function FindTalentForAnyTask() {
  return (
    <section id="find-talent-for-any-task" className="w-full bg-accent">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl ">
        <h3 className="text-center space-y-4 pb-6 mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
          Find Talent for Any Task
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <BlurFade inView delay={0.25}>
            <Card className="overflow-hidden bg-transparent shadow-none border-none backdrop-blur-sm">
              <CardHeader className="rounded-2xl bg-purple-100 p-6">
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="mr-2" />
                  Business Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {[
                    "Your neighbor might be a talented logo designer who can bring your brand to life.",
                    "Someone working in your office building could be a skilled financial consultant ready to assist with cash flow forecasting.",
                    "Need help with data entry, social media management, or even a website upgrade? Sprynt can connect you to local experts instantly.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    >
                      <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                      <p>{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>
          <BlurFade inView delay={0.25 * 2}>
            <BusinessSupportAnimation />
          </BlurFade>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 mt-12">
          <BlurFade inView delay={0.25 * 3}>
            <EventPersonalTasksAnimation />
          </BlurFade>
          <BlurFade inView delay={0.25 * 4}>
            <Card className="overflow-hidden bg-transparent shadow-none border-none backdrop-blur-sm">
              <CardHeader className="rounded-2xl bg-blue-100 p-6">
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="mr-2" />
                  Event & Personal Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {[
                    "Hire last-minute event staff, including waiters, bartenders, or hosts.",
                    "Find delivery assistants for same-day errands or product drops.",
                    "Connect with local handymen or cleaners for quick home maintenance.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    >
                      <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 mt-1" />
                      <p>{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
