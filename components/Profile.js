import { Segment,Grid,Image,List,Form,Header } from 'semantic-ui-react';

const programOptions = [
    { key: 'o', text: '', value: 'other' },
    { key: 'b', text: 'Boarding', value: 'boarding' },
    { key: 'bt', text: 'Board & Train', value: 'board and train' },    
    { key: 't', text: 'Train', value: 'train' },
    { key: 'g', text: 'Going Home', value: 'gohome' },
]
const heelOptions = [
    { key: 'l', text: 'Left', value: 'left' },
    { key: 'r', text: 'Right', value: 'right' },
]
export default (props) => {
    return (<Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image src='https://www.pngkey.com/png/detail/204-2046914_diane-vulcan-shared-rhodesian-ridgeback.png' size='medium' circular />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Header as='h1'>Basic Info</Header>
                    <List>
                        <List.Item>Name: Bailey</List.Item>
                        <List.Item>Age: 7</List.Item>
                        <List.Item>Breed: Rhodesian Ridgeback Mix</List.Item>
                        <List.Item>Gender: female</List.Item>
                        <List.Item>Owner Contact Information: Name: Maria Tripoli Phone: 13214310659 Email: meatripoli@gmail.com</List.Item>
                        <List.Item>Food Information: Name: Nature's Logic Sardine flavor Amount: 4 Time: Morning and Evening</List.Item>
                        <List.Item>Fixed: yes</List.Item>
                        <List.Item>Veterinarian Information: Name: Parmer Lane Pet Hospital Phone: 512-260-5443</List.Item>
                        <List.Item>Allergies: (if blank) None Provided</List.Item>
                        <List.Item>Medication: (if blank) None Provided</List.Item>
                    </List>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Select
                                fluid
                                label = 'Heel'
                                options={heelOptions}
                                placeholder = 'Left'
                                value = {heelOptions[0].value}
                            />
                            <Form.Select
                                fluid
                                label = 'Program'
                                options={programOptions}
                                placeholder = 'Program'
                            />
                            <Form.Input 
                                fluid 
                                label='Intake Date' 
                                name='dateofCycle' 
                                type='date' 
                            />
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{marginLeft:'10px'}}>
                <Header as='h1' >Training Info (provided by owner)</Header>
            </Grid.Row>
            <Grid.Row stretched>                    
                <Grid.Column width={8}>
                    <Segment>
                        <Header as='h3' >Issues</Header>
                        <List>
                            <List.Item>None Provided</List.Item>
                        </List>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment>                        
                        <Header as='h3' >Extra Comments</Header>
                        <p>Extra Issues: She is too stinking cute for her own good</p>
                        <p>Owner Notes: (if blank) None Provided</p>
                    </Segment>
                    <Segment>
                        <Header as='h3' >Known Commands</Header>
                        <p>All of them</p>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>)
}
