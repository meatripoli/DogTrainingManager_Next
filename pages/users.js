import InternalLayout from '../components/InternalLayout';
import UserContext from '../components/util/UserContext';
import MyNewUserModal from '../components/MyNewUserModal';
import MyRemoveUserModal from '../components/MyRemoveUserModal';

import {useState,useContext} from 'react';

export default () => {
    const data = useContext(UserContext);
    const [who,setWho] = useState(null)
    // console.log('before', who)
    who?who:setWho(data.user)
    // console.log('after',who)
    //    
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