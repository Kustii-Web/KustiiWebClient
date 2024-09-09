import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import mainImage from "../common/images/main.png";
import { mainNews } from "../common/api/Notice";
import youtubeImg from "../common/images/youtube.png";
import youtubeIcon from "../common/icons/youtubeIcon.svg";

interface IntroData {
  _id: string;
  title: string;
  content: string;
  files: string[];
  views: number;
  created_at: string;
}

function MainPage() {
  const [news, setNews] = useState<IntroData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await mainNews(1);
      const { posts }: { posts: IntroData[]; total_pages: number } = res;
      setNews(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleClick = (id: string) => {
    navigate(`/2-1/${id}`); // Replace with the actual route to the detail page
  };

  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex justify-center">
        <img src={mainImage} alt="Main" className="max-w-full h-auto" />
      </div>
      <div className="flex mt-[84px]">
        <div className="mr-[89px] ml-[98px] border w-[593px]">
          <div className="text-[13px] font-[500] border pt-[30px] pl-[10px] bg-[#18448A21] bg-opacity-15 h-[78px] mb-[16px]">
            주요소식
          </div>
          <div className="text-[13px]">
            {news.length > 0 ? (
              news.map((item) => (
                <div
                  key={item._id}
                  className="cursor-pointer pl-[10px] mb-[25px]"
                  onClick={() => handleTitleClick(item._id)}
                >
                  -{item.title}
                </div>
              ))
            ) : (
              <div>공지사항이 없습니다.</div>
            )}
          </div>
        </div>
        <div>
          <img className="w-[550px] h-[310px]" src={youtubeImg} />
          <div className="flex mt-[23px]">
            <div className="w-[164px] pl-[11px] pt-[15px] text-center  h-[70px] mr-[30px] bg-[#E1E7F0] flex align-middle justify-center">
              한미기술동맹
              <br />
              유튜브
              <img className="w-[38px] ml-[10px]" src={youtubeIcon} />
            </div>
            <div className="w-[164px] pl-[11px] pt-[15px] text-center h-[70px] mr-[30px] bg-[#E1E7F0] flex align-middle justify-center">
              KUSTII
              <br />
              유튜브
              <img className="w-[38px] ml-[10px]" src={youtubeIcon} />
            </div>
            <div className="w-[164px] pl-[11px] pt-[15px] text-center h-[70px] mr-[30px] bg-[#E1E7F0] flex align-middle justify-center">
              KUSTII
              <br />
              열린 포럼
              <img className="w-[38px] ml-[10px]" src={youtubeIcon} />
            </div>
          </div>

          {/*유투브*/}
        </div>
      </div>
      <div className="mt-[385px]">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
