import { Nav, Links, Logo, StyledLink } from "./styled";

function Navbar() {
  return (
    <>
      <Nav>
        <h2>Maktab Sharif</h2>
        <Links>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/contactus">Contact Us</StyledLink>
          <StyledLink to="/bootcamps">Bootcamps</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Links>
        <Logo src="./logo.jpg" alt="logo" />
      </Nav>
    </>
  );
}

export default Navbar;
