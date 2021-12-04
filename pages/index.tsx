import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from "../components/products/Products";
import Navbar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
   <>
       <Navbar/>
       <Products/>
   </>
  )
}

export default Home
