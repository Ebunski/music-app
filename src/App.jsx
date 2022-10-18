import { useState, useEffect } from 'react';
import Nav from './components/Nav';

function App() {
  // STATES
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  // Render based on desktop size
	function windowResize() {
		window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
	}
	useEffect(() => {
		window.addEventListener('resize', () => {
			windowResize();
		});
		return window.removeEventListener('resize', () => {
			windowResize();
		});
	}, []);
  //

  const props = {
		isDesktop: isDesktop,
		setIsDesktop: setIsDesktop,
	};
	return (
		<div className="App">
			<Nav props= {props} />
		</div>
	);
}

export default App;
