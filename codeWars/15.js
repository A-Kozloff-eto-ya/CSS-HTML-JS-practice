//You are given two interior angles (in degrees) of a triangle.
//
// Write a function to return the 3rd.
//
// Note: only positive integers will be tested.

function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow'
        case 'yellow':
            return 'red'
        case 'red':
            return 'green'
    }

}