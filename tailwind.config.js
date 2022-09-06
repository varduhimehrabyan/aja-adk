module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        mainFont: ["Myriad"],
        titleFont: ["Mont"],
      },
      colors: {
        brandBlue: "#00ABDF",
        sectionBg: "#2E4047",
        errorRed: "#bf1650",
        textPrimary: "#989898",
        textSecondary: "#2E4047",
      },
      backgroundImage: {
        "gif-test": "url('/giphy.gif')",
        "main-mobile": "url('/images/home-intro-mb.png')",
        "brand-bg": "url('/images/brand-bg.svg')",
        "news-bg": "url('/images/news-bg.png')",
        "navbar-bg": "url('/images/navbar-bg.png')",
        "about-bg": "url('/images/about-bg.png')",
        "active-bg": "url('/images/active-navbar.svg')",
        "single-bg": "url('/images/work-single-bg.jpg)",
        "work-top": "url('/images/top-work-bg.png')",
        "work-bottom": "url('/images/bottom-work-bg.png')",
        "mobile-menu-bg": "url('/images/mobile-menu-bg.png')",
        "mobile-vector": "url('/images/mobile-menu-vector.png')",
      },
      borderRadius: {
        button: "10px",
      },
      fontSize: {
        //9px
        xxs: "0.563rem",
        //12px
        xs: "0.75rem",
        //14px
        sm: "0.875rem",
        //16px
        base: "1rem",
        // 18px
        lg: "1.125rem",
        //20px
        xl: "1.25rem",
        //24px
        "2xl": "1.5rem",
        //32px
        "3xl": "2rem",
        //45px
        "4xl": "2.813rem",
        //64px
        "5xl": "4rem",
        //84px
        "6xl": "5.25rem",
      },
    },
  },
  plugins: [],
};
