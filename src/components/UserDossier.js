import React from "react";
import './css/UserDossier.css'
export default function UserDossier({data}){
    return (
        <section>
            <h2>The new user has arrived!</h2>
        <ul>
          {Object.entries(data).map(el => <li key={el[0] + el[1]}><b>{el[0]}</b> : {el[1]}</li>)}
        </ul>
        </section>
    )
}