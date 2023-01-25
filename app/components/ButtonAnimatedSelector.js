import Head from 'next/head'
//import ButtonAnimatedSelector from '../components/ButtonAnimatedSelector'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
const ButtonAnimatedSelector = styled.div`
  width: 100%;
  border: 5px solid orange;
  border-radius: 10px;
  display: flex;
  padding: 15px 25px;
  background-image: url('/static/images/ui-themes/adastrafire.png');
  position: absolute;
  background-position: left center;
  transition-duration:10s;
  overflow: hidden;

  &:hover{
    background-position: right center;
    border: 5px solid blue;
  }
 `;
 /*
AÑADIR ANIMACION EN EL HOVER CON 10 SEGUNDOS A LA IZQUIRDA Y CAMBIAR EL BORDE DE ACUERDO A CADA TEMA
AÑADIR PROPS
 */

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.grid}>
        <h2>Temas/Apariencia</h2>
          <hr />
          <ButtonAnimatedSelector>
            <h2>Adastra</h2>
          </ButtonAnimatedSelector>
        </div>
      </main>

    </div>
  )
}
