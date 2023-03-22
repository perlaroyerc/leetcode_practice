/*
For a Railway Station, We are given arrival and departure timings of N trains in two arrays, let's call them Arrival and Departure.

We have to find the minimum number of platforms needed so that no train needs to wait for the railway station to have an empty platform.

Example 1:
Arrival:   [9.00, 10.00, 9.40,  14.10, 15.30]
Departure: [9.50, 14.00, 10.10, 14.20, 17.30]
Output: 2
Explanation: 3rd Train's timing intersects with 2nd Train's schedule (10.00 to 14.00). Hence we need at least 2 platforms.

*/

//Time complexity: O(nlogn)
//Space complecity: O(1)

const minPlatform = (arrival, departure) => {

    arrival = arrival.sort((a, b) => a - b);
    departure = departure.sort((a, b) => a - b);

    let count = 0;
    let i = 0;
    let j = 0;
    let minNumOfPlatforms = 0;

    while(i <= arrival.length && j <= departure.length){

        if(arrival[i] <= departure[j]){
            count++;
            i++;
        } else if(arrival[i] > departure[j]){
            count--;
            j++;
        }

        minNumOfPlatforms = Math.max(minNumOfPlatforms, count);
    }

    return minNumOfPlatforms;

}

console.log(minPlatform([9.00, 10.00, 9.40, 14.10, 15.30], [9.50, 14.00, 10.10, 14.20, 17.30])); //2

console.log('hey');