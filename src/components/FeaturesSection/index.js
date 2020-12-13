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
                title: "従業員管理",
                body:
                  "所属、住所、緊急連絡先、給与、賞罰等の全ての情報を管理できます。",
                image: "/svg/Hire.svg",
                link: "/features/1"
              },
              {
                title: "有休管理簿",
                body: "適切な有給休暇取得が行われているかを管理できます。",
                image: "svg/a_day_off.svg",
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
                body: "レポートで社員の勤務情報を把握できます。",
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
