export interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  logo: string;
  screenshot: string;
  /** Multiple screenshots for the carousel. Repeated for now; replace with real paths later. */
  screenshots: string[];
  /** Optional GitHub repo URL. Add links later. */
  github?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Kazlat LIMS",
    description:
      "A comprehensive laboratory information management system (LIMS) designed to streamline sample tracking, analysis workflows, and reporting for laboratories. The platform enables technicians to manage samples efficiently, from accessioning and scheduling to analysis, review, and final reporting.",
    link: "https://lims.kazlatpublicanalysts.com",
    image: "/assets/atmosync.png",
    logo: "/assets/atmosync-logo.jpg",
    screenshot: "/assets/atmosync-bg.png",
    screenshots: [
      "/assets/atmosync-bg.png",
      "/assets/atmosync-bg.png",
      "/assets/atmosync-bg.png",
    ],
    tags: [
      "Nextjs",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "Supabase Auth",
    ],
  },
  {
    id: 2,
    name: "CryptoFlow",
    description:
      "Crypto-focused platform that aggregates live news from multiple sources and provides built-in portfolio tracking—helping users stay informed and manage their assets in one place. Combines TanStack Query v5 with a Node.js/Express backend for real-time data handling at scale.",
    link: "https://crypto-flow-nine.vercel.app",
    image: "/assets/notely.png",
    logo: "/assets/cryptoflow-logo.ico",
    screenshot: "/assets/cryptoflow-bg.png",
    screenshots: [
      "/assets/cryptoflow-bg.png",
      "/assets/cryptoflow-bg.png",
      "/assets/cryptoflow-bg.png",
    ],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Local Storage",
      "Node.js",
      "Express.js",
      "News API",
      "CoinGecko API",
      "TanStack Query v5",
    ],
  },
  {
    id: 3,
    name: "GadgetsHub",
    description:
      "An e-commerce platform for gadgets.",
    link: "https://gadgets-hub-five.vercel.app",
    image: "/assets/movieinfo.png",
    logo: "/assets/movieinfo-logo.png",
    screenshot: "/assets/movieinfo-bg.png",
    screenshots: [
      "/assets/movieinfo-bg.png",
      "/assets/movieinfo-bg.png",
      "/assets/movieinfo-bg.png",
    ],
    tags: ["Nextjs", "Tailwind CSS", "TypeScript", "Supabase", "Supabase Auth"],
  },
  {
    id: 3,
    name: "MovieBox",
    description:
      "Movie discovery platform with an extensive library of films, synopses, cast details, and ratings. Designed to deliver a seamless cinematic browsing experience across all screen sizes with an intuitive, responsive interface.",
    link: "https://movieinfo-2.vercel.app",
    image: "/assets/movieinfo.png",
    logo: "/assets/movieinfo-logo.png",
    screenshot: "/assets/movieinfo-bg.png",
    screenshots: [
      "/assets/movieinfo-bg.png",
      "/assets/movieinfo-bg.png",
      "/assets/movieinfo-bg.png",
    ],
    tags: ["React", "Tailwind CSS", "Supabase"],
  },
  {
    id: 4,
    name: "RoomRadar",
    description:
      "Campus lodge-finding web app that helps students discover available accommodations around their university with ease. Contributed primarily to the backend—API development, database modelling, and smooth client-server data flow using MongoDB.",
    link: "https://roomradar-frontend.vercel.app",
    image: "/assets/the-autoscript.png",
    logo: "/assets/room-radar-logo.png",
    screenshot: "/assets/room-radar-bg.png",
    screenshots: [
      "/assets/room-radar-bg.png",
      "/assets/room-radar-bg.png",
      "/assets/room-radar-bg.png",
    ],
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: 5,
    name: "Atmosync",
    description:
      "Modern weather forecast app delivering real-time conditions, hourly and 7-day outlooks, and location-aware insights through a clean, responsive interface. Built with a performance-first approach to help users plan their day confidently.",
    link: "https://weather-app-xi-liart.vercel.app",
    image: "/assets/atmosync.png",
    logo: "/assets/atmosync-logo.jpg",
    screenshot: "/assets/atmosync-bg.png",
    screenshots: [
      "/assets/atmosync-bg.png",
      "/assets/atmosync-bg.png",
      "/assets/atmosync-bg.png",
    ],
    tags: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Firestore",
      "Firebase Auth",
      "OpenWeather API",
      "Geolocation API",
    ],
  },
];
