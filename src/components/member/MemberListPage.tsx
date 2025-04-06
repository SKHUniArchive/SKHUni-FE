'use client';

import { useState } from 'react';
import { MemberCard } from './MemberCard';
import Pagination from './Pagination';
import { MemberFilterBar } from './filters/MemberFilterBar';
export const MemberListPage = () => {
  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-16">
      <MemberFilterBar />
      <div className="flex flex-col gap-12">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />

        <MemberCard />
      </div>
      {/* 백엔드 api에 따라 조금 수정 될 예정 */}
      <Pagination
        currentPage={currentPage}
        totalCount={10}
        pageSize={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
