const expect = chai.expect

describe('calculator', function () {
  it('is an object', function () {
    expect(calculator).to.be.a('object')
  })

  describe('#add', function () {
    it('should be a function', function () {
      expect(calculator.add).to.be.a('function')
    })

    it('should add two numbers together', function () {
      expect(calculator.add(10,20)).to.equal(30)
    })
  })

  describe('#subtract', function () {
    it('should be a function', function () {
      expect(calculator.subtract).to.be.a('function')
    })

    it('should subtract second input from first', function () {
      expect(calculator.subtract(20,10)).to.equal(10)
    })
  })

  describe('#multiply', function () {
    it('should be a function', function () {
      expect(calculator.multiply).to.be.a('function')
    })

    it('should multiply two numbers together', function () {
      expect(calculator.multiply(5,2)).to.equal(10)
    })
  })

  describe('#divide', function () {
    it('should be a function', function () {
      expect(calculator.divide).to.be.a('function')
    })

    it('should multiply two numbers together', function () {
      expect(calculator.divide(10,2)).to.equal(5)
    })
  })

  describe('#num1', function () {
    it('should be a function', function () {
      expect(calculator.num1).to.be.a('function')
    })
    it('should return digits left of operator in equation string', function () {
      expect(calculator.num1('10+5', '+')).to.equal(10)
    })
  })

  describe('#num2', function () {
    it('should be a function', function () {
      expect(calculator.num2).to.be.a('function')
    })

    it('should return digits right of operator in equation string', function () {
      expect(calculator.num2('10+5', '+')).to.equal(5)
    })
  })

  describe('#error', function () {
    it('should be a function', function () {
      expect(calculator.error).to.be.a('function')
    })

    it('should return error if count is greater than two', function () {
      expect(calculator.error(2)).to.equal('Error')
    })

    it('should return undefined if count is not greater than two', function () {
      expect(calculator.error(1)).to.equal(undefined)
    })
  })

})
