import React from "react";
import styled from "styled-components";

const BackgroundIvory = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 15rem;
  background-color: #fff8ee;
`;

const Table = styled.div`
  position: absolute;
  top: 35rem;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 20rem;
  background-color: #ffe3bb;
`;

const Plate = styled.img`
  position: absolute;
  top: 25rem;
  left: 50%;
  width: 25rem;
  transform: translate(-50%, 0);
`;

export default function BackgroundIvoryLayout({ children }) {
  return (
    <BackgroundIvory>
      <Table />
      <Plate src="../../../../img/plate.png" alt="접시" />
      {children}
    </BackgroundIvory>
  );
}
