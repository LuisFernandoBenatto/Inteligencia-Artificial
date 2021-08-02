RESULTS = []
function ldfs(visited, graph, node, current, limit){
  if (!visited.includes(node) && current <= limit) {
      RESULTS.push(node)
      visited.push(node)
      graph[node].forEach(function(neighbour){
          ldfs(visited, graph, neighbour, 
               current + 1, 
               limit)
      })
  }
}
graph = {
  0: [1, 3, 4],
  1: [0, 2],
  2: [1, 3],
  3: [0, 2, 9, 10],
  4: [0, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9, 11],
  9: [3, 8, 11],
  10: [3, 12],
  11: [8, 9, 12],
  12: [10, 11, 13, 14],
  13: [12],
  14: [12, 15, 17],
  15: [14, 16],
  16: [15],
  17: [14, 18],
  18: [17, 19],
  19: [18],
}

visited = []
ldfs(visited, graph, 0, 0, 19)
console.log(RESULTS);