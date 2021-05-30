import React from "react";
/* Material-ui. */
import Grid from "@material-ui/core/Grid";
/* Custom components. */
import Navbar from "../../components/Navbar/";
import StoreDescription from "./Components/StoreDescription/";
import StoreServices from "./Components/StoreServices/";
import Catalogue from "./Components/Catalogue/";
/* Custom hooks. */
import { useFile } from "../../hooks/useFile";

const styles = {
  grid: {
    item: {
      h1: {
        textAlign: "center",
      },
      textAlign: "left",
    },
  },
};

const AugmentedReality = ({ theme, themeToggler }) => {
  const [data] = useFile("catalogue.json");
  const avatarURL =
    "https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?k=6&m=968086564&s=612x612&w=0&h=akcSZ4mvydFK9xnXi45PSo4mXizwMGxb7j3O_A1qTEU=";
  return (
    <div>
      <Navbar theme={theme} themeToggler={themeToggler} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8} style={styles.grid.item}>
          <StoreDescription avatarURL={avatarURL} />
          <StoreServices />
          <Catalogue furniture={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AugmentedReality;
