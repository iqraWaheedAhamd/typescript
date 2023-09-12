function getOrdinal(number) {
  const lastDigit = number % 10;
  if (number === 11 || number === 12 || number === 13) {
    return number + "th";
  } else if (lastDigit === 1) {
    return number + "st";
  } else if (lastDigit === 2) {
    return number + "nd";
  } else if (lastDigit === 3) {
    return number + "rd";
  // } else {
    return number + "th";
  }
}

function printOrdinalNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let number of numbers) {
    const ordinal = getOrdinal(number);
    console.log(ordinal);
  }
}

// Call the function to print the ordinal numbers
printOrdinalNumbers();
