import React, { useEffect } from 'react'
import M from "materialize-css"

const Hello = () => {

    useEffect(() => {
        let elements = document.querySelectorAll(".hello")
        M.Parallax.init(elements)
    }, [])

    return <div className= "hello-container" id="hello">
            <img className="landingimg" src="../images/landingpage.jpg" alt="image of a hand releasing multiple butterflies" />
           <div className="heading">
            <h2>Rikke Simone Jorgensen</h2>
            <h3>Full Stack Web Developer</h3>
            </div>
        </div>
    } 

export default Hello