'use strict';

describe('base-camp BinaryTree object and extensions', function() {
    
    it('should define the BinaryTree object and BinaryTreeNode contructors', function() {
        expect(BinaryTree).toBeDefined(); 
        expect(BinaryTreeNode).toBeDefined();
    });
    
    describe('BinaryTree', function() {

        var binaryTree = new BinaryTree();
        
        it('should match the expected interface', function() {
            expect(binaryTree.rootNode).toBeDefined();
            expect(binaryTree.add).toBeDefined();
        });
             
    });
    
    describe('BinaryTreeNode', function() {
        
        var binaryTreeNode = new BinaryTreeNode();
        
        it('should match the expected interface', function() {
            expect(binaryTreeNode.leftNode).toBeDefined();
            expect(binaryTreeNode.rightNode).toBeDefined();
            expect(binaryTreeNode.value).toBeDefined();
        });

        describe('add()', function() {
            
            var binaryTree;
            
            beforeEach(function() {            
                binaryTree = new BinaryTree();
            });
            
            it('should set the root node the first time add is called', function() {
                
                binaryTree.add(10);
                
                expect(binaryTree.rootNode).not.toBeNull();
                expect(binaryTree.rootNode.value).toEqual(10);
                
            });
            
            it('should set the left node of the root node if the second value is less than the root value', function() {
               
                binaryTree.add(10);
                binaryTree.add(7);
                
                expect(binaryTree.rootNode.leftNode).not.toBeNull();
                expect(binaryTree.rootNode.rightNode).toBeNull();
                
            });
            
            it('should set the right node of the root node if the second value is greater than the root value', function() {
               
                binaryTree.add(10);
                binaryTree.add(17);
                
                expect(binaryTree.rootNode.leftNode).toBeNull();
                expect(binaryTree.rootNode.rightNode).not.toBeNull();
                
            });
            
            it('shouldn\'t change if the value being added has already been added', function() {
               
                binaryTree.add(10);
                binaryTree.add(10);
                
                expect(binaryTree.rootNode.leftNode).toBeNull();
                expect(binaryTree.rootNode.rightNode).toBeNull();
                expect(binaryTree.rootNode.value).toEqual(10);
                
            });
            
        });
        
    });

});