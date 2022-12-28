// import useStyles from "../styles/pagesStyle/checkout"
// import React, { useState, useEffect } from 'react';
// import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
// import commerce from "../lib/Commercejs/commerce";
// import AddressForm from '../components/AddressForm';
// import PaymentForm from '../components/PaymentForm';
// import Link from 'next/link';


// const steps = ['Shipping address', 'Payment details'];

// const Checkout = () => {

//   const [checkoutToken, setCheckoutToken] = useState(null);
//   const [activeStep, setActiveStep] = useState(0);
//   const [cart, setCart] = useState({});
//   const [order, setOrder] = useState({});
//   const [errorMessage, setErrorMessage] = useState('');
//   const [shippingData, setShippingData] = useState({});
//   const classes = useStyles();
//   // const history = useHistory();

//   const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const fetchCart = async () => {
//     setCart(await commerce.cart.retrieve());
//   };
//   const refreshCart = async () => {
//     const newCart = await commerce.cart.refresh();

//     setCart(newCart);
//   };

//   const onCaptureCheckout = async (checkoutTokenId, newOrder) => {
//     try {
//       const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

//       setOrder(incomingOrder);

//       refreshCart();
//     } catch (error:any) {
//       setErrorMessage(error.data.error.message);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   useEffect(() => {
//     if (cart.id) {
//       const generateToken = async () => {
//         try {
//           const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

//           setCheckoutToken(token);
//         } catch {
//           // if (activeStep !== steps.length) history.push('/');
//         }
//       };

//       generateToken();
//     }
//   }, [cart]);




//   const test = (data) => {
//     setShippingData(data);

//     nextStep();
//   };

//   let Confirmation = () => (order.customer ? (
//     <>
//       <div>
//         <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
//         <Divider className={classes.divider} />
//         <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
//       </div>
//       <br />
//       <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
//     </>
//   ) : (
//     <div className={classes.spinner}>
//       <CircularProgress />
//     </div>
//   ));

//   if (errorMessage) {
//     Confirmation = () => (
//       <>
//         <Typography variant="h5">Error: {errorMessage}</Typography>
//         <br />
//         <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
//       </>
//     );
//   }

//   const Form = () => (activeStep === 0
//     ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
//     : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />);

//   return (
//     <>
//       <CssBaseline />
//       <div className={classes.toolbar} />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Typography variant="h4" align="center">Checkout</Typography>
//           <Stepper activeStep={activeStep} className={classes.stepper}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
//         </Paper>
//       </main>
//     </>
//   );
// };

// export default Checkout;
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Countdown from "react-countdown-now";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

const useStyles = makeStyles(theme => ({
  twitterIcon: {
    color: "#1da1f2",
    marginRight: "8px",
    marginLeft: "8px"
  },
  facebookIcon: {
    color: "#3b5998",
    marginRight: "8px",
    marginLeft: "8px"
  },
  logo: {
    maxWidth: "200px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    width: "50%"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  comingSoon: {
    marginTop: "30px",
    lineHeight: "1.5"
  }
}));

export default function Album() {
  const classes = useStyles();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <strong>
        {days}:{hours}:{minutes}:{seconds}
      </strong>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <img src={"/favicon.ico"} alt="logo" className={classes.logo} />
            <h1 style={{textAlign:"center"}}>Adi</h1>
            <hr />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              className={classes.comingSoon}
              gutterBottom
            >
              Page under construction
              <br />
              {/* <Countdown date={"2020-02-01T01:02:03"} /> */}
              {/* Use above example for specific date */}
              {/* <Countdown date={Date.now() + 3000000000} renderer={renderer} /> */}
            </Typography>
            <Grid container spacing={0} alignItems="center" justify="center">
              <Link
                href="https://www.facebook.com/marzuk.rahman.adi2/"
                target="_blank"
              >
                <FacebookIcon
                  fontSize="large"
                  className={classes.facebookIcon}
                />
              </Link>

            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
