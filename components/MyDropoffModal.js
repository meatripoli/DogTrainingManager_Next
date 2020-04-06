import MyModal from '../components/MyModal';
import TableTemplate from '../components/TableTemplate';
import UserContext from '../components/util/UserContext';

import {Message, Form, Button, Icon} from 'semantic-ui-react';
import router from 'next/router'
import Link from 'next/link'; 
import {useState, useEffect,useContext} from 'react';
import axios from 'axios';

export default () => {
    const {dogInfo,handleDogInfo} = useContext(UserContext);
    ///setting up table data variable
    const loadingData =[{
        id: 0,
        dogName:'Loading',
    }];
    const [data,setData] = useState(loadingData);
    const [error,setError] = useState({
        status: null,
        title: null,
        text: null,
        hidden: true
    })
    //when first loading pull all the dogs from database
    useEffect(() => {
        axios.get('/api/dogs')
        .then(res => {
            createTableData(res.data);
        })
        .catch(err => console.log('Error:',err))
    },[]);
    
    //dropdown options for the modal
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
    //getting data ready for table format
    const createTableData = (array)=>{
        setData( array.map(object=>{
            return ({
                id: object.id,
                dogName: object.dogName,
                dogAge: object.dogAge,
                dogBreed: object.dogBreed,
                dogGender: object.dogGender,
                fixed: object.fixed,
                ownerFirstName:object.ownerFirstName,
                ownerLastName: object.ownerLastName,
                ownerCellPhone: object.ownerCellPhone,
                ownerEmail:object.ownerEmail,
                vetName:object.vetName,
                vetPhone:object.vetPhone,
                foodName:object.foodName,
                foodAmount:object.foodAmount,
                foodTime:object.foodTime,
                issueHeader:['dogAggressive','humanAggressive','fearful','leashPulling','doesntListenWhenCalled','toyAggression','foodAggression','separationAnxiety','barking','listenSometimes','counterSurfing','lungingAtDogs','lungingAtHumans','jumping','improperHouseManners'],
                issueDetails:[object.dogAggressive,object.humanAggressive,object.fearful,object.leashPulling,object.doesntListenWhenCalled,object.toyAggression,object.foodAggression,object.separationAnxiety,object.barking,object.listenSometimes,object.counterSurfing,object.lungingAtDogs,object.lungingAtHumans,object.jumping,object.improperHouseManners],                
                additionalIssues: object.additionalIssues,
                commands: object.commands,
                toys: object.toys,
                allegires: object.allegires,
                medication: object.medication,
                medicationInfo: object.medicationInfo,
                medicalIssues: object.medicalIssues,
                dogFlu: object.dogFlu,
                ageFixed: object.ageFixed,
                dateofCycle: object.dateofCycle,
                heartwormFleaMedication: object.heartwormFleaMedication,
                nameAndDose: object.nameAndDose,
                extraNotes: object.extraNotes,
                referal: object.referal,
                ownerAddress: object.ownerAddress,
                ownerCity: object.ownerCity,
                ownerState: object.ownerState,
                ownerZip: object.ownerZip,
                emergencyContactFirstName: object.emergencyContactFirstName,
                emergencyContactLastName: object.emergencyContactLastName,
                emergencyContactCellPhone: object.emergencyContactCellPhone,
                status: object.status,
                heel: object.heel,
                program: object.program,
                dateofIntake: myDateFormat(object.dateofIntake),
                createdAt: object.createdAt,
                updatedAt: object.updatedAt,
            });
        }));
    }
    //text format for Owner Info, Vet Info, Food Info Columns
    const ownerInfo = (rowData)=>{ return <>
        <p>
            <span style={{fontWeight:"bold"}}>{'Name: '}</span>
            {`${rowData.ownerFirstName} ${rowData.ownerLastName}`}
        </p>
        <p>
            <span style={{fontWeight:"bold"}}>{'Phone: '}</span>
            {rowData.ownerCellPhone}
        </p>
        <p>
            <span style={{fontWeight:"bold"}}>{'Email: '}</span>
            {rowData.ownerEmail}
        </p>
    </>}
    const vetInfo = (rowData)=>{ return <>
        <p>
            <span style={{fontWeight:"bold"}}>{'Name: '}</span>
            {rowData.vetName}
        </p>
        <p>
            <span style={{fontWeight:"bold"}}>{'Phone: '}</span>
            {rowData.vetPhone}
        </p>
    </>}
    const foodInfo = (rowData)=>{ return <>
        <p>
            <span style={{fontWeight:"bold"}}>{'Name: '}</span>
            {rowData.foodName}
        </p>
        <p>
            <span style={{fontWeight:"bold"}}>{'Cups a day: '}</span>
            {rowData.foodAmount}
        </p>
        <p>
            <span style={{fontWeight:"bold"}}>{'Times: '}</span>
            {rowData.foodTime}
        </p>
    </>}
    const statusInfo = (rowData)=>{ 
        let newObj = {
            color:'gray',
            text:'Inactive - '
        };
        if (rowData.status==='active') {
            newObj = {
                color: rowData.program?'green':'red',
                text: 'Active - '
            }
        }
        return <>      
        <p style={{color:newObj.color}}>
            <span style={{fontWeight:"bold"}}>{newObj.text}</span>
            {rowData.program || 'new'}
        </p>
    </>}
    //formats the date for the modal input date field
    const myDateFormat=(date)=>{
        const convertDate= typeof date ==='string'? 
            `${date.substring(0,4)}-${date.substring(5,7)}-${date.substring(8,10)}`: null;
        return convertDate;
    }
    //Dropoff Modal dropdown, date input and button functions
    const handleButton = async (event,rowdata)=>{
        let response;
        handleDogInfo({...rowdata,...dogInfo});
        event.preventDefault();
        try{
            response = await axios.put('/api/dogprofile/'+dogInfo.id, dogInfo)
            if(response.status===200){
                console.log("Dropoff Info saved successfully")
                setError({
                    color: 'green',
                    title: 'Success!',
                    text: "Dropoff information saved successfully",
                    hidden: false
                })
                setTimeout(function(){ window.location.reload(false); }, 3000);
            };
        }
        catch(e){
            console.log('Error:',err)
            setError({
                color: 'red',
                title: 'Failed!',
                text: "Dropoff information not saved",
                hidden: false
            })
            setTimeout(function(){ window.location.reload(false); }, 3000);
        }
    };
    const handleInput = (event)=>{
        let newObj = 
        [event.target.name] === 'dateofIntake'?
            {[event.target.name]:myDateFormat(event.target.value)}:
            {[event.target.name]:event.target.value};
        handleDogInfo({...dogInfo,...newObj});
    }
    const handleDropdown = (event,item)=>{
        let newObj = {[item.name]: item.value};
        handleDogInfo({...dogInfo,...newObj});
    }
    //Dropoff Modal
    const dropoffModal = (rowdata) => {
        
        return<MyModal
            buttonLocation='right' 
            buttonName='Dropoff' 
            icon='edit' 
            title={`Dropoff form for ${rowdata.dogName}`}
            handleButton={(e)=>handleButton(e,rowdata)}
            current={rowdata}
            >
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Select
                            fluid
                            label = 'Heel'
                            options={heelOptions}
                            placeholder = 'Left'
                            name= 'heel'
                            value={dogInfo.heel || rowdata.heel || ''}
                            onChange = {handleDropdown}
                        />
                        <Form.Select
                            fluid
                            label = 'Program'
                            options={programOptions}
                            placeholder = 'Program'
                            name= 'program'
                            value={dogInfo.program || rowdata.program || ''}
                            onChange = {handleDropdown}
                        />
                        <Form.Input 
                            fluid 
                            label='Intake Date' 
                            name='dateofIntake' 
                            type='date' 
                            value={dogInfo.dateofIntake || rowdata.dateofIntake || ''}
                            onChange={handleInput}
                        />
                    </Form.Group>                    
                    <Message
                        hidden={error.hidden}
                        color={error.color}
                        header={error.title}
                        content={error.text}
                    />
                </Form>
            </MyModal>
    };
    //Profile functionality
    const handleProfileButton = (event,rowData)=>{
        handleDogInfo(rowData);
    }
    const profileButton = (rowdata)=><Link href='/dogprofile/[name]' as={`/dogprofile/${rowdata.dogName}`}><a onClick={(e)=>handleProfileButton(e,rowdata)}>{rowdata.dogName}</a></Link>
    //header array for table creation
    let headerData = [{
        tableHeaderName:'dogName',
        name: 'Dog Name',
        clickFunction: '',
        haschildren: true,
        children: profileButton
    },
    {
        tableHeaderName:'dogAge',
        name: 'Age',
        clickFunction: '',
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'dogBreed',
        name: 'Breed',
        clickFunction: '',
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'dogGender',
        name: 'Gender',
        clickFunction: '',
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'ownerInfo',
        name: 'Owner Contact Information',
        clickFunction: '',
        haschildren: true,
        children: ownerInfo
    },
    {
        tableHeaderName:'foodInfo',
        name: 'Food Information',
        clickFunction: '',
        haschildren: true,
        children: foodInfo
    },
    {
        tableHeaderName:'fixed',
        name: 'Fixed',
        clickFunction: '',
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'vetInfo',
        name: 'Veterinarian Information',
        clickFunction: '',
        haschildren: true,
        children: vetInfo
    },
    {
        tableHeaderName:'status',
        name: 'Status',
        clickFunction: '',
        haschildren: true,
        children: statusInfo
    },
    {
        tableHeaderName:'dropoff',
        name: 'Dropoff Form',
        clickFunction: '',
        haschildren: true,
        children: dropoffModal
    }];
    
    return <TableTemplate header={headerData} table={data} />;
};