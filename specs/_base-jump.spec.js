'use strict'; 

describe('base-jump Utility functions', function() { 
    
    it('should match the expected interface', function() {
        expect(BJ).toBeDefined();
        expect(typeof BJ.version === 'string').toBe(true);    
    });
    
    describe('version', function() {
        
        it('should return a string containing the version', function() {        
            expect(BJ.version === '0.0.1').toBe(true);
        });

    });
    
});