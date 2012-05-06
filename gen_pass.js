var GenPass=function() {
	var F=function(options) {
		var defaults={
			lchars:'abcdefghijklmnopqrstuvwxyz'
			,uchars:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
			,nums:'01234567890'
			,puns:'!"#$%&\'()*+-./:;<=>?@[\\]^-`{|}~'
			,len:8
			,count:1
			,sets:'lun'
			,exclude:''
		};
		var lchars=options.lchars||defaults.lchars
			,uchars=options.uchars||defaults.uchars
			,nums=options.nums||defaults.nums
			,puns=options.puns||defaults.puns
			,len=options.len||defaults.len
			,count=options.count||defaults.count
			,sets=options.sets||defaults.sets
			,exclude=(options.exclude||defaults.exclude)+''
			,all_chars=''
			,out=[]
		if(!/^\d+$/.test(len)||len==0) {
			console.log('%s is not a valid length. Must be a positive integer.', len);
			return;
		}
		if(!/^\d+$/.test(count)||count==0) {
			console.log('%s is not a valid count. Must be a positive integer.', count);
			return;
		}
		if(!/[lunp]+/.test(sets)) {
			console.log('Invalid sets settings, must be one or combination of l, u, n, p.');
			return;
		}
		if(sets.indexOf('l')>-1) {
			all_chars+=lchars;
		}
		if(sets.indexOf('u')>-1) {
			all_chars+=uchars;
		}
		if(sets.indexOf('n')>-1) {
			all_chars+=nums;
		}
		if(sets.indexOf('p')>-1) {
			all_chars+=puns;
		}
		// remove duplicates
		var arr_uniq=[], arr_chars=all_chars.split('');
		arr_chars.forEach( function(v) {
			if(arr_uniq.indexOf(v)==-1) {
				arr_uniq.push(v);
			}
		});
		// exclude chars
		if(exclude.length>0) {
			var arr_excl=exclude.split('');
			arr_excl.forEach( function(v) {
				var pos=arr_uniq.indexOf(v);
				if(pos>-1) {
					arr_uniq.splice(pos,1);
				}
			});
		}	

		all_chars=arr_uniq.join('')+''; // make sure all_chars is a string
		var slen=all_chars.length;
		for(var i=0;i<count;i++) {
			var p='';
			for(var j=0;j<len;j++) {
				var r=Math.floor(slen*Math.random())
					,c=all_chars[r]
				p+=c;
			}
			out.push(p);
		}
		return out;
	};
	return F;
}();

module.exports=GenPass;
