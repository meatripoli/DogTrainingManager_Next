import InternalLayout from '../components/InternalLayout';
import MyNewUserModal from '../components/MyNewUserModal';
import MyRemoveUserModal from '../components/MyRemoveUserModal';

export default () => {   
    return <InternalLayout>    
        <MyNewUserModal
            buttonColor='green'
            buttonLocation='right' 
            buttonName='New User'
            icon='plus' 
            title='Add a new user'
            flag='newUser'/>
        <MyRemoveUserModal/>
    </InternalLayout>;
};