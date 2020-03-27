import { Table, Button, Icon } from 'semantic-ui-react';
import ModalLayout from '../components/ModalLayout';
import RegisterUser from '../components/RegisterUser';
import {useEffect,useState} from 'react';
import axios from 'axios';

const ModalContent = (props) => <p>{props.text}</p>;
const ModalAction = (props) => <Button positive content='OK' onClick={props.handleButton}/>

export default (props)=>{
    const loadingData =[{
        id:0,
        user:'Loading',
        adminflag:'Loading',
        password:'Loading'
    }]
    const [data,setData] = useState([]);
    ///when first loading pull all the users from database and display them
    const tableData = data.length===0? loadingData:data
    useEffect(() => {
        axios.get('/api/users')
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log('Error:',err))
    },[]);
    //to edit user info click on name and a pop up will ask you 
    return(
        <Table basic='very' striped sortable celled >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                    //sorted={column === 'name' ? direction : null}
                    //onClick={}
                    >
                    Username
                    </Table.HeaderCell>
                    <Table.HeaderCell
                    //sorted={column === 'age' ? direction : null}
                    //onClick={}
                    >
                    Password
                    </Table.HeaderCell>
                    <Table.HeaderCell
                    //sorted={column === 'gender' ? direction : null}
                    //onClick={}
                    >
                    Admin
                    </Table.HeaderCell>
                    
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {tableData.map(({ user,adminflag,id }) => (
                <Table.Row key={id} >
                    <Table.Cell>{user}</Table.Cell>
                    <Table.Cell>******</Table.Cell>
                    <Table.Cell>
                        {adminflag===true?'yes':'no'}
                        {/* <ModalLayout 
                            buttonLocation='right' 
                            buttonName='Edit' 
                            icon='pencil alternate' 
                            title='Edit user'
                            modalActions={<ModalAction />}
                            current={{user:user,adminflag:adminflag,id:id}}
                        >
                        </ModalLayout> */}
                        <ModalLayout 
                            buttonLocation='right' 
                            buttonName='Remove' 
                            icon='trash' 
                            title='Delete user'
                            modalContent={<ModalContent text={`Are you sure you want to delete ${user} account?`}/>}
                            modalActions={<ModalAction />}
                            current={{user:user,adminflag:adminflag,id:id,password:''}}
                        >
                        </ModalLayout>
                    </Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
    );
}

/*
tablemodalstate={modalstate}
            tablehandleModal={handleModal}
            tablehandleButton={handleButton}
            tableinputchange={handleInput}
            tablecheckboxchange={handleCheckBox}
            tableuser={user}
*/