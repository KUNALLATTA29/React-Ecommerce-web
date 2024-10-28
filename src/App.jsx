import Header from "./component/Header"
import { Outlet } from 'react-router-dom'
import Sidebar from "./component/Sidebar"
import './App.css'


function App() {
  

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
