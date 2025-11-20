"use client";

import { MenuBar, type MenuItem } from "@/components/menu-bar";
import { ThemeToggle } from "@/components/menu-bar";
import { Home, User, GraduationCap, Award, Code, Briefcase, BookOpen, Users, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    label: "Education",
    href: "/education",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500",
  },
  {
    icon: <Award className="h-5 w-5" />,
    label: "Certifications",
    href: "/certifications",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Code className="h-5 w-5" />,
    label: "Skills",
    href: "/skills",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
    iconColor: "text-pink-500",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Experience",
    href: "/experience",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "Leadership",
    href: "/leadership",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-500",
  },
];

export function Navigation() {
  const pathname = usePathname();
  
  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-2 sm:px-4 md:px-6">
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4">
        <div className="flex-1 min-w-0" />
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0 min-w-0">
          <MenuBar menuItems={menuItems} currentPath={pathname} />
          <div className="ml-1 sm:ml-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex-1 min-w-0" />
      </div>
    </div>
  );
}
