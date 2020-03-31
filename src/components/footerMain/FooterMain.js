import React from "react";
import { Navbar } from "react-bootstrap";
import styles from "./FooterMain.module.css";
const footerMain = () => {
  return (
    <Navbar className={styles.FooterMain} bg="dark" variant="dark" fixed="bottom">
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>Made with &hearts; | &copy; 2020</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default footerMain;
