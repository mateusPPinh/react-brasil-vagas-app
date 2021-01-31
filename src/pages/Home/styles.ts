import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 450px;

  h1 {
    color: #333;
  }

  p {
    margin-top: 15px;
    line-height: 24px;
  }

  a {
    background: #2d9690;
    width: 100%;
    height: 45px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 7px;
    transition: background 0.2s;

    &:hover {
      background: #1c5d99;
    }
  }
`;
