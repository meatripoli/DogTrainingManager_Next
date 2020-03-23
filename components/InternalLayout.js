import {Menu, Segment, Button, Icon} from 'semantic-ui-react';
//later feature to implement only show users if user logged in is admin
//send the admin flag in the props
//if admin flag = y
export default function InternalLayout(props) {
    let menuItemsAdmin = [
        {name:'dogs',icon:'address book outline icon',href:''},
        {name:'archive',icon:'archive icon',href:''},
        {name:'users',icon:'users icon',href:''}
    ]
    let menuItems = [
        {name:'dogs',icon:'address book outline icon',href:''},
        {name:'archive',icon:'archive icon',href:''},
        {name:'user profile',icon:'user circle icon',href:''}
    ]
    return (<>
        <Menu  style={{background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'}} pointing secondary>
            {props.adminFlag==='y'? 
                menuItemsAdmin.map(item=><Menu.Item  icon={item.icon} name={item.name} href={item.href}/>)
                :menuItems.map(item=><Menu.Item  icon={item.icon} name={item.name} href={item.href}/>)}
            <Menu.Menu position='right'>
                <Menu.Item  icon="sign-out alternate" name='logout' href="/"/>
            </Menu.Menu>
        </Menu>
        <Segment>{props.children}</Segment>
        
    </>)
}