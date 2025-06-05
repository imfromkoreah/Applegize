import { useNavigate } from 'react-router-dom';
import BellIcon from '../assets/left.svg';
import SettingIcon from '../assets/hamburger.svg';

type TopNavProps = {
  title: string;
};

export default function TopNav({ title }: TopNavProps) {
  const navigate = useNavigate();

  return (
    <header className="w-full px-2 py-5 flex items-center justify-between">
      
      {/* 왼쪽 뒤로가기 버튼 */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="focus:outline-none"
      >
        <img src={BellIcon} alt="뒤로가기 아이콘" className="h-4 w-4 text-gray-700" />
      </button>

      {/* 가운데 텍스트 (동적으로 title props를 사용) */}
      <div className="flex-1 text-center">
        <h2
          className="text-black text-[18px] font-inter leading-[18px] tracking-normal"
          style={{ lineHeight: '18px', letterSpacing: 0 }}
        >
          {title}
        </h2>
      </div>

      {/* 오른쪽 설정 버튼 */}
      <button type="button" className="focus:outline-none">
        <img src={SettingIcon} alt="setting icon" className="h-6 w-6 text-gray-700" />
      </button>
      
    </header>
  );
}
