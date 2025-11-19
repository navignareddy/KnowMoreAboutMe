# Personal Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include interactive 3D components, smooth animations, and a fully responsive design.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with dark mode support
- 🌐 **3D Interactive Components** - Sphere image grid and circular gallery
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Easy Navigation** - Animated menu bar with smooth transitions
- 💾 **Downloadable Documents** - Resume and transcripts download functionality
- 🌙 **Theme Toggle** - Switch between light and dark modes

## Sections

- **Home** - Hero section with interactive 3D image sphere
- **About Me** - Biography, interests, and personal philosophy
- **Education & Achievements** - Academic background and honors
- **Certifications & Licenses** - Professional certifications and licenses
- **Technical Skills** - Skills categorized by technology domains
- **Projects** - Research work, quantitative projects, and general projects
- **Work Experience** - Professional work history with timeline
- **Organizations & Leadership** - Leadership roles and organizational involvement
- **Let's Connect** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Content

Replace placeholder text in the following files:
- `/src/app/about/page.tsx` - About section
- `/src/app/education/page.tsx` - Education and achievements
- `/src/app/certifications/page.tsx` - Certifications
- `/src/app/skills/page.tsx` - Technical skills
- `/src/app/projects/page.tsx` - Projects
- `/src/app/experience/page.tsx` - Work experience
- `/src/app/leadership/page.tsx` - Leadership roles
- `/src/app/contact/page.tsx` - Contact information

### Add Resume and Transcripts

Place your resume and transcripts in the `public` folder:
- `public/resume.pdf`
- `public/transcripts.pdf`

### Customize Images

Update the image URLs in:
- `/src/app/page.tsx` - Home page sphere images
- `/src/app/projects/page.tsx` - Project images

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **next-themes** - Theme management
- **OGL** - WebGL library for 3D graphics

## License

MIT License - feel free to use this for your own portfolio!