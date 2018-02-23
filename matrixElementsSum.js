function matrixElementsSum(matrix) {
  let matrix_length = matrix.length;
  let first_condition = checkMatrixLength(matrix_length);
  let second_condition = checkChildMatrixLength(matrix, matrix_length);
  let third_condition = checkPrice(matrix, matrix_length);
  if(first_condition && second_condition && third_condition){
    let result = countPrice(matrix, matrix_length);
    return result;
  }
}

function checkMatrixLength(length){
  if(length >= 1 && length <= 5){
    return true;
  }else{
    return false;
  }
}

function checkChildMatrixLength(matrix, matrixLength){
  for(let i = 0; i < matrixLength; i++){
    if(matrix[i].length < 1 || matrix[i].length > 5){
      return false;
    }
  }
  return true;
}

function checkPrice(matrix, matrixLength){
  for(let j = 0; j < matrixLength; j++){
    for(let k = 0; k < matrix[j].length; k++){
      if(matrix[j][k] < 0 || matrix[j][k] > 10){
        return false;
      }
    }
  }
  return true;
}

function countPrice(matrix, length){
  let price = 0;
  let haunted_column = [];
  for(let a = 0; a < length; a++){
    for(let b = 0; b < matrix[a].length; b++){
      if(a == 0){
        if(matrix[a][b] != 0){
          price = price + matrix[a][b];
        }else{
          haunted_column.push(b);
        }
      }else{
        if(!haunted_column.includes(b)){
          if(matrix[a][b] != 0){
            price = price + matrix[a][b];
          }else{
            haunted_column.push(b);
          }
        }
      }
    }
  }
  return price;
}
