var async = require('async');

module.exports = function(app) {
	// data sources
	var mongoDs = app.dataSources.jdJava;
	const
	JAVA_BOOK_JSON = "E:\\workspace\\4.5_64_Learning\\Crawler\\book.json"

	createJavaBooks(function(err) {
		if (err)
			throw err;
		console.log('> models created successfully');
	});

	// load the book json from scrapy crawler
	function loadBookJson() {
		var fs = require("fs")
		// fs.readFile(JAVA_BOOK_JSON, 'utf8', function(err, content) {
		// if (err)
		// return callback(err)
		// callback(null, content)
		// })
		var contents = JSON.parse(fs.readFileSync(JAVA_BOOK_JSON, 'utf8'));
		console.log(JSON.stringify(contents));
		return contents
	}

	// create Java Book model in DB
	function createJavaBooks(cb) {
		mongoDs.automigrate('JavaBook', function(err) {
			if (err)
				return cb(err);

			// var bookArray = loadBookJson(function(err, content) {
			// console.log(content)
			// })
			var bookArray = loadBookJson()
			for (var i = 0; i < bookArray.length; i++) {
				// here jsonObject['sync_contact_list'][i] is your current "bit"
				var book = bookArray[i]
				if (book.name != null || book.name != "") {
					
					app.models.JavaBook.create(book, function(err, u1) {
						console.log('Created: ', u1.toObject());
						app.models.JavaBook.findById(u1.id, function(err, u2) {
							console.log('Found: ', u2.toObject());
						});
//						javaBook = mongoDs.createModel('JavaBook', {
//						    _id: { type: mongoDs.ObjectID, id: true }
//						});
					});
				}
			}
		});
	}
};
