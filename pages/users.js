import InternalLayout from '../components/InternalLayout';
import Table from '../components/Table';
import ModalLayout from '../components/ModalLayout';
import RegisterUser from '../components/RegisterUser';
import { Button } from 'semantic-ui-react';
//import { useRouter } from 'next/router'
import {useEffect,useState} from 'react';

const ModalAction = () => <Button positive content='OK' />
//the admin flag is based on who signs in at the beginning 
export default (props) => {
    ///figure out how to send the admin flag from the login page
    //let router = useRouter();
    
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