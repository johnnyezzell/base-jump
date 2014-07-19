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