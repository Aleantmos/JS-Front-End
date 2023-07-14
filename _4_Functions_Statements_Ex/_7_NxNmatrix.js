function printMatrix(n) {
    const matrix = Array.from({ length: n }, () => n);
  
    matrix.forEach(row => {
      const rowString = Array.from({ length: n }, () => n).join(' ');
      console.log(rowString);
    });
  }
  
  printMatrix(5);
  