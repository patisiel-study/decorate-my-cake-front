import React from "react";
import BackgroundIvory from "../../styles/Background";
import Header from "../../components/Header";
import { StyledBorderedText, StyledSpanText } from "../../styles/TextStyle";

export default function MyCakeMain() {
  return (
    <div>
      <BackgroundIvory />
      <Header />
      <StyledBorderedText>
        <StyledSpanText>꿈빛 파티시엘</StyledSpanText>님의 케이크
      </StyledBorderedText>
    </div>
  );
}
