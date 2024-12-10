const items = [];
let turn = 0,
  rows = 3,
  cols = 3;
let matrix = [
  [
    document.getElementById("item1"),
    document.getElementById("item2"),
    document.getElementById("item3"),
  ],
  [
    document.getElementById("item4"),
    document.getElementById("item5"),
    document.getElementById("item6"),
  ],
  [
    document.getElementById("item7"),
    document.getElementById("item8"),
    document.getElementById("item9"),
  ],
];

// Add each item to the items array for resetting later
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    items.push(matrix[i][j]);
  }
}

// Add event listeners to each matrix item
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    matrix[i][j].addEventListener("click", function () {
      if (this.innerHTML.trim() === "") {
        if (turn == 0) {
          this.innerHTML = `<img src="images/o.png" id="img1" width="100" >`;
          matrix[i][j] = "O";
          turn = 1;
        } else {
          this.innerHTML = `<img src="images/x.png" id="img2" width="100" >`;
          matrix[i][j] = "X";
          turn = 0;
        }
        validate(); // Validate after each move
      }
    });
  }
}

let dialog = document.querySelector("dialog");
document.querySelector("#close").onclick = function () {
  dialog.close();
};

function validate() {
  // Checking if rows are the same
  for (let i = 0; i < rows; i++) {
    if (
      matrix[i][0] === matrix[i][1] &&
      matrix[i][1] === matrix[i][2] &&
      (matrix[i][0] === "O" || matrix[i][0] === "X")
    ) {
      let message = `Boom!💥💥💥💥\nPlayer ${matrix[i][0]} Wins`;
      document.getElementById("result").textContent = message;
      dialog.show();
      reset();
      return; // Stop further checking if a winner is found
    }
  }

  // Checking if columns are the same
  for (let i = 0; i < cols; i++) {
    if (
      matrix[0][i] === matrix[1][i] &&
      matrix[1][i] === matrix[2][i] &&
      (matrix[0][i] === "O" || matrix[0][i] === "X")
    ) {
      let message = `Boom!💥💥💥💥\nPlayer ${matrix[0][i]} Wins`;
      document.getElementById("result").textContent = message;
      dialog.show();
      reset();
      return; // Stop further checking if a winner is found
    }
  }

  // Checking if diagonals are the same
  if (
    matrix[0][0] === matrix[1][1] &&
    matrix[1][1] === matrix[2][2] &&
    matrix[0][0] !== ""
  ) {
    let message = `Boom!💥💥💥💥\nPlayer ${matrix[0][0]} Wins`;
    document.getElementById("result").textContent = message;
    dialog.show();
    reset();
    return; // Stop further checking if a winner is found
  }

  if (
    matrix[0][2] === matrix[1][1] &&
    matrix[1][1] === matrix[2][0] &&
    matrix[0][2] !== ""
  ) {
    let message = `Boom!💥💥💥💥\nPlayer ${matrix[0][2]} Wins`;
    document.getElementById("result").textContent = message;
    dialog.show();
    reset();
    return; // Stop further checking if a winner is found
  }
  let isDraw = true;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j].innerHTML.trim() === "") {
        isDraw = false;
        break; // Exit inner loop if an empty cell is found
      }
    }
  }

  if (isDraw) {
    let message = `It's a Draw! 🫣`;
    document.getElementById("result").textContent = message;
    dialog.show();
    reset();
  }
}

function reset() {
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = ``;
  }
  // Reset the matrix to the original state
  matrix = [
    [
      document.getElementById("item1"),
      document.getElementById("item2"),
      document.getElementById("item3"),
    ],
    [
      document.getElementById("item4"),
      document.getElementById("item5"),
      document.getElementById("item6"),
    ],
    [
      document.getElementById("item7"),
      document.getElementById("item8"),
      document.getElementById("item9"),
    ],
  ];
  turn = 0; // Reset turn to the starting player
}
