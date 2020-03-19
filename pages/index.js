import Layout from '../components/Layout';
import MyGrid from '../components/MyGrid';
import {Form, Button} from 'semantic-ui-react';

export default () => (
  <Layout>
    <MyGrid 
        columnNum = {2} 
        header='Login'
        message='Not registered yet? Contact your admin at email@example.com to create your credentials.'
    >
        <Form size="large">
            <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email address"
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
            />
            <Button type='submit' size="large">Log In</Button>
        </Form>
    </MyGrid>
  </Layout>
  );