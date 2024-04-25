import logo from '../assets/chords-over-freatboard-logo.svg';

export default function Navbar() {
	return <div className='navbar border-b sticky left-0 top-0 bg-surface'>
		<div className='navbar-start px-4'>
			<img src={logo} alt='logo' width={16} height={16}/>
			<p className='font-bold ml-4'>Chords Over The Fretboard</p>
		</div>
		<div className='navbar-end'>
			<div className='btn'>
				<p>Help</p>
			</div>
		</div>
	</div>;
}