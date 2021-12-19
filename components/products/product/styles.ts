import {Theme} from "@mui/material/styles";
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height:"300px",
  },
    media: {
        height: 0,
        // objectFit: "cover",
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