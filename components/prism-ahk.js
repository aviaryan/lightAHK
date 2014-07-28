// by Avi Aryan ( http://aviaryan.github.io )
// NOTES - follows first-first highlight method, block is locked after highlight, different from SyntaxHl
Prism.languages.autohotkey= {
	'comment': /(;[^\n]*|^\s*\/\*[\s\S]*\s*\*\/)/gm,
	'string': /"(([^"\n\r]|"")*)"/gm,
	'attr-name':  /^[ \t]*[a-z]+?(?=[ \t]*?$)/gmi, // - 2 steps necessary to block this
	'selector': /(\b(return)\b|\n[ \t]*[a-z]+?(?=([ \t]*?,|[ \t]+?(%|\w[^,\(\)]*$)).*$))/gmi,   // \w there to match "run notepad.exe"
	// return also returuns function v() exception. \n used is a workaround
	'keyword': /\b(ahk_[a-z]*|if|else|for)\b/i,
	'function': /[^\(\); \t\,\n\+\*\-\=\?>:\\\/<\&%\[\]]+?(?=\()/gm,  //function - don't use .*\) in the end bcoz string locks it
	'symbol': /^[ \t]*[a-z0-9]+?(?=::)/gm, //hotkeys - label
	'tag': /^[ \t]*[^\s:]+?(?=:)/gm,  //labels
	'variable': /\%\w+\%/g,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
	'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
	'punctuation': /[\{}[\]\(\):]/g,
	'boolean': /\b(true|false)\b/g,
	'constant': /\b(a_[a-z]*|clipboard|clipboardall|comspec|errorlevel)\b/ig,
	'important': /#\b([a-z]*)\b/ig
};