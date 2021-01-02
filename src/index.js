import React from 'react';
import 'falling-emojis/dist/index.css';
import styles from './styles.module.css';

export const FallingEmojis = ({ emoji }) => {
	
	const emojiArray = [emoji, emoji, emoji, emoji, emoji];
	const order = [0, 3, 1, 2, 4];
	
	const animations = [
		styles.emojiAnimation0,
		styles.emojiAnimation1,
		styles.emojiAnimation2,
		styles.emojiAnimation3,
		styles.emojiAnimation4
	];

	return(
		<div className={styles.FallingEmojis}>
			{emojiArray.map((emojiElement, i) => {
            return <span key={i} className={[styles.emoji, animations[order[i]]].join(' ')}>{emojiElement}</span>;
         })}
		</div>
	);
}
