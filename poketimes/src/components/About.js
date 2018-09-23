import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = ()=>{
    return (
        <div className="container">
            <h1><div className="center">About</div></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repellendus, vel, et consequuntur sed unde quos hic molestias aut itaque culpa facilis nesciunt nulla, quaerat quidem voluptatum aliquid in recusandae.</p>
        </div>
    )
}

export default Rainbow(About);