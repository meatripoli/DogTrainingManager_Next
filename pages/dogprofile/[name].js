import InternalLayout from '../../components/InternalLayout';
import CollapseAccodion from '../../components/CollapseAccordion';
import ProfileNew from '../../components/ProfileNew';
import UserContext from '../../components/util/UserContext';
import {useContext} from 'react';

export default () => {
    const {dogInfo} = useContext(UserContext);    
    return <>
        <InternalLayout>
            <ProfileNew data={dogInfo}/>
            <CollapseAccodion data={dogInfo}/>
        </InternalLayout>
    </>
}