// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase();
}