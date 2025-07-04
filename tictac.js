
    let currentPlayer = 'X';
    let gameOver = false;

    function makeMove(cell) {
      if (cell.textContent === '' && !gameOver) {
        cell.textContent = currentPlayer;
        if (checkWinner(currentPlayer)) {
          document.getElementById("result").textContent = `Player ${currentPlayer} wins!`;
          gameOver = true;
        } else if (isDraw()) {
          document.getElementById("result").textContent = "It's a draw!";
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function checkWinner(player) {
      const cells = document.querySelectorAll('.cell');
      const combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
      return combos.some(combo =>
        combo.every(index => cells[index].textContent === player)
      );
    }

    function isDraw() {
      const cells = document.querySelectorAll('.cell');
      return [...cells].every(cell => cell.textContent !== '');
    }

    function restartGame() {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => cell.textContent = '');
      currentPlayer = 'X';
      gameOver = false;
      document.getElementById("result").textContent = '';
    }
  