/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	import { Player } from 'player';

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	context.fillRect(50, 50, 10, 10);

	var firstPlayer = new Player({ x: 50, y: 50 }, 10, 'blue');
	var secondPlayer = new Player({ x: 100, y: 50 }, 10, 'red');

	var players = [firstPlayer, secondPlayer];

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);

	  players.forEach(player => player.checkXCoord().move().draw(context)); // chaining

	  requestAnimationFrame(gameLoop);
	});

/***/ }
/******/ ]);
