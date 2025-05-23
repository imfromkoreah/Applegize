import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { id: "gap", label: "갑을분석기" },
  { id: "conflict", label: "갈등분석기" },
  { id: "love", label: "연애 케미" },
];

const Page1 = () => {
  const [selectedTab, setSelectedTab] = useState("gap");
  const navigate = useNavigate();

  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`파일이 업로드 되었습니다: ${file.name}`);
    }
  };

  const handleAnalyzeClick = () => {
    navigate("/result");
  };

  return (
    <div className="relative w-[375px] h-[700px]">
      {/* 상단 탭 */}
      <div className="absolute left-[10px] top-[5px] w-[355px] h-[46px] flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              flex-1 px-3 py-2
              flex justify-center items-center font-Inter font-extrabold text-sm leading-5 whitespace-nowrap
              border-2 rounded-full
              ${
                selectedTab === tab.id
                  ? "text-pink-500 border-pink-500 bg-white"
                  : "text-black border-black bg-transparent"
              }
              transition-colors duration-200
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 상단 문구 */}
      <div className="absolute left-[81px] top-[82px] text-center flex flex-col justify-center text-[#090A0A] text-2xl font-extrabold leading-8 font-Pretendard whitespace-pre-line">
        난 갑이고! 넌 을이야!
        <br />
        대화로 보는 갑/을 분석
      </div>

      {/* 텍스트 안내문 */}
      <div className="absolute left-1/2 top-[155px] -translate-x-1/2 text-center w-[200px] flex flex-col justify-center text-[#090A0A] text-sm font-normal leading-8 font-Pretendard whitespace-pre-line">
        1:1 개인톡 텍스트 파일을 <br /> 업로드 해 주세요
      </div>

      {/* 파일 업로드 박스 */}
      <div className="absolute left-0 top-[224px] w-[375px] h-[218px] bg-white rounded-md px-4 py-4 flex flex-col gap-[17px] border-2 border-dashed border-gray-400  mt-8">
        <div className="flex-1 self-stretch py-6 bg-white rounded-md outline-[2px] outline-gray-300 outline-offset-[-2px] flex flex-col justify-center items-center gap-[15px]">
          <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch text-center text-[#191D23] text-base font-extrabold font-Pretendard break-words">
              채팅 파일(.txt) 혹은
              <br />
              이미지 파일( .jpg나 .png)을
              <br />
              업로드 해주세요
            </div>

            {/* 파일 업로드 */}
            <label
              htmlFor="file-upload"
              className="w-[241px] h-[35px] px-1.5 bg-gradient-to-r from-[#FEA49F] via-[#FF675D] to-[#EB4A40] rounded-[20px] flex justify-center items-center gap-2.5 cursor-pointer"
            >
              <span className="text-white text-xs font-extrabold font-Manrope break-words">
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
            <div className="self-stretch text-center flex flex-col justify-end text-[#0D59E6] text-xs font-extrabold font-Manrope break-words cursor-pointer">
              텍스트 파일 추출 방법 확인하기
            </div>
          </div>
        </div>
      </div>

      {/* 분석하기 버튼: 업로드 박스 아래로 이동 */}
      <div
        onClick={handleAnalyzeClick}
        className="absolute left-[17px] top-[500px] w-[340px] bg-black rounded-lg px-8 py-4 flex items-center justify-center gap-2.5 cursor-pointer select-none mt-8"
      >
        <div className="text-white text-base font-extrabold font-Inter leading-4 break-words">
          분석하기
        </div>
      </div>

      {/* 안내문구 */}
      <div className="absolute left-1/2 top-[640px] -translate-x-1/2 flex flex-col justify-center text-left w-[320px] mt-8">
        <div className="text-sm text-[#090A0A] font-normal leading-6 font-Pretendard mb-1">
          이용 안내 가이드
        </div>
        <div className="text-sm text-[#090A0A] font-normal leading-6 font-Pretendard whitespace-nowrap">
          • 먼저사과해는 채팅 내용을 일체 저장하지 않습니다
        </div>
        <div className="text-sm text-[#090A0A] font-normal leading-6 font-Pretendard whitespace-nowrap">
          • 결과 분석은 Chat GPT를 활용해 제공합니다
        </div>
        <div className="text-sm text-[#090A0A] font-normal leading-6 font-Pretendard whitespace-nowrap">
          • 자세한 가이드는 여기를 확인해 주세요
        </div>
      </div>
    </div>
  );
};

export default Page1;
