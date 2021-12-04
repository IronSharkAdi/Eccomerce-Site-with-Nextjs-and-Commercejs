import React, { FunctionComponent } from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import useStyles from "./styles";
import {ShoppingCart} from "@material-ui/icons";

interface OwnProps {}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {
    const classes = useStyles()
  return (
      <>
      <AppBar position={"fixed"} className={classes.appBar} color={"inherit"}>
            <Toolbar>
                <Typography variant={"h6"} className={classes.title} color={"inherit"}>
                    <img src={"https://i.imgur.com/P9ZFVnm.png"} alt={"ionic byte logo"} height={"25px"} className={classes.image} />
                    IonicByte
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.menuButton}>
                    <IconButton aria-label={"Show Cart Item"} color={"inherit"} >
                        <Badge badgeContent={2} color={"secondary"} >
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
      </AppBar>
      </>
  );
};

export default Navbar;
