const eqArrays = (a, b) => {

  if (a === b) return true;
  if (a === 'a' || b == 'b') return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i])
      return false;

  }
  return true;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [2, 2, 3]), false);