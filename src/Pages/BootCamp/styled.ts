import styled from "styled-components";

export const Wrapper = styled.div`
  color: #2b2b2b;
  margin: auto;
  border-radius: 5px;
  width: 80%;
  background: #eecda3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ef629f,
    #eecda3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ef629f,
    #eecda3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 100px 200px;
  text-align: center;
  gap: 30px;
`;
