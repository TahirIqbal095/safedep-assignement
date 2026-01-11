"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { motion } from "motion/react";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 10, filter: "blur(10px" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      className="flex items-baseline-last justify-between gap-6"
    >
      <div>
        <span className="text-muted-foreground/60 text-sm font-light tracking-widest uppercase">
          Powered by
        </span>
        <div className="flex items-center gap-1">
          <div className="relative h-6 w-6">
            <Image src="/safedep.svg" alt="SafeDep Logo" fill />
          </div>
          <h1 className="text-2xl font-medium">SafeDep</h1>
        </div>
      </div>
      <Button>
        <Github /> Install Github App
      </Button>
    </motion.header>
  );
}

export default Header;
