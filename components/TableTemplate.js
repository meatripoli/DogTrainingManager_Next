import { Table} from 'semantic-ui-react';

/*props needed
header
    header object should have the following for each column
    {
        tableHeaderName:'',---match SQL table column
        name: '', ---column name on the page
        clickFunction: '', --if there is a button
        haschildren: false, --if you want to add more then just text change to true and add a function below
        children: ''/component( ei-mymodal)
    }
table (data to fill table)
*/
export default (props)=>{
    return(
        <Table basic='very' striped sortable celled >
            <Table.Header>
                <Table.Row>
                    {props.header.map((row,index)=>{
                        return (<Table.HeaderCell key={index}>
                            {row.name}
                        </Table.HeaderCell>
                    )})}               
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {props.table.map((row) => (
                <Table.Row key={'key'+row.id}>
                    {props.header.map(({tableHeaderName,haschildren,children})=>{
                        return (
                        <Table.Cell key={tableHeaderName+row.id}>{haschildren?children(row,row[tableHeaderName]):row[tableHeaderName]}</Table.Cell>
                    )})}
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
    );
}