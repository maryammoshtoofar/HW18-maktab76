import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  margin: auto;
  background: #43c6ac;
  background: -webkit-linear-gradient(to bottom, #191654, #43c6ac);
  background: linear-gradient(to bottom, #191654, #43c6ac);
  padding: 50px 150px;
  border-radius: 10px;
`;

export const Input = styled.input`
  opacity: 0.5;
  box-sizing: border-box;
  padding: 10px 5px;
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
  padding: 10px 5px;
  border: none;
  text-align: right;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
