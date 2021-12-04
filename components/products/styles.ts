import {createStyles, makeStyles, Theme} from "@material-ui/core";


const useStyles = makeStyles((theme:Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
}))

export default useStyles