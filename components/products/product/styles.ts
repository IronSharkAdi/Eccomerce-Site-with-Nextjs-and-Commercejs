import {createStyles, makeStyles, Theme} from "@material-ui/core";


const useStyles = makeStyles((theme:Theme) => createStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}))

export default useStyles