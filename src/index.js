import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { data, tvSeriesData } from './context/movies_datas';

export const UserContext = createContext()
export const Latest_TVSeriesContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserContext.Provider value={data}>
    <Latest_TVSeriesContext.Provider value={tvSeriesData}>
      <App />
    </Latest_TVSeriesContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>,
)
