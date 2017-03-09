describe('Square', function() {

  beforeEach(function(){
    square = new Square();
  });

  it('has a value attribute defaulting to null', function(){
    expect(square.value()).toEqual(null)
  });
});
