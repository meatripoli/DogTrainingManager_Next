import InternalLayout from '../components/InternalLayout';
import MyDropoffModal from '../components/MyDropoffModal';

export default () => {   
    return <InternalLayout>    
        <MyDropoffModal path={'/api/dogs'}/>
    </InternalLayout>;
};