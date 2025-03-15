import './App.css'
import styled from "styled-components";
import {Header} from "./assets/layout/header/Header.tsx";
import {Main} from "./assets/layout/Sections/main/Main.tsx";
import {Skills} from "./assets/layout/Sections/skills/Skills.tsx";
import {Works} from "./assets/layout/Sections/works/Works.tsx";
import {Testimony} from "./assets/layout/Sections/testimony/Testimony.tsx";


function App() {
    return (
        <div className="App">
<Title></Title>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </div>
    )
}

export default App

const Title = styled.h1`
font-size: 1.5em;`
