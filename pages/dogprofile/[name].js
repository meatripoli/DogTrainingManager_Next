import InternalLayout from '../../components/InternalLayout';
import {useRouter} from 'next/router';
import CollapseAccodion from '../../components/CollapseAccordion';
import Profile from '../../components/Profile';

export default (props) => {
    const router = useRouter();
    console.log(router.query.name)
    return <>
        <InternalLayout adminFlag='y'>
            <Profile />
            <CollapseAccodion />
        </InternalLayout>
    </>
}