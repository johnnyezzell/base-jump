describe('base-camp Utility functions', function() {
    
    it('should match the expected interface', function() {
        expect(BJ).toBeDefined();
        expect(typeof BJ.isFunction === 'function').toBe(true);    
    });
    
    describe('isFunction()', function() {
        
        it('should return true when passed a function', function() {        
            expect(BJ.isFunction(BJ.isFunction)).toBe(true);
        });
        
        it('should return false when not passed a function', function() {
            expect(BJ.isFunction(undefined)).toBe(false); 
        });

    });
    
});