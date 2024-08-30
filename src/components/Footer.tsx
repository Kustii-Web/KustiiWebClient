//import React from "react";
import logo from "../common/icons/footerLogo.svg";
import logo1 from "../common/icons/businessLogo1.svg";
import logo2 from "../common/icons/businessLogo2.svg";
import logo3 from "../common/icons/businessLogo3.svg";
import logo4 from "../common/icons/businessLogo4.svg";
import logo5 from "../common/icons/businessLogo5.svg";
import logo6 from "../common/icons/businessLogo6.svg";

function Footer() {
  const trainCompartment = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="">
      <div className="h-[130px] bg-[#D9D9D9] flex">
        <div className="flex text-center ml-[68px]">
          {trainCompartment.map((item, index) => (
            <div key={index} className="flex text-center mr-[68px] ">
              <img src={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[159px] bg-[#464646]">
        <div className="flex pl-[50px] pt-[55px]">
          <img src={logo} />
          <div className="font-NotoSerifKR text-white mt-4">
            <p className="text-[15px]"> (사)한미과학기술혁신진흥원</p>
            <p className="text-[10px]"> Korea-U.S. STI Institute</p>
          </div>
          <div className="font-NotoSerifKR text-white mt-2 text-[12px] ml-[103px]">
            비영리법인 승인 제2023-50-0008호 (2023. 11.21.) / 설립 등기 (2023.
            12.19.) / 사업자번호 : 000-00-00000
            <br />
            주소 : 서울특별시 강남구 역삼로 123 한양빌딩 7층 (우)06243
            <br />
            대표전화 : 000-0000–0000 / Fax : 000-0000-000 / Email:
            kustii@kustii.or.kr
          </div>
        </div>
        <div className="text-white text-[10px] mt-[25px] text-center font-NotoSerifKR">
          KUSTII 2023 © All Rights Reserved. Designed by Team Sejong.
        </div>
      </div>
    </div>
  );
}

export default Footer;
