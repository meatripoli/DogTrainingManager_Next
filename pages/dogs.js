import InternalLayout from '../components/InternalLayout';
import UserContext from '../components/util/UserContext';
import MyDropoffModal from '../components/MyDropoffModal';

import {useState,useContext} from 'react';

export default () => {
    // const { user,signIn } = useContext(UserContext);
    // console.log(user)
    // const [who,setWho] = useState(user)
    // console.log(who)
    //    
    return <InternalLayout>    
        <MyDropoffModal path={'/api/dogs'}/>
    </InternalLayout>;
};