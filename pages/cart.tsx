import { Button, Container, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStyles from "../styles/pagesStyle/cart";
import commerce from "../lib/Commercejs/commerce";
import Loader from "react-loader-spinner";
import Navbar from "../components/navbar/Navbar";
import CartItem from "../components/Cart/CartItem";
import NextLink from 'next/link'


const cart: NextPage = () => {
    type CART = any;
    const [cart, setCart] = useState<CART>();
    const [available, setAvailable] = useState(false);
    const [empty, setEmpty] = useState(false);
    const classes = useStyles();

    const router = useRouter();

    const fetchCart = async () => {
        const itemsCart = await commerce.cart.retrieve();
        return itemsCart;
    };

    const handleUpdateCartQty = async (id, quantity) => {
        const response = await commerce.cart.update(id, { quantity });
        setCart(response.cart);
        if (response.cart.subtotal.raw === 0) {
            setAvailable(false);
        }
    };
    const handleRemoveFromCart = async (id) => {
        const response = await commerce.cart.remove(id);
        setCart(response.cart);
        console.log(response.cart);
        if (response.cart.subtotal.raw === 0) {
            setAvailable(false);
        }
    };
    const handleEmptyCart = async () => {
        const response = commerce.cart.empty();
        setAvailable(false);
        setCart(response.cart);
    };

    useEffect(() => {
        if (!router.isReady) return;
        const cartSetting = async () => {
            const itemsCart = await fetchCart();
            await setCart(itemsCart);
            console.log(cart);
            console.log(itemsCart);
            setEmpty(true);
            if (itemsCart.total_items > 0) {
                setAvailable(true);
            }
        };
        cartSetting();
    }, [router.isReady]);

    const FilledCart = () => (
        <>
            {/* <Typography variant={"subtitle1"} >You have some items in your shopping cart</Typography> */}
            <Grid container spacing={4}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            item={item}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        onClick={handleEmptyCart}
                        className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                    >
                        Empty Cart
                    </Button>
                    <NextLink href="/checkout">
                        <a>
                            <Button
                                className={classes.emptyButton}
                                size="large"
                                type="button"
                                variant="contained"
                                color="primary"
                            >
                                Checkout
                            </Button>
                        </a>
                    </NextLink>
                </div>
            </div>
        </>
    );

    const EmptyCart = () => (
        <>
            <Typography variant={"subtitle1"}>
                You don't have any item in your shopping cart
            </Typography>
        </>
    );
    const Cart = () => <>{available ? <FilledCart /> : <EmptyCart />}</>;

    return (
        <>
            <Navbar />
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3" gutterBottom>
                    Your Shopping Cart
                </Typography>
                {empty ? (
                    <Cart />
                ) : (
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={50}
                        width={50}
                    />
                )}
            </Container>
        </>
    );
};

export default cart;
