import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <div className='container flex flex-col'>
      <Navbar />
      <div className='w-2/3 mx-auto'>
        <h1 className='text-3xl font-bold mt-10'>
          Scales and Chords
        </h1>
      </div>
    </div>
  )
}

export default App
