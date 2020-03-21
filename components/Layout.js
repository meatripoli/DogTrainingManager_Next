import {Menu} from 'semantic-ui-react';
 
export default function Layout(props) {
    return (<>
        <header className='loginMenu'>
            <Menu  style={{background: 'linear-gradient(45deg, #019474 30%, #b5b5b5 90%)'}} pointing secondary>
                <Menu.Item  icon="file outline" name='form' href="/form"/>
                <Menu.Menu position='right'>
                    <Menu.Item  icon="sign in alternate" name='login' href="/"/>
                </Menu.Menu>
            </Menu>
        </header>
        {props.children}
    </>)
}