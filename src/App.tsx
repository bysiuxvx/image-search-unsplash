import React, {useEffect} from "react"
import "./Style/style.scss"
import Body from "./Layout/Body"
import {RootStateOrAny, useSelector} from "react-redux"

const App = () => {
    const favState = useSelector((state: RootStateOrAny) => state.favoriteList)

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favState))
    }, [favState])

    return (
        <div className="app">
            <Body/>
        </div>
    )
}

export default App
