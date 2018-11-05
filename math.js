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