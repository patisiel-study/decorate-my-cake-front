import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: #f87070;
  color: white;
  border: none;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.2rem 0 gray;
  font-family: "SejonghospitalBold", sans-serif;
  &:hover {
    background-color: #ffdfdf;
    cursor: pointer;
  }
  &:active {
    background-color: #facccc;
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
`;

const RedButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Icon = ({ src }) => {
  return <Img src={src} />;
};

export { RedButton, Icon };
