"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";

import { Briefcase, FileText, Handshake, Users } from "lucide-react";

export default function HowSpryntWorks() {
  return (
    <section id="how-sprynt-works">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <BlurFade inView delay={0.25}>
          <h3 className="text-center space-y-4 pb-6 mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            How Sprynt Works
          </h3>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <BlurFade inView delay={0.25}>
            <Card>
              <CardHeader>
                <Users className="size-8 mb-2 bg-neutral-500/20 rounded-full p-2 text-primary" />
                <CardTitle>Freelancers Join</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Local professionals create profiles showcasing their skills
                  and availability.
                </p>
              </CardContent>
            </Card>
          </BlurFade>
          <BlurFade inView delay={0.25 * 2}>
            <Card>
              <CardHeader>
                <FileText className="size-8 mb-2 bg-neutral-500/20 rounded-full p-2 text-primary" />
                <CardTitle>Scouts Post Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Businesses or individuals post job requirements with specific
                  details.
                </p>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade inView delay={0.25 * 3}>
            <Card>
              <CardHeader>
                <Handshake className="size-8 mb-2 bg-neutral-500/20 rounded-full p-2 text-primary" />
                <CardTitle>Instant Match</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Sprynt connects Scouts with the right freelancer nearby in
                  real-time.
                </p>
              </CardContent>
            </Card>
          </BlurFade>
          <BlurFade inView delay={0.25 * 4}>
            <Card>
              <CardHeader>
                <Briefcase className="size-8 mb-2 bg-neutral-500/20 rounded-full p-2 text-primary" />
                <CardTitle>Seamless Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The task is completed professionally, and payment is handled
                  securely.
                </p>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
