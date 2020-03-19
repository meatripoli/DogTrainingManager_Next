import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../public/css/layoutcomponent.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}