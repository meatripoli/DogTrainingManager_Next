import { Table, Button, Icon } from 'semantic-ui-react';
import ModalLayout from '../components/ModalLayout';
import RegisterUser from '../components/RegisterUser';

const tableData = [
    { user: 'John', admin: 'y', gender: 'Male' },
    { user: 'Amber', admin: 'n', gender: 'Female' },
    { user: 'Leslie', admin: 'n', gender: 'Other' },
    { user: 'Ben', admin: 'n', gender: 'Male' },
  ]
const ModalContent = (props) => <p>{props.text}</p>;
const ModalAction = () => <Button positive content='OK' />

export default ()=>{

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
            {tableData.map(({ user,admin }) => (
                <Table.Row key={user}>
                    <Table.Cell>{user}</Table.Cell>
                    <Table.Cell>******</Table.Cell>
                    <Table.Cell>
                        {admin}
                        <ModalLayout 
                            buttonLocation='right' 
                            buttonName='Edit' 
                            icon='pencil alternate' 
                            title='Edit user'
                            modalContent={<RegisterUser title='Edit user'/>}
                            modalActions={<ModalAction />}
                        >
                        </ModalLayout>
                        <ModalLayout 
                            buttonLocation='right' 
                            buttonName='Remove' 
                            icon='trash' 
                            title='Delete user'
                            modalContent={<ModalContent text='Are you sure you want to delete this account?'/>}
                            modalActions={<ModalAction />}
                        >
                        </ModalLayout>
                    </Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
    );
}