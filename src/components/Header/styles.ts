import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
    }

    a {
      display: flex;
      align-items: center;
      color: #333;
      font-weight: bold;

      svg {
        margin-right: 8px;
      }
    }
  }
`;
