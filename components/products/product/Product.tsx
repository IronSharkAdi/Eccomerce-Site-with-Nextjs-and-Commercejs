import type { NextPage } from 'next'
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./styles";


type Props = {
    product: {
        name: string;
        description: string;
        price: number;
        id:number;
        imgSrc: string;
    },
}


const Product: NextPage<Props> = ({product}) => {
    const classes = useStyles()


    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.imgSrc} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                    <Typography variant={"h5"} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant={"h5"}>
                        {product.price}
                    </Typography>
                    </div>
                    <Typography variant={"body1"} color={"textSecondary"}>{product.description}</Typography>

                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label={"Add to Cart"}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default Product;
