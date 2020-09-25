import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import httpClient from './httpclient'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

  const Edita = () => {  
  const { id } = useParams()
  const history = useHistory()
  const [form, setform] = useState({})

  const handleChange = (event) => {
  setform({
    ...form,
    [event.target.name]: event.target.value,
  })
  return;
}
const submete = async () => {
  await httpClient.patch(`/user/${id}`, form)
  setform({})
  alert("Dados enviados")
  history.push(`/geralista/`)
}
  const pegala = (id) => httpClient.get(`/user/${id}`)
  const getbyid = async () => {
    try {
      const user = await pegala(id)
      setform(user.data)
  } catch (error) {
    console.log('error', error)
  }
}
   
const voltapralista = () => {
  history.push(`/geralista/`)
}
//window.onload = getbyid()
useEffect(() => {
  getbyid()
})

return (
  <div>
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      {/* <InputGroupText>@</InputGroupText> */}
    </InputGroupAddon>
    <Input type="text" id="titulo" name="titulo" onChange={handleChange} value={form.titulo || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      {/* <InputGroupText>@</InputGroupText> */}
    </InputGroupAddon>
    <Input type="number" id="ano" name="ano" onChange={handleChange} value={form.ano || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      {/* <InputGroupText>@</InputGroupText> */}
    </InputGroupAddon>
    <Input type="text" id="genero" name="genero" onChange={handleChange} value={form.genero || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      {/* <InputGroupText>@</InputGroupText> */}
    </InputGroupAddon>
    <Input type="number" id="duracao" name="duracao" onChange={handleChange} value={form.duracao || ""} />
  </InputGroup>
  <br />
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      {/* <InputGroupText>@</InputGroupText> */}
    </InputGroupAddon>
    <Input type="text" id="diretor" name="diretor" onChange={handleChange} value={form.diretor || ""} />
  </InputGroup>
  <br />
{/* 
  <div className="form">
    <h3>Edita filme cadastrado</h3>
    <form>
      <label htmlFor="titulo">Titulo:</label>
      <input type="text" id="titulo" name="titulo" onChange={handleChange} value={form.titulo || ""} />
      <br />
      <label htmlFor="ano">Ano:</label>
      <input type="number" id="ano" name="ano" onChange={handleChange} value={form.ano || ""} />
      <br />
      <label htmlFor="genero">Genero:</label>
      <input type="text" id="genero" name="genero" onChange={handleChange} value={form.genero || ""} />
      <br />
      <label htmlFor="duracao">duracao:</label>
      <input type="number" id="duracao" name="duracao" onChange={handleChange} value={form.duracao || ""} />
      <br />
      <label htmlFor="diretor">diretor:</label>
      <input type="text" id="diretor" name="diretor" onChange={handleChange} value={form.diretor || ""} />
      <br />
    </form> */}
    <Button outline color="primary" onClick={submete} value="Reset" > Salva alteração </Button>{' '}
    <Button outline color="secondary" onClick={voltapralista} value="" > Deixa como está... </Button>{' '}
  </div>
)
  }
export default Edita