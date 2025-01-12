//14] Given below the array let arr["Sunil", "Madhavi, "Nira", "Raghav", "Nira"] Write a program to find duplicate element in an array For example: "Nira" is duplicate element
let arr = ["Sunil", "Madhavi", "Nira", "Raghav", "Nira"];

function findDuplicate(arr) {
    let elementCount = {};
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        elementCount[element] = (elementCount[element] || 0) + 1;
    }
    for (let element in elementCount) {
        if (elementCount[element] > 1) {
            duplicates.push(element);
        }
    }

    return duplicates;
}

let duplicateElements = findDuplicate(arr);
console.log("Duplicate element(s):", duplicateElements);
