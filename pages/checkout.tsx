import { Paper, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { NextPage } from "next"
import { useState } from "react"
import UseStyles from "../styles/pagesStyle/Checkout"


const Checkout:NextPage =() => {
    const classes = UseStyles()
    // const [activeSteps, setActiveSteps] = useState(0)
    const steps = ["Shipping Address", "Payment details"]
    const Form = () =>(
        <>
        {/* {activeSteps === 0 ? <AddressForm/> : <PaymentForm/>} */}
        </>
    )
    const PaymentForm = () =>(
        <>

        </>
    )
    const AddressForm = () => (
        <>
        
        </>
    )
    const Confirmation = () =>(
        <>
        
        </>
    )
    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                        <Typography variant={"h4"} align="center">Checkout</Typography>
                        <Stepper activeStep={0} className={classes.stepper}>
                            {steps.map(step =>(
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {/* {activeSteps === steps.length ? <Confirmation/> : <Form/>} */}
                </Paper>

            </main>
        </>
    )
}

export default Checkout
