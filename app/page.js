'use client'
import styles from './styles.css'
{/* <style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalnia:wght@500&family=Oswald&family=Roboto&display=swap');</style> */ }
// import { Card, CardContent } from "@/components/ui/card"
import { useWindowSize } from 'react-use';
import { recetas } from './recetas'
// import { Card, CardContent } from "@/components/ui/card"

export default function Home() {

  const { width, height } = useWindowSize();

  const whichImageToUse = (id) => {
    if (width < 600) {
      return <img className='cardimg' src={'/placeholders/' + id + '-mobile' + '.jpg'} alt={recetas.nombre}></img>
    } else {
      return <img className='cardimg' src={'/placeholders/' + id + '1' + '.jpg'} alt={recetas.nombre}></img>
    }
  }

  const cards = Object.keys(recetas).map(id =>
    <div href={'/recetas/' + id}>
      {whichImageToUse(id)}
      <div className='card-content'>
        <a href={'/recetas/' + id}>
          <h3> {recetas[id].nombre} </h3>
          <p> {recetas[id].descripcion} </p>
        </a>

      </div>

    </div>
  )






  const listOfImages = Object.keys(recetas).map(id =>
    <li>
      <img className='cardimg' src={'/placeholders/' + id + '.jpg'} alt={recetas.nombre}></img>
    </li>)

  return (
    <div className="EntireContainer">
      <main className={styles.main}>
        <h1 className="title"> Recetas de la familia</h1>
        <div className="cards">
          {cards}

        </div>
        <span> {width} </span>

      </main>
    </div>

  )
}
