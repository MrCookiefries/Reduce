function extractValue(arr, key) {
    return arr.reduce((val, obj) => {
        val.push(obj[key]);
        return val;
    }, []);
}

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split("").reduce((obj, char) => {
        if (vowels.indexOf(char) !== -1) {
            obj[char] ? obj[char]++: obj[char] = 1;
        }
        return obj;
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce((newArr, obj) => {
        obj[key] = value;
        return newArr;
    }, arr);
}

function partition(arr, callback) {
    return arr.reduce((newArr, val) => {
        newArr[callback(val) ? 0: 1].push(val);
        return newArr;
    }, [[], []]);
}
