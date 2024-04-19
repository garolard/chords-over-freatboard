import './App.css'
import ChordSelector from './components/ChordSelector'
import KeySelector from './components/KeySelector'
import Navbar from './components/Navbar'
import ScaleSelector from './components/ScaleSelector'
import useQueryParams from './hooks/useQueryParamsHook'

function App() {
  const [queryParams, setQueryParams] = useQueryParams({ key: 'C', scale: 'major' });

  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className='w-2/3 mx-auto'>
        <h1 className='text-3xl font-bold mt-10'>
          Scales and Chords
        </h1>
        <KeySelector selectedKey={queryParams.get('key')!} setQueryParams={setQueryParams} />
        <ScaleSelector selectedScale={queryParams.get('scale')!} setQueryParams={setQueryParams} />
        <ChordSelector selectedKey={queryParams.get('key')!} selectedScale={queryParams.get('scale')!} selectedChord={queryParams.get('chord')} setQueryParams={setQueryParams} />
      </div>
    </div>
  )
}

export default App
