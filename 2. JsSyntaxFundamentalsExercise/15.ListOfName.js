function sortList(...arr) {

    let myArr = arr[0];

    let sorted = myArr.sort((aName, bName) => {
        let result = aName.localeCompare(bName);
        return result;
    })
    for (let index = 1; index <= sorted.length; index++) {
        console.log(`${index}. ${sorted[index - 1]}`)
    }
}

sortList(["John","Bob","Christina","Ema"])