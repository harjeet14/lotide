const pigLatin = (array) => {
  let result = '';
  for (let i = 2; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result += array[j][0];
    }

  }
  console.log(result.slice(1));
}

pigLatin(process.argv);