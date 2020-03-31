import InternalLayout from '../components/InternalLayout';
import TableTemplate from '../components/TableTemplate';
import {useEffect,useState,useContext} from 'react';
import axios from 'axios';
import Link from 'next/link';
import UserContext from '../components/util/UserContext';

export default (props) => {
    const {dogdata,handleDogInfo} = useContext(UserContext);
    const loadingData =[{
        id: 0,
        dogName:'Loading',
        dogAge: '',
        dogBreed: '',
        dogGender: '',
        ownerFirstName:'',
        ownerLastName: '',
        ownerCellPhone: '',
        ownerEmail:'',
        fixed: '',
        vetName:'',
        vetPhone:'',
        foodName:'',
        foodAmount:'',
        foodTime:'',
    }];
    const [data,setData] = useState(loadingData);
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
            <span style={{fontWeight:"bold"}}>{'Amount: '}</span>
            {rowData.foodAmount}
        </p>
        <p>
            <span style={{fontWeight:"bold"}}>{'Time: '}</span>
            {rowData.foodTime}
        </p>
    </>}
    const nameInfo = (rowData)=> {
        useEffect(() => {
            handleDogInfo(rowData);
          }, [data]);
        return <Link href='/dogprofile/[name]' as={`/dogprofile/${rowData.dogName}`}><a>{rowData.dogName}</a></Link>
    }
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
                dateofIntake: object.dateofIntake,
                createdAt: object.createdAt,
                updatedAt: object.updatedAt,
            });
        }));
    }
    useEffect(() => {
        axios.get('/api/dogs')
        .then(res => {
            console.log(res.data)
            createTableData(res.data);
        })
        .catch(err => console.log('Error:',err))
    },[]);
    let headerData = [{
        tableHeaderName:'dogName',
        name: 'Dog Name',
        clickFunction: '',
        haschildren: true,
        children: nameInfo
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
    }];
    return <>
        <InternalLayout>
            <TableTemplate header={headerData} table={data}>
            </TableTemplate>
        </InternalLayout>
    </>
}