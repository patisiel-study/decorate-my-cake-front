import React from "react";
import StyledBackgroundIvory from "../../styles/background";
import Header from "../../components/Header";
import { StyledBorderedText, StyledSpanText } from "../../styles/TextStyle";

export default function MyCakeMain() {
  return (
    <div>
      <StyledBackgroundIvory />
      <Header />
      <StyledBorderedText>
        <StyledSpanText>꿈빛 파티시엘</StyledSpanText>님의 케이크
      </StyledBorderedText>
    </div>
  );
}
