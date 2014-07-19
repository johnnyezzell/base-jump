describe('base-camp Array extentions', function() {
    
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
    
});