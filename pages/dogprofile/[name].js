import InternalLayout from '../../components/InternalLayout';
import {useRouter} from 'next/router';
import CollapseAccodion from '../../components/CollapseAccordion';
import Profile from '../../components/Profile';
import UserContext from '../../components/util/UserContext';
import {useContext} from 'react';

export default (props) => {
    const router = useRouter(); 
    const {dogdata} = useContext(UserContext);    

    return <>
        <InternalLayout>
            <Profile data={dogdata}/>
            <CollapseAccodion data={dogdata}/>
        </InternalLayout>
    </>
}