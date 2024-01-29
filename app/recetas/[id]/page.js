'use client'
import React from 'react';
import Head from 'next/head';
import { useWindowSize } from 'react-use';
import styles from './styles.css';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalnia:wght@500&family=Oswald&family=Roboto&display=swap');
</style>
// recetas is at
import { recetas } from '../../recetas'

const RecipeName = ({ params }) => {
    // console.log(recetas)
    // console.log(params.id)
    // console.log(recetas[params.id])
    const receta = recetas[params.id];
    const listOfIngredients = receta.ingredientes.map(ingrediente => <li>{ingrediente}</li>)
    const listOfInstructions = receta.instrucciones.map(instruccion => <li>{instruccion}</li>)
    const { width, height } = useWindowSize();
    const whichImageToUse = (id) => {
        if (width < 600) {
          return <img className='cardimg' src={'/placeholders/' + id + '-mobile' + '.jpg'} alt={recetas.nombre}></img>
        } else {
          return <img className='cardimg' src={'/placeholders/' + id + '.jpg'} alt={recetas.nombre}></img>
          // return <img className='cardimg' src={'/placeholders/' + id + '1' + '.jpg'} alt={recetas.nombre}></img>
        }
      }



    return (
        // <div className='RecetaContainer'> 
        <div className="RecetaContainer">
            <Head>
                <title>{receta.nombre}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"> </link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> </link>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalnia:wght@500&family=Oswald&family=Roboto&display=swap" rel="stylesheet"> */ </link>
            </Head>
            <div className="presentation">
                <h1 className="dish-name">{receta.nombre}</h1>

                <p className="dish-description">{receta.descripcion}</p>
                {whichImageToUse(params.id)}

                <div className="time">
                    <div>
                        <span className="dish-prep">Preparación: </span>
                        <span className="dish-prep1">{receta["tiempo-preparacion"]}</span>
                    </div>

                    <div>
                        <span className="dish-cook">Cocción: </span>
                        <span className="dish-cook1">{receta["tiempo-coccion"]}</span>
                    </div>

                    <div>
                        <span className="dish-total">Total: </span>
                        <span className="dish-total1">{receta["tiempo-total"]}</span>
                    </div>

                    <div>
                        <span className="servings"> Porciones: </span>
                        <span className="servings1"> {receta.porciones} </span>
                    </div>

                </div>



            </div>


            <div className="ingredientesEInstrucciones">
                <div className="ingredients">
                    <h3>Ingredientes</h3>
                    <ul>
                        {listOfIngredients}

                    </ul>
                </div>

                <div className="instructions">
                    <h3>Instrucciones</h3>
                    <ol>
                        {listOfInstructions}
                    </ol>
                </div>

            </div>

        </div>


    );
}


export default RecipeName;