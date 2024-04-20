import logo from '../assets/chords-over-freatboard-logo.svg';

export default function Navbar() {
	return <>
		<nav className='py-2 px-6 border-b flex flex-row'>
			<div className='flex flex-row items-center'>
				<img src={logo} alt='logo' width={16} height={16}/>
				<p className='font-bold ml-4'>Chords Over The Fretboard</p>
			</div>
			<div className='flex-grow'></div>
			<div>
				<div className='bg-gray-light rounded-xl px-4 py-2'>
					<p>Help</p>
				</div>
			</div>
		</nav>
	</>;
}