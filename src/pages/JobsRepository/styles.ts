import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 45px 0px;
  max-width: 850px;

  h1 {
    color: #aaaa;
  }

  div {
    margin-top: 25px;

    strong {
      color: #537d8d;
      font-size: 19px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 20px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 10px 15px;
  border-radius: 8px;

  a {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100px;
        border-radius: 50%;
        border: 2px solid #aaaaaa;
      }

      span {
        color: #333333;
        margin-top: 10px;
      }

      p {
        color: #000411;
        font-weight: bold;
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
      }

      button {
        margin-top: 10px;
        background: #9297c4;
        color: #fff;
        font-weight: 400;
        border: 0;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 15px;
        font-family: 'Noto Sans JP';
        transition: background 0.2s;

        &:hover {
          background: #7159c1;
        }
      }
    }
  }
`;
