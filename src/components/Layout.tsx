"use client";

import { ReactNode } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home as HomeIcon, User as UserIcon, MessageSquare as MessageIcon, BookOpen as StoriesIcon, Users as ClientsIcon, HelpCircle as FaqIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import FloatingInstagram from "@/components/FloatingInstagram";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav
        navItems={[
          { name: "Home", link: "#home", icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
          { name: "About", link: "#about", icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
          { name: "Stories", link: "#stories", icon: <StoriesIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
          { name: "Clients", link: "#clients", icon: <ClientsIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
          // { name: "Process", link: "#process" },
          { name: "FAQ", link: "#faq", icon: <FaqIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
          { name: "Contact", link: "#contact", icon: <MessageIcon className="h-4 w-4 text-neutral-500 dark:text-white" /> },
        ]}
      />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <FloatingInstagram />
      <Footer />
    </div>
  );
} 