import { Accordion, Segment } from 'semantic-ui-react';
import DailyTable from './DailyTable';
import {useEffect,useContext,useState} from 'react';
import axios from 'axios';
import UserContext from './util/UserContext';

//offset is based on GMT/UTC you can look up number by navigating to https://greenwichmeantime.com/time-zone/definition/
const calcTime = (offset,days) => {
    //if days is not defined then look at today
    days?days:0;
    // create Date in UTC
    var d = new Date();
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));
    // return time as a string
    return nd.toLocaleString();
}
export default (props) => {
    const {dogInfo} = useContext(UserContext);
    const [dailyNotes, setDailyNotes] = useState([{
        id:0,
        data: 'Loading'
    }]);
    useEffect(()=>{
        axios.get('/api/dogprofile/'+dogInfo.id)
        .then((res)=>{
            setDailyNotes(res.data.data);
        })
    },[]);
    console.log(dailyNotes)
    
    const [state,setState] = useState({ 
        activeIndex: 0,
        index: {},
    });
    const today = calcTime(-5).split(',')[0]
    console.log(today)
    console.log(moment().format("MMM Do YY"))

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
            {dailyNotes.length<2?
            <Segment style={{background:'#b5b5b5'}}>
                <Accordion.Title index={0} active={state.activeIndex === 0} onClick={handleClick}>
                    <h2>Today {today}</h2>
                </Accordion.Title>
                <Accordion.Content active={state.activeIndex === 0}>
                    <DailyTable data={dailyNotes[0] || null} />
                </Accordion.Content>
            </Segment>:<div>there are more then 1 notes</div>
            }
        </Accordion>
    );
};

/*
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
*/