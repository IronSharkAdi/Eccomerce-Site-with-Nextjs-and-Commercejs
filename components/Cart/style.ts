import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

 const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 260,
        },
        cardContent: {
            display: "flex",
            justifyContent: "space-between",
        },
        cartActions: {
            justifyContent: "space-between",
        },
        buttons: {
            display: "flex",
            alignItems: "center",
        },
    })
);

export default useStyles