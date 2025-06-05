import TopNav from "../components/TopNav";

const LoadingPage = () => {
  return (
    <>
      <TopNav title="" />
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md px-4">
        {/* 타이틀 */}
        <h2 className="text-[#090A0A] text-[22px] font-bold font-Pretendard text-center mt-32">
          리포트 생성 중
        </h2>

        {/* 서브텍스트 */}
        <p className="text-[#090A0A] text-sm font-normal font-Pretendard text-center mt-2 mb-4 leading-loose">
          AI가 대화 내용을 분석하고 있어요
        </p>

        {/* 남은 시간 박스 */}
        <div className="w-[190px] bg-white rounded-[10px] border border-black/20 py-3 mt-10 flex justify-center items-center">
          <span className="text-black text-base font-bold font-Inter">
            20초 남음
          </span>
        </div>

        {/* 푸시 알림 안내 버튼 */}
        <button className="w-[330px] bg-black rounded-[10px] px-8 py-4 text-white text-base font-bold font-Inter text-center mt-14">
          🔔 결과 분석 완료 푸쉬 알림 받기
        </button>
      </div>
    </>
  );
};

export default LoadingPage;
