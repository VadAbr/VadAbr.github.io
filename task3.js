const calculate = () => {
  const n1 = Number(document.querySelector('#n1').value);
  const n2 = Number(document.querySelector('#n2').value);
  const n3 = Number(document.querySelector('#n3').value);
  const n4 = Number(document.querySelector('#n4').value);
  const n5 = Number(document.querySelector('#n5').value);
  const n6 = Number(document.querySelector('#n6').value);

  const { x, y } = solve(n1, n2, n3, n4, n5, n6);

  if(!x || !y) {
    alert("Что-то не так, попробуйте другие значения");
    return;
  }

  document.querySelector('#result1').value = x;
  document.querySelector('#result2').value = y;
};

const solve = (a, b, c, d, e, f) => {
  const y = (a * f - c * d) / (a * e - b * d);
  const x = (c * e - b * f) / (a * e - b * d);

  return { x, y };
}