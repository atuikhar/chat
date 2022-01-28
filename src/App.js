import { Routes, Route } from 'react-router-dom'
import Home from 'Screens/Home/Home'
import { MobileView } from 'Screens/MobileView/MobileView'
import Welcome from 'Screens/Welcome/Welcome'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Welcome />} />
        <Route path="/mobileview" element={<MobileView />} />
      </Routes>
    </>
  )
}

export default App
