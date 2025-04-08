export interface Project {
  projectId: number;
  isAuthor: boolean;
  title: string;
  picture: string;
  introLine: string;
  introduction: string;
  githubLink1: string;
  githubLink2: string;
  siteLink: string;
}

export interface ProjectList {
  projects: Project[];
  pageInfo: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}
