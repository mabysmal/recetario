'use client'
import React from 'react';
import Head from 'next/head';
import { useWindowSize } from 'react-use';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalnia:wght@500&family=Oswald&family=Roboto&display=swap');
</style>
import { recetas } from '../../recetas'

const RecipeName = ({ params }) => {
    const receta = recetas[params.id];
    const listOfIngredients = receta.ingredientes.map(ingrediente => <li>{ingrediente}</li>)
    const listOfInstructions = receta.instrucciones.map(instruccion => <li>{instruccion}</li>)
    const { width, height } = useWindowSize();
    const whichImageToUse = (id) => {      
        console.log(width)
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
                src={'/placeholders/' + id + '1' + '.jpg'}
                alt={recetas.nombre}
                onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/placeholders/Peepy1.jpg'
                    console.log('big')
                }}></img>
        }
    }



    return (
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