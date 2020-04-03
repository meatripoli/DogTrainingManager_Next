import {Menu, Segment, Button, Icon} from 'semantic-ui-react';
import UserContext from './util/UserContext';
import {useState,useContext, useEffect} from 'react';

/*props needed
children
*/
export default function InternalLayout(props) {
    const data = useContext(UserContext);
    let menuItemsAdmin = [
        {name:'dogs',icon:'address book outline',href:'/dogs'},
        {name:'archive',icon:'archive',href:'/archive'},
        {name:'users',icon:'users',href:'/users'},
        //{name:'user profile',icon:'user circle',href:''}
    ]
    let menuItems = [
        {name:'dogs',icon:'address book outline',href:'/dogs'},
        {name:'archive',icon:'archive',href:'/archive'},
        //{name:'user profile',icon:'user circle',href:''}
    ]
    const handleLogout= ()=>{
        data.signOut();
    }
    return (<>
        <Menu  style={{background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'}} pointing secondary>
            {data.user.admin? 
                menuItemsAdmin.map((item,index)=><Menu.Item key={index} icon={item.icon} name={item.name} href={item.href}/>)
                :menuItems.map((item,index)=><Menu.Item key={index} icon={item.icon} name={item.name} href={item.href}/>)}
            <Menu.Menu position='right'>
                <Menu.Item  icon="sign-out alternate" name='logout' onClick={handleLogout} href="/"/>
            </Menu.Menu>
        </Menu>
        <Segment>{props.children}</Segment>    
    </>)
}