let array2D = [];
let rows = 3;
let cols = 3;
for (let i = 0; i < rows; i++) {
  array2D[i] = new Array(cols);
  for (let j = 0; j < cols; j++) {
    array2D[i][j] = i * cols + j;
    console.log(array2D[i][j]+" ");
  }
}
