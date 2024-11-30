"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";

import Icons from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import { RainbowButton } from "./ui/rainbow-button";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between md:justify-start px-4 w-full relative">
        <div className="mr-4 flex item">
          <Link
            href="/"
            className="mr-4 flex items-center gap-2 lg:mr-6"
            onClick={toggle}
          >
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold inline-block">Sprynt</span>
          </Link>
          <nav className="md:flex items-center gap-4 text-sm xl:gap-6 hidden">
            <Link
              href="/#how-sprynt-works"
              className={"transition-colors hover:text-foreground/80"}
            >
              How Sprynt Works
            </Link>
            <Link
              href="/#find-talent-for-any-task"
              className={"transition-colors hover:text-foreground/80"}
            >
              Find Talent for Any Task
            </Link>
            <Link
              href="/#why-choose-sprynt"
              className={"transition-colors hover:text-foreground/80"}
            >
              Why Choose Sprynt?
            </Link>
            <Link
              href="/#examples"
              className={"transition-colors hover:text-foreground/80"}
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="ms-auto flex items-center gap-5">
          <RainbowButton className="text-sm px-4 py-2 md:text-base md:px-8 md:py-2">
            Join Now
          </RainbowButton>
          <Link href="x.com" target="_blank" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </Link>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggle}
            className="md:hidden"
            aria-label="Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute left-50 -translate-x-1/2 top-16 w-[calc(100%_-_32px)] z-50 bg-white shadow-lg rounded-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="px-4 py-6 md:hidden">
                <nav className="flex flex-col items-center font-medium gap-4 text-md">
                  <Link
                    onClick={toggle}
                    href="/#how-sprynt-works"
                    className={"transition-colors hover:text-foreground/80"}
                  >
                    How Sprynt Works
                  </Link>
                  <Link
                    onClick={toggle}
                    href="/#find-talent-for-any-task"
                    className={"transition-colors hover:text-foreground/80"}
                  >
                    Find Talent for Any Task
                  </Link>
                  <Link
                    onClick={toggle}
                    href="/#why-choose-sprynt"
                    className={"transition-colors hover:text-foreground/80"}
                  >
                    Why Choose Sprynt?
                  </Link>
                  <Link
                    onClick={toggle}
                    href="/#examples"
                    className={"transition-colors hover:text-foreground/80"}
                  >
                    Examples
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
