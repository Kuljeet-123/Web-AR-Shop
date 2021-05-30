import React from "react";
/* Custom components. */
import Toggle from "../../themes/Toggler";
/* Material-ui components. */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
/* Styled-components. */
import { useTheme } from "styled-components";
/* Icons. */
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Navbar = ({ theme, themeToggler, children }) => {
  /* Style hook. */
  const currentTheme = useTheme();
  const styles = {
    appbar: {
      background: currentTheme.navbar.background_color,
      boxShadow: "none",
    },
    a: {
      margin: "0 20px 0 10px",
    },
    div: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };

  return (
    <AppBar position="sticky" style={styles.appbar}>
      <div style={styles.div}>
        <Toolbar>
          {children}
          <a
            style={styles.a}
            href="https://github.com/Kuljeet-123"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            style={styles.a}
            href="https://www.linkedin.com/in/kuljeet-singh-21836517a/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
