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
        expect(BJ.BinaryTree).toBeDefined(); 
        expect(BJ.BinaryTreeNode).toBeDefined();
    });
    
    describe('BJ.BinaryTree', function() {

        var binaryTree = new BJ.BinaryTree();
        
        it('should match the expected interface', function() {
            expect(binaryTree.rootNode).toBeDefined();
            expect(binaryTree.addNode).toBeDefined();
            expect(binaryTree.getNode).toBeDefined();
            expect(binaryTree.toArray).toBeDefined();
        });
             
    });
    
    describe('BJ.BinaryTreeNode', function() {
        
        var binaryTreeNode = new BJ.BinaryTreeNode(10, 'test10');
        
        it('should match the expected interface', function() {
            expect(binaryTreeNode.leftNode).toBeDefined();
            expect(binaryTreeNode.rightNode).toBeDefined();
            expect(binaryTreeNode.key).toBeDefined();
            expect(binaryTreeNode.value).toBeDefined();
        });

        describe('addNode()', function() {
            
            var binaryTree;
            
            beforeEach(function() {            
                binaryTree = new BJ.BinaryTree();
            });
            
            it('should set the root node the first time addNode is called', function() {
                
                binaryTree.addNode(10, 'test10');
                
                expect(binaryTree.rootNode).not.toBeNull();
                expect(binaryTree.rootNode.key).toEqual(10);
                expect(binaryTree.rootNode.value).toEqual('test10');
                
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
                
                binaryTree.addNode(10, 'test10');    // <-- root node
                
                binaryTree.addNode(5, 'test5');      //   <-- left node
                binaryTree.addNode(4, 'test4');      //     <-- left node
                binaryTree.addNode(9, 'test9');      //     <-- right node
                
                binaryTree.addNode(15, 'test15');    //   <-- right node
                binaryTree.addNode(14, 'test14');    //     <-- left node
                binaryTree.addNode(16, 'test16');    //     <-- right node
            
                expect(binaryTree.rootNode.key).toEqual(10);
                expect(binaryTree.rootNode.leftNode.key).toEqual(5);
                expect(binaryTree.rootNode.leftNode.leftNode.key).toEqual(4);
                expect(binaryTree.rootNode.leftNode.rightNode.key).toEqual(9);
                expect(binaryTree.rootNode.rightNode.key).toEqual(15);
                expect(binaryTree.rootNode.rightNode.leftNode.key).toEqual(14);
                expect(binaryTree.rootNode.rightNode.rightNode.key).toEqual(16);
                
                expect(binaryTree.rootNode.value).toEqual('test10');
                expect(binaryTree.rootNode.leftNode.value).toEqual('test5');
                expect(binaryTree.rootNode.leftNode.leftNode.value).toEqual('test4');
                expect(binaryTree.rootNode.leftNode.rightNode.value).toEqual('test9');
                expect(binaryTree.rootNode.rightNode.value).toEqual('test15');
                expect(binaryTree.rootNode.rightNode.leftNode.value).toEqual('test14');
                expect(binaryTree.rootNode.rightNode.rightNode.value).toEqual('test16');                
                
            });
                    
        });
        
        describe('getNode()', function() {
            
            var binaryTree = null;
            
            beforeEach(function() {
                
                binaryTree = new BJ.BinaryTree();
                binaryTree.addNode(10, 'test10');       // --- root node
                binaryTree.addNode(5, 'test5');         //   |-- left node
                binaryTree.addNode(4, 'test4');         //   |---- left node
                binaryTree.addNode(8, 'test8');         //   |---- right node
                binaryTree.addNode(15, 'test15');       //   |-- right node
                binaryTree.addNode(13, 'test13');       //   |---- left node
                binaryTree.addNode(17, 'test17');       //   |---- right node
                
            });
            
            it('should return undefined if the root is null', function() {
                binaryTree = new BJ.BinaryTree();
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
        
        describe('toArray()', function() {
            
            var binaryTree = null;

            it('should return an empty array if the root node is null' , function() {
                
                binaryTree = new BJ.BinaryTree();
                expect(binaryTree.toArray().length).toEqual(0);
                
            });
            
            it('should return an ordered array', function() {
                
                binaryTree = new BJ.BinaryTree();
                binaryTree.addNode(10, 'test10');       // --- root node
                binaryTree.addNode(5, 'test5');         //   |-- left node
                binaryTree.addNode(4, 'test4');         //   |---- left node
                binaryTree.addNode(8, 'test8');         //   |---- right node
                binaryTree.addNode(15, 'test15');       //   |-- right node
                binaryTree.addNode(13, 'test13');       //   |---- left node
                binaryTree.addNode(17, 'test17');       //   |---- right node
                
                var array = binaryTree.toArray();
                expect(array[0]).toEqual('test4');
                expect(array[1]).toEqual('test5');
                expect(array[2]).toEqual('test8');
                expect(array[3]).toEqual('test10');
                expect(array[4]).toEqual('test13');
                expect(array[5]).toEqual('test15');
                expect(array[6]).toEqual('test17');
                
            });
            
        });
        
    });

});