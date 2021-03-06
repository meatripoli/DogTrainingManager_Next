import {Grid, Image,  Header, Tab, List } from 'semantic-ui-react';

//props needed data for dog profile
export default (props) => {
    let dogAge = props.data.dogAge===1?`${props.data.dogAge} year old` :`${props.data.dogAge} years old`;
    let dogGender = props.data.dogGender?props.data.dogGender.charAt(0).toUpperCase() + props.data.dogGender.slice(1):'';
    let fixed=props.data.fixed==='yes'?'Fixed':'Not Fixed';
    let program=props.data.program?props.data.program.charAt(0).toUpperCase() + props.data.program.slice(1):'';
    const panes = [
        {
            menuItem: { key: 'dog', icon: 'paw', content: 'Dog Info'},
            render: () => <Tab.Pane attached={true}>
                <Grid >                    
                    <Grid.Row>
                        <Grid.Column width={8} style={{marginTop:'3%', textAlign:'center'}}>
                            <Header>{props.data.dogName || 'Loading'}</Header>
                            <p>{props.data.dogAge?dogAge : ''}</p>
                            <p>{dogGender}</p> 
                            <p>{props.data.dogBreed || ''}</p>
                            <p>{props.data.fixed?fixed : ''}</p> 
                            <p>{program}</p>               
                        </Grid.Column>
                        <Grid.Column width={8}>
                            {/* for now this image will be static but in later feature it will be uploaded */}
                            <Image  src={props.data.dogName?'https://www.pngkey.com/png/detail/204-2046914_diane-vulcan-shared-rhodesian-ridgeback.png':'https://react.semantic-ui.com/images/wireframe/image.png'} circular style={{width:'300px', height:'250px'}}/>          
                        </Grid.Column>
                    </Grid.Row>
                </Grid>                
            </Tab.Pane>,
        },
        {
            menuItem: { key: 'issues', icon: 'close', content: 'Issues'},
            render: () => <Tab.Pane attached={true}>
                {props.data.issueDetails.length===0?
                <List bulleted> 
                    {props.data.issueDetails.map((issue,index)=>{
                        issue?<List.Item>{issueHeader[i]}</List.Item>:''})}
                </List>:<p>None Provided</p>}
            </Tab.Pane>,
        },
        {
            menuItem: { key: 'knowncommands', icon: 'check', content: 'Known Commands'},
            render: () => <Tab.Pane attached={true}>
                <p>{props.data.commands===''?'None Provided':props.data.commands}</p>
            </Tab.Pane>,
        },
        {
            menuItem:  { key: 'contact', icon: 'address card', content: 'Contact' },
            render: () => <Tab.Pane attached={true}>
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <h3>Owner Information</h3>
                            <p>{`Name: ${props.data.ownerFirstName} ${props.data.ownerLastName}`}</p>
                            <p>Phone: {props.data.ownerCellPhone}</p>
                            <p>Email: {props.data.ownerEmail}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Owner Address</h3>
                            <p>{props.data.ownerAddress}</p>
                            <p>{`${props.data.ownerCity}, TX ${props.data.ownerZip}`}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Emergency Information</h3>
                            <p>{`Name: ${props.data.emergencyContactFirstName} ${props.data.emergencyContactLastName}`}</p>
                            <p>Phone: {props.data.emergencyContactCellPhone}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>,
        },
        {
            menuItem: { key: 'vet', icon: 'heartbeat', content: 'Veterinarian' },
            render: () => <Tab.Pane attached={true}>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <h3>Contact</h3>
                            <p>{props.data.vetName}</p>
                            <p>Phone: {props.data.vetPhone}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Medication</h3>
                            <p>{props.data.medication}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>,
        },
        {
            menuItem: { key: 'food', icon: 'shopping basket', content: 'Food' },
            render: () => <Tab.Pane attached={true}>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <h3>Information</h3>
                            <p>{props.data.foodName}</p>
                            <p>Cups per day: {props.data.foodAmount}</p>
                            <p>Times: {props.data.foodTime}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Allergies</h3>
                            <p>{props.data.allegires}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>,
        },
        {
            menuItem: { key: 'comments', icon: 'file alternate', content: 'Comments'},
            render: () => <Tab.Pane attached={true}>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <h3>Extra Issues</h3>
                            <p>{props.data.additionalIssues===''?'None Provided':props.data.additionalIssues}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h3>Owner Notes</h3>
                            <p>{props.data.extraNotes===''?'None Provided':props.data.extraNotes}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Tab.Pane>,
        },
    ]

    return (<Tab menu={{ fluid: true, vertical: true, pointing: true}} panes={panes} style={{marginBottom:'10px'}}/> )
}