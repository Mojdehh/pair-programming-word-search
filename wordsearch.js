const wordSearch = (letters, word) => {
    // array transpose
        const transpose = function (letters) {
            const len = letters.length;
            let correct = [];
            let newArray = [];
        
            for (let i = 0; i < letters.length; i++) {
              for (let j = 0; j < letters[i].length; j++) {
                if (!Array.isArray(newArray[j])) {
                  newArray[j] = [];
                }
                newArray[j][i] = letters[i][j];
              }
            }
            return newArray;
          };
    // end of array transpose    
        
        const horizontalJoin = letters.map((ls) => ls.join(""));  // convert each array in a row to a single string
        const verticalJoin = transpose(letters).map((ls) => ls.join("")); // convert each array in a row to a single string after matrix transpose
        for (l of horizontalJoin) { 
            for (lv of verticalJoin) {
                if (l.includes(word) || lv.includes(word)) return true;
            }
        }
        return false;
        
        // console.log(horizontalJoin);
        // console.log(verticalJoin);
    
      };
     
      module.exports = wordSearch;