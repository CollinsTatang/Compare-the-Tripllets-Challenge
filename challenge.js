/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */


//The element of the array can be any value

function compareTriplets(a, b) {
    
    // We initialies the points of the different arrays to zero
    let point = [0, 0]
    
    // We loop through the differnt arrays with the same constraints 
       for (let i = 0; i <= 100; i++) {
           
            if (a[i] > b[i]) {
                
                point[0]++
                
            } else if (a[i] < b[i]) {
                
                point[1]++
            }
    
        }

    //We return the new points of the array
    return point

}
