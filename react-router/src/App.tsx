
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav 
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>

        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>

      </nav>
    </>
  )
}

export default App
