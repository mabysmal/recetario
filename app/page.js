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
    // if (width < 600) {
    //   return <img className='cardimg' src={'/placeholders/' + id + '-mobile' + '.jpg'} alt={recetas.nombre}></img>
    // } 
    // if (width > 600) {
    //   return <img className='cardimg' src={'/placeholders/' + id + '.jpg'} alt={recetas.nombre}></img>
    //   // return <img className='cardimg' src={'/placeholders/' + id + '1' + '.jpg'} alt={recetas.nombre}></img>
    // }
    // else {
    //   return <img className='cardimg' src={'/placeholders/' + 'PEEPY.jpg'} alt={recetas.nombre}></img>
    // }

    if (width < 600) {
      return <img
          className='cardimg'
          src={'/placeholders/' + id + '-mobile' + '.jpg'}
          alt={recetas.nombre}
          onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = '/placeholders/Peepy-mobile.jpg'
              console.log('small')
          }}></img>
    } else {
      return <img
          className='cardimg'
          src={'/placeholders/' + id + '.jpg'}
          alt={recetas.nombre}
          onError={(e) => {
              e.target.onerror = null
              e.target.src = '/placeholders/Peepy1.jpg'
              console.log('big')
          }}></img>
  }
  }



  const cards = Object.keys(recetas).map(id =>
    <div className='cards' href={'/recetas/' + id}><a href={'/recetas/' + id}></a>

      <a className='liga' href={'/recetas/' + id}>
        <div className='card-content'>
          {whichImageToUse(id)}

          <div className='text-cards'>
            <h3> {recetas[id].nombre} </h3>
            <p> {recetas[id].descripcion} </p>
          </div>
        </div>
      </a>
      {/* <button className='btn btn-prev'> ← </button>
      <button className='btn btn-next'> → </button> */}

    </div>
  )

  const listOfImages = Object.keys(recetas).map(id =>
    <li>
      <img className='cardimg' src={'/placeholders/' + id + '.jpg'} alt={recetas.nombre}></img>
    </li>)


  ////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="EntireContainer">
      <main className={styles.main}>
        <h1 className="title"> Recetas de la familia</h1>
        <div className="cardsContainer">
          {cards}

        </div>

      </main>
    </div>

  )
}
