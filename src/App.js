import React from "react"
import "./style.css"
import Navbar from "./components/Navbar"
import Trip from "./components/Trip"
import data from "./data"

export default function App() {
    let items = data.map(item => <Trip {...item} />)
    return (
        <div>
            <Navbar />
            <main>
                {items}
            </main>
        </div>
    );
}