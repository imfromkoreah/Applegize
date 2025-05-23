import BellIcon from '../assets/left.svg';
import SettingIcon from '../assets/hamburger.svg';

export default function TopNav() {
  return (
    <header className="w-full bg-white px-4 py-3 flex items-center justify-between">
      
      {/* 왼쪽 벨 아이콘 (버튼으로 클릭 가능) */}
      <button type="button" className="focus:outline-none">
        <img src={BellIcon} alt="bell icon" className="h-4 w-4 text-gray-700" />
      </button>

      {/* 가운데 텍스트 */}
      <h1 className="text-lg text-gray-800">
        대화 분석기
      </h1>

      {/* 오른쪽 설정 아이콘 (버튼으로 클릭 가능) */}
      <button type="button" className="focus:outline-none">
        <img src={SettingIcon} alt="setting icon" className="h-6 w-6 text-gray-700" />
      </button>
      
    </header>
  );
}
