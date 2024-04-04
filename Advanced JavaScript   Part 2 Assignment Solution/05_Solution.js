if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(searchElement, fromIndex) {
      var startIndex = fromIndex || 0;
      for (var i = startIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
          return true;
        }
      }
      return false;
    };
  }