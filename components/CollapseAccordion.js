import { useState } from 'react';
import { Accordion, Segment } from 'semantic-ui-react';
import DailyTable from './DailyTable';


export default (props) => {
    const [state,setState] = useState({ 
        activeIndex: 0,
        index: {},
    });

    const handleClick = (e,titleProps) => {
        const newObj = { 
            activeIndex: state.activeIndex === titleProps.index ? -1 : titleProps.index ,
            index: titleProps,
        }
        setState(newObj);
    };

    return (
        <Accordion 
        fluid 
        exclusive={false}>
            <Segment style={{background:'#b5b5b5'}}>
                <Accordion.Title index={0} active={state.activeIndex === 0} onClick={handleClick}>
                    <h2>Today (3/30/2020)</h2>
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 0}>
                    <DailyTable dogID={props.data.id}/>
                </Accordion.Content>
            </Segment>
            <Segment style={{background:'#b5b5b5'}}>
                <Accordion.Title index={1} active={state.activeIndex === 1} onClick={handleClick}> 
                    <h2>Yesterday (3/29/2020)</h2>
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 1}>
                    <DailyTable dogID={props.data.id}/>
                </Accordion.Content>
            </Segment>
            <Segment style={{background:'#b5b5b5'}}>
                <Accordion.Title index={2} active={state.activeIndex === 2} onClick={handleClick}>                   
                    <h2>3/28/2020</h2>
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 2}>
                    <DailyTable dogID={props.data.id}/>
                </Accordion.Content>
            </Segment>
        </Accordion>
    );
};
