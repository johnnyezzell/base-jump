// BinaryTree
// ==========

// The BinaryTreeNode constructor.
BJ.BinaryTreeNode = function(key, value) {
    
    var that = this;
    
    that.key = key;
    that.value = value || null;
    that.leftNode = null;
    that.rightNode = null;

};


// A closure that will return the BinaryTree constructor.
BJ.BinaryTree = (function () {

    var that = this;
    
    that.array = [];
    
    // Private method used to when creating an array.
    that.addNodesInOrder = function(node) {
        
        if (node.leftNode !== null) {
            that.addNodesInOrder(node.leftNode);
        }    

        that.array.push(node.value);
        
        if (node.rightNode !== null) {
            that.addNodesInOrder(node.rightNode);   
        }
        
    };
    
    // Returns the BinaryTree constructor.
    return function () {
    
        var _that = this;
        
        _that.rootNode = null;
    
        // Adds a new to the BinaryTree using recursion.
        // The node argument should not be used by external callers.
        _that.addNode = function(key, value, node) {

            // If the root node is null create one with our value.
            if (_that.rootNode === null) {
                _that.rootNode = new BJ.BinaryTreeNode(key, value);
            }
            else {
                var nodeToAdd = new BJ.BinaryTreeNode(key, value);                    

                if(typeof node === 'undefined' || node === null) {
                    node = _that.rootNode;
                }

                if (key < node.key) {
                    if (node.leftNode === null) {
                        node.leftNode = nodeToAdd;
                    }
                    else {
                        _that.addNode(key, value, node.leftNode);   
                    }
                }
                else if (key > node.key) {
                    if (node.rightNode === null) {
                        node.rightNode = nodeToAdd;
                    }
                    else {
                        _that.addNode(key, value, node.rightNode);   
                    }
                }
                else {
                    throw new Error("key must be unique");   
                }
            }

        };

        // Gets a node by the key using recursion.
        // The node argument should not be used by external callers.
        _that.getNode = function (key, node) {

            if (_that.rootNode === null) {
                return void 0;   
            }

            if (typeof node === 'undefined' || node === null) {
                node = _that.rootNode;
            }

            if (key < node.key) {
                if (node.leftNode === null) {
                    return void 0;
                }
                else if (node.leftNode.key === key) {
                    return node.leftNode;
                }
                else {
                    return _that.getNode(key, node.leftNode);
                }
            } 
            else if (key > node.key) {
                if (node.rightNode === null) {
                    return void 0;
                }
                else if (node.rightNode.key === key) {
                    return node.rightNode;
                }
                else {
                    return _that.getNode(key, node.rightNode);
                }
            }
            else {
                return node;   
            }

        };

        // Creates an array from our binary tree node values sorted by the node keys.
        _that.toArray = function () {

            that.array = [];
            
            var node = _that.rootNode;
            
            if (node === null) {
                return that.array;
            }
            
            that.addNodesInOrder(node);
            
            return that.array;
        };
    
    };
    
}());