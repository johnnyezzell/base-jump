function BinaryTree() {

    var that = this;
    that.rootNode = null;
    
    that.addNode = function(key, node) {
        
        if (that.rootNode === null) {
            that.rootNode = new BinaryTreeNode(key);
        }
        else {
            var nodeToAdd = new BinaryTreeNode(key);                    
            
            if(typeof node === 'undefined' || node === null) {
                node = that.rootNode;
            }
            
            if (key < node.key) {
                if (node.leftNode === null) {
                    node.leftNode = nodeToAdd;
                }
                else {
                    that.addNode(key, node.leftNode);   
                }
            }
            else if (key > node.key) {
                if (node.rightNode === null) {
                    node.rightNode = nodeToAdd;
                }
                else {
                    that.addNode(key, node.rightNode);   
                }
            }
            else {
                throw new Error("key must be unique");   
            }
        }
        
    };
    
    that.getNode = function (key, node) {
        
        if (that.rootNode === null) {
            return void 0;   
        }
        
        if (typeof node === 'undefined' || node === null) {
            node = that.rootNode;
        }
            
        if (key < node.key) {
            if (node.leftNode === null) {
                return void 0;
            }
            else if (node.leftNode.key === key) {
                return node.leftNode;
            }
            else {
                return that.getNode(key, node.leftNode);
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
                return that.getNode(key, node.rightNode);
            }
        }
        else {
            return node;   
        }
        
    };
    
}

function BinaryTreeNode(key) {
    var that = this;
    that.key = key;
    that.leftNode = null;
    that.rightNode = null;
}