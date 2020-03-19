import {Grid,Header, Message, Segment} from 'semantic-ui-react';

export default (props) => (
    <Grid centered columns={props.columnNum} style={{marginTop: '20px'}}>
        <Grid.Column>
            <Header as="h2" textAlign="center">
                {props.header}
            </Header>
            <Segment>
                {props.children}
            </Segment>
            {props.message !=='' && <Message>{props.message}</Message>}
        </Grid.Column>
    </Grid>
)