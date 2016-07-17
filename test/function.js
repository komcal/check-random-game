import chai from 'chai';
import {case1, case2, case3, case4, setCase} from '../src/utils/calculate.js';
const should  = chai.should();
describe('Test function', () => {
  it('start test', (done) => {
    const test = 'hello';
    test.should.equal('hello');
    done();
  });
  it('Should randomData and currentData are same color', (done) =>{
    const currentData = 'R';
    const randomData1 = 'R';
    const randomData2 = 'B';
    case1(currentData, randomData1).should.equal(true);
    case1(currentData, randomData2).should.equal(false);
    done();
  });
  it('Should randomData and currentData are  not same color', (done) =>{
    const currentData = 'R';
    const randomData1 = 'R';
    const randomData2 = 'B';
    case2(currentData, randomData1).should.equal(false);
    case2(currentData, randomData2).should.equal(true);
    done();
  });
  it('Should randomData and currentData are same pattern', (done) =>{
    const currentData1 = ['R', 'B'];
    const currentData2 = ['B', 'B'];
    const randomData1 = 'R';
    const randomData2 = 'B';
    case3(currentData1, randomData1).should.equal(true);
    case3(currentData1, randomData2).should.equal(false);
    case3(currentData2, randomData1).should.equal(false);
    case3(currentData2, randomData2).should.equal(true);
    done();
  });
  it('Should randomData and currentData are not same pattern', (done) =>{
    const currentData1 = ['R', 'B'];
    const currentData2 = ['B', 'B'];
    const randomData1 = 'R';
    const randomData2 = 'B';
    case4(currentData1, randomData2).should.equal(true);
    case4(currentData1, randomData1).should.equal(false);
    case4(currentData2, randomData2).should.equal(false);
    case4(currentData2, randomData1).should.equal(true);
    done();
  });
  it('Should set correct case', (done) => {
    const history1 = ['R'];
    const history2 = ['R','B'];
    const history3 = ['R','R'];
    const history4 = ['B','R'];
    const history5 = ['B','B'];
    setCase(history1).should.equal(['R', 'B', '-', '-']);
    setCase(history2).should.equal(['B', 'R', 'R', 'B']);
    setCase(history3).should.equal(['R', 'B', 'R', 'B']);
    setCase(history4).should.equal(['R', 'B', 'B', 'R']);
    setCase(history5).should.equal(['B', 'R', 'B', 'R']);
    done();
  });
});
