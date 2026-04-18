export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  imageUrl?: string;
}