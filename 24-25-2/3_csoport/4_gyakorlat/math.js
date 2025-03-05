function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

function addnmul(a, b, c) {
  return mul(add(a, b), c);
}

// export default addnmul;

export default { add, addnmul };
