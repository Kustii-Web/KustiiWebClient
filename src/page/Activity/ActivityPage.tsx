import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import activityImage from "../../common/images/activity.png";
import { mainBuisness, activityOne } from "../../common/api/Activity";
import SideBar from "../../components/SideBar";

interface IntroData {
  _id: string;
  title: string;
  content: string;
  files: string[];
  views: number;
  created_at: string;
}

function ActivityPage() {
  const [news, setNews] = useState<IntroData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageButtons, setPageButtons] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false); // 검색 여부 상태 관리

  const navigate = useNavigate();

  useEffect(() => {
    if (isSearch) {
      fetchSearchData();
    } else {
      fetchData();
    }
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const res = await mainBuisness(currentPage);
      const {
        posts,
        total_pages,
      }: { posts: IntroData[]; total_pages: number } = res;
      setNews(posts);

      const buttons: number[] = [];
      for (let i = 0; i < total_pages; i++) {
        buttons.push(i);
      }
      setPageButtons(buttons);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);
      setPageButtons([]);
    }
  };

  // 검색 결과 데이터 호출
  const fetchSearchData = async () => {
    try {
      const res = await activityOne(currentPage, search);
      const {
        posts,
        total_pages,
      }: { posts: IntroData[]; total_pages: number } = res;
      setNews(posts);

      const buttons: number[] = [];
      for (let i = 0; i < total_pages; i++) {
        buttons.push(i + 1);
      }
      setPageButtons(buttons);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setNews([]);
      setPageButtons([]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTitleClick = (id: string) => {
    navigate(`/3-1/${id}`);
  };

  const handleSearch = () => {
    setIsSearch(true); // 검색 상태로 전환
    setCurrentPage(1); // 검색 시 첫 페이지로 초기화
    fetchSearchData();
  };

  const handleResetSearch = () => {
    setSearch(""); // 검색어 초기화
    setIsSearch(false); // 검색 상태 해제
    setCurrentPage(1); // 페이지 초기화
    fetchData(); // 기본 데이터 다시 불러오기
  };

  // Extract only the date portion (YYYY-MM-DD) from the created_at timestamp
  const formatDate = (dateString: string) => {
    return dateString.slice(0, 10); // Extract the first 10 characters (YYYY-MM-DD)
  };

  // Calculate the range of pages to display
  const pageSize = 5;
  const totalPages = pageButtons.length;
  const startPage = Math.floor(currentPage / pageSize) * pageSize;
  const endPage = Math.min(startPage + pageSize - 1, totalPages - 1);

  // Determine if we need to show prev/next buttons
  const showPrev = startPage > 0;
  const showNext = endPage < totalPages - 1;

  return (
    <div>
      <Header />
      <img src={activityImage} alt="Info" />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px] w-full">
          <div className="text-[32px] mt-[49px]">주요 산업 추진 현황</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          {/* Search Bar */}
          <div className="flex mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색어를 입력하세요"
              className="border p-2 w-[300px] mr-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded"
            >
              검색
            </button>
            <button
              onClick={handleResetSearch}
              className="bg-gray-500 text-white p-2 rounded ml-2"
            >
              초기화
            </button>
          </div>
          {/* Notice Table */}
          <table className="w-[827px] text-left mt-4 border-[1px] border-opacity-20 border-[#000000]">
            <thead>
              <tr className="bg-[#D9D9D9] text-[12px] font-[700] text-center text-black text-opacity-60 border-[1px] border-opacity-20 border-[#000000]">
                <th className="w-[10%] py-[25px] border-[1px] border-opacity-20 border-[#000000]">
                  번호
                </th>
                <th className="w-[50%] py-[25px] border-[1px] border-opacity-20 border-[#000000]">
                  제목
                </th>
                <th className="w-[15%] py-[25px] border-[1px] border-opacity-20 border-[#000000]">
                  작성일
                </th>
                <th className="w-[30%] py-[25px] border-[1px] border-opacity-20 border-[#000000]">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              {news.length > 0 &&
                news.map((item, index) => (
                  <tr
                    key={item._id}
                    className="text-[12px] font-[500] text-black opacity-80 text-center border-[1px] border-opacity-20 border-[#000000]"
                  >
                    <td className="p-2">{index + 1 + currentPage * 7}</td>
                    <td
                      className="p-2 text-[12px] font-[500] text-black opacity-80 text-center cursor-pointer border-[1px] border-opacity-20 border-[#000000]"
                      onClick={() => handleTitleClick(item._id)}
                    >
                      {item.title}
                    </td>
                    <td className="p-2 text-[12px] font-[500] text-black opacity-80 text-center border-[1px] border-opacity-20 border-[#000000]">
                      {formatDate(item.created_at)}
                    </td>
                    <td className="p-2 text-[12px] font-[500] text-black opacity-80 text-center">
                      {item.views}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center w-[827px] mt-[50px]">
            {showPrev && (
              <button
                className="mx-1 p-2"
                onClick={() => handlePageChange(startPage - pageSize)}
              >
                &lt;
              </button>
            )}
            {startPage > 0 && (
              <button className="mx-1 p-2" onClick={() => handlePageChange(0)}>
                1
              </button>
            )}
            {startPage > 1 && <span className="mx-1 p-2">...</span>}
            {pageButtons.slice(startPage, endPage + 1).map((page) => (
              <button
                key={page}
                className={`mx-1 p-2 ${
                  page === currentPage ? "font-bold underline" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page + 1}
              </button>
            ))}
            {showNext && <span className="mx-1 p-2">...</span>}
            {endPage < totalPages - 1 && (
              <button
                className="mx-1 p-2"
                onClick={() => handlePageChange(totalPages - 1)}
              >
                {totalPages}
              </button>
            )}
            {showNext && (
              <button
                className="mx-1 p-2"
                onClick={() => handlePageChange(startPage + pageSize)}
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default ActivityPage;
