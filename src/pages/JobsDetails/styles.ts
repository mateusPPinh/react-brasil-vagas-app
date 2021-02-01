import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0px;
`;

export const Content = styled.div`
  max-width: 550px;

  h1 {
    color: #313131;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    background: #ffff;
    border-radius: 8px;
    padding: 10px 15px 20px;

    span {
      color: #333;
      margin-top: 15px;
    }

    h2 {
      margin-top: 15px;
      color: #333;
    }

    hr {
      margin-top: 15px;
      color: #aaaa;
    }

    strong {
      margin-top: 15px;
      color: #333;
    }

    .description__p {
      margin-top: 15px;
      color: #333;
      line-height: 23px;
      font-size: 14px;
    }

    a {
      background: #7159c1;
      padding: 15px 10px;
      border-radius: 8px;
      margin-top: 15px;
      color: #ffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: #5d2e8c;
      }
    }
  }
`;
