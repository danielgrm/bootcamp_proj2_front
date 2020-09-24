import React from 'react'
import Geralista from './geralista'
import Cadastra from './cadastra'
import Login from './login'
import Edita from './edita'
import {BrowserRouter, Switch, Route} from "react-router-dom"


const Rotas = () => (
 <BrowserRouter> 
    <Switch>
        <Route exact path='/' component ={Login}/>
        <Route exact path='/geralista' component={Geralista}/>
        <Route exact path='/cadastra' component={Cadastra}/>
        <Route exact path="/edita/:id" component={Edita}/>
        {/* <Route exact path='/' component={() => (<h1>Hallo, Leute!<br/>Wilkommen uns Kino!</h1>)}/> */}
        <Route path='*' component={() => ('Babou! 404!')}/>

    </Switch>
</BrowserRouter>

)


// const routes = {
//     'Geralista': {
//         component: Geralista,
//         showMenu: true,
//         actions: {
//             name: 'Adicionar Filme',
//             to: 'Cadastra'
//         }
//     },
//     'Cadastra': {
//         component: Cadastra,
//         showMenu: true,
//         actions: {
//             name: 'Ver Lista',
//             to: 'Geralista'
//         }
//     },
//     'Login': {
//         component: Login,
//         showMenu: false,
//     },
//     'Edita': {
//         component: Edita,
//         showMenu: true,
//         actions:{
//             name: 'Editar filme',
//             to: 'Geralista'
//         }
//     }
//   }
  export default Rotas;