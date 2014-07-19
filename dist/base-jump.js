/*
base-jump 0.0.0 - A leap forward for your base JavaScript objects
Built on 2014-07-19
*/

// Insert an item in an array before the index passed
// Throws "Index out of range" error
Array.prototype.insertBefore = function(index, item) {
    if (index > this.length - 1 || index < 0) {
        throw new Error("Index out of range");
    }
    this.splice(index, 0, item);
};

// Insert an itme into an array after the index passed
// Throws "Index out of range" error
Array.prototype.insertAfter = function(index, item) {
    if (index > this.length - 1 || index < 0) {
        throw new Error("Index out of range");
    }
    this.splice(index + 1, 0, item);
};

// Global BJ object
var BJ = BJ || {};

// Returns true if value passed is a function
BJ.isFunction = function(obj) {
    return (typeof obj === 'function');
};