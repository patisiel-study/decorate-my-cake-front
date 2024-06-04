import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ffdfdf;
  color: #3d3d3d;
  border: none;
  border-radius: 2rem;
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  font-family: "SejonghospitalBold", sans-serif;
  &:hover {
    background-color: #facccc;
  }
`;

export default function LoginButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
