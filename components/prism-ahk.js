// by Avi Aryan ( http://aviaryan.github.io )
// NOTES - follows first-first highlight method, block is locked after highlight, different from SyntaxHl
Prism.languages.autohotkey= {
	'comment': {
		pattern: /(^[^";\n]*("[^"\n]*?"[^"\n]*)*)(;.*$|^\s*\/\*[\s\S]*\s*\*\/)/gm,  // the ^ is very dangerous, matches \n also
		lookbehind: true
	},
	'attr-name':  {
		pattern: /(\n[ \t]*[a-z]+(?=[ \t]*?(\n|$))|^[ \t]*?[a-z]+?(?=[ \t]+?[^,:=\.\%].*?($|\n))|^[ \t]*?[a-z]+?(?=([ \t]*?,|[ \t]+?%).*$))/i, // - 2 steps necessary to block this
		inside: {
			'keyword': /\b(else|return|break|continue)\b/i
		}
		// 2nd and 3rd part matches single-line or top-line code without commas ( ex- run notepad.exe ) . match before the latter.. before string locking
	}, // above string to avoid locking by string and thus matching of single word in case of concat -- eg> var := "abc" highlghted
	'string': /"(([^"\n\r]|"")*)"/gm,
	'keyword': /\b(ahk_[a-z]*|if|else|return|for|while|loop|try|catch|throw|new)\b/i,  // TODO: add a regex for global,loc.. if needed
	'selector':  /(\n[ \t]*?[a-z]+?(?=([ \t]*?,|[ \t]+?%).*$)|\n[ \t]*?[a-z]+?(?=[ \t]+?[^,\*\+\-:=\.].*?$))/mi,
	// third part matches without comma commands in block code (start with \n)
	// Send can send anything including ( and { so hardcode
	'function': /[^\(\); \t\,\n\+\*\-\=\?>:\\\/<\&%\[\]]+?(?=\()/gm,  //function - don't use .*\) in the end bcoz string locks it
	'symbol': /^[ \t]*[a-z0-9]+?(?=::)/gm, //hot-keys - label
	'tag': /^[ \t]*[^\s:]+?(?=:\s*$)/gm,  //labels
	'variable': /\%\w+\%/g,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
	'operator': /[\+\-\*\\\/:=\?\&\|<>]/g,
	'punctuation': /[\{}[\]\(\):]/g,
	'boolean': /\b(true|false)\b/g,
	'constant': /\b(a_[a-z]*|clipboard(|All)|comspec|errorlevel)\b/ig,
	'important': /#\b([a-z]*)\b/ig
};