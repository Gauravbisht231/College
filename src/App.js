import React, { Component } from 'react'
import Abovenavbar from './components/Abovenavbar'
import Intro from './components/Intro'
import Colleges from './components/Colleges'
import Crioresults from './components/Crioresults'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export class App extends Component {
  render() {
    return (
      <div>
      <div> <Abovenavbar/></div>
      <div><Navbar/></div>
      <div> <Intro/></div>
      <div><Colleges/></div>
      <div><Crioresults/></div>
      <div><Footer/></div>
      
      </div>
    )
  }
}

export default App
