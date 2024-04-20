import ChordSelector from './components/ChordSelector'
import KeySelector from './components/KeySelector'
import Navbar from './components/Navbar'
import ScaleSelector from './components/ScaleSelector'
import useQueryParams from './hooks/useQueryParamsHook'
import * as Chords from './helpers/ChordsHelper';
import Freatboard from './components/Freatboard'

function App() {
  const [queryParams, setQueryParams] = useQueryParams({ key: 'C', scale: 'major' });
  const availableChords = Chords.getChordsFor(queryParams.get('key')!, queryParams.get('scale')!);
  const selectedChord = availableChords.find(chord => chord.name === queryParams.get('chord')) || availableChords[0];

  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className='w-2/3 mx-auto'>
        <h1 className='text-3xl font-bold mt-10'>
          Scales and Chords
        </h1>
        <KeySelector selectedKey={queryParams.get('key')!} setQueryParams={setQueryParams} />
        <ScaleSelector selectedScale={queryParams.get('scale')!} setQueryParams={setQueryParams} />
        <ChordSelector selectedChord={queryParams.get('chord') || availableChords[0].name} setQueryParams={setQueryParams} availableChords={availableChords} />
        <Freatboard selectedChord={selectedChord}/>
      </div>
    </div>
  )
}

export default App
