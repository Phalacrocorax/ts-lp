import React from "react";
import Navbar from "./../../components/Navbar";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
// import TeamBiosSection from "./../../components/TeamBiosSection";
import NewsletterSection from "./../../components/NewsletterSection";
import ContactSection from "./../../components/ContactSection";
import PricingSection from "./../../components/PricingSection";
// import StatsSection from "./../../components/StatsSection";
import Footer from "./../../components/Footer";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="white"
        size="medium"
        title="Make work easier."
        subtitle="無料のクラウド勤怠管理システムはいかがでしょうか？"
        buttonText="お問い合わせ"
        // image="https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
        image="./svg/undraw_dev_productivity_umsq.svg"
        buttonOnClick={() => {
          router.push("/#contact");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="機能"
        subtitle="必要なすべての機能を揃う"
      />
      {/* <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      /> */}
      <PricingSection color="white" size="medium" title="価格" subtitle="" />
      <NewsletterSection
        color="white"
        size="medium"
        title="ニュースレター"
        subtitle="システム知識と製品ニュースをゲットしましょう"
        buttonText="無料登録"
        inputPlaceholder="メールアドレス"
        subscribedMessage="You are now subscribed!"
      />

      <ContactSection
        color="white"
        size="medium"
        title="お問い合わせ"
        subtitle=""
        showNameField={true}
        buttonText="Send message"
      />
      {/* <StatsSection
        color="white"
        size="medium"
        items={[
          {
            title: "Tweets",
            stat: "3,456"
          },
          {
            title: "Following",
            stat: "123"
          },
          {
            title: "Followers",
            stat: "456k"
          },
          {
            title: "Likes",
            stat: "789"
          }
        ]}
      /> */}
      <Footer
        color="white"
        size="medium"
        // logo="https://uploads.divjoy.com/logo.svg"
        description="シンプルさと実用性を兼ねる勤怠管理システム"
        copywrite="© 2020 TimeShot Coperated."
      />
    </>
  );
}

export default HomePage;
