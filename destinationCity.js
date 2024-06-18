function findDestinationCity(paths) {
    // Create a hash map of origin cities
    const originCities = new Map();
    for (const [start, end] of paths) {
        originCities.set(start, true);
    }

    // Iterate over the paths again to find the destination city that is not present in the origin set
    for (const [start, end] of paths) {
        if (!originCities.has(end)) {
            return end;
        }
    }
    return null;
}

// Edge Test Inputs
console.log(findDestinationCity([])); // Expected Output: null
console.log(findDestinationCity([['nairobi', 'nakuru']])) // Expect: 'nakuru'
console.log(findDestinationCity([['nairobi', 'nakuru'], ['nakuru', 'eldoret'], ['eldoret', 'kisumu']])) // Expect: 'kisumu'
console.log(findDestinationCity([['nairobi', 'nakuru'], ['nakuru', 'nakuru'], ['nakuru', 'eldoret'], ['eldoret', 'kisumu']])) // Expect: 'kisumu'