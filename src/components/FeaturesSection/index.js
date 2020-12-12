import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "カウンセリング予約フォーム",
                body: "面談・カウンセリング予約受付が簡単に始められる",
                image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg",
                link: "/features/1"
              },
              {
                title: "基幹システム",
                body: "会員管理、予約管理、スケジュール管理など",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg",
                link: "/features/2"
              },
              {
                title: "会員サイト",
                body: "会員ログイン、施術予約、お知らせ、会員情報確認",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg",
                link: "/features/3"
              },
              {
                title: "マーケティング",
                body:
                  "顧客が真に求める商品やサービスを作り、その情報を届け、顧客がその価値を効果的に得られるようにする",
                image:
                  "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
                link: "/features/4"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
