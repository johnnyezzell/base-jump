'use strict';

describe('base-camp Object extensions', function() {
    
    var testObject = {};
    
    it('should match the expected interface', function() {
        
        expect(typeof testObject.copy === 'function').toBe(true);
        
    });
    
    it('should allow overwriting of methods', function() {
        
        testObject.copy = function() {
            return 'over written method';  
        };
        
        expect(testObject.copy()).toEqual('over written method');
        
    });
    
    describe('copy()', function() {
        
        beforeEach(function() {
            testObject = {            
                testProperty1: 'testValue1',
                testProperty2: 'testValue2',
                testProperty3: 'testValue3'
            };            
        });
        
        it('should copy the object\'s properties and values to a new object', function() {
            var copiedTestObject = testObject.copy();
            expect(copiedTestObject.testProperty1).toEqual(testObject.testProperty1);
            expect(copiedTestObject.testProperty2).toEqual(testObject.testProperty2);
            expect(copiedTestObject.testProperty3).toEqual(testObject.testProperty3);
        });

        it('should not copy an object\'s functions', function() {
            testObject.testFunction = function() {
                return;
            };
            var copiedTestObject = testObject.copy();
            expect(copiedTestObject.testFunction).not.toBeDefined();
        });
    });
    
});