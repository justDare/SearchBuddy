export function searchHelpers() {

    console.log('helpers');

    // check visited array for a vertex
    function hasVertex(array, array2D) {
        if (array2D.length === 0) return false;

        for (var i = 0; i < array2D.length; i++)
            if (arraysMatch(array2D[i], array)) return true;

        return false;
    }

    // compare 2 arrays
    function arraysMatch(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;

        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    // get all neighbor cells of given vertex
    function getNeighbours(vertex, grid, rowCount, colCount) {
        let neighbours = [];

        if (inBounds([vertex[0] - 1, vertex[1]], rowCount, colCount))
            if (grid[vertex[0] - 1][vertex[1]] !== "wall")
                neighbours.push([vertex[0] - 1, vertex[1]]);

        if (inBounds([vertex[0], vertex[1] + 1], rowCount, colCount))
            if (grid[vertex[0]][vertex[1] + 1] !== "wall")
                neighbours.push([vertex[0], vertex[1] + 1]);

        if (inBounds([vertex[0] + 1, vertex[1]], rowCount, colCount))
            if (grid[vertex[0] + 1][vertex[1]] !== "wall")
                neighbours.push([vertex[0] + 1, vertex[1]]);

        if (inBounds([vertex[0], vertex[1] - 1], rowCount, colCount))
            if (grid[vertex[0]][vertex[1] - 1] !== "wall")
                neighbours.push([vertex[0], vertex[1] - 1]);

        return neighbours;
    }

    // helper funtion, check bounds of vertex based on grid size
    function inBounds(vertex, rows, columns) {
        if (
            vertex[0] >= 0 &&
            vertex[0] < rows &&
            (vertex[1] >= 0 && vertex[1] < columns)
        )
            return true;

        return false;
    }

    function updateGrid(grid, visited, path) {
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                if (
                    searchHelpers.hasVertex([i, j], visited) &&
                    grid[i][j] !== "start" &&
                    grid[i][j] !== "end"
                )
                    if (!path) grid[i][j] = "visited";
                    else grid[i][j] = "path";
            }
        }
        return grid;
    }

    searchHelpers.hasVertex = hasVertex;
    searchHelpers.arraysMatch = arraysMatch;
    searchHelpers.getNeighbours = getNeighbours;
    searchHelpers.inBounds = inBounds;
    searchHelpers.updateGrid = updateGrid;
}