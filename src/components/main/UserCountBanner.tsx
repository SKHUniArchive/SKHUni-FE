export const UserCountBanner = ({ count }: { count: number }) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center py-10 text-center">
      <h2 className="text-2xl font-semibold leading-8"> 🌐 </h2>
      <h3 className="text-2xl font-semibold leading-8">
        성공회대 <b className="font-bold text-[#512DA8]">{count}명</b>의 IT 학우들이 <br />
        지금 <span className="underline text-[#F4C430] underline-offset-4">스쿠니</span>에서
        연결되고 있어요!
      </h3>
      <p className="text-base text-gray-600">
        커피챗, 코드리뷰, 프로젝트 팀빌딩까지.
        <br />
        지금 당신의 가능성을 펼쳐보세요.
      </p>
    </div>
  );
};
