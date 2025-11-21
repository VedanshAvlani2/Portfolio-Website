const config = {
  // title: "Vedansh Avlani | Data Analyst & Product Manager",
  title: "Vedansh Avlani",
  description: {
    long: "Explore the portfolio of Vedansh Avlani, a Business Analytics and AI enthusiast passionate about building data-driven digital experiences, predictive dashboards, and interactive web applications. Discover my latest projects spanning Machine Learning, Data Visualization, and Full-Stack Development — where technology meets creativity!",
  short:
    "Discover the portfolio of Vedansh Avlani, blending AI, analytics, and modern web development to create data-driven digital experiences.",
  },
  keywords: [
    "Vedansh Avlani",
    "portfolio",
    "business analytics",
    "artificial intelligence",
    "data science",
    "machine learning",
    "predictive modeling",
    "data visualization",
    "full-stack development",
    "interactive dashboards",
    "web applications",
    "Python",
    "React",
    "Next.js",
    "Three.js",
    "TailwindCSS",
    "Streamlit",
    "FastF1",
    "Power BI",
    "Tableau",
  ],
  author: "Vedansh Avlani",
  email: "vedansh.avlani@gmail.com",
  site: "https://portfolio-website-two-pied-86.vercel.app/",

  get ogImg() {
    return this.site + "/assets/seo/Portfolio 1.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vedansh-avlani/",
    github: "https://github.com/VedanshAvlani2",
  },
};
export { config };
