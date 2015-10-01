
var Cldr = require('cldrjs');
var CldrData = require('cldr-data');
var blub = require('./blub');

Cldr.load(CldrData.entireSupplemental());
Cldr.load(CldrData.entireMainFor("en"));

var config = require('./config');
var locale = "en";

var cldr = new Cldr(locale);

console.log("# locale="+locale);

function terrName(x) {
	return cldr.main("localeDisplayNames/territories/"+x.toUpperCase());
}
function langName(x) {
	return cldr.main("localeDisplayNames/languages/"+x.toLowerCase());
}

function repoLink(name) {
	return "["+name+"]("+"https://github.com/nodejs/"+name+")";
}

var langs = Object.keys(config);
langs.sort();

langs.forEach(function(locale) {
	var name="iojs-"+locale;
	var opts = config[locale];
	var lang = opts.lang || locale;
	var region = opts.region;
	var newname = "nodejs-"+lang;
	if(region) newname = newname + "-"+region.toUpperCase();
	var comment = langName(lang);
	if(region) comment += " ("+terrName(region)+")";
	
	if(false) {
		// comment
		console.log("- [ ] "+repoLink(name)+" \u2192 "+repoLink(newname) + " " + comment);
		console.log(" - [ ] notify");
	} else {
		// issue
		console.log("https://github.com/nodejs/"+name+"/issues/new\n\n\n\n--------------\n");
		console.log(blub({
			comment: comment,
			name: name,
			newname: newname,
			when: 'THREE WEEKS',
		}));
	}
});