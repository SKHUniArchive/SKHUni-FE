import { Project } from '@/types/projects';
import Image from 'next/image';

interface MyProjectCardProps {
  project: Project;
}

export const MyProjectCard = ({ project }: MyProjectCardProps) => {
  return (
    <div className="flex gap-4">
      <img
        src={project.picture}
        alt={project.title}
        className="w-[11.25rem] h-[6.25rem] rounded-md object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{project.introLine}</p>
        <div className="flex gap-3">
          {project.githubLink1 && (
            <a href={project.githubLink1} target="_blank" rel="noopener noreferrer">
              <Image src="/assets/icons/github.svg" alt="깃허브" width={32} height={32} />
            </a>
          )}
          {project.githubLink2 && (
            <a href={project.githubLink2} target="_blank" rel="noopener noreferrer">
              <Image src="/assets/icons/github.svg" alt="깃허브" width={32} height={32} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
