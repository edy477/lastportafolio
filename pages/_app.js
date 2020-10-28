import '../styles/index.css'
import App from 'next/app'
import React from 'react'
import SiteLayout from '../components/Layouts/SiteLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout =
        Component.getLayout || (page => <SiteLayout children={page} />)

    return getLayout(<Component {...pageProps} />)
  }
}
/*
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp*/
/*
* //background: #F4E9DD;
//F6E8D2
//F2F2EE*/
/*
import '../styles/index.css'
import SiteLayout from '../components/Layouts/SiteLayout';
import NewNoteLayout from "../components/Layouts/NewNoteLayout";
import App from 'next/app'
import React from 'react'
import userReducer from "../components/Reducer/notes";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(userReducer);
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout =
        Component.getLayout || (page => <SiteLayout children={page} />)

    return getLayout(<Provider store={store}><Component {...pageProps} /> </Provider>)
  }
}

export default MyApp;
 */
export default MyApp;
