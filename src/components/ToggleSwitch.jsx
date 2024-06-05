import styled from "styled-components";

const StyledToggleSwitchBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 2rem;
  margin-top: 1rem;
  background-color: rgba(137, 137, 137, 0.5);
  border-radius: 2rem;
`;

const StyledToggleSwitchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 2rem;
  height: 2rem;
  background-color: #f87070;
  border: none;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export default function ToggleSwitch() {
  return (
    <StyledToggleSwitchBackground>
      <StyledToggleSwitchButton>
        <StyledImg src="../../img/cake.png" alt="케이크보기" />
      </StyledToggleSwitchButton>
      <StyledToggleSwitchButton>
        <StyledImg src="../../img/candle.png" alt="캔들보기" />
      </StyledToggleSwitchButton>
    </StyledToggleSwitchBackground>
  );
}
