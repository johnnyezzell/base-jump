var should = require('should');

require('../src/array.js');

describe('base-camp Array extentions', function() {
    
    var testArray = [];
    
    it('should match the expected interface', function() {
        (typeof testArray.insertBefore === 'function').should.be.true;
    });
    
    describe('insertBefore(index, item)', function() {
    
        it('should insert an item before the specified index if valid', function() {

            testArray = ['testValue1'];        

            (testArray.length).should.equal(1);

            testArray.insertBefore(0, 'testValue2');

            testArray.length.should.equal(2);
            testArray[0].should.equal('testValue2');
            testArray[1].should.equal('testValue1');
        });

        it('should fail to insert if index does not exist', function() {

            testArray = ['testValue1'];

            try {
                testArray.insertBefore(10, 'testValue2');
            }
            catch(error) {
                error.should.be.true;
                console.log(error);
            }

        });
        
    });
    
});