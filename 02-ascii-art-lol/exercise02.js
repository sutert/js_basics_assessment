/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function () {

    let newArray = []
    for (let i = 0; i < artArray.length; i++) {
        if (i % 2 === 0) {

        } else {
            newArray.push(artArray[i - 1])
        }
    }

    writeAscii(newArray);
    console.log(artArray)

})();


