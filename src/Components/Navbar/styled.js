import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export const StyledLink = styled(NavLink).attrs((props) => ({
  className: props.className,
}))`
  &.active {
    color: #f44c4e;
    cursor: default;
  }

  &.inactive {
    color: #747578;
  }
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;

  &&:hover {
    color: #f44c4e;
  }
`;
