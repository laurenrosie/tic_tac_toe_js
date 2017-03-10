describe('Board', function(){

  beforeEach(function(){
    board = new Board();
  });

  it('has an array of 3 rows of squares', function(){
    expect(board.squares().length).toEqual(3)
  });

  it('has an array of 3 rows each with 3 columns ', function(){
    expect(board.squares()[0].length).toEqual(3)
  });

  it('has individual array elements which are empty strings', function(){
    expect(board.squares()[0][0]).toEqual("")
  });
});
