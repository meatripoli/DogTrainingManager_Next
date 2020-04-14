import { Accordion, Segment } from 'semantic-ui-react';
import DailyTable from './DailyTable';
import {useEffect,useContext,useState} from 'react';
import axios from 'axios';
import UserContext from './util/UserContext';
import {DateTime} from 'luxon';

//hardcoded timechange to UTC -5 hrs in line 13,16,22,25
const formatDate = (date,fromSQL)=>{
    if(fromSQL){
        //clean up the date from SQL before formatting as mm/dd/yyyy
        date=date.replace("T"," ").replace("Z","");
        return DateTime.fromSQL(date).minus({hours: 5}).toLocaleString(DateTime.DATE_SHORT)
    }
    //today's date formatted as mm/dd/yyyy
    return date.minus({hours: 5}).toLocaleString(DateTime.DATE_SHORT)
}
const formatTime = (date,fromSQL)=>{
    if(fromSQL){
        //clean up the date from SQL before formatting as mm/dd/yyyy
        date=date.replace("T"," ").replace("Z","");
        return DateTime.fromSQL(date).minus({hours: 5}).toLocaleString(DateTime.TIME_SIMPLE)
    }
    //today's date formatted as mm/dd/yyyy
    return date.minus({hours: 5}).toLocaleString(DateTime.TIME_SIMPLE)
}
export default (props) => {
    const {dogInfo} = useContext(UserContext);
    const emptyNote = {
        id:0,
        dogID: null,
        peed: null,
        pooped: null,
        pottyNotes: null,
        ate: null,
        feedingNotes: null,
        sit: null,
        sitDuration: null,
        sitDistance: null,
        sitNotes: null,
        down: null,
        downDuration: null,
        downDistance: null,
        downNotes: null,
        place: null,
        placeDuration: null,
        placeDistance: null,
        placeNotes: null,
        heel: null,
        heelDuration: null,
        heelDistance: null,
        heelNotes: null,
        recall: null,
        recallDuration: null,
        recallDistance: null,
        recallNotes: null,
        letsGo: null,
        letsGoDuration: null,
        letsGoDistance: null,
        letsGoNotes: null,
        doorManners: null,
        doorMannersDuration: null,
        doorMannersDistance: null,
        doorMannersNotes: null,
        outing: null,
        outingNotes: null,
        createdAt: null,
        updatedAt: null
    }
    const [dailyNotes, setDailyNotes] = useState([emptyNote]);
    const today = formatDate(DateTime.local(),false);
    useEffect(()=>{
        axios.get('/api/dogprofile/'+dogInfo.id)
        .then((res)=>{
            //check what day first note was created 
            let array=res.data.data;
            if(array.length === 0 || today!=formatDate(array[0].createdAt,true)){
                //if a notes for today was not create prepend empty note to results before setting dailyNotes
                array.unshift(emptyNote);
                setDailyNotes(array);
            }
            else{
                //if a note was created today set dailyNotes to result
                setDailyNotes(array);
            };
        });
    },[]);
    
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
    return (<Accordion 
        fluid 
        exclusive={false}>
            {dailyNotes.map((note,index)=>{
                let createDate = note.createdAt ? formatDate(note.createdAt,true) : today;
                return (<Segment key={index} style={{background:'#b5b5b5'}}>
                    <Accordion.Title index={index} active={state.activeIndex === index} onClick={handleClick}>
                    {note.updatedAt ? <h2>{createDate} - Last updated on {formatDate(note.updatedAt,true)} at {formatTime(note.updatedAt,true)}</h2>:<h2>{createDate}</h2>}
                    </Accordion.Title>
                    <Accordion.Content active={state.activeIndex === index}>
                        <DailyTable dogID={props.data.id} note={note}/>
                    </Accordion.Content>
                </Segment>)})}
        </Accordion>
    );
};