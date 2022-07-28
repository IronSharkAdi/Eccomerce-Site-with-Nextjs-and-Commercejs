import {Container, Grid} from '@mui/material'
import React, {useEffect, useState} from 'react'
import type { NextPage } from 'next'
import Product from "./product/Product";
import useStyles from "./styles";



const products:{id: number, name:string, description:string, price:number, imgSrc: string}[] = [
    { id: 1, name: 'Viper mini', description: "a mouse for gaming" , price:10, imgSrc: "https://m.media-amazon.com/images/I/6157EeRHinL._AC_UL320_.jpg"},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price:10, imgSrc: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg" },
]

type Props = any

const Products:NextPage<Props> = ({data, handleAddCart}) => {
    console.log(data)
    const classes = useStyles()

    return (
        <section id='shop'>
        <Container maxWidth="lg">
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={4} justifyContent={"center"} >
                {data && data.map(product =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} handleAddCart={handleAddCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
        </Container>
        </section>
    )
}

export default Products


