import styles from './page.module.css'
{/* <style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalnia:wght@500&family=Oswald&family=Roboto&display=swap');</style> */}
// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { recetas } from './recetas'
// import { Card, CardContent } from "@/components/ui/card"


export default function Home() {
  

  const listOfNames = Object.keys(recetas).map(id => 
  <li>
    <a href= {'/recetas/' + id}>
    {recetas[id].nombre}
    </a>
    
  </li>) 
  debugger

  return (
    <main className={styles.main}>
      <h1> Recetas de la familia</h1>
      {/* {Object.keys(recetas).length} */}

      <ul>{listOfNames}</ul>

      {/* <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Object.keys(recetas).map((id) => (
          <CarouselItem className= 'diapositiva-carrusel' key={id}>
            
            <img className= 'imagen-carrusel'   src={'/placeholders/' + id + '.jpg'} alt={recetas[id].nombre}  />
            
            <a className='link-carrusel' href= {'/recetas/' + id}> <h3> {recetas[id].nombre} </h3>  </a>


          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}

    </main>
  )
}

// C:\Users\User\Documents\programacion\recetario de mama\package.json
// C:\Users\User\Documents\programacion\recetario de mama\recetario-de-mama