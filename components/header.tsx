"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const services = [
  { name: "Services Piscine", href: "/services/piscine" },
  { name: "Services Spa", href: "/services/spa" },
  { name: "Services Hammam", href: "/services/hammam" },
  { name: "Services Sauna", href: "/services/sauna" },
];

const navigation = [
  { name: "Qui sommes-nous ?", href: "/a-propos" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isServicePage = (path: string) => {
    return services.some((service) => service.href === path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/jmp-logo.png"
              alt="JMP Solutions Logo"
              width={204}
              height={204}
              className="h-12 w-12"
            />
            <span className="hidden font-bold text-lg sm:inline-block">
              JMP Solutions
            </span>
          </Link>
          <nav className="hidden gap-6 items-center md:flex">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={cn(
                    "p-0 text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                    isServicePage(pathname)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className={cn(
                        pathname === service.href ? "bg-muted" : ""
                      )}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+33611621826"
            className="flex items-center gap-2 text-primary font-bold"
          >
            <Phone className="h-4 w-4" />
            <span>06 11 62 18 26</span>
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="px-2 py-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 mb-6"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/jmp-logo.png"
                    alt="JMP Solutions Logo"
                    width={204}
                    height={204}
                    className="h-12 w-12 rounded-full"
                  />
                  <span className="font-bold text-xl">JMP Solutions</span>
                </Link>
                <a
                  href="tel:+33611621826"
                  className="flex items-center gap-2 text-primary font-bold mb-6"
                >
                  <Phone className="h-4 w-4" />
                  <span>06 11 62 18 26</span>
                </a>
                <nav className="flex flex-col gap-4">
                  <div className="border-b pb-4">
                    <p className="text-sm font-medium mb-2">Services</p>
                    <div className="pl-2 flex flex-col gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={cn(
                            "text-sm transition-colors hover:text-primary",
                            pathname === service.href
                              ? "text-primary"
                              : "text-muted-foreground"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
