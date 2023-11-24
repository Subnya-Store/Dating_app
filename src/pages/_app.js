import '@/styles/globals.scss'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import Providers from '@/Providers'
export default function App({ Component, pageProps }) {
  // const [changeTheme, setChangeTheme] = useState(true)



  return (
    <Provider store={store}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Provider>
  )
}
