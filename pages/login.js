import SignInLayout from '../components/SignInLayout';
import MyGrid from '../components/MyGrid';
import {Form, Button} from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import router from 'next/router'

export default (props) => {

  const [login,setLogin] = useState({
    user: '',
    password: ''
  })
  const handleSubmit = async (event)=>{
    event.preventDefault();
    let response = await axios.post('/login',login)
    //need to send the admin flag to users
    //router.push({ pathname: response.data.redirectUrl, query: response.data.query.adminflag })
    response.data.success? router.push({ pathname: response.data.redirectUrl}): console.log('incorrect password')
    //done after data is sent for authentication
    ///this clears object
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

  return (<SignInLayout>
    <MyGrid 
        columnNum = {2} 
        header='Login'
        message={props.message?props.message:'Not registered yet? Contact your admin at email@example.com to create your account.'}
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
  </SignInLayout>);
};