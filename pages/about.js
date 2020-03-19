import Layout from '../components/Layout';
import MyGrid from '../components/MyGrid';
import {Form, Button} from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

export default function About() {
    return (
      <Layout>
        <MyGrid 
        columnNum = {2} 
        header='Form'
        message=''
        >
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label={`Dog's name`} placeholder='Name' />
              <Form.Input fluid label='Age' placeholder='Age' />
              <Form.Input fluid label='Breed' placeholder='Breed' />
              <Form.Select
                fluid
                label='Gender'
                options={options}
                placeholder='Gender'
              />
            </Form.Group>
            <p>Program: 3-week board and train</p>
            <Form.Group widths='equal'>
              <Form.Input fluid label={`Drop off date`} type='date'/>
              <Form.Input fluid label={`Turn over date`} type='date'/>
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button>Submit</Button>
          </Form>
        </MyGrid>
      </Layout>
    );
  }