import MyGrid from '../components/MyGrid';
import {Form} from 'semantic-ui-react';

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
                name='username'
                type='text'
                onChange={props.inputchange}
                value = {props.value.username}
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name='password'
                onChange={props.inputchange}
                value = {props.value.password}
            />
            <Form.Checkbox label='Administrator' name='admin' onChange={props.checkboxchange}/>
        </Form>
    </MyGrid>
    </>)
}