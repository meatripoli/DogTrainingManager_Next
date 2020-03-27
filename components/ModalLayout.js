import { Button, Modal, Icon } from 'semantic-ui-react';
import {useState, useEffect} from 'react';
import RegisterUser from '../components/RegisterUser';
import axios from 'axios';

export default (props) => {
  let response;
  function refreshPage() {
    window.location.reload(false);
  }
  let switchFun = async (data) => {switch (props.buttonName) {
    case 'Remove':
      if(!data.adminflag){
        try{
          response = await axios.delete('/api/users',{data:data});
          if(response.status===200){
            refreshPage();
          }
          else{
            alert('there was an error deleting user')
          }
        }
        catch(e){
          alert('caught an error:',e)
        }
        break;
      }
      else{
        alert('Dont have permission to delete an admin user')
        break;
      }
    case 'New User' :
      try{
        response = await axios.post('/api/users',data);
        if(response.status===200){
          console.log('new user added')
          refreshPage();
        }
        else{
          alert('there was an error adding user:', data.username)
        }
  //  this clears object
        setUser({
          username: '',
          adminflag:false,
          id:0,
          password: '',
        });
        break;
      }
      catch(e){
        alert('caught an error:',e)
      }
    default:
      break;
  }}
  const [user,setUser] = useState(props.current?props.current:{
    username: '',
    admin:false,
    id:0,
    password: '',
  });
  const [modalstate,setModalstate] = useState(false);
  const handleModal = (event)=> {
    modalstate?setModalstate(false):setModalstate(true);
  };
  const handleInput = (event)=>{
    let newObj = {[event.target.name]:event.target.value};        
    setUser({...user,...newObj});
  };  
  const handleCheckBox = (event,data) => {
    let newObj = {[data.name]: data.checked};
    setUser({...user,...newObj});
  };
  const handleButton = async (event)=>{
    event.preventDefault();
    setModalstate(false);  
    switchFun(user);
  };
  return (
  <Modal size='small' dimmer= 'blurring' onClose={handleModal} open={modalstate} trigger={
    <Button icon color={props.buttonColor} floated={props.buttonLocation} onClick={handleModal} style={{marginBottom:'5px'}} data={props.test}>
        <p><Icon name={props.icon} /></p>
    </Button>
  } closeIcon>
    <Modal.Header>{props.title}</Modal.Header>
    <Modal.Content>
      {props.modalContent? props.modalContent: <RegisterUser title={props.buttonName} value={user} inputchange={handleInput} checkboxchange={handleCheckBox}/>}
    </Modal.Content>
    <Modal.Actions>
      <Button positive content='OK' onClick={handleButton} />
    </Modal.Actions>
  </Modal>
)};