"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide global layout header on the homepage, as the homepage provides its own custom nav
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="https://agenttag.me" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="AgentTag Logo" height={28} width={28} className="h-7 w-auto" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">AgentTag</span>
        </a>
        
        {/* Desktop Navigation - hidden < 768px (md breakpoint) */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          <a href="/about" className="text-sm text-white/50 hover:text-white transition-colors">About</a>
          <a href="/security" className="text-sm text-white/50 hover:text-white transition-colors">Security</a>
          <a href="/support" className="text-sm text-white/50 hover:text-white transition-colors">Support</a>
          <a href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">Blog</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://agenttag.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-11 md:h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Join Beta
          </a>

          {/* Hamburger Menu Toggle for < 768px (md breakpoint) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-border/40 text-white/70 hover:text-white md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu for < 768px */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col p-4 space-y-3">
            <a 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center px-4 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              About
            </a>
            <a 
              href="/security" 
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center px-4 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              Security
            </a>
            <a 
              href="/support" 
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center px-4 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              Support
            </a>
            <a 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center px-4 rounded-md text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              Blog
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
