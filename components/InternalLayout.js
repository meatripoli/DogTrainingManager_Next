import {Menu, Segment, Button, Icon} from 'semantic-ui-react';
//later feature to implement only show users if user logged in is admin
//send the admin flag in the props
//if admin flag = y
export default function InternalLayout(props) {
    let menuItemsAdmin = [
        {name:'dogs',icon:'address book outline',href:''},
        {name:'archive',icon:'archive',href:''},
        {name:'users',icon:'users',href:''}
    ]
    let menuItems = [
        {name:'dogs',icon:'address book outline',href:''},
        {name:'archive',icon:'archive',href:''},
        {name:'user profile',icon:'user circle',href:''}
    ]
    return (<>
        <Menu  style={{background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'}} pointing secondary>
            {props.adminFlag==='y'? 
                menuItemsAdmin.map((item,index)=><Menu.Item key={index} icon={item.icon} name={item.name} href={item.href}/>)
                :menuItems.map((item,index)=><Menu.Item key={index} icon={item.icon} name={item.name} href={item.href}/>)}
            <Menu.Menu position='right'>
                <Menu.Item  icon="sign-out alternate" name='logout' href="/"/>
            </Menu.Menu>
        </Menu>
        <Segment>{props.children}</Segment>
        
    </>)
}