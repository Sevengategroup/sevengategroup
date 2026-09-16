import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Settings02Icon, InformationCircleIcon } from "@hugeicons/core-free-icons";

export function MaintenancePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-3xl text-center flex flex-col items-center">
        {/* Logo / Brand Element */}
        <div className="mb-10 text-center flex flex-col items-center">
          <h1 className="font-display text-4xl md:text-5xl font-light text-foreground uppercase tracking-widest mb-6">
            Sevengate Group
          </h1>
          <div className="h-px w-16 bg-accent" />
        </div>

        {/* Message Container */}
        <div className="bg-muted/30 border border-muted/50 p-10 md:p-16 rounded-sm w-full relative overflow-hidden">
          {/* Accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

          <div className="flex justify-center mb-8">
            <HugeiconsIcon icon={Settings02Icon} size={48} className="text-muted-foreground animate-[spin_10s_linear_infinite]" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
            System Maintenance
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-base md:text-lg max-w-2xl mx-auto">
            <p>
              Access to this portal is temporarily suspended pending administrative review. We are currently performing scheduled maintenance and resolving administrative requirements.
            </p>
            <p>
              We apologize for any inconvenience this may cause to our partners and stakeholders across our infrastructure, energy, and mining sectors.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-muted/50 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-foreground">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={InformationCircleIcon} size={20} className="text-accent" />
              <span className="tracking-wide">Action Required by Administration</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/2349022167931"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-accent bg-transparent px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground tracking-wide uppercase gap-2"
            >
              Contact Developers
            </a>
          </div>
        </div>

        <div className="mt-12 text-sm text-muted-foreground font-light tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Sevengate Group
        </div>
      </div>
    </div>
  );
}
