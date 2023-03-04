function cooking(...arr) {

    cnt = 1;

    let start = arr[0];

    while (cnt != 6) {

        let current = arr[cnt];

        switch (current) {
            case "chop":
                start /= 2;
                break;
            case "dice":
                start = Math.sqrt(start);
                break;
            case "spice":
                start += 1;
                break;
            case "bake":
                start *= 3;
                break
            case "fillet":
                start = start - start * 0.2;
                break;
        }

        console.log(start);

        cnt++;
    }

}

cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')