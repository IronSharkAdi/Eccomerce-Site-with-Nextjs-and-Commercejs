import React, { FunctionComponent } from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { NextPage } from "next";
import NextLink from "next/link";
import NextImage from 'next/image'
type Props = any;

const Navbar: NextPage<Props> = ({ items }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar
                position={"sticky"}
                className={classes.appBar}
                color={"inherit"}
            >
                <Toolbar>
                    <NextLink href="/">
                        <a>
                        <Typography
                        variant={"h6"}
                        className={classes.title}
                        color={"inherit"}
                    >
                        <NextImage
                            src={"/favicon.ico"}
                            width="10"
                            alt={"ionic byte logo"}
                            height={"25px"}
                            className={classes.image}
                        />
                        IonicByte
                    </Typography>
                        </a>
                    </NextLink>
                    
                    <div className={classes.grow} />
                    <div className={classes.menuButton}>
                        <NextLink href="/cart">
                            <a>
                                <IconButton
                                    aria-label={"Show Cart Item"}
                                    color={"inherit"}
                                >
                                    <Badge
                                        badgeContent={items}
                                        color={"secondary"}
                                    >
                                        <ShoppingCart
                                            className={classes.menuIcon}
                                        />
                                    </Badge>
                                </IconButton>
                            </a>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
