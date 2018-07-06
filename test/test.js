const expect = require('chai').expect;
const mergeSort = require('../merge-sort')

describe('Merge Sort', ()=> {
    it('has the function mergeSort', ()=> {
        expect(mergeSort).to.be.ok;
    });
    it('sorts an array', ()=> {
        expect(mergeSort([3,2,1])).to.eql([1,2,3]);
    });
});