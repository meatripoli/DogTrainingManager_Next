import MyGrid from '../components/MyGrid';
import {Form, Checkbox} from 'semantic-ui-react';

export default (props) => {
    return (<>
    <MyGrid 
        columnNum = {1} 
        header={props.title}
        message=''
    >   
        <Form size="large">
            <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                
                name='user'
                type='text'
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                
                name='password'
            />
            <Checkbox label='Administrator' />
        </Form>
    </MyGrid>
    </>)
}