import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 30px;
`;

export const Links = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #747578;
  font-weight: 600;
  font-size: 20px;

  &&:visited {
    color: #747578;
  }
  &&:hover {
    color: #f44c4e;
  }
`;
