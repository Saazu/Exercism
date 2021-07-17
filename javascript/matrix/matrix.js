//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function getRows(matrixString) {
  return matrixString
    .split("\n")
    .map(str =>
      str
        .split(" ")
        .map(el => Number(el)
        )
    );
}

function getColumns(rows) {
  let columns = [];
  for (let i = 0; i < rows[0].length; i++) {
    if (columns[i] === undefined) {
      columns[i] = [];
    }
    for (let j = 0; j < rows.length; j++) {
      columns[i][j] = rows[j][i]
    }
  }
  return columns
}


export class Matrix {
  constructor(matrixString) {
    this._rows = getRows(matrixString)
    this._columns = getColumns(this.rows);
  }


  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }

}
