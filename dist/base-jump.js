// #Base Jump 0.0.1
// **A leap forward for your JavaScript objects.**

// The base jump name space
var BJ = BJ || {};

// Returns the current version of base jump.
Object.defineProperty(BJ, 'version', {
    value: '0.0.1',
    writable: false,
    enumerable: false
});

// ##Array Extensions

// Insert an item in an array before the index passed.
// Can throw "Index out of range" error.
Array.prototype.insertBefore = function(index, item) {
    if (index > this.length - 1 || index < 0) {
        throw new Error("Index out of range");
    }
    this.splice(index, 0, item);
};

// Insert an item into an array after the index passed.
// Can throw "Index out of range" error.
Array.prototype.insertAfter = function(index, item) {
    if (index > this.length - 1 || index < 0) {
        throw new Error("Index out of range");
    }
    this.splice(index + 1, 0, item);
};

// Removes the item from the array at the specified index.
// Can throw "Index out of range" error.
Array.prototype.removeAt = function(index) {
    if (index > this.length - 1 || index < 0) {
        throw new Error("Index out of range");
    }
    this.splice(index, 1);
};

// Removes all elements of an array.
Array.prototype.removeAll = function() {
    while(this.length > 0) {
        this.pop();
    }
};

// Returns a copy of an array.
Array.prototype.copy = function() {
    var newArray = [];
    for(var index = 0; index < this.length; index++) {
        newArray.push(this[index]);
    }
    return newArray;
};

// ##BinaryTree

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

// ##Object Extensions

// Some people will suggest that the following
// methods should never be created.  However, if
// someone wants to create their own method on
// the object with the same name, they can overwrite
// this base-jump method easily. 
//
// Sample of overwritting object proptotype method.
//
// var myObject.copy = function() {...};
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

// ###Type Check Functions

// Check to see if the current object is an array.
Object.defineProperty(Object.prototype, 'isArray', {    
    value: function() {
        return Object.prototype.toString.call(this) === "[object Array]";
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the curren object is a function.
Object.defineProperty(Object.prototype, 'isFunction', {
    value: function() {
        return typeof this === 'function';   
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the current object is a number.
Object.defineProperty(Object.prototype, 'isNumber', {
    value: function() {
        return !isNaN(parseFloat(this));
    },
    writable: true,
    configurable: true,
    enumrable: false
});

// Check to see if the current object contains a number.
Object.defineProperty(Object.prototype, 'hasNumber', {
    value: function() {
        return !isNaN(parseFloat(this.toString().replace(/,/g, '').match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/), 10));        
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the current object is a string.
Object.defineProperty(Object.prototype, 'isString', {
    value: function() {
        return Object.prototype.toString.call(this) === '[object String]';
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Check to see if the current object is a boolean.
Object.defineProperty(Object.prototype, 'isBoolean', {
    value: function() {
        return Object.prototype.toString.call(this) === '[object Boolean]';
    },
    writeable: true,
    configurable: true,
    enumerable: false
});

// ###Type Conversion Functions

// Converts an object that can represent a number into a number.
//
// "Test 123.412" will return 123.412
Object.defineProperty(Object.prototype, 'toNumber', {
    value: function() {
        return parseFloat(this.toString().replace(/,/g, '').match(/(\+|-)?((\d+(\.\d+)?)|(\.\d+))/), 10);        
    },
    writable: true,
    configurable: true,
    enumerable: false
});

// Converts an object that can represent a boolean into a boolean
//
// "test" or 123 will return true.  "asdfas" or 0 will return false.
Object.defineProperty(Object.prototype, 'toBoolean', {
    value: function() {
        return ((this.isNumber() && this.toString() !== '0') ||
                (this.isString() && this.toString().trim().toLowerCase() === 'true'));
    },
    writable: true,
    configuration: true,
    enumerable: false
});