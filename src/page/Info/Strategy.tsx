import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";
import { intro } from "../../common/api/Info";
import strategy from "../../common/icons/strategy.svg";

interface IntroData {
  title: string;
  content: string;
  images?: string[];
}

function Strategy() {
  const [introData, setIntroData] = useState<IntroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await intro();
        console.log(res);
        setIntroData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-y-auto">
      <Header />

      <img src={infoImage} />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px]">
          <div className="text-[32px] mt-[49px]">추진 전략</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          <div>
            <img src={strategy} />
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Strategy;
