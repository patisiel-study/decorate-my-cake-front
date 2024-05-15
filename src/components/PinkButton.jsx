import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #FFDFDF;
    color:#3D3D3D;
    border:none;
    border-radius:2rem;
    width:100%;
    height:3rem;
    margin-top:1rem;
    font-family: 'SejonghospitalBold', sans-serif;
    &:hover {
    background-color: #FACCCC;
    }
   
`;

export default function LoginButton({ children , onClick}) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

