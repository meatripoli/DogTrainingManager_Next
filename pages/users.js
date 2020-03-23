import InternalLayout from '../components/InternalLayout';
import Table from '../components/Table';
import ModalLayout from '../components/ModalLayout';
import { Button, Icon } from 'semantic-ui-react';

export default () => {
    return (
    <InternalLayout adminFlag='y'>
        <ModalLayout buttonColor='green' buttonLocation='right' buttonName='New User' icon='plus' title='Add a new user'>
            <p>stuff about adding user</p>
        </ModalLayout>
        <Table></Table>
    </InternalLayout>);
}