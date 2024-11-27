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

    // control size of subarrays, doubling each time until it spans entire array
    for (size = 1; size < length; size *= 2) {
        // select adjacent subarrays of size "size" (subtle I know) to merge as long as there is room
        for (left = 0; left < length - size; left += 2 * size) {
            var middle = Math.min(left + size - 1, length - 1);
            var right = Math.min(left + 2 * size - 1, length - 1);

            // helper function to do the whole merge sorting business
            mergesorthelper(array, left, middle, right);
        }
    }
    return array;
}
