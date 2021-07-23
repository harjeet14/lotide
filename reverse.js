const reverseString = (array) => {
  for (let i = 2; i < array.length; i++) {
    let newArr = '';
    for (let j = array[i].length - 1; j >= 0; j--) {
      newArr += array[i][j];
    }
    console.log(newArr);
  }
};
reverseString(process.argv);