'use client';

import { EnrollmentStatus, UserInfo } from '@/types/users';
import { ENROLLMENT_STATUS_LABELS, FIELD_LABELS } from '@/constants/labels';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
export default function MemberBasicInfo({ member }: { member: UserInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    if (
      (option === '커피챗 요청' && !member.coffeeChatOpen) ||
      (option === '코드리뷰 요청' && !member.codeReviewOpen)
    ) {
      return;
    }
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-8 justify-between p-8 bg-white rounded-lg border border-gray-300">
      <div className="flex gap-8 items-center">
        <img src={member.picture} alt="member-profile" className="w-24 h-24 rounded-full" />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <span>·</span>
            <p className="text-sm text-gray-500">{FIELD_LABELS[member.fieldType] || '분야 미정'}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Image src="/assets/icons/mail.svg" alt="mail" width={16} height={17} />
              <p className="text-sm leading-none text-gray-700">{member.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/assets/icons/school.svg" alt="학번" width={16} height={16} />
              <h6 className="text-sm font-normal leading-none text-gray-700">
                {member.studentId}학번 (
                {ENROLLMENT_STATUS_LABELS[member.enrollmentStatus ?? EnrollmentStatus.ENROLLED]})
              </h6>
            </div>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">
            {member.introLine || '한줄소개가 없습니다'}
          </p>
        </div>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="relative w-24 h-10 bg-[#512DA8] text-white rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          Contact
        </button>
        {isOpen && (
          <ul className="absolute right-0 top-12 z-10 p-1 mt-1 w-40 bg-white rounded-lg border border-gray-300 shadow-sm">
            {['커피챗 요청', '코드리뷰 요청'].map((option) => {
              const isDisabled =
                (option === '커피챗 요청' && !member.coffeeChatOpen) ||
                (option === '코드리뷰 요청' && !member.codeReviewOpen);

              return (
                <li key={option}>
                  <button
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2 text-sm rounded-lg ${
                      isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
                    } ${
                      isDisabled
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
