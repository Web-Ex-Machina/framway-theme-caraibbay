module.exports = {
	'colors': {
		"pink" :       "#ff96b4",
		"yellow" :     "#f7eba2",
		"orange" :     "#f39f64",
		"aquamarine" : "#39b088",
	},
	'primary': 'colors(aquamarine)',
	'secondary': 'colors(pink)',
	'body': {
		'font-color': 'colors(blacklight)',
		'block-background': 'colors(white)',
	},
	'input': {
		'background': 'scale-color(primary,$lightness:80%)',
		'font-color': 'colors(white)',
		'border-color': 'colors(none)',
		'placeholder-font-color': 'colors(greylighter)',
	},
	'input-focus': {
		'background': 'scale-color(input(background),$lightness:-10%)',
		'font-color': 'input(font-color)',
		'border-color': 'input(border-color)',
	},
	'footer': {
		'background': 'primary'
	}
};