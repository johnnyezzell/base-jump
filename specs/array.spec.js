'use strict';

describe('base-camp Array extensions', function() {

    var testArray = [];
    
    it('should match the expected interface', function() {
        expect(typeof testArray.insertBefore === 'function').toBe(true);
        expect(typeof testArray.insertAfter === 'function').toBe(true);
    });
    
    describe('insertBefore(index, item)', function() {
    
        it('should insert an item before the specified index if valid', function() {

            testArray = ['testValue1'];        

            expect(testArray.length).toEqual(1);

            testArray.insertBefore(0, 'testValue2');

            expect(testArray.length).toEqual(2);
            expect(testArray[0]).toEqual('testValue2');
            expect(testArray[1]).toEqual('testValue1');
            
        });

        it('should fail to insert an item if the index does not exist', function() {

            testArray = ['testValue1'];

            expect(function() {
                testArray.insertBefore(10, 'test')
            }).toThrow(new Error("Index out of range"));
            
            expect(function() {
                testArray.insertBefore(-1, 'test')
            }).toThrow(new Error("Index out of range"));
        });
        
    });
    
    describe('insertAfter(index, item)', function() {
        
        it('should insert an item after the specified index if valid', function() {
           
            testArray = ['testValue1'];
            
            expect(testArray.length).toEqual(1);
            
            testArray.insertAfter(0, 'testValue2');
            
            expect(testArray.length).toEqual(2);
            expect(testArray[0]).toEqual('testValue1');
            expect(testArray[1]).toEqual('testValue2');
            
        });
        
        it('should fail to insert an item if the index does not exist', function() {
            
            testArray = [];
            
            expect(function() {
                testArray.insertAfter(2, 'test')
            }).toThrow(new Error("Index out of range"));

            expect(function() {
                testArray.insertAfter(-1, 'test')
            }).toThrow(new Error("Index out of range"));

        });
        
    });
    
    describe('removeAt(index)', function() {
        
        it('should remove an item at the specified index if valid', function() {
           
            testArray = ['testValue1', 'testValue2'];
            
            expect(testArray.length).toEqual(2);
            
            testArray.removeAt(1);
            
            expect(testArray.length).toEqual(1);
            expect(testArray[0]).toEqual('testValue1');
            
        });
        
        it('should fail to remove item the index doe not exist', function() {
            
            testArray = [];
            
            expect(function() {
                testArray.removeAt(2)
            }).toThrow(new Error("Index out of range"));

            expect(function() {
                testArray.removeAt(-1, 'test')
            }).toThrow(new Error("Index out of range"));

        });
        
    });
    
    describe('removeAll()', function() {
        
        it('should remove all items from an array', function() {
        
            testArray = [1, 2, 3];
            
            testArray.removeAll();
            
            expect(testArray.length).toEqual(0);
            
        });
        
    });
    
    describe('copy()', function() {
        
        it('should return a new array that has the same items', function() {
           
            testArray = ['testValue1', 'testValue2'];
            
            var newArray = testArray.copy();
            
            expect(testArray.length).toEqual(newArray.length);
            expect(testArray[0]).toEqual(newArray[0]);
            expect(testArray[1]).toEqual(newArray[1]);
            
        });
        
        it('should not change original array when new copy of array changes', function () {
                       
            testArray = ['testValue1', 'testValue2'];
            
            var newArray = testArray.copy();
            
            expect(testArray.length).toEqual(newArray.length);
            expect(testArray[0]).toEqual(newArray[0]);
            expect(testArray[1]).toEqual(newArray[1]);
            
            newArray.splice(0, 1);
            
            expect(testArray.length).toBeGreaterThan(newArray.length);
        });
        
    });
    
});