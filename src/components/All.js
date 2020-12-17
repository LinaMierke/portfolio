import React from "react"
import Wines from "../components/wine"
import Countries from "../components/countries"
import Mockup from "../components/mockup"
import Futurama from "../components/futurama"
import Trivia from "../components/trivia"
import Python from "../components/python"
import "./All.css"


export default function All() {


    return (
        <div>
        <div className="container"> 
        <Mockup />
        <Countries />
        <Futurama />
        <Trivia />
        <Python />
        <Wines />
        </div>
        </div>


    )
}