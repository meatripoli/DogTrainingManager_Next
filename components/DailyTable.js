import { Form,Header,Grid } from 'semantic-ui-react';
import {useState} from 'react';
import axios from 'axios';

const level = [
    { key: '0', text: '', value: 0 },
    { key: '1', text: '1 - Leash Pressure', value: 1 },
    { key: '2', text: '2 - E-Collar Pressure', value: 2 },
    { key: '3', text: '3 - No Pressure', value: 3 },
];
export default (props) => {
    const [data,setData] = useState({
        id:props.note.id,
        dogID: props.dogID,
        peed: props.note.peed?props.note.peed:false,
        pooped: props.note.pooped?props.note.pooped:false,
        pottyNotes: props.note.pottyNotes?props.note.pottyNotes:null,
        ate: props.note.ate?props.note.ate:false ,
        feedingNotes: props.note.feedingNotes?props.note.feedingNotes:null,
        sit: props.note.sit?props.note.sit:0,
        sitDuration: props.note.sitDuration?props.note.sitDuration:false,
        sitDistance: props.note.sitDistance?props.note.sitDistance:false,
        sitNotes: props.note.sitNotes?props.note.sitNotes:null,
        down: props.note.down?props.note.down:0,
        downDuration: props.note.downDuration?props.note.downDuration:false,
        downDistance: props.note.downDistance?props.note.downDistance:false,
        downNotes: props.note.downNotes?props.note.downNotes:null,
        place: props.note.place?props.note.place:0,
        placeDuration: props.note.placeDuration?props.note.placeDuration:false,
        placeDistance: props.note.placeDistance?props.note.placeDistance:false,
        placeNotes: props.note.placeNotes?props.note.placeNotes:null,
        heel: props.note.heel?props.note.heel:0,
        heelDuration: props.note.heelDuration?props.note.heelDuration:false,
        heelDistance: props.note.heelDistance?props.note.heelDistance:false,
        heelNotes: props.note.heelNotes?props.note.heelNotes:null,
        recall: props.note.recall?props.note.recall:0,
        recallDuration: props.note.recallDuration?props.note.recallDuration:false,
        recallDistance: props.note.recallDistance?props.note.recallDistance:false,
        recallNotes: props.note.recallNotes?props.note.recallNotes:null,
        letsGo: props.note.letsGo?props.note.letsGo:0,
        letsGoDuration: props.note.letsGoDuration?props.note.letsGoDuration:false,
        letsGoDistance: props.note.letsGoDistance?props.note.letsGoDistance:false,
        letsGoNotes: props.note.letsGoNotes?props.note.letsGoNotes:null,
        doorManners: props.note.doorManners?props.note.doorManners:0,
        doorMannersDuration: props.note.doorMannersDuration?props.note.doorMannersDuration:false,
        doorMannersDistance: props.note.doorMannersDistance?props.note.doorMannersDistance:false,
        doorMannersNotes: props.note.doorMannersNotes?props.note.doorMannersNotes:null,
        outing: props.note.outing?props.note.outing:null,
        outingNotes: props.note.outingNotes?props.note.outingNotes:null
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
    const handleNewSubmit = async (event)=>{
        let response;
        event.preventDefault();
        try{
            //if id=0 post new note else update existing note
            response = data.id===0?
                await axios.post('/api/dogprofile/'+props.dogID, data):
                await axios.put('/api/dogprofile/'+props.dogID, data);
            if(response.status===200){
                // console.log(response.data.message);
                //add how to handle submission success
            };
        }
        catch(e){
            // console.log('Error:',e)
            //add how to handle submission error
        }
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
                    <Form.TextArea label='Notes' name='pottyNotes' value={data.pottyNotes || ''} placeholder='Potty Notes' onChange={handleInput}/> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Group inline >
                        <label>Ate</label>
                        <Form.Checkbox name='ate' checked= {data.ate} onClick={handleCheckbox}/>
                    </Form.Group>
                    <Form.TextArea label='Notes' name='feedingNotes' value={data.feedingNotes || ''} placeholder='Feeding Notes' onChange={handleInput}/> 
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
                    <Form.TextArea label='Notes' name='sitNotes' placeholder='Sit Notes' value={data.sitNotes || ''} onChange={handleInput}/> 
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
                    <Form.TextArea label='Notes' name='downNotes' placeholder='Down Notes' value={data.downNotes || ''} onChange={handleInput}/>
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
                    <Form.TextArea label='Notes' name='placeNotes' placeholder='Place Notes' value={data.placeNotes || ''} onChange={handleInput}/>
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
                    <Form.TextArea label='Notes' name='heelNotes' placeholder='Heel Notes' value={data.heelNotes || ''} onChange={handleInput}/>
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
                    <Form.TextArea label='Notes' name='recallNotes' placeholder='Recall Notes' value={data.recallNotes || ''} onChange={handleInput}/>
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
                    <Form.TextArea label='Notes' name='letsGoNotes' placeholder="Let's Go Notes" value={data.letsGoNotes || ''} onChange={handleInput}/>
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
                    <Form.TextArea label='Notes' name='doorMannersNotes' placeholder='Door Manners Notes' value={data.doorMannersNotes || ''} onChange={handleInput}/> 
                </Grid.Column>
                <Grid.Column>
                    <Form.Input fluid label='Outing' onChange={handleInput} name='outing' placeholder='Name of Location' style={{marginBottom:'45px'}}/>
                    <Form.TextArea label='Notes' placeholder='Outing Notes' name='outingNotes' value={data.outingNotes || ''} onChange={handleInput}/> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Form.Button positive onClick={handleNewSubmit}>Save</Form.Button>
    </Form>);
};