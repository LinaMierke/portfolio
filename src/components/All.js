import React from "react"
import Wines from "../components/wine"
import Countries from "../components/countries"
import Mockup from "../components/mockup"
import Futurama from "../components/futurama"
import Trivia from "../components/trivia"
import Python from "../components/python"
import CountriesAPI from "../components/countriesApi"
// import Books from "../components/books"
import FuturamaAPI from "../components/futuramaApi"
import WinesAPI from "../components/wineAPI"



import "./All.css"


export default function All() {


    return (
        <div>
            <div className="container">
                <Wines />
                <WinesAPI />
                <Python />
                <CountriesAPI />
                <Countries />
                <Futurama />
                <FuturamaAPI />
                <Trivia />
                <Mockup />
                {/* <Books /> */}
            </div>
        </div>


    )
}