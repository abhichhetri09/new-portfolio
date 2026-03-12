export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  category: "web" | "ui" | "backend" | "other";
  highlight?: boolean;
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    description: "My personal portfolio showcasing projects and experience.",
    role: "Design & full stack development",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    category: "web",
    highlight: true,
    link: "https://spyscout.netlify.app/",
    github: "https://github.com/abhichhetri09/portfolio",
  },
  {
    slug: "movie-web-app",
    title: "Movie Web Application",
    description:
      "React-based movie web app to explore titles, view details, and interact with Firebase-backed features.",
    role: "Frontend development",
    tech: ["React", "Vite", "Firebase", "Bootstrap", "Sass"],
    category: "web",
    link: "https://amflex.netlify.app/",
    github: "https://github.com/abhichhetri09/MovieApp",
  },
  {
    slug: "java-bank-app",
    title: "Java Bank Application",
    description:
      "A simple Java banking app for creating accounts, deposits, withdrawals, and account deletion.",
    role: "Backend development",
    tech: ["Java"],
    category: "backend",
    github: "https://github.com/abhichhetri09/Java-Bank_Application",
  },
  {
    slug: "guessing-game",
    title: "Guessing Game",
    description: "A fun Java-based number guessing game.",
    role: "Backend development",
    tech: ["Java"],
    category: "other",
    github: "https://github.com/abhichhetri09/GuessingGame",
  },
  {
    slug: "todo-list",
    title: "Todo List",
    description: "A simple todo list application for managing everyday tasks.",
    role: "Frontend development",
    tech: ["JavaScript"],
    category: "web",
    github: "https://github.com/abhichhetri09/todolist",
  },
  {
    slug: "recipe-web-app",
    title: "Recipe Web Application",
    description:
      "Full-stack recipe app to explore, add, and like recipes, built with Spring Boot and PostgreSQL.",
    role: "Full stack development",
    tech: ["Spring Boot", "Thymeleaf", "PostgreSQL"],
    category: "web",
    github: "https://github.com/abhichhetri09/RecipeApp",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description: "An app to help users track and categorize expenses.",
    role: "Full stack development",
    tech: ["JavaScript"],
    category: "web",
    github: "https://github.com/abhichhetri09/ExpenseTracker",
  },
];
