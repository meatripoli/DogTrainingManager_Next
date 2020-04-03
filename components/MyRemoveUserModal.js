import MyModal from '../components/MyModal';
import TableTemplate from '../components/TableTemplate';
import {Message} from 'semantic-ui-react';

import {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
    ///setting up userdata variable
    const loadingUsers =[{
        user:'Loading',
        adminflag:'Loading',
        password:'Loading'
    }];
    const [users,setUsers] = useState(loadingUsers);
    //when first loading pull all the users from database
    useEffect(() => {
        axios.get('/api/users')
        .then(res => {
            setUsers(res.data.map(row=>({ user: row.user,password: '******', adminflag: row.adminflag?'yes':'no' ,id: row.id })));
        })
        .catch(err => console.log('Error:',err));
    },[]);

    //set variable for adding a user
    const [removeUser,setRemoveUser] = useState({
        username: '',
        admin:false,
        id:0,
        error: {
            status: true,
            title: '',
            text: 'Are you sure you want to delete account?'
        }
    });
    
    //handles closing modal when button inside modal is clicked
    const handleButton = async (event,rowdata)=>{
        let response;
        let newObj;
        event.preventDefault();
        //changes state of modal from open to closed
        try{
            response = await axios.delete('/api/users',{data:rowdata});
            if(response.data.status===409){
                setTimeout(function(){ window.location.reload(false); }, 3000);
                setRemoveUser({
                    username: '',
                    admin:false,
                    id:0,
                    error: {
                        status: true,
                        title: 'Error deleting an admin user!',
                        text: 'You do not have permissions'
                    }
                });
            }
            else if(response.status===200){
                window.location.reload(false);
                setRemoveUser({
                    username: '',
                    admin:false,
                    id:0,
                    error: {
                        status: true,
                        title: '',
                        text: 'Are you sure you want to delete account?'
                    }
                })
            };
        }
        catch(e){
            setTimeout(function(){ window.location.reload(false); }, 3000);
            newObj = {
                error:{
                    status: true,
                    title: 'ERROR',
                    text: 'Issue deleting user'
                }
            };
            setRemoveUser({...removeUser,...newObj}); 
        };
    };

    const mymodal = (rowdata,text) => {
        return<>{text}
            <MyModal
            buttonLocation='right' 
            buttonName='Remove' 
            icon='trash' 
            title={`Delete ${rowdata.user}`}
            handleButton={(e)=>handleButton(e,rowdata)}
            current={rowdata}
            >
                <Message
                    error={removeUser.error.status}
                    header={removeUser.error.title}
                    content={removeUser.error.text}
                />
            </MyModal></>
    };
    
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
    }];
    return <TableTemplate header={headerData} table={users} />;
};