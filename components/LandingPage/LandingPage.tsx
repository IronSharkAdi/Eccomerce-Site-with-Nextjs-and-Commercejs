import { Button, Typography } from "@mui/material";
import { NextPage } from "next"
import useStyles from "./styles";


type Props = any;

const LandingPage: NextPage<Props> = () => {
    const classes = useStyles()

    return(
        <>
            <main className={classes.root}>
                <div className="glassy">
                <Typography variant="h3" align="center" className={classes.headingText}>Your gaming room essentials</Typography>
                <a href="#shop"> <Button  variant="contained" sx={{marginTop:"20px"}} >Shop now</Button></a>
                </div>

            </main>
        </>
    )

}

export default LandingPage;