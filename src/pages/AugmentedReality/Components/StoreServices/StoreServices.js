import React from "react";
/* Custom components. */
import Service from "./Servivce";
/* Material-ui. */
import Grid from "@material-ui/core/Grid";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PaymentIcon from "@material-ui/icons/Payment";
import CallIcon from "@material-ui/icons/Call";
import EventIcon from "@material-ui/icons/Event";
/* Styled-components. */
import { useTheme } from "styled-components";

const StoreDescription = () => {
  const currentTheme = useTheme();
  const styles = {
    grid: {
      container: {
        background: currentTheme.card.background_color,
        marginTop: 60,
        marginBottom: 60,
        padding: 15,
        paddinBottom: 0,
        textAlign: "center",
        boxShadow:
          "0 2px 2px 0 rgb(0 0 0 / 2%), 0 3px 1px -2px rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 8%)",
      },
    },
    h4: {
      marginBottom: 40,
    },
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={styles.grid.container}
    >
      <Grid item xs={12}>
        <h3 style={styles.h4}>Services</h3>
      </Grid>
      <Service
        description="WE TAKE YOUR FURNITURE AND INSTALL THEM FOR YOU"
        icon={<LocalShippingIcon fontSize="large" />}
      />
      <Service
        description="FLEXIBLE FINANCING SCHEMES"
        icon={<PaymentIcon fontSize="large" />}
      />
      <Service
        description="SPECIALIZED AFTER-SALES SERVICE
"
        icon={<CallIcon fontSize="large" />}
      />
      <Service
        description="SCHEDULE YOUR APPOINTMENT IN BRANCH
"
        icon={<EventIcon fontSize="large" />}
      />
    </Grid>
  );
};

export default StoreDescription;
