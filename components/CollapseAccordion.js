import { useState } from 'react';
import { Accordion, Segment } from 'semantic-ui-react';
import DailyTable from './DailyTable';


export default (props) => {
    const [state,setState] = useState(
        { 
            activeIndex: 0,
            index: {},
        }
    )

    const handleClick = (e,titleProps) => {
        console.log('inside Click event',titleProps)
        const newObj = { 
            activeIndex: titleProps.index,
            index: titleProps,
        }
        setState(newObj);
    }

    console.log(state)
    return (
        <Accordion 
        fluid 
        exclusive={false}>
            <Segment>
                <Accordion.Title index={0} active={state.activeIndex === 0} onClick={handleClick}>
                    Today (3/30/2020)
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 0}>
                    Test Content 1
                    <DailyTable/>
                </Accordion.Content>
            </Segment>
            <Segment>
                <Accordion.Title index={1} active={state.activeIndex === 1} onClick={handleClick}> 
                    Yesterday (3/29/2020)
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 1}>
                    Test Content 2
                    <DailyTable/>
                </Accordion.Content>
            </Segment>
            <Segment>
                <Accordion.Title index={2} active={state.activeIndex === 2} onClick={handleClick}>
                    3/28/2020
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 2}>
                    Test Content 3
                    <DailyTable/>
                </Accordion.Content>
            </Segment>
        </Accordion>
    )
}
