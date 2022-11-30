import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard.jsx';
import { movies } from "../../data.js";

function ActorsListPage () {
    let actorList = []
    let newPicture = ""
   

    movies.forEach(m => (
        m.cast.forEach(actor => {
            if (!(actorList.includes(actor))) {
                actorList.push(actor)
            }
        })
    ))
    actorList.sort()


    

    return (
        <>  
            
            <img src={newPicture} ></img>
            {actorList.map(actor => (
                <ActorCard 
                actor={actor}
                key={actor}
                />
                ))}
        </>
    )
}

export default ActorsListPage;