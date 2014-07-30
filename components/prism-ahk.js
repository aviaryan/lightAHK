// by Avi Aryan ( http://aviaryan.github.io )
// NOTES - follows first-first highlight method, block is locked after highlight, different from SyntaxHl
Prism.languages.autohotkey= {
	'comment': /(;[^\n]*|^\s*\/\*[\s\S]*\s*\*\/)/gm,
	'string': /"(([^"\n\r]|"")*)"/gm,
	'attr-name':  {
		pattern: /(\n[ \t]*[a-z]+?(?=[ \t]*?$)|^[ \t]*?[a-z]+?(?=[ \t]+?[^,\(\{\%=]+$))/i, // - 2 steps necessary to block this
		inside: {
			'keyword': /\b(else)\b/i
		}
		// 2nd part matches single-line or top-line code without commas ( ex- run notepad.exe ) . match before the latter..
	},
	'selector':  /(\b(return)\b|^[ \t]*?[a-z]+?(?=([ \t]*?,|[ \t]+?%).*$)|\n[ \t]*?[a-z]+?(?=[ \t]+[^,\(\{=\n]+$))/mi,
	// third part matches without comma commands in block code (start with \n)
	// return also returns function - an exception.
	'keyword': /\b(ahk_[a-z]*|if|else|for)\b/i,
	'function': /[^\(\); \t\,\n\+\*\-\=\?>:\\\/<\&%\[\]]+?(?=\()/gm,  //function - don't use .*\) in the end bcoz string locks it
	'symbol': /^[ \t]*[a-z0-9]+?(?=::)/gm, //hot-keys - label
	'tag': /^[ \t]*[^\s:]+?(?=:)/gm,  //labels
	'variable': /\%\w+\%/g,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
	'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
	'punctuation': /[\{}[\]\(\):]/g,
	'boolean': /\b(true|false)\b/g,
	'constant': /\b(a_[a-z]*|clipboard|clipboardall|comspec|errorlevel)\b/ig,
	'important': /#\b([a-z]*)\b/ig
};