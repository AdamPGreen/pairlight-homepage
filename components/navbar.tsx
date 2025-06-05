"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#for-organizers", label: "For organizers" },
    { href: "#for-speakers", label: "For speakers" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen
        ? "bg-background/95 backdrop-blur-sm shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={theme === "dark" ? "/assets/brand/logo-dark.png" : "/assets/brand/logo.png"}
              alt="Pairlight Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
              priority
            />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 relative"
            >
              <Moon className="h-5 w-5 transition-all duration-200 absolute inset-0 m-auto dark:opacity-0 dark:rotate-90" />
              <Sun className="h-5 w-5 transition-all duration-200 absolute inset-0 m-auto opacity-0 rotate-90 dark:opacity-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button 
              size="sm" 
              className="bg-[#6B85FE] hover:bg-[#5A73EB] text-white"
            >
              Book demo
            </Button>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-in fade-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}