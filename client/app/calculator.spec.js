import Calculator from "./Calculator";

describe("Calculator", () => {
  let calc = null;

  beforeEach(() => {
    calc = new Calculator(5, 4);
  });

  afterEach(() => {
    calc = null;
  });


  it("should add two numbers", () => {
    expect(calc.add()).to.equal(9);
  });

  it("should multiply two numbers", () => {
    expect(calc.multiply()).to.equal(20);
  });

  it("should subtract two numbers", () => {
    expect(calc.subtract()).to.equal(1);
  });

  it("should divide two numbers", () => {
    expect(calc.divide()).to.equal(1.25);
  });

});
