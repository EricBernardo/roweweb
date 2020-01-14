import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: #2d3a4b;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Content = styled.div`
  margin-top: 150px;
  width: 100%;
  max-width: 315px;
  text-align: center;

  h3 {
    color: #eee;
    font-weight: 700;
    font-size: 26px;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid hsla(0,0%,100%,.1);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #fff;
      }
    }

    span {
      color: #F64C75;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')}
      }
    }

  }
`;
