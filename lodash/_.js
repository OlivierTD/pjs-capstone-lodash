let _ = {
  clamp(num, lowerBound, upperBound) {
  	if (num < lowerBound) {
    	return lowerBound;
  	} else if (num > upperBound) {
    	return upperBound;
  	} else {
    	return num;
  	}
	},
  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    if (number < start) {
      return false;
    } else if (number > end) {
      return false;
    } else {
      return true;
    }
  },
  words(str) {
    return str.split(' ');
  },
  pad(str, length) {
    if (length <= str.length) {
      return str
    }
    let startPaddingLength = Math.floor((length - str.length) / 2);
    let endPaddingLength = length - str.length - startPaddingLength;
    let paddedString = " ".repeat(startPaddingLength) + str + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(obj, key) {
    if (key in obj) {
      return true;
    } else {
      return false;
    }
  },
  invert(obj) {
    let invertedObj = {};
    for (let element in obj) {
      invertedObj[obj[element]] = element;
    }
    return invertedObj;
  },
  findKey(obj, func) {
    for(let element in obj) {
      if(func(obj[element])) {
        return element
      }
    }
    return undefined;
  },
  drop(arr, num) {
    if (!num) {
      arr.shift();
    } else {
      for (let i = 0; i < num; i++) {
        arr.shift();
      }
    }
    return arr;
  },
  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex(function(element, index) {
      return !predicate(element, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;    
  },
  chunk(arr, size) {
    if (!size) {
      size = 1;
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + size) {
      let arrayChunk = arr.slice(i, i + size);
      newArr.push(arrayChunk);
    }
    return newArr;
  }
};

// Do not write or modify code below this line.
module.exports = _;
