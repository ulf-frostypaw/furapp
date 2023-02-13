import Head from 'next/head'
//import ButtonAnimatedSelector from '../components/ButtonAnimatedSelector'
import styles from '../styles/Home.module.css'
//import styled from 'styled-components'
import { NextSeo } from 'next-seo';
import Nav from '../layouts/navbar'
export default function Home() {
  return (
    <>
    <Nav />
    <NextSeo
      title="Inicio | fursonas [dot] net"
      description="Then with a short description here."
    />
    <h1>Te damos la bienvenida a esta nueva actualización.</h1>
    </>
  )
}
