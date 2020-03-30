import { Form,Header } from 'semantic-ui-react';

const level = [
    { key: '0', text: '', value: 0 },
    { key: '1', text: '1 - Leash Pressure', value: 1 },
    { key: '2', text: '2 - E-Collar Pressure', value: 2 },
    { key: '3', text: '3 - No Pressure', value: 3 },
]
export default (props) => {
    return (<Form>
        <Header as='h3'>Pottyng</Header>
        <Form.Group widths='equal' inline>
            <Form.Group grouped style={{margin:'0px 100px 0px 50px'}}>
                <label>Pee</label>
                <Form.Checkbox />
                <label>Poop</label>
                <Form.Checkbox />
            </Form.Group>
            <Form.TextArea label='Notes' placeholder='Notes' /> 
        </Form.Group>
        <Header as='h3'>Feeding</Header>
        <Form.Group widths='equal' inline>
            <Form.Group grouped style={{margin:'0px 100px 0px 50px'}}>
                <label>Ate</label>
                <Form.Checkbox />
            </Form.Group>
            <Form.TextArea label='Notes' placeholder='Notes' /> 
        </Form.Group>
        <Header as='h3'>Training</Header>
        <Form.Group inline>
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
        </Form.Group>
        <Form.Group inline>
            <Form.Group grouped>
                <label>Down</label>
                <Form.Field
                    label='1 - Leash Pressure'
                    control='input'
                    type='radio'
                    name='1'
                />
                <Form.Field
                    label='2 - E-Collar Pressure'
                    control='input'
                    type='radio'
                    name='2'
                />
                <Form.Field
                    label='3 - No Pressure'
                    control='input'
                    type='radio'
                    name='3'
                />
            </Form.Group>
            <Form.Group inline>
                <Form.Checkbox label='Duration' />
                <Form.Checkbox label='Distance' />
            </Form.Group>
        </Form.Group>

    </Form>)
}