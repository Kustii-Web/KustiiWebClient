import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";
import strategy from "../../common/icons/strategy.svg";

function Strategy() {
  const sections = [
    {
      topic: `양국의 과학기술혁신역량 강화 \n및\n 교류·협력 증진에 중점`,
      sections: [
        {
          title: "첨단기술 역량강화",
          content: `교육훈련·연수, 공동연구, 장학사업·시상 지원 등`,
        },
        {
          title: "교류·협력(Bridging)",
          content: `기관(기업)간 협력, 기술·인력·정보교류, 현지진출 지원\n(스타트업, Tech-mart, 마케팅, 현지 투자 자문 등)`,
        },
        {
          title: "현지 협력센터의 설립·운영 지원",
          content: "",
        },
      ],
    },
    {
      topic: `Top-down 전략과\n Bottom-up 전략의\n 병행 추진`,
      sections: [
        {
          title: "정기사업(Top-down)",
          content: `연간 사업계획을 바탕으로 한 정례적인 사업 추진`,
        },
        {
          title: "수시사업(Bottom-up)",
          content: `양국의 수시 협력수요에 따른 사업 추진`,
        },
      ],
    },
    {
      topic: `Korea-USA, USA-Korea\n 쌍방 협력 추진`,
      sections: [
        {
          title: "한국 과학기술계의 미국 진출·협력 지원",
          content: "",
        },
        {
          title: "미국 과학기술계의 한국 진출·협력 지원",
          content: "",
        },
      ],
    },
    {
      topic: `KUSTII와 KSEA를 중심으로\n 민간부문에서 협력`,
      sections: [
        {
          title: "한국",
          content: `KUSTII + 출연(연)·대학·기업(연), 학회·협단체, 정부부처, 지자체 등`,
        },
        {
          title: "미국",
          content: `KSEA + KUSCO, 대학, 기업, 공공연, 학회·협회·단체, 연방 및 주정부 등`,
        },
      ],
    },
  ];

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
            <div>
              <div>
                {sections.map((topicSection) => (
                  <div>
                    <div className="flex">
                      <div className="flex justify-center items-center mr-[56px] w-[239px] whitespace-pre-line text-center">
                        {topicSection.topic}
                      </div>
                      <div>
                        {topicSection.sections.map((section) => (
                          <div className="mb-[17px]">
                            <div className="text-[15px] pb-1 font-[500] text-[#18448A]">
                              {section.title}
                            </div>
                            <div className="text-[12px] whitespace-pre-line">
                              {section.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className="w-[676px] h-[1px] bg-black mb-[20px]" />
                  </div>
                ))}
              </div>
            </div>
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
