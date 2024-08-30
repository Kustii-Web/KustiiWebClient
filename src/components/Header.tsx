import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../common/icons/headerLogo.svg";
import searchLogo from "../common/icons/search.svg";
import listLogo from "../common/icons/list.svg";

function Header() {
  let tab = (useLocation().state as any) || "main";
  const [selected, setSeleceted] = useState({
    ActivityPage: false,
    CooperPage: false,
    InfoPage: false,
    MainPage: true,
  });
  console.log(selected);
  const navigation = useNavigate();
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;

    if (tab === id) return;
    setSeleceted(() => {
      const temp = {
        ActivityPage: false,
        CooperPage: true,
        InfoPage: false,
        MainPage: false,
      };
      return { ...temp, [id]: true };
    });
    navigation(`/${id}`, { state: id });
  };
  return (
    <div className="flex">
      <div className="flex w-screen h-[97px] bg-white">
        <div className="flex ml-[95px] items-center mr-[205px]">
          <img src={headerLogo} id="logo" />
          <div className="font-NotoSerifKR ml-[3px]">
            <p className="text-[18px]"> (사)한미과학기술혁신진흥원</p>
            <p className="text-[13px]"> Korea-U.S. STI Institute</p>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="mx-[49.5px] my-[10px] opacity-50"
            id="1-1"
            onClick={clickHandler}
          >
            소개
          </div>
          <div
            className="mx-[49.5px] my-[10px] opacity-50"
            id="2-1"
            onClick={clickHandler}
          >
            공지사항
          </div>
          <div
            className="mx-[49.5px] my-[10px] opacity-50"
            id="3-1"
            onClick={clickHandler}
          >
            주요 활동
          </div>
          <div
            className="mx-[49.5px] my-[10px] opacity-50"
            id="4-1"
            onClick={clickHandler}
          >
            협력 동향
          </div>
          <div className="ml-[26px]">
            <img src={searchLogo} id="searchLogo" />
          </div>
          <div className="ml-[21px]">
            <img src={listLogo} id="listLogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
