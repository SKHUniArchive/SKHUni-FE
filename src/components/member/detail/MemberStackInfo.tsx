import { UserInfo } from '@/types/users';

interface MemberStackInfoProps {
  member: UserInfo;
}

export default function MemberStackInfo({ member }: MemberStackInfoProps) {
  return (
    <div className="flex flex-col gap-2 justify-between px-8 py-6 bg-white rounded-lg border border-gray-300">
      <h3 className="text-sm font-semibold text-gray-900">기술 스택</h3>
      <div className="flex gap-2">
        {member.techStack ? (
          member.techStack
            .split(',')
            .map((tech) => (
              <img
                key={tech}
                src={`https://skillicons.dev/icons?i=${tech}`}
                alt="github"
                width={24}
                height={24}
              />
            ))
        ) : (
          <p className="text-sm text-gray-500">기술 스택이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
