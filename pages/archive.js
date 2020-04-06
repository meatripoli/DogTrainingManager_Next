import InternalLayout from '../components/InternalLayout';
import UserContext from '../components/util/UserContext';
import MyDropoffModal from '../components/MyDropoffModal';

import {useState,useContext} from 'react';

export default () => {
    const data = useContext(UserContext);
    const [who,setWho] = useState(null)
    // console.log('before', who)
    who?who:setWho(data.user)
    // console.log('after',who)
    //    
    return <InternalLayout>    
        <MyDropoffModal path={'/api/form'}/>
    </InternalLayout>;
};