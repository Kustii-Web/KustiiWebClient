import Header from "../../components/Header";
import Footer from "../../components/Footer";
import infoImage from "../../common/images/info.png";
import SideBar from "../../components/SideBar";

function InfoPage() {
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
            <div>
              <div className="text-[12px] w-[840px] leading-[35px]">
                한·미 양국은 1949년 양국 수교, 1953년 상호방위조약 체결 이후
                지난 70여년 동안  안보동맹, 경제동맹 관계를 유지해오면서
                <br /> 정치, 경제, 안보 등 제반 영역에서 협력을 확대·발전시켜
                오고 있습니다.
                <br />
                이에 더하여 양국은 한·미 협력 70주년을 맞아 날로 중요해지고 있는
                과학기술분야의 협력을 확대하여
                <br /> 기술동맹(Technology Alliance)관계로 발전시켜 나가기로
                합의하였습니다(2023.4, 한미정상회담).
                <br /> 날로 심화되고 있는 글로벌 기술패권경쟁, 과학기술이 인류의
                생존을 좌우하는 Pax Technica의 시대의 도래 등을 감안할 때<br />{" "}
                한·미 양국간 과학기술협력을 기술동맹(Technology Alliance) 관계로
                확대·발전시켜 나가기로 한 합의는 대단히 시의적절하며 반드시
                이루어져야 할 것입니다.
                <br /> 양국이 합의한 한·미 과학기술동맹 관계의 성공적인 구현을
                위해서는 양국 정부의 다각적인 노력과 함께 민간부문에서의
                적극적인 참여와 협력이 있어야만 가능한 일입니다. <br />
                <br />
                (사)한미과학기술혁신진흥원(KUSTII. Korea-US Science, Technology
                and Innovation Institute)은 한·미 양국 간에 다각적인
                과학기술협력을 지원함으로써
                <br /> 한·미 과학기술동맹 관계 구축을 위한 민간부문에서의 조력자
                역할 담당을 주된 목적으로 하고 있습니다.
                <br /> 앞으로 KUSTII는 양국 간 인력·기술·정보의 교류, 학술활동
                지원, 공동연구, 산·학·연 협력 및 교류, 교육 훈련, 기술이전 및
                상대국 진출 지원,
                <br /> 개도국 지원사업 협력, Asia Hub 전략 지원, 미래 세대 육성
                및 시상 등 다양한 사업을 지원해 나갈 계획입니다.
                <br />
                KUSTII는 이들 사업의 성공적인 추진을 위하여
                재미한인과학기술자협회(KSEA)는 물론 한미과학기술협력센터(KUSCO)
                등 유관기관과의 협력을 강화해 나가겠습니다.
                <br /> 이런 노력을 통하여 앞으로 KUSTII는 한·미 양국 관계가
                안보동맹, 경제동맹을 넘어서 미래지향적인 과학기술동맹관계로
                발전하는데 일조해 나가겠습니다.
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

export default InfoPage;
