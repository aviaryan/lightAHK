// by Avi Aryan ( http://aviaryan.github.io )
// NOTES - follows first-first highlight method, block is locked after highlight, different from SyntaxHl
Prism.languages.autohotkey= {
	'comment': /(;[^\n]*|^\s*\/\*[\s\S]*\s*\*\/)/gm,
	'attr-name':  {
		pattern: /(\n[ \t]*[a-z]+(?=[ \t]*?(\n|$))|^[ \t]*?[a-z]+?(?=[ \t]+?[^,\(\{\%=]+($|\n)))/i, // - 2 steps necessary to block this
		inside: {
			'keyword': /\b(else|return|break|continue)\b/i,
			'property': /\bglobal\b/i
		}
		// 2nd part matches single-line or top-line code without commas ( ex- run notepad.exe ) . match before the latter..
	}, // above string to avoid locking by string and thus matching of single word in case of concat -- eg> var := "abc" highlghted
	'string': /"(([^"\n\r]|"")*)"/gm,
	'keyword': /\b(ahk_[a-z]*|if|else|return|for|while|loop|try|catch|throw|new)\b/i,  // TODO: add a regex for global,loc.. if needed
	'selector':  /(\b(send)\b|^[ \t]*?[a-z]+?(?=([ \t]*?,|[ \t]+?%).*$)|\n[ \t]*?[a-z]+?(?=[ \t]+[^,\(\{=\n]+$))/mi,
	'property': /\b(global|local|static)\b/i,  // pre-add things that can include commas and thus identified as commands
	// third part matches without comma commands in block code (start with \n)
	// Send can send anything including ( and { so hardcode
	'function': /[^\(\); \t\,\n\+\*\-\=\?>:\\\/<\&%\[\]]+?(?=\()/gm,  //function - don't use .*\) in the end bcoz string locks it
	'symbol': /^[ \t]*[a-z0-9]+?(?=::)/gm, //hot-keys - label
	'tag': /^[ \t]*[^\s:]+?(?=:)/gm,  //labels
	'variable': /\%\w+\%/g,
	'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
	'operator': /[\+\-\*\\\/:=\?]/g,
	'punctuation': /[\{}[\]\(\):]/g,
	'boolean': /\b(true|false)\b/g,
	'constant': /\b(a_[a-z]*|clipboard[a-z]*|comspec|errorlevel)\b/ig,
	'important': /#\b([a-z]*)\b/ig
};