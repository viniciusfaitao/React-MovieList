import styled from "styled-components";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const Poster = styled.div`
  height: 450px;
  background-image: ${(props) =>
    props.src === "N/A"
      ? `url('https://cdn2.iconfinder.com/data/icons/basic-ui-collection/100/No_Video-512.png')`
      : `url('${props.src}')`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Movie = styled.div`
  background-color: rgb(255, 255, 255, 0.75);
  box-shadow: 14px 14px 25px black;
  border-radius: 20px;
  padding-top: 25px;
  min-width: 500px;

  a {
    height: 35px;
    margin-left: 30px;

    button {
      height: 45px;
      font-size: 45px;
      background-color: transparent;
      border: none;
      outline: 0;
      cursor: pointer;
    }
  }
`;

export const Description = styled.div`
  margin: 30px;
  font-family: sans-serif;
`;
