/**
 * WORKING WITH MATRICES (order 1 to 3)
 * 
 * Return the cofactor of the element a[i,j]
 * @param {*} matrix matrix
 * @param {*} i row index
 * @param {*} j column index
 */
function getCofactor(matrix, i, j)
{
    let cofactor = (i+j & 1 ? -1 : 1);

    let tmatrix = new Array();

    // Remove the row and the column from the matrix
    for(let y=0; y<matrix.length; ++y)
    {
        if(y == j) y++;
        if(y >= matrix.length) break;

        let row = new Array();
        for(let x=0; x<matrix.length; ++x)
        {
            if(x == i) x++;
            if(x >= matrix.length) break;
            row.push(matrix[y][x]);
        }
        tmatrix.push(row);
    }

    // works with order 1-3
    cofactor *= ruleOfSarrus(tmatrix);

    return cofactor;

}

/**
 * Calculate the determinat of a matrix (order: 1 to 3)
 * @param matrix 
 */
function ruleOfSarrus(matrix) 
{
    // Order 1
    if(Number == matrix.constructor) {
        return matrix;
    }

    // Order 2
    if(matrix.length == 2 && matrix[0].length == 2)
    {
        return (matrix[0][0] * matrix[1][1]) + -(matrix[0][1] * matrix[1][0]);
    }

    // Order 3
    if(matrix.length == 3 && matrix[0].length == 3)
    {
        let determinant =

        // main diagonals
        //  | \ \ \ |
        //  | \ \ \ |
        //  | \ \ \ |
        (matrix[0][0] * matrix[1][1] * matrix[2][2]) +
        (matrix[0][1] * matrix[1][2] * matrix[2][0]) + 
        (matrix[0][2] * matrix[1][0] * matrix[2][1]) +
    
        // secondary diagonals
        //  | / / / |
        //  | / / / |
        //  | / / / |
        -(matrix[0][2] * matrix[1][1] * matrix[2][0]) + 
        -(matrix[0][0] * matrix[1][2] * matrix[2][1]) + 
        -(matrix[0][1] * matrix[1][0] * matrix[2][2]);
        
        return determinant;
    }

    // Error!
    console.error("Entrada inválida! [SARRUS METHOD]");
    return null;
}