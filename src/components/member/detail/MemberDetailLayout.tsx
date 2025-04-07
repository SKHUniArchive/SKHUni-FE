'use client';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import { UserInfo } from '@/types/users';
import { getMemberDetail } from '@/apis/members';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import MemberBasicInfo from './MemberBasicInfo';
import { MemberDetailTabs } from './MemberDetailTabs';
import MemberStackInfo from './MemberStackInfo';
export default function MemberDetailLayout() {
  const { id } = useParams();
  const [member, setMember] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      const response = await getMemberDetail(Number(id));
      setMember(response.data);
    };
    fetchMember();
  }, [id]);

  if (!member)
    return (
      <div className="flex justify-center items-center h-[20rem]">
        <LoadingSpinner />
      </div>
    );

  return (
    <section className="flex flex-col w-[60rem] justify-center mx-auto mt-8 gap-16">
      <div className="flex flex-col gap-4">
        <MemberBasicInfo member={member} />
        <MemberStackInfo member={member} />
      </div>

      <MemberDetailTabs member={member} />
    </section>
  );
}
