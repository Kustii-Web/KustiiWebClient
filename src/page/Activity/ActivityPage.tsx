import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import { intro } from "../../common/api/Info";
import SideBar from "../../components/SideBar";
interface IntroData {
  title: string;
  content: string;
  images: string[];
}

function ActivityPage() {
  const { code } = useParams<{ code: string }>();
  const [introData, setIntroData] = useState<IntroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await intro();
        setIntroData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [code]);

  if (!introData) return <div>Loading...</div>;

  console.log(introData.content);
  return (
    <div>
      <Header />
      <img src={infoImage} alt="Info" />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px]">
          <div className="text-[32px] mt-[49px]">주요 산업 추진 현황</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          <div className="mt-4"></div>
        </div>
      </div>

      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default ActivityPage;
