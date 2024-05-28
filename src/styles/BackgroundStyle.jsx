import React from "react";
import styled from "styled-components";

const BackgroundIvory = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url("../../../../img/wallpaper.jpg");
  background-size: 15%;
`;

export default function StyledBackgroundIvory() {
  return <BackgroundIvory />;
}
