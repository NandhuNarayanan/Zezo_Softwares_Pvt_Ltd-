import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  data,
  tvSeriesData,
  popularShow,
  sports,
  latest_Movie,
} from './context/movies_datas'

export const UserContext = createContext()
export const Latest_TVSeriesContext = createContext()
export const Popular_Show = createContext()
export const Best_Sports = createContext()
export const Latest_Movie = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserContext.Provider value={data}>
      <Latest_TVSeriesContext.Provider value={tvSeriesData}>
        <Popular_Show.Provider value={popularShow}>
          <Best_Sports.Provider value={sports}>
            <Latest_Movie.Provider value={latest_Movie}>
              <App />
            </Latest_Movie.Provider>
          </Best_Sports.Provider>
        </Popular_Show.Provider>
      </Latest_TVSeriesContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>,
)
