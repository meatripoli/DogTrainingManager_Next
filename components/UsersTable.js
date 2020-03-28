import TableTemplate from './TableTemplate';
import ModalLayout from './ModalLayout';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default (props) => {
    const loadingData =[{
        id:0,
        user:'Loading',
        adminflag:'Loading',
        password:'Loading'
    }]
    const [data,setData] = useState(loadingData);
    ///when first loading pull all the users from database and display them
    //const tableData = data.length===0? loadingData:data
    useEffect(() => {
        axios.get('/api/users')
        .then(res => {
            setData(res.data.map(row=>({ user: row.user,password: '******', adminflag: row.adminflag?'yes':'no' ,id: row.id })));
        })
        .catch(err => console.log('Error:',err))
    },[]);
    //to edit user info click on name and a pop up will ask you 
    const mymodal = (text,rowdata) => <>
        {text}
        <ModalLayout 
            buttonLocation='right' 
            buttonName='Remove' 
            icon='trash' 
            title='Delete user'
            modalContent={<p>{`Are you sure you want to delete ${rowdata.user} account?`}</p>}
            current={rowdata}
        /></>
    let headerData = [{
        tableHeaderName:'user',
        name: 'Username',
        clickFunction: '',
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'password',
        name: 'Password',
        clickFunction: '',
        haschildren: false,
        children: ''
    },
    {
        tableHeaderName:'adminflag',
        name: 'Administrator',
        clickFunction: '',
        haschildren: true,
        children: mymodal
    }]
    console.log('inside /dogs',props)
    return <TableTemplate header={headerData} table={data} />
};