import InternalLayout from '../components/InternalLayout';
import TableTemplate from '../components/TableTemplate';
import ModalLayout from '../components/ModalLayout';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default (props) => {
    const loadingData =[{
        
    }]
    //const [data,setData] = useState(loadingData);
    ///when first loading pull all the users from database and display them
    //const tableData = data.length===0? loadingData:data
    // useEffect(() => {
    //     axios.get('/api/users')
    //     .then(res => {
    //         setData(res.data.map(row=>({ user: row.user,password: '******', adminflag: row.adminflag?'y':'n' ,id: row.id })));
    //     })
    //     .catch(err => console.log('Error:',err))
    // },[]);
    let headerData = [{
        tableHeaderName:'dogName',
        name: 'Dog Name',
        clickFunction: '',
        haschildren: false,
        children: ''
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
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'foodInfo',
        name: 'Food Information',
        clickFunction: '',
        haschildren: false,
        children: ''
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
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'status',
        name: 'Status',
        clickFunction: '',
        haschildren: false,
        children: ''
    }]

    let data = [{
        dogName:'Bailey',
        dogAge: 7,
        dogBreed: 'Rhodesian Ridgeback',
        dogGender: 'female',
        ownerInfo:`name: Maria Tripoli
        phone: 13214310659
        email: meatripoli@gmail.com`,
        foodInfo:`name: Nature's Logic Sardine flavor
        amount: 4
        time: Morning and Evening`,
        fixed: 'yes',
        vetInfo:`name: Parmer Lane Pet Hospital
        phone: 512-260-5443`,
        status: 'Boarding'

    }]
    console.log('inside /dogs',props)
    return <>
        <InternalLayout adminFlag='y'>
            <TableTemplate header={headerData} table={data}>
            </TableTemplate>
        </InternalLayout>
        </>
}