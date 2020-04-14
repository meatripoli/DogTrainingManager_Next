import SignInLayout from '../components/SignInLayout';
import MyGrid from '../components/MyGrid';
import CustomerForm from '../components/CustomerForm';

export default function About() {
  return (
    <SignInLayout>
      <MyGrid 
        columnNum = {1} 
        header='Board and Train Program Form'
        message=''
      >
        <CustomerForm/>
      </MyGrid>
    </SignInLayout>
  );
}