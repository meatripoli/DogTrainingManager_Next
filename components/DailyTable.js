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
    const [data,setData] = useState({
        dogID: props.dogID,
        peed: false,
        pooped: false,
        pottyNotes: null,
        ate: false ,
        feedingNotes: null,
        sit: 0,
        sitDuration: false,
        sitDistance: false,
        sitNotes: null,
        down: 0,
        downDuration: false,
        downDistance: false,
        downNotes: null,
        place: 0,
        placeDuration: false,
        placeDistance: false,
        placeNotes: null,
        heel: 0,
        heelDuration: false,
        heelDistance: false,
        heelNotes: null,
        recall: 0,
        recallDuration: false,
        recallDistance: false,
        recallNotes: null,
        letsGo: 0,
        letsGoDuration: false,
        letsGoDistance: false,
        letsGoNotes: null,
        doorManners: 0,
        doorMannersDuration: false,
        doorMannersDistance: false,
        doorMannersNotes: null,
        outing: null,
        outingNotes: null
    })
    const handleInput= (event)=>{
        let newObj = {[event.target.name]:event.target.value};
        setData({...data,...newObj});
    }
    const handleDropdown= (event,item)=>{
        let newObj = {[item.name]:item.value};
        setData({...data,...newObj});
    }
    const handleCheckbox= (event,item)=>{
        let newObj = {[item.name]:item.checked};
        setData({...data,...newObj});
    }
    const handleNewSubmit = (event)=>{
        event.preventDefault();
        console.log(props.dogName)
        axios.post('/api/dogprofile/'+props.dogName, data)
        .then(res => {    
            res.status===200?alert("Daily Info saved successfully"):console.log(res);
        })
        .catch(err => console.log('Error:',err))
    }
    return (<Form style={{margin:'20px 20px 0px 10px'}}>
        <Grid divided='vertically'>
            <Header as='h3' textAlign='center'>Health Status </Header>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Form.Group inline >
                        <label>Peed</label>
                        <Form.Checkbox name='peed' checked= {data.peed} onClick={handleCheckbox}/>
                        <label>Pooped</label>
                        <Form.Checkbox name='pooped' checked= {data.pooped} onClick={handleCheckbox}/>
                    </Form.Group>
                    <Form.TextArea label='Potty Notes' name='pottyNotes' value={data.pottyNotes || ''} placeholder='Notes' onChange={handleInput}/> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group inline >
                        <label>Ate</label>
                        <Form.Checkbox name='ate' checked= {data.ate} onClick={handleCheckbox}/>
                    </Form.Group>
                    <Form.TextArea label='Feeding Notes' name='feedingNotes' value={data.feedingNotes || ''} placeholder='Notes' onChange={handleInput}/> 
                </Grid.Column>
            </Grid.Row>     
            <Header as='h3'  textAlign='center'>Training Status</Header>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Sit</label>
                        <Form.Select
                            fluid
                            name='sit'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.sit}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='sitDuration' checked= {data.sitDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='sitDistance' checked= {data.sitDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='sitNotes' placeholder='Notes' value={data.sitNotes || ''} onChange={handleInput}/> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Down</label>
                        <Form.Select
                            fluid
                            name='down'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.down}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='downDuration' checked= {data.downDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='downDistance' checked= {data.downDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='downNotes' placeholder='Notes' value={data.downNotes || ''} onChange={handleInput}/>
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Place</label>
                        <Form.Select
                            fluid
                            name='place'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.place}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='placeDuration' checked= {data.placeDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='placeDistance' checked= {data.placeDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='placeNotes' placeholder='Notes' value={data.placeNotes || ''} onChange={handleInput}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Heel</label>
                        <Form.Select
                            fluid
                            name='heel'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.heel}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='heelDuration' checked= {data.heelDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='heelDistance' checked= {data.heelDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='heelNotes' placeholder='Notes' value={data.heelNotes || ''} onChange={handleInput}/>
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Recall</label>
                        <Form.Select
                            fluid
                            name='recall'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.recall}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='recallDuration' checked= {data.recallDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='recallDistance' checked= {data.recallDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='recallNotes' placeholder='Notes' value={data.recallNotes || ''} onChange={handleInput}/>
                </Grid.Column>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Let's Go</label>
                        <Form.Select
                            fluid
                            name='letsGo'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.letsGo}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='letsGoDuration' checked= {data.letsGoDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='letsGoDistance' checked= {data.letsGoDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='letsGoNotes' placeholder='Notes' value={data.letsGoNotes || ''} onChange={handleInput}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Form.Group grouped>
                        <label>Door Manners</label>
                        <Form.Select
                            fluid
                            name='doorManners'
                            label=''
                            options={level}
                            placeholder=''
                            onChange={handleDropdown}
                            value={data.doorManners}
                        />
                        <Form.Group inline>
                            <Form.Checkbox name='doorMannersDuration' checked= {data.doorMannersDuration} label='Duration' onClick={handleCheckbox}/>
                            <Form.Checkbox name='doorMannersDistance' checked= {data.doorMannersDistance} label='Distance' onClick={handleCheckbox}/>
                        </Form.Group>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='doorMannersNotes' placeholder='Notes' value={data.doorMannersNotes || ''} onChange={handleInput}/> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Input fluid label='Location of Outing' onChange={handleInput} name='outing' placeholder='Lowes' style={{marginBottom:'45px'}}/>
                    <Form.TextArea label='Notes' placeholder='Notes' name='outingNotes' value={data.outingNotes || ''} onChange={handleInput}/> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Form.Button positive onClick={handleNewSubmit}>Save</Form.Button>
    </Form>);
};