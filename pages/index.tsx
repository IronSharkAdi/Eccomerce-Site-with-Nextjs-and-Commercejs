import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from "../components/products/Products";
import Navbar from "../components/navbar/Navbar";
import {InferGetServerSidePropsType} from "next";
import commerce from "../lib/Commercejs/commerce";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data: data  } = await commerce.products.list();
    
    return{
        props :{
            data
        }
    }
}


const Home: NextPage = ({ data  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
   <>
       <Navbar/>
       <Products data={data}/>
   </>
  )
}

export default Home
