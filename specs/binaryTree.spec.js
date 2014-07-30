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
            expect(binaryTree.add).toBeDefined();
        });
             
    });
    
    describe('BinaryTreeNode', function() {
        
        var binaryTreeNode = new BinaryTreeNode(10);
        
        it('should match the expected interface', function() {
            expect(binaryTreeNode.leftNode).toBeDefined();
            expect(binaryTreeNode.rightNode).toBeDefined();
            expect(binaryTreeNode.key).toBeDefined();
        });

        describe('add()', function() {
            
            var binaryTree;
            
            beforeEach(function() {            
                binaryTree = new BinaryTree();
            });
            
            it('should set the root node the first time add is called', function() {
                
                binaryTree.add(10);
                
                expect(binaryTree.rootNode).not.toBeNull();
                expect(binaryTree.rootNode.key).toEqual(10);
                
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
            
            it('should not change if the value being added has already been added', function() {
                
                binaryTree.add(10);
                
                expect(function() { binaryTree.add(10); }).toThrow(new Error('key must be unique'));
            
            });
            
            it('should be able to add several levels and branch appropriately using the built in operators', function() {
                
                binaryTree.add(10);     // <-- root node
                
                binaryTree.add(5);      //   <-- left node
                binaryTree.add(4);      //     <-- left node
                binaryTree.add(9);      //     <-- right node
                
                binaryTree.add(15);     //   <-- right node
                binaryTree.add(14);     //     <-- left node
                binaryTree.add(16);     //     <-- right node
            
                expect(binaryTree.rootNode.key).toEqual(10);
                expect(binaryTree.rootNode.leftNode.key).toEqual(5);
                expect(binaryTree.rootNode.leftNode.leftNode.key).toEqual(4);
                expect(binaryTree.rootNode.leftNode.rightNode.key).toEqual(9);
                expect(binaryTree.rootNode.rightNode.key).toEqual(15);
                expect(binaryTree.rootNode.rightNode.leftNode.key).toEqual(14);
                expect(binaryTree.rootNode.rightNode.rightNode.key).toEqual(16);
                
            });
                    
        });
        
    });

});