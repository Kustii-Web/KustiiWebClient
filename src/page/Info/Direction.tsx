import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";
// import MapBox from "../../components/MapBox";

function Direction() {
  return (
    <div className="overflow-y-auto">
      <Header />
      <img src={infoImage} />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px]">
          <div className="text-[32px] mt-[49px]">오시는 길</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
        </div>
      </div>
      {/* <MapBox /> */}
      <div className="mt-[100px]">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Direction;
