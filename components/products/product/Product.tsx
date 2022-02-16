import type { NextPage } from 'next'
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {AddShoppingCart} from "@mui/icons-material";
import useStyles from "./styles";

type Props = any

const Product: NextPage<Props> = ({product, handleAddCart}) => {
    const classes = useStyles()


    return (
        <>
            {product ? (<>
                <Card className={classes.root}>
                    <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
                    {/* <NextImage width={350} height={300} src={product.image.url} alt={product.name}  className={classes.media}  /> */}
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography variant={"body1"} gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant={"body1"}>
                                {product.price && product.price.formatted_with_symbol}
                            </Typography>
                        </div>
                        <Typography dangerouslySetInnerHTML={{__html : product.description}} variant={"body2"} color={"textSecondary"}/>
                    </CardContent>
                    <CardActions onClick={() => {handleAddCart(product.id, 1 )}} disableSpacing className={classes.cardActions}>
                        <IconButton aria-label={"Add to Cart"}>
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>
                </Card>
            </>) : (<> <h1>Loading....</h1> </>)}

        </>
    );
};

export default Product;
