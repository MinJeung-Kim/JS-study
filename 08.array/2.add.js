const fruits = ['π', 'π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ π©
// μΈλ±μ€ μ κ·Ό
fruits[4] = 'π«';
console.log(fruits);

delete fruits[1];
console.log(fruits); // [ 'π', <1 empty item>, 'π', 'π', 'π' ]
