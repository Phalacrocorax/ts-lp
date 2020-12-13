import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Pricing from "./../Pricing";
import "./styles.scss";

function PricingSection(props) {
  return (
    <Section color={props.color} size={props.size} id="pricing">
      <div className="PricingSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Pricing
          buttonText="Choose"
          onChoosePlan={(planId) => {
            // Add your own payments logic here
            // alert(`You chose the plan "${planId}"`);
            alert(
              `製品は近日公開予定です！興味ある方はぜひ、お問い合わせ（contact@timeshot.ml）またはニュースレターを登録してください！`
            );
          }}
          items={[
            {
              id: "free",
              timespan: "Basic Plan",
              price: "0",
              description: "ユーザ上限５０人！基本機能利用可能です。"
            },
            {
              id: "extra",
              timespan: "Extra Plan",
              price: "3000",
              description:
                "ユーザ上限なし！~2021年2月4日まで新規登録してくれるとExtraプラン一年無料となります！Extraプランは今後追加していく機能全部無料で使えます！"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default PricingSection;
