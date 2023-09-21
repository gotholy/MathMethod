let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

function arrayRounded(myNumber) {
  // // .map rundet alle zahlen im [array]
  const roundedNumber = myNumber.map(function (zahl) {
    // // return gibt hier die gerundete Zahlen zurück
    return Math.round(zahl);
  });

  // // gibt hier den neuen Array mit den gerundetet zahlen zurück
  return roundedNumber;
}

// gerundeteten array in eine neue Variable
const roundedArray = arrayRounded(array);
// Variable ausgeben
console.log(roundedArray);
