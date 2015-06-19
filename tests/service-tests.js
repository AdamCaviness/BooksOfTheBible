/// <reference path="../typings/tsd.d.ts" />

describe('getting books', function() {
	var Books;
	beforeEach(module('botb.services'));
	
	beforeEach(inject(function (_Books_) {
        Books = _Books_;
    }));
	
	it('can get an instance of the factory', inject(function(Books) {
		expect(Books).toBeDefined();
	}));
	
	it('returns correct number of OT books', inject(function(Books) {
		var testamentName= 'old';
		var books = Books.testament(testamentName);
		expect(books.length).toEqual(39);
	}));
	
	it('returns correct number of NT books', inject(function(Books) {
		var testamentName= 'new';
		var books = Books.testament(testamentName);
		expect(books.length).toEqual(27);
	}));
	
	it('returns correct first and last books of OT', inject(function(Books) {
		var testamentName= 'old';
		var books = Books.testament(testamentName);
		expect(books[0].name).toEqual('Genesis');
		expect(books[38].name).toEqual('Malachi');
	}));
	
	it('returns correct first and last books of NT', inject(function(Books) {
		var testamentName= 'new';
		var books = Books.testament(testamentName);
		expect(books[0].name).toEqual('Matthew');
		expect(books[26].name).toEqual('Revelation');
	}));
	
	it('returns random selection of books', inject(function(Books) {
		var correctBookIndex = 3;
		var desiredNumberOfBooks= 5;
		var allBooks = Books.all();
		var books = Books.randomSelection(correctBookIndex, desiredNumberOfBooks);
		expect(books.length).toEqual(5);
		console.log('Random selection: ' + books.map(function(x){
			return x.name;
		}));
		
		// Verify of the random selection is in the complete set.
		for (var i = 0; i < books.length; i++) {
			expect(allBooks.indexOf(books[i])).toBeGreaterThan(-1);
		}
	}));
});