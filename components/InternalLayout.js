import {Menu, Segment, Button, Icon} from 'semantic-ui-react';
import UserContext from './util/UserContext';
import {useState,useContext} from 'react';
import router from 'next/router';

/*props needed
children
*/
export default function InternalLayout(props) {
    const {user,signIn,signOut} = useContext(UserContext);
    const [who,setWho] = useState(user);
    let menuItemsAdmin = [
        {name:'dogs',icon:'address book outline',href:'/dogs'},
        {name:'archive',icon:'archive',href:'/archive'},
        {name:'users',icon:'users',href:'/users'},
        //{name:'user profile',icon:'user circle',href:''}
    ];
    let menuItems = [
        {name:'dogs',icon:'address book outline',href:'/dogs'},
        {name:'archive',icon:'archive',href:'/archive'},
        //{name:'user profile',icon:'user circle',href:''}
    ];
    const handleLogout= ()=>{
        signOut();
    }
    const handleMenuClick=(path)=>{
        signIn(who.user,who.id,who.admin);
        router.push({ pathname: path});
    };
    return (<>
        <Menu  style={{background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'}} pointing secondary>
            {who.admin? 
                menuItemsAdmin.map((item,index)=><Menu.Item key={index} icon={item.icon} name={item.name} onClick={()=>handleMenuClick(item.href)}/>)
                :menuItems.map((item,index)=><Menu.Item key={index} icon={item.icon} name={item.name} onClick={()=>handleMenuClick(item.href)}/>)}
            <Menu.Menu position='right'>
                <Menu.Item  icon="sign-out alternate" name='logout' onClick={handleLogout} href="/"/>
            </Menu.Menu>
        </Menu>
        <Segment>{props.children}</Segment>    
    </>);
};