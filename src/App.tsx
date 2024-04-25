import ChordSelector from './components/ChordSelector'
import KeySelector from './components/KeySelector'
import Navbar from './components/Navbar'
import ScaleSelector from './components/ScaleSelector'
import useQueryParams from './hooks/useQueryParamsHook'
import * as Chords from './helpers/ChordsHelper';
import Fretboard from './components/Freatboard'
import ChordSummary from './components/ChordSummary'

function App() {
  const [queryParams, setQueryParams] = useQueryParams({ key: 'C', scale: 'major' });
  const availableChords = Chords.getChordsFor(queryParams.get('key')!, queryParams.get('scale')!);
  const selectedChord = availableChords.find(chord => chord.name === queryParams.get('chord')) || availableChords[0];

  return (
    <div className='w-full flex flex-col'>
      <Navbar />
      <div className='w-2/3 mx-auto mt-10'>
        <div className='flex'>
          <div className='w-1/2'>
            <h1 className='text-3xl font-bold mt-10'>
              Scales and Chords
            </h1>
            <KeySelector selectedKey={queryParams.get('key')!} setQueryParams={setQueryParams} />
            <ScaleSelector selectedScale={queryParams.get('scale')!} setQueryParams={setQueryParams} />
            <ChordSelector selectedChord={queryParams.get('chord') || availableChords[0].name} setQueryParams={setQueryParams} availableChords={availableChords} />
          </div>
          <div className='divider divider-horizontal'></div>
          <div>
            <h1 className='text-3xl font-bold mt-10'>
              Chord Summary
            </h1>
            <ChordSummary selectedChord={selectedChord} />
          </div>
        </div>
        <Fretboard selectedChord={selectedChord}/>
      </div>
    </div>
  )
}

export default App
