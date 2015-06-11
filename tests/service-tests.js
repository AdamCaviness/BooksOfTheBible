describe('getting books', function($scope, Books) {
	var Books;
	beforeEach(module('bothb.services'));
	
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
});