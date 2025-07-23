export interface ProfileData {
  name: string;
  title: string;
  location: string;
  photo: string;
  about: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
  };
  stats: {
    projects: string;
    experience: string;
    clients: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
  skills: Skill[];
}

export interface SkillsData {
  name: string;
  photo: string;
  skillCategories: SkillCategory[];
}