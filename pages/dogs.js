import InternalLayout from '../components/InternalLayout';
import TableTemplate from '../components/TableTemplate';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Link from 'next/link';

export default (props) => {
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
    const nameInfo = (rowData)=> <Link href='/dogprofile/[name]' as={`/dogprofile/${rowData.id}`}><a>{rowData.dogName}</a></Link>
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
            });
        }));
    }
    useEffect(() => {
        axios.get('/api/dogs')
        .then(res => {
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
        <InternalLayout adminFlag='y'>
            <TableTemplate header={headerData} table={data}>
            </TableTemplate>
        </InternalLayout>
    </>
}