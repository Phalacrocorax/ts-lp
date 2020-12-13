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
                title: "勤務時間管理",
                body:
                  "勤務時間の設定と管理。出勤・退勤打刻時間帯、フレックスタイム制などユースケースに合わせて設定できます。",
                image: "/svg/undraw_settings_ii2j.svg"
                // link: "/features/3"
              },
              {
                title: "日報・月報",
                body: "レポートで社員の勤務情報把握できます。",
                image: "/svg/undraw_personal_goals_edgd.svg"
                // link: "/features/4"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
