
var runes = new Array;


function rune (title, name, desc) {
	
	this.title = title;
	
	this.name = name;
	
	// this is an array
	this.desc = desc;
	
}

function build_runes() {
	
	// putting them in order 
	runes.push(new rune('Fehu', 'fehu', ['wealth', 'cattle']));
	runes.push(new rune('Uruz', 'uruz', ['ox']));
	runes.push(new rune('Thurisaz', 'thurisaz', ['Thor']));
	runes.push(new rune('Ansuz', 'ansuz', ['god mouth', 'wisdom']));
	runes.push(new rune('Raidho', 'raidho', ['ride']));
	runes.push(new rune('Kenaz', 'kenaz', ['torch']));
	runes.push(new rune('Gebo', 'gebo', ['gift']));
	runes.push(new rune('Wunjo', 'wunjo', ['joy']));
	runes.push(new rune('Hagalaz', 'hagalaz', ['hail']));
	runes.push(new rune('Naudhiz', 'naudhiz', ['need']));
	runes.push(new rune('Isa', 'isa', ['ice']));
	runes.push(new rune('Jera', 'jera', ['year']));
	runes.push(new rune('Eihwaz', 'eihwaz', ['yew tree']));
	runes.push(new rune('Perthro', 'perthro', ['cup', 'lot', 'game piece']));
	runes.push(new rune('Elhaz', 'elhaz', ['protection']));
	runes.push(new rune('Sowilo', 'sowilo', ['sun']));
	runes.push(new rune('Tiwaz', 'tiwaz', ['Tyr']));
	runes.push(new rune('Berkano', 'berkano', ['birch tree']));
	runes.push(new rune('Ehwaz', 'ehwaz', ['horse']));
	runes.push(new rune('Mannaz', 'mannaz', ['man']));
	runes.push(new rune('Laguz', 'laguz', ['lake leek']));
	runes.push(new rune('Ingwaz', 'ingwaz', ['ing']));
	runes.push(new rune('Dagaz', 'dagaz', ['day']));
	runes.push(new rune('Othala', 'othala', ['home']))
}