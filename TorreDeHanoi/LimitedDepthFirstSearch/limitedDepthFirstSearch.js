RESULTS = []

function ldfs(visited, graph, node, current, limit){
  if (!visited.includes(node) && current <= limit){
      RESULTS.push(node)
      visited.push(node)
      graph[node].forEach(function(neighbour){
          ldfs(visited, graph, neighbour, current + 1, limit)
      })
  }
}

graph = {  
  1:   [2, 3],
  2:   [1, 3, 4],
  3:   [1, 2, 5],
  4:   [2, 6, 7],
  5:   [3, 8, 9],
  6:   [4, 7, 10],
  7:   [4, 6, 8],
  8:   [5, 7, 9],
  9:   [5, 8, 11],
  10:  [6, 12, 13],
  11:  [9, 14, 15],
  12:  [10, 13, 16],
  13:  [10, 12, 17],
  14:  [11, 15, 18],
  15:  [11, 14, 19],
  16:  [12, 20, 21],
  17:  [13, 22, 23],
  18:  [14, 24, 25],
  19:  [15, 26, 27],
  20:  [16, 21],
  21:  [16, 20, 22],
  22:  [17, 21, 23],
  23:  [17, 22, 24],
  24:  [18, 23, 25],
  25:  [18, 24, 26],
  26:  [19, 25, 27],
  27:  [26, 19],
}

visited = []
ldfs(visited, graph, 1, 1, 12)
console.log(RESULTS);

/* tempo de execução 0.502*/

/*[
  1,  2,  3,  5,  8,  7,  4,  6,
 10, 12, 13, 17, 16, 20, 21,  9,
 11, 14, 15, 19, 26, 25, 27, 18,
 24, 23, 22
]*/