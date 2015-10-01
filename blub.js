module.exports = function(opts) {
	var x = 
	"Proposal: rename the nodejs/"+opts.name+" WG to nodejs/"+opts.newname+"\n\n" +
	"\n\n"+
	"Dear members of the io.js " + opts.comment + " WG `"+opts.name+"`\n\n" +
	"It is proposed to rename this repo to:\n\n   [nodejs/"+opts.newname+"](https://github.com/nodejs/"+opts.newname+"/)\n\n" +
	 "As part of the io.js and node.js convergence, node.js releases are now based on the codebase and user base of the converged node.js and io.js communities. A number of the resources and repositories have already been renamed.\n" +

	"In the absence of objections or other discussion, this rename will occur on or after " + opts.when + "\n\n" +

	"However, active language working groups should take ownership of this issue and discuss/dispose of it according to their own processes.\n\n" + 

	"For more information or to discuss the overall issue, please see and comment on https://github.com/nodejs/node/issues/2525\n\n" +
	"\n\n" +
	"This statement was authorized by the Node.js TSC\n\n" +
	"Cc: @nodejs/"+opts.name+"\n\n";
	return x;
};