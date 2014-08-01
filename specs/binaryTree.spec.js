'use strict';

describe('base-camp BinaryTree object and extensions', function() {
    
    var ComparableObject = function(firstName, lastName) {
        var that = this;
        that.firstName = firstName;
        that.lastName = lastName;
        that.compare = function(obj) {
            var thisCompareString = that.lastName.toLowerCase() + that.firstName.toLowerCase();
            var objCompareString = obj.lastName.toLowerCase() + obj.firstName.toLowerCase();
            if(objCompareString < thisCompareString) {
                return -1;
            }
            else if (objCompareString > thisCompareString) {
                return 1;
            }
            else {
                return 0;
            }
        }
    };
    
    it('should define the BinaryTree object and BinaryTreeNode contructors', function() {
        expect(BinaryTree).toBeDefined(); 
        expect(BinaryTreeNode).toBeDefined();
    });
    
    describe('BinaryTree', function() {

        var binaryTree = new BinaryTree();
        
        it('should match the expected interface', function() {
            expect(binaryTree.rootNode).toBeDefined();
            expect(binaryTree.addNode).toBeDefined();
        });
             
    });
    
    describe('BinaryTreeNode', function() {
        
        var binaryTreeNode = new BinaryTreeNode(10);
        
        it('should match the expected interface', function() {
            expect(binaryTreeNode.leftNode).toBeDefined();
            expect(binaryTreeNode.rightNode).toBeDefined();
            expect(binaryTreeNode.key).toBeDefined();
        });

        describe('addNode()', function() {
            
            var binaryTree;
            
            beforeEach(function() {            
                binaryTree = new BinaryTree();
            });
            
            it('should set the root node the first time addNode is called', function() {
                
                binaryTree.addNode(10);
                
                expect(binaryTree.rootNode).not.toBeNull();
                expect(binaryTree.rootNode.key).toEqual(10);
                
            });
            
            it('should set the left node of the root node if the second value is less than the root value', function() {
               
                binaryTree.addNode(10);
                binaryTree.addNode(7);
                
                expect(binaryTree.rootNode.leftNode).not.toBeNull();
                expect(binaryTree.rootNode.rightNode).toBeNull();
                
            });
            
            it('should set the right node of the root node if the second value is greater than the root value', function() {
               
                binaryTree.addNode(10);
                binaryTree.addNode(17);
                
                expect(binaryTree.rootNode.leftNode).toBeNull();
                expect(binaryTree.rootNode.rightNode).not.toBeNull();
                
            });
            
            it('should not change if the value being added has already been added', function() {
                
                binaryTree.addNode(10);
                
                expect(function() { binaryTree.addNode(10); }).toThrow(new Error('key must be unique'));
            
            });
            
            it('should be able to add several levels and branch appropriately using the built in operators', function() {
                
                binaryTree.addNode(10);     // <-- root node
                
                binaryTree.addNode(5);      //   <-- left node
                binaryTree.addNode(4);      //     <-- left node
                binaryTree.addNode(9);      //     <-- right node
                
                binaryTree.addNode(15);     //   <-- right node
                binaryTree.addNode(14);     //     <-- left node
                binaryTree.addNode(16);     //     <-- right node
            
                expect(binaryTree.rootNode.key).toEqual(10);
                expect(binaryTree.rootNode.leftNode.key).toEqual(5);
                expect(binaryTree.rootNode.leftNode.leftNode.key).toEqual(4);
                expect(binaryTree.rootNode.leftNode.rightNode.key).toEqual(9);
                expect(binaryTree.rootNode.rightNode.key).toEqual(15);
                expect(binaryTree.rootNode.rightNode.leftNode.key).toEqual(14);
                expect(binaryTree.rootNode.rightNode.rightNode.key).toEqual(16);
                
            });
                    
        });
        
        describe('getNode()', function() {
            
            var binaryTree = null;
            
            beforeEach(function() {
                
                binaryTree = new BinaryTree();
                binaryTree.addNode(10);     // --- root node
                binaryTree.addNode(5);      //   |-- left node
                binaryTree.addNode(4);      //   |---- left node
                binaryTree.addNode(8);      //   |---- right node
                binaryTree.addNode(15);     //   |-- right node
                binaryTree.addNode(13);     //   |---- left node
                binaryTree.addNode(17);     //   |---- right node
                
            });
            
            it('should return undefined if the root is null', function() {
                binaryTree = new BinaryTree();
                expect(binaryTree.getNode(10)).toBeUndefined();
            });
            
            it('should find nodes with existing keys', function() {
                expect(binaryTree.getNode(10).key).toEqual(10);
                expect(binaryTree.getNode(5).key).toEqual(5);
                expect(binaryTree.getNode(4).key).toEqual(4);
                expect(binaryTree.getNode(8).key).toEqual(8);
                expect(binaryTree.getNode(15).key).toEqual(15);
                expect(binaryTree.getNode(13).key).toEqual(13);
                expect(binaryTree.getNode(17).key).toEqual(17);                
            });
            
            it('should return undefined when a key doesn\'t exist in left', function() {
                expect(binaryTree.getNode(9)).toBeUndefined(); 
                expect(binaryTree.getNode(7)).toBeUndefined(); 
                expect(binaryTree.getNode(3)).toBeUndefined(); 
            });
            
            it('should return undefined when a key doesn\'t exist in right', function() {
                expect(binaryTree.getNode(12)).toBeUndefined(); 
                expect(binaryTree.getNode(14)).toBeUndefined(); 
                expect(binaryTree.getNode(19)).toBeUndefined(); 
                expect(binaryTree.getNode(12)).toBeUndefined();
            });            
            
        });
        
    });

});