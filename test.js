var argv=require('optimist').argv
	,GenPass=require('./gen_pass')
	,res=GenPass(argv);
if(res) {
	process.stdout.write(
		res.join( typeof argv.sep != 'undefined'? argv.sep:'\n' )+'\n'
	);
}
