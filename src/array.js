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
