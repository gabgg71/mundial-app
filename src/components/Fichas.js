import React, { useState, useContext } from 'react';
import { userContext } from '../hooks/useContext';
export const Fichas =({setFichas})=>{
    const [imagenes, setImagenes] = useState(["https://assets-es.imgfoot.com/media/cache/150x150/person/saad-abdullah-al-sheeb.jpg","https://assets-es.imgfoot.com/media/cache/60x60/person/pedro-miguel-correia.jpg", "", "","", "","", "","","","", "","", "",""]);
    let { misFichas, setMisFichas } = useContext(userContext);

  
    
    return(
        <div className="mis-fichas">
            <button type="button" className="btn-close" aria-label="Close" onClick={()=>{setFichas(false)}}></button>
            <h1>Mis fichas</h1>
            <div className="fichas_tengo">
            {misFichas.map((obj, ind)=>(
                    <div className="tarjeta">
                    <p>{obj.ficha.jugador}</p>
                    <img src={obj.ficha.imagen} class="img_tengo"></img>
                    <p>Rol: {obj.ficha.rol}</p>
                    <p>Equipo: {obj.ficha.equipo}</p>
                  </div>
                ))}
            </div>
            
        
            

        </div>
    );

}