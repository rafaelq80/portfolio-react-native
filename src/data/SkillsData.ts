import { SkillsData } from "../types";

export const skillsData: SkillsData = {
  name: "Rafael Queiróz",
  photo: "https://github.com/rafaelq80.png",
  skillCategories: [
    {
      category: "Frontend",
      icon: "phone-portrait",
      skills: [
        { name: "HTML", level: 5 },
        { name: "CSS", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "React", level: 5 },
        { name: "React Native", level: 4 },
        { name: "Tailwind CSS", level: 5 }
      ]
    },
    {
      category: "Backend",
      icon: "server",
      skills: [
        { name: "Node.js", level: 5 },
        { name: "Java", level: 5 },
        { name: "Spring Boot", level: 4 },
        { name: "Go (Golang)", level: 4 },
        { name: "Express.js", level: 3 },
        { name: "NestJS", level: 4 }
      ]
    },
    {
      category: "Database",
      icon: "library",
      skills: [
        { name: "MySQL", level: 5 },
        { name: "PostgreSQL", level: 4 },
        { name: "MongoDB", level: 3 },
      ]
    },
    {
      category: "Ferramentas",
      icon: "construct",
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 4 },
        { name: "Figma", level: 3 },
        { name: "Jest", level: 3 },
        { name: "Expo", level: 4 },
        { name: "Swagger", level: 5 }
      ]
    }
  ]
};
