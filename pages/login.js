import Layout from '../components/Layout';
import MyGrid from '../components/MyGrid';
import {Form, Button} from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [login,setLogin] = useState({
    user: '',
    password: ''
  })
  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log('pressed submit')
    console.log(login)
    // await axios.post('/api/login',login)
    await axios.post('/login',login)
    //await axios.get('http://localhost:3000/login/'+login.user)
    //done after data is sent for authentication
    ///this clears object
    console.log('get request success');
    setLogin({
      user: '',
      password: ''
    });
    
  };
  const handleLoginChange = (event)=>{
    let newObj = {[event.target.name]: event.target.value};
    ///this will not override the data that already exists in obj login
    setLogin({...login,...newObj});
  }

  return (<Layout>
    <MyGrid 
        columnNum = {2} 
        header='Login'
        message='Not registered yet? Contact your admin at email@example.com to create your account.'
    >
        <Form size="large">
            <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={handleLoginChange}
                name='user'
                type='text'
                value={login.user}
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handleLoginChange}
                name='password'
                value={login.password}
            />
            <Button type='submit' size="large" onClick={handleSubmit}>Log In</Button>
        </Form>
    </MyGrid>
  </Layout>
  )};