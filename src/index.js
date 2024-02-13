import { AUTO, Scale, Game } from 'phaser'
import CollectingStarsScene from './scenes/CollectingStarsScene'

const config = {
	type: AUTO,
	backgroundColor: '#32A5E7',
	scale: {
		width: 700,
		height: 600,
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 1000 },
			debug: false,
		},
	},
	scene: [CollectingStarsScene],
}

/* eslint-disable-next-line */
export default new Game(config)
