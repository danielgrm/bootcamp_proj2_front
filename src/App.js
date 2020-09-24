import React from 'react'
import imgbanner from './kino-1.jpg'
import Header from './header'
import Routercomponent from './routes'
import Footer from './footer'
//import {BrowserRouter} from 'react-router-dom'

const App = () => {

 return (
    <React.Fragment>
      <Header />
      <main>
      <Routercomponent />
        {/* <div className="banner">
          <img src={imgbanner} alt=""/>
        </div> */}
      </main>
    <Footer/>
    </React.Fragment>
  );
}

export default App;



