function getDNA(itearations) {

    let dna = "ATCGTTAGGG";

    let arrDNA = splitDNA(dna);
    let arrLength = 3;

    let output = "";
    let cnt = 0;
    let backwardCnt = 1;

    for (let index = 0; index < array.length; index++) {


        for (let i = 0; i < itearations; i++) {
            let first = arrDNA[cnt];
            let second = arrDNA[cnt + 1];

            let firstHalf = "";
            let secondHalf = "";



            if (i < 3) {
                for (let j = 0; j < arrLength; j++) {
                    if (j === i) {
                        firstHalf += first;
                        secondHalf += second;
                    } else if (j > i) {
                        firstHalf += "*";
                        secondHalf += "*";
                    } else if (j < i) {
                        firstHalf += "-";
                        secondHalf += "-";
                    }
                }

            } else {
                for (let k = 0; k <= 2; k++) {
                    if (k === backwardCnt) {
                        firstHalf += first;
                        secondHalf += second;
                    } else if (k > backwardCnt) {
                        firstHalf += "*";
                        secondHalf += "*";
                    } else if (k < backwardCnt) {
                        firstHalf += "-";
                        secondHalf += "-";
                    }
                }
                backwardCnt--;
            }





            let firstHalfReversed = reverse(firstHalf);

            let sequence = firstHalfReversed + secondHalf;

            console.log(sequence);

            cnt += 2;
        }
    }
}


getDNA(5);

function reverse(arr) {
    let splitted = arr.split("");

    let reversed = splitted.reverse();

    let arrRev = reversed.join("");

    return arrRev;
}

function splitDNA(dna) {
    let dnaSplitted = dna.split("");
    return dnaSplitted;
}