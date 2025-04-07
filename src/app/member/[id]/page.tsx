'use client';

import { useParams } from 'next/navigation';

export default function MemberDetailPage() {
  const { id } = useParams();
  return <div>멤버 id : {id}</div>;
}
