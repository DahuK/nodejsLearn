module.exports = function(JavaBook) {

	JavaBook.deletedAll = function(cb) {
		
		JavaBook.find({
			where : {
				and : [ {
					author : ' Maurice Naftalin '
				}, {
					publisher : '\u6e05\u534e\u5927\u5b66\u51fa\u7248\u793e'
				} ]
			}
		}, function(err, posts) {
			// TODO

			var response = posts;
			cb(null, response);
		});
		
	};

	JavaBook.remoteMethod('javabook', {
		http : {
			path : '/javabook',
			verb : 'get'
		},
		returns : {
			arg : 'javabook',
			type : 'string'
		}
	});

}