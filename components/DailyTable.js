import { Form,Header,Grid } from 'semantic-ui-react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const level = [
    { key: '0', text: '', value: 0 },
    { key: '1', text: '1 - Leash Pressure', value: 1 },
    { key: '2', text: '2 - E-Collar Pressure', value: 2 },
    { key: '3', text: '3 - No Pressure', value: 3 },
];
export default (props) => {
    return (<Form style={{margin:'20px 20px 0px 10px'}}>
        <Grid divided='vertically'>
            <Header as='h3' textAlign='center'>Health Status </Header>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Form.Group inline >
                        <label>Peed</label>
                        <Form.Checkbox />
                        <label>Pooped</label>
                        <Form.Checkbox />
                    </Form.Group>
                    <Form.TextArea label='Potty Notes' placeholder='Notes' /> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group inline >
                        <label>Ate</label>
                        <Form.Checkbox />
                    </Form.Group>
                    <Form.TextArea label='Feeding Notes' placeholder='Notes' /> 
                </Grid.Column>
            </Grid.Row>     
            <Header as='h3'  textAlign='center'>Training Status</Header>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Sit</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Down</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Place</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Heel</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Recall</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Let's Go</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Door Manners</label>
                        <Form.Select
                            fluid
                            label=''
                            options={level}
                            placeholder=''
                        />
                        <Form.Group inline>
                            <Form.Checkbox label='Duration' />
                            <Form.Checkbox label='Distance' />
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Input fluid label='Location of Outing' placeholder='Lowes' style={{marginBottom:'45px'}}/>

                    <Form.TextArea label='Notes' placeholder='Notes' /> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Form.Button positive>Save</Form.Button>
    </Form>);
};