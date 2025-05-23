import { useNavigate } from 'react-router-dom';
import onboardingimg from "../assets/firstapple.png";

export default function Onboarding1() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/index');
  };

  return (
    <div className="text-center">
      <img
        src={onboardingimg}
        alt="onboardingimg"
        className="w-[270px] h-auto object-contain mx-auto mt-12"
      />
      <h3 className="text-center text-[22px] font-bold leading-snug mt-4">
        먼저사과해!<br /><br />
        갑을 관계나 갈등 상황에서 <br />
        <span>
          <span style={{ color: "#EB4A40" }}>누가</span> 잘못했는지 판별해줌
        </span>
      </h3>

      {/* 시작하기 버튼 */}
      <div className="flex justify-center mt-24 mb-20">
        <button
          onClick={handleStart}
          className="font-['Inter'] w-[220px] px-8 py-4 bg-[#EB4A40] rounded-[48px] text-white text-base font-bold leading-none"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
