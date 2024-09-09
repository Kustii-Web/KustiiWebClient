import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";
import { sections } from "../../common/utils/sections";

function ArticleIncorper() {
  return (
    <div className="overflow-y-auto">
      <Header />

      <img src={infoImage} />
      <div className="flex">
        <SideBar />
        <div className="ml-[152px]">
          <div className="text-[32px] mt-[49px]">정관</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[29px]" />
          <div>
            <div>
              <div>
                {sections.map((topicSection) => (
                  <div>
                    <div className="ml-[8px] w-[827px]">
                      <div className="text-[20px] font-[700] leading-[35px] opacity-80 mb-[20px]">
                        {topicSection.topic}
                      </div>
                      <div>
                        {topicSection.sections.map((section) => (
                          <div className="mb-[30px] ml-[5px]">
                            <div className="text-[15px] font-[400] opacity-80 flex mb-[25px]">
                              <div className="w-[4px] h-[25px] bg-[#18448A] mr-[5px]" />
                              {section.title}
                            </div>
                            <div className="text-[12px] leading-[20px] opacity-80 whitespace-pre-line border p-[10px] border-black border-opacity-20">
                              {section.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

export default ArticleIncorper;
