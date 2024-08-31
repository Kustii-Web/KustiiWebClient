import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";

function Business() {
  const sections = [
    {
      topic: "1",
      sections: [
        {
          title: "한미 과학기술동맹 포럼 & KUSTII 열린포럼 개설·운영",
          content: `한미 과학기술협력의 필요성과 중요성, 관련정책 및 제도, 상대국 진출 성공 및 실패사례,\n관련 정보 및 추진전략 제시 등을 통한 양국간 협력 증진`,
        },
      ],
    },
    {
      topic: "2",
      sections: [
        {
          title: "한·미 양국의 기관간 협력 및 상대국 진출 지원",
          content: ` 한미 양국의 산·학·연 기관 간 협력 알선 지원 및 상대국 진출 지원 /\n상호 방문, MoU 체결, 인력 및 정보교류 지원, 상대국 진출 등`,
        },
      ],
    },
    {
      topic: "3",
      sections: [
        {
          title: "기술·인력·정보 알선 및 기술이전·마케팅 등에 대한 알선 지원",
          content:
            "특정 기술·인력·정보, 기술이전, 마케팅, 구직 등의 수요에 부응하여 양국 협력 Network을 활용한 알선 지원 ",
        },
      ],
    },
    {
      topic: "4",
      sections: [
        {
          title:
            "한한미 과학기술협력 확대전략 연구: 소논문 또는 Essay(A4용지 10쪽 내외) 등국",
          content:
            "한미 과학기술동맹 구현에 대한 공감대 확산 및 협력증진을 위한 idea 창출",
        },
      ],
    },
    {
      topic: "5",
      sections: [
        {
          title: "양국간 협력증진을 위한 교육훈련 추진",
          content: `상대국 진출, 기관간 협력, 기술이전 등에 실질적으로 도움을 줄 수 있는\n이론과 실전을 겸비한 내실있는 교육훈련과정 운영`,
        },
      ],
    },
    {
      topic: "6",
      sections: [
        {
          title:
            "한미 과학기술협력 관련정보 제공  (가칭. 한미 과학기술혁신동향 BRIEF)",
          content:
            "양국간 과학기술협력 관련 정책 및 제도, 공동연구, 인력교류, 기관간 협력 등 다양한 정보 제공을 통한 협력 지원",
        },
      ],
    },
    {
      topic: "7",
      sections: [
        {
          title: "재미한인과학기술자협회(KSEA) 주요활동 지원",
          content: `UKC, STEP-UP, SEED, NMSC 등 재미과협 주관하는 각종 사업의 성공적인 추진을 위하여\n한국에서 필요한 사항을 직·간접적으로 지원`,
        },
      ],
    },
    {
      topic: "8",
      sections: [
        {
          title:
            " 한·미 양국 간 과학기술혁신을 촉진하기 위한 미국 내 혁신센터 설립 지원",
          content: `재미한인과학기술자협회(KSEA) 주관으로 검토 중인 ‘한·미 양국간 과학기술협력 증진을 위해\n미국 내 혁신센터 설립’에 필요한 제반 업무를 지원`,
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
          <div className="text-[32px] mt-[49px]">세부 사업</div>
          <hr className="w-[827px] h-[4px] bg-black mb-[52px]" />
          <div>
            {sections.map((topicSection) => (
              <div>
                <div className="flex">
                  <div className="flex mt-[10px] items-center justify-center w-8 h-8 rounded-full bg-[#CADEFF] mr-[16px]">
                    {topicSection.topic}
                  </div>
                  <div>
                    {topicSection.sections.map((section) => (
                      <div className="mb-[17px]">
                        <div className="text-[12px] pb-1 font-[700] text-[#18448A] mb-[10px]">
                          {section.title}
                        </div>
                        <div className="text-[12px] whitespace-pre-line mb-[45px]">
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
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default Business;
