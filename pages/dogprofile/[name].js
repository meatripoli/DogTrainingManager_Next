import InternalLayout from '../../components/InternalLayout';
import {useRouter} from 'next/router';
import CollapseAccodion from '../../components/CollapseAccordion';
import Profile from '../../components/Profile';
import UserContext from '../../components/util/UserContext';
import {useContext} from 'react';

export default (props) => {
    console.log(props)
    const router = useRouter(); 
    const {dogInfo} = useContext(UserContext);    
    console.log('inside dogprofile page',dogInfo)
    return <>
        <InternalLayout>
            {/* <Profile data={dogInfo}/>
            <CollapseAccodion data={dogInfo}/> */}
        </InternalLayout>
    </>
}