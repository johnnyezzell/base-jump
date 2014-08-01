/*
base-jump 0.0.0 - A leap forward for your base JavaScript objects
Built on 2014-07-31
*/

(function() {

    // Insert an item in an array before the index passed
    // Throws "Index out of range" error
    Array.prototype.insertBefore = function(index, item) {
        if (index > this.length - 1 || index < 0) {
            throw new Error("Index out of range");
        }
        this.splice(index, 0, item);
    };

    // Insert an item into an array after the index passed
    // Throws "Index out of range" error
    Array.prototype.insertAfter = function(index, item) {
        if (index > this.length - 1 || index < 0) {
            throw new Error("Index out of range");
        }
        this.splice(index + 1, 0, item);
    };

    // Removes the item from the array at the specified index
    // Throws "Index out of range" error
    Array.prototype.removeAt = function(index) {
        if (index > this.length - 1 || index < 0) {
            throw new Error("Index out of range");
        }
        this.splice(index, 1);
    };

    // Removes all elements of an array
    Array.prototype.removeAll = function() {
        while(this.length > 0) {
            this.pop();
        }
    };

    // Returns a copy of an Array.
    Array.prototype.copy = function() {
        var newArray = [];
        for(var index = 0; index < this.length; index++) {
            newArray.push(this[index]);
        }
        return newArray;
    };

}());

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

// Some people will suggest that the following
// methods should never be created.  However, if
// someone wants to create their over method on
// the object with the same name, they can overwrite
// this base-jump method easily. 
//
// Sample of overwritting object proptotype method.
// var myObject.copy = function() {...};
(function() {

    function copyObject(sourceObject) {
        var targetObject = {};
        for(var propertyName in sourceObject) {
            // We ignore functions because this causes problems when
            // dealing with two way databinding.  In the future, we may
            // change this and create a new copySafe that does not copy
            // the functions.
            if(typeof sourceObject[propertyName] !== 'function')
                targetObject[propertyName] = sourceObject[propertyName];
        }
        return targetObject;
    }
    
    // Create a copy of the current object.
    // Arrays will be copied as a value.
    Object.defineProperty(Object.prototype, 'copy', {
        value: function() {
            return copyObject(this);
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
    ///////////////////////
    // Type Check Functions
    
    // Check to see if the current object is an Array
    Object.defineProperty(Object.prototype, 'isArray', {    
        value: function() {
            return Object.prototype.toString.call(this) === "[object Array]";
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
    // Check to see if the curren object is a Function
    Object.defineProperty(Object.prototype, 'isFunction', {
        value: function() {
            return typeof this === 'function';   
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
    // Check to see if the current object is a Number
    Object.defineProperty(Object.prototype, 'isNumber', {
        value: function() {
            return !isNaN(parseFloat(this));
        },
        writable: true,
        configurable: true,
        enumrable: false
    });
    
    // Check to see if the current object is a string
    Object.defineProperty(Object.prototype, 'isString', {
        value: function() {
            return Object.prototype.toString.call(this) === '[object String]';
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
    Object.defineProperty(Object.prototype, 'isBoolean', {
        value: function() {
            return Object.prototype.toString.call(this) === '[object Boolean]';
        },
        writeable: true,
        configurable: true,
        enumerable: false
    });
    
    ///////////////////////
    // Type Conversion Functions
    
    Object.defineProperty(Object.prototype, 'toNumber', {
        value: function() {
            return parseFloat(this.replace(/,/g, '').match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/), 10);        
        },
        writable: true,
        configurable: true,
        enumerable: false
    });
    
}());

// Global BJ object
var BJ = BJ || {};

Object.defineProperty(BJ, 'version', {
    value: '0.0.1',
    writable: false,
    enumerable: false
});