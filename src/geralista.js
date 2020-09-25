import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import httpClient from './httpclient'
import { Table, Button } from 'reactstrap'


    const Geralista = () => {
        const [users, setUsers] = useState([])
   const history = useHistory()
        const getList = async () => {
            try {
                const users = await httpClient.get('/user')
                setUsers(users.data)
                console.log(users)
            } catch (error) {
                console.log('error', error)
            }
        }
    
       const editUser = async(_id) => {
                  try {
                await httpClient.get(`user/${_id}`)
              
                console.log(_id)
            } catch (error) {
              console.log('error', error)
            }
          
        history.push(`/edita/${_id}`)
       }
              
           //alert("voce pediu para editar, mas não sou obrigada...")

        const removeToken = () => localStorage.removeItem(TOKEN_KEY)
        const TOKEN_KEY = 'bootcamp-infnet'
        const vaza = () =>{
            removeToken ()
            history.push('./')

       }
    
       const deleteUser = async (titulo) => {
            try{
               if (window.confirm('Está certo disso?'))
                await httpClient.delete(`/user/${titulo}`, {titulo})
               getList()
           }catch (err){
            console.log (err)
           }
    }
    
        const montarUsuarios = () => users.map((user, index) => (
            <tr key={index}>
                <td>{user.titulo}</td>
                <td>{user.ano}</td>
                <td>{user.genero}</td>
                <td>{user.duracao}</td>
                <td>{user.diretor}</td>
                <td>
                    <span onClick={() => editUser(user._id)} style={{color: "blue"}}>Editar</span> |
                    <span onClick={() => deleteUser(user.titulo)} style={{color: "red"}}>Excluir </span> 
                </td>
            </tr>
         
        ))
        useEffect(() => {
            getList()
        },[])

        //render
        return (
            
            <section>
    <nav>
               <Button className="button" outline color="secondary" onClick={() => history.push('/cadastra')}> Cadastra novo</Button>{' '}
               <Button className="button" outline color="secondary" onClick={() => vaza()}>Logout <i className="fa fa-sign-out"></i></Button>{' '}
     </nav>
                <br />
                <Table size="sm" hover>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Ano</th>
                                <th>Genero</th>
                                <th>Duracao</th>
                                <th>Diretor</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {montarUsuarios () }
                        </tbody>
                    </Table>
                
            </section>
        )
    
        


}
export default Geralista 