'use strict';
var db = require('diskdb');

var Module = function(opts) {
	db.connect('db', ['categories','classname']);
	var self = this;
	this.query = {
		category: function() {return self.queryCategory.call(self)},
		prefixList: function() {return self.queryPrefixList.call(self)},
		hasPrefix: function(prefix) {return self.queryHasSamePrefix.call(self, prefix)},
		hasClassName: function(prefix, classname) {return self.queryHasSameClassName.call(self,prefix, classname)}
	}
	this.create = {
		category: function(prefix, description){self.createCategory.call(self, prefix, description)},
		classname: function(prefix, custom){self.createClassName.call(self, prefix, custom)}
	};
};

Module.prototype.queryCategory = function() {
	var _categoriesDB = db.categories.find();
	return _categoriesDB;
};
Module.prototype.queryPrefixList = function() {
	return array;
};
Module.prototype.queryHasSamePrefix = function(prefix) {
	var searchResult = db.classname.find({"prefix": prefix});
	if (searchResult.length == 0) {
		return false;
	} else {
		return true;
	}
};
Module.prototype.queryHasSameClassName = function(prefix, classname) {
	var truefalse = false,
		searchResult = db.classname.find({"classname": classname,"prefix": prefix}),
		i = 0;
	while (function(obj){
		if ( obj.classname == classname && obj.prefix == prefix ) {
			truefalse = true
			return false;
		} else {
			return true;
		}
	}(searchResult[i]) ) {
		if(i == searchResult.length-1) { 
			break;
		};
		i < searchResult.length-1 && i++;
	};
	return truefalse;
};
Module.prototype.createCategory = function(prefix, description) {
	if ( this.queryHasSamePrefix(prefix) ) {
		console.error("Please change the name!");
	} else {
		return db.categories.save({ "prefix": prefix, "description": description, "date": new Date().toLocaleString('zh-TW') });		
	}
};
Module.prototype.createClassName = function(prefix, custom) {
	var randomString = function (length) {
		var rn,
		rnd = '',
		len = length || 4,
		randomChars = '0123456789abcdefghijklmnopqrstuvwxyz';
		for (var i = 1; i <= len; i++) {
			 rnd += randomChars.substring(rn = Math.floor(Math.random() * randomChars.length), rn + 1);
		}
		return rnd;
	}, self = this,
	classname = custom || randomString();
	if (!!custom) {
		if (self.queryHasSameClassName(prefix, classname)) {
			console.error("Please change the classname!");
			return false;
		} else {
			console.log('no has same classname: ' + classname);
			return db.classname.save({ "classname": classname, "prefix": prefix});
		}
	} else {
		while (this.queryHasSameClassName(prefix, classname)) {
			classname = randomString(4);
		}
		return db.classname.save({ "classname": classname, "prefix": prefix});
	}
};
module.exports = Module;