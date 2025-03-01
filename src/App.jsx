
import './App.css'
import Navbar from './Components/Navbar'
import Model from './Components/Model';
function App() {

  return (
    <>
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-NA-v3.png')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-NA-v3.jpg')] bg-cover bg-center h-screen ">
        <Navbar />
        <Model />
      </div>
    </>
  )
}

export default App
