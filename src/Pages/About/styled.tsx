import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin: 100px 30px;
`;

export const Para = styled.p`
  box-sizing: border-box;
  width: 40%;
  text-align: right;
  color: #dbdada;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #191654,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #191654,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 10px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  line-height: 40px;
  font-size: 20px;
`;
