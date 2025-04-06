// 마이페이지 페이지
'use client';
import { LoginProfile } from '@/components/mypage/LoginProfile';
// import { MyProfile } from '@/components/mypage/MyProfile';
import { useState } from 'react';
import VerifyModal from '@/components/verify/VerifyModal';

export default function MyPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col w-[35rem] justify-center mx-auto mt-8 gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-gray-900">로그인 한 정보</h2>
          <p className="text-sm text-gray-400">*해당 정보는 다른 사람에게 보여지지 않습니다.</p>
        </div>
        <LoginProfile />
      </div>
      <hr className="border-gray-300" />
      <div className="flex flex-col gap-6">
        {/* 추후 권한 관련 api 생기면 권한 확인 후 버튼 보여주기 */}
        <button onClick={() => setIsOpen(true)}>재학생 인증하기</button>

        {/* <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-gray-900">기본정보</h2>
          <p className="text-sm text-gray-400">*해당 정보는 다른 사람에게 보입니다.</p>
        </div>
        <MyProfile /> */}
      </div>
      {isOpen && (
        <VerifyModal onClose={() => setIsOpen(false)} onSuccess={() => setIsOpen(false)} />
      )}
    </section>
  );
}
