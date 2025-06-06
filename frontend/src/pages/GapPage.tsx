import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav"; // TopNav 경로에 맞게 조정하세요

const GapPage = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const tabs = [
    { id: "tab1", label: "갑을분석기" },
    { id: "tab2", label: "갈등분석기" },
    { id: "tab3", label: "연애 케미" },
  ];

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    switch (tabId) {
      case "tab1":
        navigate("/preset/gap");
        break;
      case "tab2":
        navigate("/preset/conflict");
        break;
      case "tab3":
        navigate("/preset/love");
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("업로드된 파일:", uploadedFile.name);
    }
  };

  const handleAnalyzeClick = () => {
    if (!file) {
      alert("파일을 업로드 해주세요.");
      return;
    }

    console.log("분석 시작:", file.name);
    navigate("/loading");
  };

  return (
    <>
      <TopNav title="대화 분석기" />

      <main className="p-1 max-w-[375px] mx-auto mt-4">
        {/* 상단 탭 */}
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

        {/* 타이틀 문구 */}
        <div className="text-center text-[#090A0A] font-extrabold mb-3 font-Pretendard">
          <div className="text-2xl">난 갑이고! 넌 을이야!</div>
          <div className="text-lg mt-1">대화로 보는 갑/을 분석</div>
        </div>

        {/* 텍스트 안내문 */}
        <div className="text-center text-[#090A0A] text-sm font-normal font-Pretendard mb-6">
          1:1 개인톡 파일을 업로드 해주세요
        </div>

        {/* 파일 업로드 박스 */}
        <div className="w-full bg-white rounded-md border-2 border-dashed border-gray-400 mt-10 mb-10">
          <div className="py-6 flex flex-col items-center gap-4">
            <div className="text-center text-[#191D23] text-base font-extrabold font-Pretendard">
              채팅 텍스트 파일(.txt) 혹은
              <br />
              이미지 파일( .jpg나 .png)을
              <br />
              업로드 해주세요
            </div>
            <label
              htmlFor="file-upload"
              className="w-[241px] h-[35px] bg-gradient-to-r from-[#FEA49F] via-[#FF675D] to-[#EB4A40] rounded-[20px] flex justify-center items-center cursor-pointer"
            >
              <span className="text-white text-xs font-extrabold font-Manrope">
                파일 선택
              </span>
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".txt,image/jpeg,image/png"
              onChange={handleFileChange}
              className="hidden"
            />
            <div
              className="text-[#0D59E6] text-xs font-extrabold font-Manrope cursor-pointer underline"
              onClick={() => window.open("https://example.com/guide", "_blank")}
            >
              텍스트 파일 추출 방법 확인하기
            </div>
          </div>
        </div>

        {/* 분석하기 버튼 */}
        <div
          onClick={handleAnalyzeClick}
          className="w-full bg-black rounded-xl py-4 flex justify-center items-center cursor-pointer mb-12"
        >
          <span className="text-white text-base font-extrabold font-Inter">
            분석하기
          </span>
        </div>

        {/* 안내문구 */}
        <div className="w-full text-left text-sm text-[#090A0A] font-normal font-Pretendard pt-4">
          <div className="mb-1 font-medium">이용 안내 가이드</div>
          <div className="px-2 text-sm">• 먼저사과해는 채팅 내용을 일체 저장하지 않습니다</div>
          <div className="px-2">• 결과 분석은 ChatGPT를 활용해 제공합니다</div>
          <div className="px-2">
            • 자세한 가이드는{" "}
            <a
              href="https://example.com/guide"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 font-medium"
            >
              여기를 클릭
            </a>{" "}
            해주세요
          </div>
        </div>
      </main>
    </>
  );
};

export default GapPage;
