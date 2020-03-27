import InternalLayout from '../components/InternalLayout';
import Table from '../components/Table';
import ModalLayout from '../components/ModalLayout';

//import { useRouter } from 'next/router';

export default (props) => {
    console.log('inside /users', props)
    ///figure out how to send the admin flag from the login page
    //let router = useRouter();
    return (
    <InternalLayout adminFlag='y'>
        <ModalLayout buttonColor='green'
            buttonLocation='right' 
            buttonName='New User' 
            icon='plus' 
            title='Add a new user'
        >
        </ModalLayout>
        <Table></Table>
    </InternalLayout>);
}