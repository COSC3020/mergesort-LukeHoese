function mergesorthelper(array, left, middle, right) {
    var x = left;
    var y = middle + 1;

    while (x <= middle && y <= right) {
        if (array[x] <= array[y]) {
            x++;
        }
        else {
            var temp = array[y];
            var z = y;

            while (z > x) {
                array[z] = array[z - 1];
                z--;
            }
            array[x] = temp;

            x++;
            y++;
            middle++;
        }
    }
}

function mergesort(array) {
    var length = array.length;

    for (size = 1; size < length; size *= 2) {
        for (left = 0; left < length - size; left += 2 * size) {
            var middle = Math.min(left + size - 1, length - 1);
            var right = Math.min(left + 2 * size - 1, length - 1);

            mergesorthelper(array, left, middle, right);
        }
    }
    return array;
}
