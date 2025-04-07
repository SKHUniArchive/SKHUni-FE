'use client';

import { useState } from 'react';

export const MemberDetailTabs = () => {
  const [selectedTab, setSelectedTab] = useState<'self-introduction' | 'project'>(
    'self-introduction'
  );
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center w-full">
        <button
          type="button"
          className={`pb-2 w-1/2 text-sm font-bold  border-b-2 ${
            selectedTab === 'self-introduction'
              ? 'text-[#512DA8] border-[#512DA8]'
              : 'text-gray-500 border-gray-300'
          }`}
          onClick={() => setSelectedTab('self-introduction')}
        >
          자기소개
        </button>
        <button
          type="button"
          className={`pb-2 w-1/2 text-sm font-bold border-b-2 ${
            selectedTab === 'project'
              ? 'text-[#512DA8] border-[#512DA8]'
              : 'text-gray-500 border-gray-300'
          }`}
          onClick={() => setSelectedTab('project')}
        >
          프로젝트
        </button>
      </div>
      {selectedTab === 'self-introduction' && <div>자기소개</div>}
      {selectedTab === 'project' && <div>프로젝트</div>}
    </div>
  );
};
