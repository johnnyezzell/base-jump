function BinaryTree() {
    var self = this;
    self.rootNode = null;
    
    self.add = function(value) {
        
        var node = new BinaryTreeNode();
        node.value = value;
        
        var current;
        
        // set root node if it's not
        if(self.rootNode === null) {
            self.rootNode = node;
        }
        else {
            current = self.rootNode;
            
            while(true) {
                    
                if (value < current.value) {
                
                    if (current.leftNode === null) {
                        current.leftNode = node;
                        break;
                    }
                    else {
                        current = current.leftNode;   
                    }
                
                }
                else if (value > current.value) {
                
                    if (current.rightNode === null) {
                        current.rightNode = node;
                        break;
                    }
                    else {
                        current = current.rightNode;   
                    }
                    
                }
                else {
                    break;   
                }
                    
            }
        }
        
    };
}

function BinaryTreeNode() {
    var self = this;
    self.value = null;
    self.leftNode = null;
    self.rightNode = null;
}