"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface InsightErrorDialogProps {
  message?: string;
}

export function InsightErrorDialog({ message }: InsightErrorDialogProps) {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 w-fit rounded-full bg-red-100 p-3">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <DialogTitle className="text-center text-xl">
            Analysis Failed
          </DialogTitle>
          <DialogDescription className="pt-2 text-center">
            {message ||
              "We encountered an unexpected error while analyzing this package. Please check the package details and try again."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 gap-2 sm:justify-center">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
          <Button asChild>
            <Link href="/">
              <Home className="mr-1 h-4 w-4" /> Go Home
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
