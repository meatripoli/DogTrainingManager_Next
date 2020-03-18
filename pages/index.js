import HeaderSemantics from '../components/HeaderSemantics';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Index() {
    return (
      <Layout>
        <HeaderSemantics></HeaderSemantics>
        <Header></Header>
        <p>Hello Next.js</p>
      </Layout>
    )
  }