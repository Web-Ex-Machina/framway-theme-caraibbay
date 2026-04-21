module.exports = {
	'colors': {
		"whirlpool": "#395c7a",
		"aquacove" : "#53978a",
		"sand"     : "#c0976b",
	},
	'primary': 'colors(aquacove)',
	'secondary': 'colors(sand)',
	'body': {
		'font-color': 'colors(blacklight)',
		'block-background': 'colors(white)',
	},
	'input': {
		'background': 'scale-color(primary,$lightness:80%)',
		'font-color': 'colors(blacklighter)',
		'border-color': 'colors(none)',
		'placeholder-font-color': 'colors(greylighter)',
	},
	'input-focus': {
		'background': 'scale-color(input(background),$lightness:-10%)',
		'font-color': 'input(font-color)',
		'border-color': 'input(border-color)',
	},
	'footer': {
		'background': 'colors(whirlpool)'
	},
	'input-as-btn': false,
	'button-as-btn': false,
};