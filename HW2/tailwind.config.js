/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    'sm': "640px",
    // => @media (min-width: 640px) { ... }
    'md': "768px",
    // => @media (min-width: 768px) { ... }
    "2md": "968px",

    'lg': "1024px",
    // => @media (min-width: 1024px) { ... }
    'xl': "1280px",
    // => @media (min-width: 1280px) { ... }
    '2xl': "1536px",
    // => @media (min-width: 1536px) { ... }
    "max-2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }
    "max-xl": { max: "1279px" },
    // => @media (max-width: 1279px) { ... }
    "max-lg": { max: "1023px" },
    // => @media (max-width: 1023px) { ... }
    "max-md": { max: "767px" },
    // => @media (max-width: 767px) { ... }
    "max-sm": { max: "639px" },
    // => @media (max-width: 639px) { ... }
    "max-xss": { max: "500px" }
    //=> @media (max-width: 500px) { ... }
  },
  extend: {
    gridTemplateColumns: {
      'innerHero': 'repeat(2, 1fr)',
    },
    gridTemplateRows: {
      'innerHero': 'repeat(2, 1fr)',
    },
    colors: {
      'green': '#2EEF59',
      'green-border': '#2AEE55',
      'darkerGreen': '#075B19',
      'khaki': '#808000C9',
      'greyish': '#555555',
      'khakiDark': "#9b9b36",
      'navbar-active': "#637ca4",
      'black-rgba': 'rgba(0, 0, 0, 0.6)',
      'akaroa': '#d3d3a6',
      'pineglade': '#c8c786',
      'blueish': '#367995'
    },
    backgroundImage: {
      "hero-bg": "url('/src/assets/img/home-hero-bg.png')",
      "tour": "url('/src/assets/img/tour1.jpg')",
      "gazangul-lake": "url('/src/assets/img/Gazangul_Lake.png')",
      'howItWorks': "url('/src/assets/img/howitworks.png')",
      'videoBg': "url('/src/assets/img/video-bg.png')",
      "innerPageBg": "url('/src/assets/img/innerPageBg.png')"
    },
    fontFamily: {
      primary: ["Montserrat", "system-ui", "sans-serif"],
      logo: ["IBM Plex Sans", "system-ui", "sans-serif"],
    },
  },
};
export const plugins = [];