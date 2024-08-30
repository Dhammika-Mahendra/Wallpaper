export function noOfColumns(words) {
    return words.reduce((maxLength, word) => {
      return Math.max(maxLength, word.length);
    }, 0);
}
  
export function generateArray(n, letterArray) {
    const result = [];
    let id = 0;

    let x = 50;

    for (let group = 1; group <= n; group++) {
        let y = 20;

        for (let i = 0; i < letterArray.length; i++) {
            result.push({
                id: id++,
                group: group,
                x: x,
                y: y,
                letter: letterArray[i],
            });

            y += 22; // Increment y by 20 for each letter

            // Reset y to 50 when letterArray is iterated completely and group value increments once
            if (i === letterArray.length - 1) {
                y = 50;
            }
        }

        x += 100; // Increment x by 100 for each group
    }

    return result;
}

export const letterInd=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

export function generateValuePairs(inputArray, letterArray) {
    const finalArray = [];
    const l = letterArray.length; // Length of letterArray

    inputArray.forEach(str => {
        const values = [];

        // Step 2: Calculate the value for each character in the string
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const j = letterArray.indexOf(char) + 1; // Position in letterArray (1-based index)
            const value = ((i + 1 - 1) * l) + (j - 1);
            values.push(value);
        }

        // Step 3: Group values into pairs and push to final array
        for (let i = 0; i < values.length - 1; i++) {
            finalArray.push([values[i], values[i + 1]]);
        }
    });

    const uniqueArray = finalArray.filter((value, index, self) =>
    index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(value)));

    return uniqueArray;
}