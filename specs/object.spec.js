'use strict';

describe('base-camp Object extensions', function() {
    
    var testObject = {};
    
    it('should match the expected interface', function() {
        
        expect(typeof testObject.copy === 'function').toBe(true);
        expect(typeof testObject.isArray === 'function').toBe(true);
        expect(typeof testObject.isFunction === 'function').toBe(true);
        
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
    
    describe('Type Check extensions', function() {
    
        describe('isArray()', function() {

            var testArray = [];

            it('should return true if the object being tested is an Array', function() {
                expect(testArray.isArray()).toBe(true);
            });

            it('should return false if the object being tested is not an Array', function() {
                expect(testObject.isArray()).toBe(false);
            });

        });

        describe('isFunction()', function() {

            var testFunction = function() {
                return void 0;  
            };

            it('should return true if the object is a function', function() {
                expect(testFunction.isFunction()).toBe(true); 
            });

            it('should return false if the object is not a function', function() {
                expect(testObject.isFunction()).not.toBe(true); 
            });

        });

        describe('isNumber()', function() {

            var testNumberInt = 1337;
            var testNumberFloat = 1.2;

            it('should return true if the object is an integer', function() {
                expect(testNumberInt.isNumber()).toBe(true);
            });

            it('should return true if the object is an float', function() {
                expect(testNumberFloat.isNumber()).toBe(true);
            });

            it('should return false if the object is not a number', function() {
                expect(testObject.isNumber()).not.toBe(true); 
            });

        });

        describe('isString()', function() {

            var testString = "This is a test string";

            it('should return true if the object is a string', function() {
                expect(testString.isString()).toBe(true); 
            });

            it('should return false if the object is not a string', function() {
                expect(testObject.isString()).not.toBe(true);   
            });

        });

        describe('isBoolean()', function() {

            var testBoolean = true;

            it('should return true if the object is a boolean', function() {
                expect(testBoolean.isBoolean()).toBe(true); 
            });

            it('should return false if the object is not a boolean', function() {
                expect(testObject.isBoolean()).not.toBe(true); 
            });

        });

    });
    
    describe('Type Conversion extensions', function() {
    
        var testStringNumberFloat = "1.2";
        var testStringNumberFloatBeginString = "631.21 Test string";
        var testStringNumberFloatEndString = "Test string 631.13";
        var testStringNumberFloatBeginAndEndString = "631 Test string 666.66";
        var testStringNumberInt = "1337";
        var testStringNumberFloatLikeInt = "1337..1";
        var testStringNotANumber = "Not a number";
        
        describe('toNumber()', function() {
            
            it('should return a number if the object that\'s a float can be converted to a number', function() {
                expect(testStringNumberFloat.toNumber()).toEqual(1.2);
            });

            it('should return a number if the object is a string and contains a single float at beginning', function() {
                expect(testStringNumberFloatBeginString.toNumber()).toEqual(631.21);
            });
            
            it('should return a number if the object is a string and contains a single float at ending', function() {
                expect(testStringNumberFloatEndString.toNumber()).toEqual(631.13);
            });
                        
            it('should return a number if the object that\s an int can be converted to a number', function() {
                expect(testStringNumberInt.toNumber()).toEqual(1337);
            });            
            
            it('should return a number if the object that\s a float like int can be converted to a number', function() {
                expect(testStringNumberFloatLikeInt.toNumber()).toEqual(1337);
            });            

            it('should return NaN if the object can not be converted to a number', function() {
                expect(isNaN(testStringNotANumber.toNumber())).toBe(true) 
            });
                        
        });
        
    });
    
});