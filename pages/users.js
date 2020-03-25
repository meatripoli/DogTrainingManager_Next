import InternalLayout from '../components/InternalLayout';
import Table from '../components/Table';
import ModalLayout from '../components/ModalLayout';
import RegisterUser from '../components/RegisterUser'
;import { Button, Icon } from 'semantic-ui-react';

const ModalAction = () => <Button positive content='OK' />

export default () => {
    return (
    <InternalLayout adminFlag='y'>
        <ModalLayout buttonColor='green'
            buttonLocation='right' 
            buttonName='New User' 
            icon='plus' 
            title='Add a new user'
            modalContent={<RegisterUser title='Add User'/>}
            modalActions={<ModalAction />}
        >
        </ModalLayout>
        <Table></Table>
    </InternalLayout>);
}