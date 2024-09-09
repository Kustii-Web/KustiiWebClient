import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";

import InfoPage from "./page/Info/InfoPage";
import Vision_goal from "./page/Info/VisionGoal";
import Strategy from "./page/Info/Strategy";
import Business from "./page/Info/Business";
import Organization from "./page/Info/Organization";
import ArticleIncorper from "./page/Info/ArticleIncorper";
import Direction from "./page/Info/Direction";

import NoticePage from "./page/Notice/NoticePage";
import NoticeDetailPage from "./page/Notice/NoticeDetailPage ";
import Customer from "./page/Notice/Customer";
import CustomerDetailPage from "./page/Notice/CustomerDetailPage";
import Donation from "./page/Notice/Donation";
import DonationDetailPage from "./page/Notice/DonationDetailPage";
import PubliCor from "./page/Notice/PublicCorper";

import ActivityPage from "./page/Activity/ActivityPage";
import ActivityDetailPage from "./page/Activity/ActivityDetail";

import CooperPage from "./page/Cooper/CooperPage";
import AboutVideo from "./page/Cooper/AboutVideo";

import {
  ACT_PATH,
  COOPER_PATH,
  INFO_PATH,
  NOTICE_PATH,
} from "./common/constants/path.const";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={INFO_PATH.INFO} element={<InfoPage />} />
        <Route path={INFO_PATH.VISION} element={<Vision_goal />} />
        <Route path={INFO_PATH.STRATEGY} element={<Strategy />} />
        <Route path={INFO_PATH.BUSINESS} element={<Business />} />
        <Route path={INFO_PATH.ORGANI} element={<Organization />} />
        <Route
          path={INFO_PATH.ARTICLE_INCORPER}
          element={<ArticleIncorper />}
        />
        <Route path={INFO_PATH.DIRECTION} element={<Direction />} />

        <Route path={NOTICE_PATH.NOTICE} element={<NoticePage />} />
        <Route path={NOTICE_PATH.NOTICEDETAIL} element={<NoticeDetailPage />} />
        <Route path={NOTICE_PATH.CUSTOMER} element={<Customer />} />
        <Route
          path={NOTICE_PATH.CUSTOMERDETAIL}
          element={<CustomerDetailPage />}
        />
        <Route path={NOTICE_PATH.PUBLIC} element={<PubliCor />} />
        <Route path={NOTICE_PATH.DONATION} element={<Donation />} />
        <Route
          path={NOTICE_PATH.DONATIONDETAIL}
          element={<DonationDetailPage />}
        />

        <Route path={ACT_PATH.ACT} element={<ActivityPage />} />
        <Route path={ACT_PATH.ACTDETAIL} element={<ActivityDetailPage />} />

        <Route path={COOPER_PATH.COOPER} element={<CooperPage />} />
        <Route path={COOPER_PATH.VIDIEO} element={<AboutVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
