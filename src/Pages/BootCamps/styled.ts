import styled from "styled-components";
import { Link } from "react-router-dom";
export const Card = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2b2b2b;
  text-align: center;
  width: 300px;
  height: 400px;
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

  padding: 0 50px;
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  padding: 5px 20px;
  border-radius: 5px;
  background-color: #ffffff;
  text-decoration: none;
`;

export const Para = styled.p`
  box-sizing: border-box;
`;
