import { Button, Modal, Icon } from 'semantic-ui-react'

export default (props) => (
  <Modal size='small' dimmer= 'blurring' trigger={
    <Button icon color={props.buttonColor} floated={props.buttonLocation} style={{marginBottom:'5px'}}>
        <p><Icon name={props.icon} /></p>
    </Button>
  } closeIcon>
    <Modal.Header>{props.title}</Modal.Header>
    <Modal.Content>
      {props.modalContent}
    </Modal.Content>
    <Modal.Actions>
        {props.modalActions}
    </Modal.Actions>
  </Modal>
);