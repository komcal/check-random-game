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
    const history1 = [];
    const history2 = ['R'];
    const history3 = ['R'];
    const history4 = ['B'];
    const history5 = ['B'];
    setCase(history1, 'R').map((data, index) => {
      data.should.equal(['R', 'B', '-', '-'][index]);
    });
    setCase(history2,'B').map((data, index) => {
      data.should.equal(['B', 'R', 'R', 'B'][index]);
    });
    setCase(history3,'R').map((data, index) => {
      data.should.equal(['R', 'B', 'R', 'B'][index]);
    });
    setCase(history4,'R').map((data, index) => {
      data.should.equal(['R', 'B', 'B', 'R'][index]);
    });
    setCase(history5,'B').map((data, index) => {
      data.should.equal(['B', 'R', 'B', 'R'][index]);
    });
    done();
  });
});
