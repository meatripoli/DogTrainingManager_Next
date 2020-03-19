import Document, { Html, Head, Main, NextScript } from 'next/document'
// import 'semantic-ui-css/semantic.min.css'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render(){
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}
export default MyDocument