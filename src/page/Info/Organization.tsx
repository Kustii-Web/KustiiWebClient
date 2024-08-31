import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";
import organiIcon from "../../common/icons/organization.svg";

function Organization() {
  return (
    <div className="overflow-y-auto">
      <Header />

      <img src={infoImage} />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px]">
          <div className="text-[32px] mt-[49px]">조직도</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          <img className="ml-[72px]" src={organiIcon} />
        </div>
      </div>
      <div className="mt-[100px]">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Organization;
