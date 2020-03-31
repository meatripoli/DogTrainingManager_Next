import { Segment,Grid,Image,List,Form,Header } from 'semantic-ui-react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const programOptions = [
    { key: 'o', text: '', value: 'other' },
    { key: 'b', text: 'Boarding', value: 'boarding' },
    { key: 'bt', text: 'Board & Train', value: 'board and train' },    
    { key: 't', text: 'Train', value: 'train' },
    { key: 'g', text: 'Going Home', value: 'gohome' },
];
const heelOptions = [
    { key: 'l', text: 'Left', value: 'left' },
    { key: 'r', text: 'Right', value: 'right' },
];
export default (props) => {
    const [data,setData]=useState({})
    useEffect(()=>{
        setData({
            id: props.data.id,
            heel: props.data.heel,
            program: props.data.program,
            dateofIntake: props.data.dateofIntake,
        })
    },[])
    const handleInput = (event)=>{
        let newObj = {[event.target.name]:event.target.value};
        setData({...data,...newObj});
   }
    const handleDropdown = (event,item)=>{
        let newObj = {[item.name]: item.value};
        setData({...data,...newObj});
    }
    const handleClick = async (event)=>{
        event.preventDefault();
        console.log('submit following info',data);
        ///we want to update table
        axios.put('/api/dogprofile/'+props.data.id, data)
        .then(res => {    
            res.status===200?alert("Intake Infosaved successfully"):console.log(res);
        })
        .catch(err => console.log('Error:',err))
    }
    return (<Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <Image src='https://www.pngkey.com/png/detail/204-2046914_diane-vulcan-shared-rhodesian-ridgeback.png' size='medium' circular />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Header as='h1'>Basic Info</Header>
                    <List bulleted>
                        <List.Item>Name: {props.data.dogName}</List.Item>
                        <List.Item>Age: {props.data.dogAge}</List.Item>
                        <List.Item>Breed: {props.data.dogBreed}</List.Item>
                        <List.Item>Gender: {props.data.dogGender}</List.Item>
                        <List.Item >
                            Owner Contact Information:
                            <List.List>
                                <List.Item>Name: {`${props.data.ownerFirstName} ${props.data.ownerLastName}`}</List.Item>
                                <List.Item>Phone: {props.data.ownerCellPhone}</List.Item>
                                <List.Item>Email: {props.data.ownerEmail}</List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>
                            Food Information:
                            <List.List>
                                <List.Item>Name: {props.data.foodName}</List.Item>
                                <List.Item>Amount: {props.data.foodAmount}</List.Item>
                                <List.Item>Time: {props.data.foodTime}</List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>Fixed: {props.data.fixed}</List.Item>
                        <List.Item>
                            Veterinarian Information:
                            <List.List>
                                <List.Item>Name: {props.data.vetName}</List.Item>
                                <List.Item>Phone: {props.data.vetPhone}</List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>Allergies: {props.data.allegires}</List.Item>
                        <List.Item>Medication: {props.data.medication}</List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row> 
            <Grid.Row stretched columns={2}>
                <Grid.Column width={8}>
                    <Segment>
                        <Header as='h3' >Issues</Header>
                        <List bulleted> 
                            {props.data.issueDetails.map((issue,index)=>{
                                issue?<List.Item>{issueHeader[i]}</List.Item>:''
                            })}
                        </List>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment>                        
                        <Header as='h3' >Extra Comments</Header>
                        <p>Extra Issues: {props.data.additionalIssues}</p>
                        <p>Owner Notes: {props.data.extraNotes===''?props.data.extraNotes:'None Provided'}</p>
                    </Segment>
                    <Segment>
                        <Header as='h3' >Known Commands</Header>
                        <p>{props.data.commands}</p>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            
            <Grid.Row stretched columns={1}>
                <Header as='h1' style={{marginLeft:'10px'}}>Intake Info (provided by trainer)</Header>
                <Grid.Column>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label = 'Heel'
                                options={heelOptions}
                                placeholder = 'Left'
                                value = {data.heel}
                                onChange = {handleDropdown}
                                name= 'heel'
                            />
                            <Form.Select
                                fluid
                                label = 'Program'
                                options={programOptions}
                                placeholder = 'Program'
                                onChange = {handleDropdown}
                                value = {data.program}
                                name= 'program'
                            />
                            <Form.Input 
                                fluid 
                                label='Intake Date' 
                                name='dateofIntake' 
                                type='date' 
                                value = {data.dateofIntake}
                                onChange = {handleInput}
                            />
                        </Form.Group>
                        <Form.Button positive onClick={handleClick}>Save</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
        </Grid>
    );
};