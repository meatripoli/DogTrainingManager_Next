import SignInLayout from '../components/SignInLayout';
import MyGrid from '../components/MyGrid';
import {Form, Button} from 'semantic-ui-react';
import {useState,useContext} from 'react';
import axios from 'axios';
import router from 'next/router'
import UserContext from '../components/util/UserContext';

export default (props) => {
  const { signIn } = useContext(UserContext);
  const [message,setMessage]=useState({
    color:'grey',
    body:'Not registered yet? Contact your admin at email@example.com to create your account.'
  })
  const [login,setLogin] = useState({
    user: '',
    password: ''
  })
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{
      let response = await axios.post('/login',login)
      signIn(response.data.data.user, response.data.data.id, response.data.data.adminflag)
      //need to send the admin flag to users
      router.push({ pathname: response.data.redirectUrl, state: response.data.data})
    }
    catch(e){
      if(e.response.status===401){
        let newObj = {body: 'Incorrect user or password',color:'red'};
        setMessage({...message,...newObj})
      }
      else{
        console.log(e.response)
      }
    }
    //done after data is sent for authentication
    ///this clears object
    setLogin({
      user: '',
      password: ''
    });
  };

  const handleLoginChange = (event)=>{
    let newObj = {[event.target.name]: event.target.value};
    setLogin({...login,...newObj});
  }

  return (<SignInLayout>
    <MyGrid 
        columnNum = {2} 
        header='Login'
        body={message.body}
        color={message.color}
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