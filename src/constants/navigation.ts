export const navigationItems = [
  {
    name: "Home",
    href: "/",
    description: "Main landing page"
  },
  {
    name: "About",
    href: "/our-story",
    description: "About Karan and his journey"
  },
  {
    name: "Services",
    href: "/spectrum",
    description: "Event hosting services and expertise"
  },
  {
    name: "Contact",
    href: "/collaborate",
    description: "Get in touch and book Karan"
  },
  {
    name: "Gallery",
    href: "/gallery",
    description: "Photos and videos from events"
  },
  {
    name: "Testimonials",
    href: "/impressions",
    description: "Client feedback and reviews"
  }
] as const;

export type NavigationItem = typeof navigationItems[number]; 