import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from "../components/products/Products";
import Navbar from "../components/navbar/Navbar";
import {InferGetServerSidePropsType} from "next";
import commerce from "../lib/Commercejs/commerce";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data: data  } = await commerce.products.list();
        
    return{
        props :{
            data
        }
    }
}


const Home: NextPage = ({ data  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
   
    const [cart, setCart] = useState({})
    const fetchCart = async () =>{
        setCart(await commerce.cart.retrieve())
    }
    const handleAddCart = async (id , quantity) =>{
        const item = await commerce.cart.add(id , quantity)

        setCart(item.cart)
    }
    
    useEffect(() => {
        if (!router.isReady) return;
        fetchCart()
      }, [router.isReady]);

      console.log(cart)
  return (
   <>
       <Navbar items={cart && cart.total_items} />
       <Products data={data} handleAddCart={handleAddCart} />
   </>
  )
}

export default Home
