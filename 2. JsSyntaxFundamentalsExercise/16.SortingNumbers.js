function sortNumbers(...arr) {

    let myArr = arr[0];

    let sorted = myArr.sort((aNum, bNum) => {
        let result = aNum - bNum;
        return result;
    })

    sorted = sorted.join(", ");
    
    console.log(`[${sorted}]`);
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);