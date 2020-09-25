import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { InputGroup, InputGroupText, InputGroupAddon, Button, Input } from 'reactstrap';
import httpClient from './httpclient'

const Cadastra = () => {  
const history=useHistory()

  const [form, setform] = useState({})
const handleChange = (event) => {
  setform({
    ...form,
    [event.target.name]: event.target.value,
  })
  return;
}
const submete = async () => {
    await httpClient.post('/user',  form )
    setform({})
    alert("Dados enviados")
  }

return(
  <React.Fragment>
    <nav className="">
               <div className="NAV">

              
               <Button className="button" outline color="primary" onClick={()=>submete()}> Envia </Button>
            

             
                <Button  className="button" outline color="secondary" onClick={()=>history.push('/geralista')}> Volta pra Lista</Button>
        

            </div>
        </nav>

        <br />
        <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Título</InputGroupText>
    </InputGroupAddon>
    <Input type="text" id="titulo" name="titulo" onChange={handleChange} value={form.titulo || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Ano de lançamento</InputGroupText>
    </InputGroupAddon>
    <Input type="number" id="ano" name="ano" onChange={handleChange} value={form.ano || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Gênero</InputGroupText>
    </InputGroupAddon>
    <Input type="text" id="genero" name="genero" onChange={handleChange} value={form.genero || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Duração (min)</InputGroupText>
    </InputGroupAddon>
    <Input type="number" id="duracao" name="duracao" onChange={handleChange} value={form.duracao || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Diretor</InputGroupText>
    </InputGroupAddon>
    <Input type="text" id="diretor" name="diretor" onChange={handleChange} value={form.diretor || ""} />
  </InputGroup>
  <br />
        </React.Fragment>
)
}
export default Cadastra