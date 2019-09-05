import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Nav, Navbar } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar expand="lg">
    <Navbar.Brand>
      <Link to="/" style={{ textDecoration: `none`, fontSize: `46px` }}>
        {siteTitle}
      </Link>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" style={{ padding: `1em` }}>
        <Nav.Link href="tags" style={{ fontSize: `20px` }}>Tags</Nav.Link>
        <Nav.Link href="team" style={{ fontSize: `20px` }}>Team</Nav.Link>
        <Nav.Link href="about" style={{ fontSize: `20px` }}>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
