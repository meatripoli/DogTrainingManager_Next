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
      router.push({ pathname: response.data.redirectUrl})
    }
    catch(e){
      if(e.response.status===401){
        let newObj = {body: 'Incorrect user or password',color:'red'};
        setMessage({...message,...newObj})
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

/*
function solution(phrase){
  let alphabet = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26,
    ' ':0
  }
  let maxWord='';
  let maxScore=0;
  let currentScore=0;
  let currentWord='';
  for(let i=0; i<=phrase.length;i++){
    //this indicates either end of word or end of phrase
    if(phrase[i]===' '||phrase.length===i){
      if(maxScore<currentScore){
        //replacing max word and score with current word and score
        maxScore=currentScore
        maxWord=currentWord
        //reset current word and score
        currentScore=0
        currentWord=''
      }
      else{
        //reset current word and score
        currentScore=0
        currentWord=''
      }
    }
    else{
      //creating the word
      currentWord=currentWord+phrase[i]
      //adding score of word
      currentScore=currentScore+alphabet[phrase[i]]
    }
  }
  return maxWord
}

solution('what time are we climbing up to the volcano');
solution('man i need a taxi up to ubud');
*/