import styled from "styled-components";

export const BackgroundNavbar = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

export const BackgroundInput = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.div`
  height: 55px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 15px 15px 25px #000;

  input {
    border: none;
    width: 350px;
    height: 50px;
    background-color: transparent;
    font-size: 22px;
    padding-left: 10px;
    outline: 0;
  }

  button {
    border: none;
    border-left: 1px solid #ccc;
    color: black;
    background-color: transparent;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    outline: 0;
  }
`;
