import Header from "../../components/Header";
import Footer from "../../components/Footer";
import noticeImage from "../../common/images/notice.png";
import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";

function PubliCor() {
  return (
    <div>
      <Header />
      <img src={noticeImage} alt="Info" />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px]">
          <div className="text-[32px] mt-[49px]">공익법인 감독기관</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          <div className="mt-4 text-[12px] foont-[400] leading-3">
            <div className="mb-[40px]">
              사단법인 한미과학기술혁신진흥원은 법인세법 시행령 제39조 1항에
              의거하여
            </div>
            <div className="mb-[60px]">
              공익위반사항 관리· 감독기관이 개설한 인터넷 홈페이지를 다음과 같이
              게시합니다.
            </div>
            <div className="mb-[10px]">[과학정보통신부]</div>
            <Link
              className="text-[#18448A] underline"
              to="https://www.msit.go.kr/"
            >
              https://www.msit.go.kr/
            </Link>
            <div className="mb-[10px] mt-[50px]">[국세청]</div>
            <Link
              className="text-[#18448A] underline"
              to="http://www.nts.go.kr/"
            >
              http://www.nts.go.kr/
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default PubliCor;
