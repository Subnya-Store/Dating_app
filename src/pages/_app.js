import '@/styles/globals.scss'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
export default function App({ Component, pageProps }) {
  // const [changeTheme, setChangeTheme] = useState(true)

  

  return (
    <Provider store={store}>
      {/* <div style={globalStyles}> */}
        <Component {...pageProps} />
      {/* </div> */}
    </Provider>
  )
}
