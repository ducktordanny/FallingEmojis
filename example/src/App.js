import React from 'react';

import { FallingEmojis } from 'falling-emojis';
import 'falling-emojis/dist/index.css';

const App = () => {
	return (
		<div className='App'>
			<FallingEmojis emoji={'🎉'} />
		</div>
	)
}

export default App;