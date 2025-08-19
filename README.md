# Impulse Events & Trade Fairs Website

A sophisticated, ultra-responsive website for Impulse Events and Trade Fairs Pvt. Ltd., featuring premium design, modern animations, and clean architecture.

## 🎯 Project Overview

This website showcases Impulse Events' expertise in event management and trade fair solutions with a focus on:
- **Premium Design**: Rich visual aesthetics with sophisticated animations
- **Ultra-Responsive**: Mobile-first approach with seamless cross-device experience
- **Modern Architecture**: Built with Next.js 15, TypeScript, and cutting-edge UI libraries
- **Performance**: Optimized for speed and accessibility

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui, acertinity ui, Level components
- **Animations**: Framer Motion
- **Fonts**: Inter (body), Playfair Display (headings)
- **Code Quality**: ESLint, Prettier

## 🎨 Design System

### Color Palette
- **Primary Red**: #D90429
- **Jet Black**: #181818, #232323
- **Steel Grey**: #585A5E, #C7C7C7
- **Crisp White**: #FFFFFF, #FAFAFA

### Typography
- **Body**: Inter (300, 400, 500, 600, 700)
- **Headings**: Playfair Display (400, 500, 600, 700)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   └── Layout.tsx         # Main layout component
├── constants/              # Navigation, theme, and other constants
├── hooks/                  # Custom React hooks
├── sections/               # Page sections and layouts
├── styles/                 # Additional styling
├── theme/                  # Theme configuration
├── utils/                  # Utility functions
└── assets/                 # Images, icons, media
```

## 🧭 Navigation Structure

The website features premium navigation with distinct sections:

- **Pulse** - Main landing page
- **Our Story** - Company philosophy and roots
- **Spectrum** - Projects and showcases
- **Collaborate** - Contact and partnership
- **Gallery** - Event media and visuals
- **Chronicles** - Press, blog, case studies
- **Crew** - Team and leadership
- **Impressions** - Client testimonials

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd impulseindiawebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Adding New Pages
1. Create a new page in `src/app/[page-name]/page.tsx`
2. Add navigation item in `src/constants/navigation.ts`
3. Follow the existing page structure with Layout component

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind CSS classes
- Theme variables: Defined in CSS custom properties

### Components
- UI components: `src/components/ui/`
- Custom components: `src/components/`
- Use shadcn/ui CLI for adding new components: `npx shadcn@latest add [component]`

## 🔧 Configuration Files

- `components.json` - shadcn/ui configuration
- `.prettierrc` - Prettier formatting rules
- `eslint.config.mjs` - ESLint rules
- `tailwind.config.ts` - Tailwind CSS configuration

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility

## 🚀 Deployment

The website is optimized for deployment on Vercel, Netlify, or any static hosting platform.

## 📄 License

This project is proprietary to Impulse Events and Trade Fairs Pvt. Ltd.

---

**Built with ❤️ by the Impulse Events team**
