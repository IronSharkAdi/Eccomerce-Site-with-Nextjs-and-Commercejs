import { Theme} from "@mui/material/styles";
import {createStyles, makeStyles } from "@mui/styles";

const image:string = "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{
        backgroundImage:`url('${image}')`,
        height: "100vh",
        width:"100vw",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        marginTop:"-50px",
        display: "flex",
        justifyContent: "center",
        marginBottom:"100px",
        alignItems: "center",
    },
    headingText:{
        marginTop:"20px",
        fontWeight:"medium"
    }
}))

export default useStyles