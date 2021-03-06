var expect = require('chai').expect;

describe('Main', function() {
  var arr;

  // roda uma vez, antes do bloco
  before(function() {
    // inicia uma conexão no banco
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(function() {
    // fecha conexão do banco
    // apagar esse conjunto de dados
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(function() {});

  // testar tipos ou se existe (smoke test)
  it('should be an array', function() {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    console.log(arr.length); // 4
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', function() {
    console.log(arr.pop() === 3); // true
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function() {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    console.log(arr.length); // 2
    expect(arr).to.have.lengthOf(2);
  });

});