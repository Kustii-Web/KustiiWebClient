import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // For accessing URL parameters
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import noticeImage from "../../common/images/notice.png";
import SideBar from "../../components/SideBar";
import { activityDetail } from "../../common/api/Activity";

interface ActivityDetail {
  _id: string;
  title: string;
  content: string;
  files: string[];
  writer: string;
  created_at: string;
}

function ActivityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [notice, setNotice] = useState<ActivityDetail | null>(null);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        if (id) {
          const res = await activityDetail(id);
          setNotice(res);
        }
      } catch (error) {
        console.error("Error fetching notice detail:", error);
      }
    };

    fetchNoticeDetail();
  }, [id]);
  const formatDate = (dateString: string) => {
    return dateString.slice(0, 10); // Extract the first 10 characters (YYYY-MM-DD)
  };

  if (!notice) {
    return (
      <div>
        <Header />
        <img src={noticeImage} alt="Info" />
        <div className="flex">
          <SideBar />
          <div className="ml-[152px] w-full">
            <div className="text-[32px] mt-[49px]">주요 사업 추진 현황</div>
            <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <img src={noticeImage} alt="Info" />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px] w-full">
          <div className="text-[32px] mt-[49px]">주요 사업 추진 현황</div>
          <hr className="w-[827px] h-[4px] bg-black" />

          {/* Notice Detail */}
          <div className="mt-[30px]">
            <div className="text-[20px] font-[700] mb-[33px]">
              {notice.title}
            </div>
            <div className="flex text-[10px] mb-[20px]">
              <div className="mr-[21px]">작성일</div>
              <div className="mr-[39px]">{formatDate(notice.created_at)}</div>
              <div className="mr-[21px]">작성자</div>
              <div className="mr-[39px]">{notice.writer}</div>
            </div>
            <div className="flex mt-[19px]">
              <div className="text-[10px] font-[500] mr-[13px]">첨부파일</div>
              <div className="mb-[24px]">
                {notice.files.length > 0 &&
                  notice.files.map((file, index) => (
                    <div key={index} className="mb-2">
                      <a
                        href={file} // 링크를 파일의 URL로 설정합니다.
                        download
                        className="text-[10px] underline"
                      >
                        첨부파일 {index + 1}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <hr className="w-[827px] h-[2px] opacity-20 bg-black" />
            <div className="text-[12px] mb-[44px] mt-[14px]">
              {notice.content}
            </div>
          </div>
          {/*PagenationButton*/}
          <Link
            className="text-[15px] font-[500] text-opacity-50 text-black rounded-full border border-black border-opacity-50 px-[32.5px] py-[10px]"
            to="/3-1"
          >
            목록
          </Link>
        </div>
      </div>
      <div className="mt-[55px]">
        <Footer />
      </div>
    </div>
  );
}

export default ActivityDetailPage;
