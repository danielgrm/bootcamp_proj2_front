import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import httpClient from './httpclient'
import imgbanner from './kino-1.jpg'
import { Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input, } from 'reactstrap'


const Login = (props) => {

    const history = useHistory()
    const [fauth, setfauth] = useState({})
    const pressenter = (event) => event.key === 'Enter' ? encaminha() : null
    const handleChange = (event) => {
        setfauth({
            ...fauth,
            [event.target.name]: event.target.value
        })
        return;
    }

    const temalgumacoisa = () => fauth.email && fauth.senha

   

    const TOKEN_KEY = 'bootcamp-infnet'

    const getToken = () => localStorage.getItem(TOKEN_KEY)

    const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token)

    //const removeToken = () => localStorage.removeItem(TOKEN_KEY)

    
    // const isAuthenticated = () => {
    //     // pegar dentro do localstage
    //     // validar o token 
    //     // retornar se true ou false
    //     return getToken() !== null
    // }

    if (getToken()) {
        httpClient.defaults.headers['x-auth-token'] = getToken();
    }

 //    const authentication = (data) => httpClient.post('/auth', data)

    const encaminha = async () => {
        const { data: { token } } = await httpClient.post('/auth', fauth)
        httpClient.defaults.headers['x-auth-token'] = token;
        saveToken(token)
        history.push('/geralista')

        // else { 
        //     setfauth({})
        //     alert("usuario nao cadastrado")
        // }
        return;
    }


    return (
<Row>
    <Col>
    <div className="InputGroup">

         <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input type="email" id="email" name="email" onChange={handleChange} value={fauth.email || ""} placeholder="username" onKeyPress={pressenter}/>
      </InputGroup>
      <br />
      <InputGroup >
        <InputGroupAddon addonType="prepend">
          <InputGroupText>#</InputGroupText>
        </InputGroupAddon>
        <Input type="password" id="senha" name="senha" onChange={handleChange} value={fauth.senha || ""} placeholder="password" onKeyPress={pressenter}/>
      </InputGroup>
     
      
      <br/>
            <Button color="primary" disabled={!temalgumacoisa()} onClick={encaminha}>Enviar</Button>
      </div>
      </Col>
      <Col>
       <div className="banner">
          <img src={imgbanner} alt=""/>
        </div> 
      </Col>
      </Row>
     

        // <div className="login">
        //     <h3>Identifique-se, humano:</h3>
        //     <label htmlFor="loginid">Login:</label>
        //     <input type="email" id="email" name="email" onChange={handleChange} value={fauth.email || ""} placeholder="e-mail" />
        //     <br />
        //     <label htmlFor="loginpwd">Senha:</label>
        //     <input type="password" id="senha" name="senha" onChange={handleChange} value={fauth.senha || ""} placeholder="senha" />
        //     <br />
        //     {/* <Button disabled={!temalgumacoisa()} onClick={encaminha}>Enviar</Button> */}
        //     <Button className="Button" type="button" class="btn btn-primary" disabled={!temalgumacoisa()} onClick={encaminha}>Enviar</Button>
        //     {/* <Button color="primary" disabled={!temalgumacoisa()} onClick={encaminha}>Enviar</Button> */}
            
        // </div>
    )
}

export default Login
