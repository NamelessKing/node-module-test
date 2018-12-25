module.exports = (x, y, callback) => {

    if (x <= 0 || y <= 0) {//if any errors

        //using setTimeout for simulating delay and  asynchronous processing
        setTimeout(() =>
            callback(new Error(`Rectangle dimension should be grater then 0: l = ${x}, and b = ${y} `), null),
            2000);

    } else {

        //using setTimeout for simulating delay and  asynchronous processing
        setTimeout(() =>
            callback(null,
                {
                    perimeter: () => (2 * (x + y)),
                    area: () => (x * y)
                }),
            2000);

    }
}

