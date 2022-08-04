import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
  margin: auto;
  background: #eecda3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ef629f,
    #eecda3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ef629f,
    #eecda3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 50px 100px;
  border-radius: 10px;
`;

export const Input = styled.input`
  opacity: 0.5;
  box-sizing: border-box;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  text-align: right;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
export const Textarea = styled.textarea`
  opacity: 0.5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 10px;
  border: none;
  text-align: right;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
const disabledStyles = css`
  background-color: #c4c4c4;
  opacity: 0.3;
  cursor: not-allowed;
`;
const enabledStyles = css`
  background-color: #27276d;
  color: #dbdada;

  cursor: pointer;

  &&:hover {
    background-color: #191955;
  }
`;
export const Button = styled.button`
  padding: 10px 0;
  font-size: 28px;
  border: none;
  border-radius: 5px;
  ${(props) => (props.disabled ? disabledStyles : enabledStyles)}
`;

export const Message = styled.div`
  display: none;
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
  color: #00ad3a;
  font-weight: bold;
`;
