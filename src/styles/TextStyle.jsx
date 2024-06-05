import styled from "styled-components";

const BorderedText = styled.p`
  display: inline-block;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || "2rem"};
  font-weight: bolder;
  color: ${({ fontColor }) => fontColor || "#3d3d3d"};

  text-shadow: calc(3px * 1) 0 0 white,
    calc(3px * 0.9239) calc(3px * 0.3827) 0 white,
    calc(3px * 0.7071) calc(3px * 0.7071) 0 white,
    calc(3px * 0.3827) calc(3px * 0.9239) 0 white, 0 calc(3px * 1) 0 white,
    calc(3px * -0.3827) calc(3px * 0.9239) 0 white,
    calc(3px * -0.7071) calc(3px * 0.7071) 0 white,
    calc(3px * -0.9239) calc(3px * 0.3827) 0 white, calc(3px * -1) 0 0 white,
    calc(3px * -0.9239) calc(3px * -0.3827) 0 white,
    calc(3px * -0.7071) calc(3px * -0.7071) 0 white,
    calc(3px * -0.3827) calc(3px * -0.9239) 0 white, 0 calc(3px * -1) 0 white,
    calc(3px * 0.3827) calc(3px * -0.9239) 0 white,
    calc(3px * 0.7071) calc(3px * -0.7071) 0 white,
    calc(3px * 0.9239) calc(3px * -0.3827) 0 white;
`;

const Text = styled.p`
  display: inline-block;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ fontColor }) => fontColor || "#3d3d3d"};
`;

const SpanText = styled.span`
  color: #ff3b3b;
`;

const StyledBorderedText = ({ children, fontSize, fontColor }) => {
  return (
    <BorderedText fontSize={fontSize} fontColor={fontColor}>
      {children}
    </BorderedText>
  );
};

const StyledText = ({ children, fontSize, fontColor }) => {
  return (
    <Text fontSize={fontSize} fontColor={fontColor}>
      {children}
    </Text>
  );
};

const StyledSpanText = ({ children }) => {
  return <SpanText>{children}</SpanText>;
};

export { StyledBorderedText, StyledText, StyledSpanText };
