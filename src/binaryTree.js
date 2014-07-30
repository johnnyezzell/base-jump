function BinaryTree() {

    var that = this;
    that.rootNode = null;
    
    that.add = function(key, node) {
        
        if( that.rootNode === null) {
            that.rootNode = new BinaryTreeNode(key);
        }
        else {
            var nodeToAdd = new BinaryTreeNode(key);                    
            
            if(typeof node === 'undefined')
                node = that.rootNode;
            
            if (key < node.key) {
                if (node.leftNode === null) {
                    node.leftNode = nodeToAdd;
                }
                else {
                    that.add(key, node.leftNode);   
                }
            }
            else if (key > node.key) {
                if (node.rightNode === null) {
                    node.rightNode = nodeToAdd;
                }
                else {
                    that.add(key, node.rightNode);   
                }
            }
            else {
                throw new Error("key must be unique");   
            }
        }
    };
    
}

function BinaryTreeNode(key) {
    var that = this;
    that.key = key;
    that.leftNode = null;
    that.rightNode = null;
}