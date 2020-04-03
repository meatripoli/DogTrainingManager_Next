import { Button, Modal, Icon } from 'semantic-ui-react';
import {useState, useEffect} from 'react';

/*props needed
buttonColor
buttonLocation
handleButton
buttonName
handleModal
modalstate
icon
title
children
*/
export default (props) =>{
  //handles modal open and close functionality
  const [modalState,setModalState] = useState(null);
  const handleModal = ()=> {
      modalState?setModalState(false):setModalState(true);
  };

  const [user,setUser] = useState(props.current?props.current:{
    username: '',
    admin:false,
    id:0,
    password: '',
  });

  return <Modal size='small' dimmer= 'blurring' onClose={handleModal} open={modalState} trigger={
      <Button icon color={props.buttonColor} floated={props.buttonLocation} onClick={handleModal} style={{marginBottom:'5px'}}>
          <p><Icon name={props.icon} /></p>
      </Button>
    } closeIcon>
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>
          {props.children}
      </Modal.Content>
      <Modal.Actions>
        <Button positive content='OK' onClick={props.handleButton} />
      </Modal.Actions>
    </Modal>
}