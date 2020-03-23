import { Table, Button, Icon } from 'semantic-ui-react';
import ModalLayout from '../components/ModalLayout';
const tableData = [
    { user: 'John', admin: 'y', gender: 'Male' },
    { user: 'Amber', admin: 'n', gender: 'Female' },
    { user: 'Leslie', admin: 'n', gender: 'Other' },
    { user: 'Ben', admin: 'n', gender: 'Male' },
  ]
export default ()=>{

    //to edit user info click on name and a pop up will ask you 
    return(
        <Table striped sortable celled >
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
                    <Table.HeaderCell>
                    Edit
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                    Remove
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {tableData.map(({ user,admin }) => (
                <Table.Row key={user}>
                    <Table.Cell>{user}</Table.Cell>
                    <Table.Cell>******</Table.Cell>
                    <Table.Cell>{admin}</Table.Cell>
                    <Table.Cell>
                    <ModalLayout buttonColor='blue' buttonLocation='left' buttonName='Edit' icon='pencil alternate' title='Edit user'>
                        <p>stuff about editing user</p>
                    </ModalLayout>

                    </Table.Cell>
                    <Table.Cell>
                    <ModalLayout buttonColor='red' buttonLocation='left' buttonName='Remove' icon='minus' title='Delete user'>
                        <p>stuff about deleting user</p>
                    </ModalLayout>

                    </Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
    );
}