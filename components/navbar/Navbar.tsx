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
                            src={"https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/295452206_147757694589714_2467430965110043130_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEyu9QQoGKkwrBL8rAI3tG63W6O_RQrFnDdbo79FCsWcBOB9pLHFNiE2J6xnppGopNozmX-_mKRPk-NPo2m2toW&_nc_ohc=NZs5ngdHGxEAX_UgPjs&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9opMVG4QBjhS39CflbTjctGMvdAeUbNuCTlZmmrtbwlQ&oe=62E6C7F5"}
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
