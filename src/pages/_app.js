import '@/styles/globals.scss'
import store from '../../redux/store'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
export default function App({ Component, pageProps }) {
  // const [changeTheme, setChangeTheme] = useState(true)

  const globalStyles = {
    ':root': {
      '--pink-color': '#32a83a',
      '--blue-color': '#7000ed',
      '--light-gray': '#d9d9d9',
      '--black-color': '#000000', // Wrap color values in quotes
      '--white-color': '#fff',
      '--color-primary': 'rgba(255, 255, 255, 0.63)'
    }
  };

  return (
    <Provider store={store}>
      <div style={globalStyles}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
