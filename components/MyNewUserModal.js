import MyModal from '../components/MyModal';

import {useState} from 'react';
import axios from 'axios';
import {Form,Message} from 'semantic-ui-react';

export default () => {
    //set variable for adding a user
    const [newUser,setNewUser] = useState({
        username: '',
        admin:false,
        id:0,
        password: '',
        error: {
            status: false,
            title: '',
            text: 'Please enter new user information'
        }
      });
    //handles closing modal when button inside modal is clicked
    const handleButton = async (event)=>{
        event.preventDefault();
        //changes state of modal from open to closed
        try{
            //send newUser to database
            let response = await axios.post('/api/users',newUser);
            //refreshes page to reload table data
            window.location.reload(false);
            //this clears object
            setNewUser({
                username: '',
                adminflag:false,
                id:0,
                password: '',
                error: {
                    status: false,
                    title: '',
                    text: 'Please enter new user information'
                }
            });
        }
        catch(e){
            //handles errors
            let newObj
            if(e.response.status===409){
                newObj = {
                    error:{
                        status: true,
                        title: 'Username Conflict',
                        text: 'Please enter a different username.'
                    }
                };            
            }
            else{
                newObj = {
                    error:{
                        status: true,
                        title: 'Error',
                        text: 'Issue adding new user.'
                    }
                };
            }  
            setNewUser({...newUser,...newObj});
        }
    };
    //handles form input
    const handleInput = (event)=>{
        let newObj = {[event.target.name]:event.target.value};        
        setNewUser({...newUser,...newObj});
    }; 
    //handles form checkbox 
    const handleCheckBox = (event,item) => {
        let newObj = {[item.name]: item.checked};
        setNewUser({...newUser,...newObj});
    };
    return <MyModal
    buttonColor='green'
    buttonLocation='right' 
    handleButton={(e)=>handleButton(e)}
    buttonName='New User'
    icon='plus' 
    title='Add a new user'>
        <Form error size="large">
            <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name='username'
                type='text'
                onChange={handleInput}
            />
            <Form.Input
                required
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name='password'
                onChange={handleInput}
            />
            <Form.Checkbox label='Administrator' name='admin' onChange={handleCheckBox}/>
            <Message
                error={newUser.error.status}
                header={newUser.error.title}
                content={newUser.error.text}
                />
        </Form>
    </MyModal>
}