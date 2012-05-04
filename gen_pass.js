var argv=require('optimist').argv
	,GenPass=function() {
	var lchars='abcdefghijklmnopqrstuvwxyz'
		,uchars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		,nums='01234567890'
		,puns='!"#$%&\'()*+-./:;<=>?@[\\]^-`{|}~';
	var F=function(options) {
		var defaults={
			len:8
			,count:1
			,sets:'lun'
		};
		var len=options.len||defaults.len
			,count=options.count||defaults.count
			,sets=options.sets||defaults.sets
			,a=''
			,out=[]
		if(sets.indexOf('l')>-1) {
			a+=lchars;
		}
		if(sets.indexOf('u')>-1) {
			a+=uchars;
		}
		if(sets.indexOf('n')>-1) {
			a+=nums;
		}
		if(sets.indexOf('p')>-1) {
			a+=puns;
		}
		var slen=a.length;

		for(var i=0;i<count;i++) {
			var p='';
			for(var j=0;j<len;j++) {
				var r=Math.floor(slen*Math.random())
					,c=a[r]
				p+=c;
			}
			out.push(p);
		}
		return out;
	};
	return F;
}();

res=GenPass(argv);
process.stdout.write(
	res.join( typeof argv.sep != 'undefined'? argv.sep:'\n' )+'\n'
);
