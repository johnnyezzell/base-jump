/*
base-jump 0.0.0 - A leap forward for your base JavaScript objects
Built on 2014-07-19
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
    
}());

// Global BJ object
var BJ = BJ || {};

// Returns true if value passed is a function
BJ.isFunction = function(obj) {
    return (typeof obj === 'function');
};