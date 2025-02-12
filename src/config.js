'use strict'
const Store = require('electron-store')

const defaults = {
	crosshair: 'leupold-dot',
	color: '#FFF83B',
	appOpacity: 80,
	opacity: 80,
	positionX: -1,
	positionY: -1,
	sight: 'dot',
	size: 60,
	windowLocked: false
}

module.exports.defaults = defaults

module.exports.config = new Store({
	defaults
})
