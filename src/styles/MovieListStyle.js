import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0 auto;
  display: flex;
  align-text: center;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Movie = styled.div`
  width: 320px;
  height: 450px;
  border-radius: 20px;
  padding: 25px 15px 15px 15px;
  margin: 10px;
  background-color: rgb(255, 255, 255, 0.75);
  box-shadow: 14px 14px 25px #000;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    margin-block-start: auto;

    button {
      width: 220px;
      height: 40px;
      border: none;
      border-radius: 10px;
      box-shadow: 0px 0px 5px #000;
      font-size: 20px;
      cursor: pointer;
      font-weight: bold;
      outline: 0;
    }
  }
`;

export const BackgroundPoster = styled.div`
  width: 175px;
  height: 265px;
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.src === "N/A"
      ? `url('https://cdn2.iconfinder.com/data/icons/basic-ui-collection/100/No_Video-512.png')`
      : `url('${props.src}')`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const NoMovie = styled.div`
  width: 320px;
  height: 450px;
  margin-top: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  align-items: flex-end;
  justify-content: center;
  background-blend-mode: luminosity;
  background-color: rgb(255, 255, 255, 0.75);
  box-shadow: 15px 15px 25px black;
  background-image: url("https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  p {
    font-size: 25px;
    font-weight: bold;
    color: red;
  }
`;
