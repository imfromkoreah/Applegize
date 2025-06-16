import React, { useState } from "react";
import TopNav from "../components/TopNav";

const ResultPage = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [file, setFile] = useState<File | null>(null);

  const tabs = [
    { id: "tab1", label: "우리 둘" },
    { id: "tab2", label: "신짱구" },
    { id: "tab3", label: "봉미선" },
  ];

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    // navigate() 호출 제거 (페이지 이동 안함)
  };

  // 탭별 카테고리 배지 표시 함수
  const renderCategoryBadge = () => {
    switch (selectedTab) {
      case "tab1":
        return (
          <div className="category-badge bg-gradient-to-r from-[#FF07C9] to-[#78FFEF] text-white font-bold rounded-full px-4 py-1 inline-block mb-4">
            우리 둘
          </div>
        );
      case "tab2":
        return (
          <div className="category-badge bg-pink-400 text-white font-bold rounded-full px-4 py-1 inline-block mb-4">
            신짱구
          </div>
        );
      case "tab3":
        return (
          <div className="category-badge bg-green-400 text-white font-bold rounded-full px-4 py-1 inline-block mb-4">
            봉미선
          </div>
        );
      default:
        return null;
    }
  };

  // 선택된 탭에 따른 리포트 렌더링
  const renderReport = () => {
    switch (selectedTab) {
      case "tab1":
        return (
          <div className="report-card">
            <div className="flex justify-center">{renderCategoryBadge()}</div>
            <div className="w-[311px] h-[411px] relative">
              <div className="w-full h-full bg-white rounded-2xl border border-black/50" />
              <div className="absolute left-[65px] top-[56px] text-center text-[#090a0a] text-lg font-bold font-['Inter'] leading-normal">
                신짱구(갑) &gt; 봉미선(을)
              </div>
              <div className="absolute left-[85px] top-[98px] text-center text-[#090a0a] text-lg font-bold font-['Inter'] leading-normal">
                멤버들의 역할 정리
              </div>
              <div className="absolute left-[106px] top-[270px] text-center text-[#090a0a] text-lg font-bold font-['Inter'] leading-normal">
                갑 vs 을 구도
              </div>
              <div className="absolute left-[113px] top-[32px] text-center text-[#090a0a] text-[13px] font-normal font-['Inter'] leading-none">
                심판하겠습니다
              </div>
              <div className="absolute left-[19px] top-[299px] text-center text-[#090a0a] text-[13px] font-normal font-['Inter'] leading-none">
                갑
              </div>
              <div className="absolute left-[279px] top-[300px] text-center text-[#090a0a] text-[13px] font-normal font-['Inter'] leading-none">
                을
              </div>
              <div className="absolute w-[272px] left-[19px] top-[161px] text-[#090a0a] text-[15px] leading-tight">
                <span className="font-bold font-['Inter']">짱구</span>
                <span className="font-normal font-['Inter']">
                  {" "}
                  : 그룹 분위기를 이끌며, 일상적인 대화를 통해 대화하지만 강압적.
                </span>
              </div>
              <div className="absolute w-[272px] left-[19px] top-[209px] text-[#090a0a] text-[15px] leading-tight">
                <span className="font-bold font-['Inter']">미선</span>
                <span className="font-normal font-['Inter']">
                  {" "}
                  : 감정적으로 연결되어 있어 상대방의 기분을 맞추는 수동적인 모습.
                </span>
              </div>
              <div className="absolute w-[283px] h-[13px] p-1.5 left-[14px] top-[320px] bg-gradient-to-r from-[#bc4fd2] via-[#ffe0df] to-[#a5e1a5] rounded-[20px]" />
              <div className="absolute w-10 h-[25px] p-1.5 left-[65px] top-[341px] bg-[#e8e8e8]/75 rounded-[15px] inline-flex justify-center items-center">
                <div className="text-black text-xs font-bold font-['Manrope']">짱구</div>
              </div>
              <div className="absolute w-10 h-[25px] p-1.5 left-[179px] top-[362px] bg-[#e8e8e8]/75 rounded-[15px] inline-flex justify-center items-center">
                <div className="text-black text-xs font-bold font-['Manrope']">미선</div>
              </div>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className="report-card p-4 bg-white rounded-2xl border border-black/50 w-[311px]">
            <div className="flex justify-center">{renderCategoryBadge()}</div>
            <h2 className="text-lg font-bold mb-2">짱구 리포트</h2>
            <p>짱구에 대한 분석 내용을 여기에 넣으세요.</p>
          </div>
        );
      case "tab3":
        return (
          <div className="report-card p-4 bg-white rounded-2xl border border-black/50 w-[311px]">
            <div className="flex justify-center">{renderCategoryBadge()}</div>
            <h2 className="text-lg font-bold mb-2">미선 리포트</h2>
            <p>미선에 대한 분석 내용을 여기에 넣으세요.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <TopNav title="대화 분석기" />
      <main className="p-1 max-w-[375px] mx-auto mt-4 flex flex-col items-center">
        {/* 상단 버튼 */}
        <div className="w-full flex justify-center mb-2">
          <button
            className="px-8 py-3 text-2xl font-bold rounded-[999px] border-2 border-black bg-white text-black"
          >
            우리 둘의
          </button>
        </div>

        {/* 타이틀 */}
        <div className="text-center text-[#090A0A] font-extrabold mb-3 font-Pretendard">
          <div className="text-2xl">갑을 분석 리포트</div>
        </div>

        {/* 안내문 */}
        <div className="text-center text-[#090A0A] text-sm font-normal font-Pretendard mb-6">
          멤버 이름을 누르면 수정할 수 있어요!
        </div>

        {/* 탭 */}
        <div className="w-full flex gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                flex-1 px-2 py-2 text-base font-bold rounded-full border-2
                ${
                  selectedTab === tab.id
                    ? "border-pink-500 bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#FF07C9] to-[#78FFEF]"
                    : "text-black border-black bg-transparent"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 선택된 탭의 리포트 내용 보여주기 */}
        <div className="flex justify-center w-full">{renderReport()}</div>
      </main>
    </>
  );
};

export default ResultPage;
