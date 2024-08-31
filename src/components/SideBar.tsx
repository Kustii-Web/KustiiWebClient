import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  code: string;
  list?: MenuItem[];
}

const dropDownList: MenuItem[] = [
  {
    name: "소개",
    code: "1",
    list: [
      { name: "인사말", code: "1-1" },
      { name: "비전과 목표", code: "1-2" },
      { name: "추진 전략", code: "1-3" },
      { name: "세부 사업", code: "1-4" },
      { name: "조직도", code: "1-5" },
      { name: "정관", code: "1-6" },
      { name: "오시는길", code: "1-7" },
    ],
  },
  {
    name: "공지사항",
    code: "2",
    list: [
      { name: "주요소식", code: "2-1" },
      { name: "고객의 소리", code: "2-2" },
      { name: "공익법인 감독기관", code: "2-3" },
      { name: "기부금 후원 현황", code: "2-4" },
    ],
  },
  { name: "주요 사업", code: "3", list: [{ name: "주요 산업", code: "3-1" }] },
  {
    name: "협력동향",
    code: "4",
    list: [
      { name: "정책·언론 동향 등", code: "4-1" },
      { name: "관련 영상", code: "4-2" },
    ],
  },
];

const SideBar: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <div className="w-64 h-full ml-[138px] mt-[99px] rounded-xl border p-[12px] border-[#18448A99]">
      <ul>
        {dropDownList.map((item) => (
          <li
            key={item.code}
            className="mb-4"
            onMouseEnter={() => setHoveredMenu(item.code)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="font-bold text-[#18448A]">{item.name}</div>
            {/* Check if the item has a list and if it's hovered */}
            {item.list && hoveredMenu === item.code && (
              <ul className="ml-4">
                {item.list.map((subItem) => (
                  <li
                    key={subItem.code}
                    className="text-sm mt-[14px] text-gray-500"
                  >
                    <Link to={`/${subItem.code}`}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
