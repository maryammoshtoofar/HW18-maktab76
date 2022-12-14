import { Nav, Links, Logo, StyledLink } from "./styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <h2>Maktab Sharif</h2>
        <Links>
          <StyledLink
            className={(isActive: any) =>
              "selected" + (!isActive ? " unselected" : "")
            }
            to="/"
          >
            Home
          </StyledLink>
          <StyledLink
            className={(isActive: any) => (isActive ? "active" : "inactive")}
            to="/about"
          >
            About Us
          </StyledLink>
          <StyledLink
            className={(isActive: any) => (isActive ? "active" : "inactive")}
            to="/contactus"
          >
            Contact Us
          </StyledLink>
          <StyledLink
            className={(isActive: any) => (isActive ? "active" : "inactive")}
            to="/bootcamps"
          >
            Bootcamps
          </StyledLink>
          <StyledLink
            className={(isActive: any) =>
              isActive ? "selected" : "unselected"
            }
            to="/contact"
          >
            Contact
          </StyledLink>
        </Links>
        <Logo src="logo.jpg" alt="logo" />
      </Nav>
    </>
  );
};

export default Navbar;
