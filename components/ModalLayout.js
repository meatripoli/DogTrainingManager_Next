import { Button, Modal, Icon } from 'semantic-ui-react'

export default (props) => (
  <Modal size='small' dimmer= 'blurring' trigger={
    <Button icon color={props.buttonColor} floated={props.buttonLocation} style={{marginBottom:'5px'}}>
        <p><Icon name={props.icon} /> {props.buttonName}</p>
    </Button>
  } closeIcon>
    <Modal.Header>{props.title}</Modal.Header>
    <Modal.Content>
      {props.children}
    </Modal.Content>
  </Modal>
);