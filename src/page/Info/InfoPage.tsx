import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";
import { intro } from "../../common/api/Info";

interface IntroData {
  title: string;
  content: string;
  images?: string[];
}

function InfoPage() {
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
        <div className="ml-[154px]">
          <div className="text-[32px] mt-[49px]">인사말</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          <div>
            {introData && (
              <div>
                <div className="text-[12px] w-[827px] leading-[35px]">
                  {introData.content}
                </div>
              </div>
            )}
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

export default InfoPage;
