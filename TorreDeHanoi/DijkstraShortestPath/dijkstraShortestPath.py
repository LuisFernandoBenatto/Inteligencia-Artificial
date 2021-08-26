class Graph(object):

    def __init__(self):
        self.nodes = set()
        self.edges = {}
        self.distances = {}

    def add_node(self, value):
        self.nodes.add(value)

    def addEdge(self, from_node, to_node, distance):
        self._add_edge(from_node, to_node, distance)
        self._add_edge(to_node, from_node, distance)

    def _add_edge(self, from_node, to_node, distance):
        self.edges.setdefault(from_node, [])
        self.edges[from_node].append(to_node)
        self.distances[(from_node, to_node)] = distance

def dijkstra(graph, initial_node):
    visited = {initial_node: 0}
    current_node = initial_node
    path = {}

    nodes = set(graph.nodes)

    while nodes:
        min_node = None
        for node in nodes:
            if node in visited:
                if min_node is None:
                    min_node = node
                elif visited[node] < visited[min_node]:
                    min_node = node

        if min_node is None:
            break

        nodes.remove(min_node)
        cur_wt = visited[min_node]

        for edge in graph.edges[min_node]:
            wt = cur_wt + graph.distances[(min_node, edge)]
            if edge not in visited or wt < visited[edge]:
                visited[edge] = wt
                path[edge] = min_node

    return visited, path

def shortest_path(graph, initial_node, goal_node):
    distances, paths = dijkstra(graph, initial_node)
    route = [goal_node]

    while goal_node != initial_node:
        route.append(paths[goal_node])
        goal_node = paths[goal_node]

    route.reverse()
    return route

if __name__ == '__main__':
    g = Graph()
    g.nodes = set(range(1, 28))
    g.addEdge(1, 2, 1)
    g.addEdge(1, 3, 1)

    g.addEdge(2, 1, 1)
    g.addEdge(2, 3, 1)
    g.addEdge(2, 4, 1)

    g.addEdge(3, 1, 1)
    g.addEdge(3, 2, 1)
    g.addEdge(3, 5, 1)

    g.addEdge(4, 2, 1)
    g.addEdge(4, 6, 1)
    g.addEdge(4, 7, 1)

    g.addEdge(5, 8, 1)
    g.addEdge(5, 9, 1)

    g.addEdge(6, 4, 1)
    g.addEdge(6, 7, 1)
    g.addEdge(6, 10, 1)

    g.addEdge(7, 4, 1)
    g.addEdge(7, 6, 1)
    g.addEdge(7, 8, 1)

    g.addEdge(8, 5, 1)
    g.addEdge(8, 7, 1)
    g.addEdge(8, 9, 1)

    g.addEdge(9, 5, 1)
    g.addEdge(9, 8, 1)
    g.addEdge(9, 11, 1)

    g.addEdge(10, 6, 1)
    g.addEdge(10, 12, 1)
    g.addEdge(10, 13, 1)

    g.addEdge(11, 9, 1)
    g.addEdge(11, 14, 1)
    g.addEdge(11, 15, 1)

    g.addEdge(12, 10, 1)
    g.addEdge(12, 13, 1)
    g.addEdge(12, 16, 1)

    g.addEdge(13, 10, 1)
    g.addEdge(13, 12, 1)
    g.addEdge(13, 17, 1)

    g.addEdge(14, 11, 1)
    g.addEdge(14, 15, 1)
    g.addEdge(14, 18, 1)

    g.addEdge(15, 11, 1)
    g.addEdge(15, 14, 1)
    g.addEdge(15, 19, 1)

    g.addEdge(16, 12, 1)
    g.addEdge(16, 20, 1)
    g.addEdge(16, 21, 1)

    g.addEdge(17, 13, 1)
    g.addEdge(17, 22, 1)
    g.addEdge(17, 23, 1)

    g.addEdge(18, 14, 1)
    g.addEdge(18, 24, 1)
    g.addEdge(18, 25, 1)

    g.addEdge(19, 15, 1)
    g.addEdge(19, 26, 1)
    g.addEdge(19, 27, 1)

    g.addEdge(20, 16, 1)
    g.addEdge(20, 21, 1)

    g.addEdge(21, 16, 1)
    g.addEdge(21, 20, 1)
    g.addEdge(21, 22, 1)

    g.addEdge(22, 17, 1)
    g.addEdge(22, 21, 1)
    g.addEdge(22, 23, 1)

    g.addEdge(23, 17, 1)
    g.addEdge(23, 22, 1)
    g.addEdge(23, 24, 1)

    g.addEdge(24, 18, 1)
    g.addEdge(24, 23, 1)
    g.addEdge(24, 25, 1)

    g.addEdge(25, 18, 1)
    g.addEdge(25, 24, 1)
    g.addEdge(25, 26, 1)

    g.addEdge(26, 19, 1)
    g.addEdge(26, 25, 1)
    g.addEdge(26, 27, 1)

    g.addEdge(27, 19, 1)
    g.addEdge(27, 26, 1)

    inicial = 1

    print('Digite o numero do vertice inicial: ')
    inicial=int(input())

    if inicial > 0 and inicial < 28:
        for i in range(1, len(g.nodes) + 1):
            if i != inicial:
                print("Caminho do vertice ", inicial, " até o vertice ", i, ": ", shortest_path(g, inicial, i))
    else:
        print('Cidade não encontrada')

#Caminho do vertice  1  até o vertice  2 :  [1, 2]
#Caminho do vertice  1  até o vertice  3 :  [1, 3]
#Caminho do vertice  1  até o vertice  4 :  [1, 2, 4]
#Caminho do vertice  1  até o vertice  5 :  [1, 3, 5]
#Caminho do vertice  1  até o vertice  6 :  [1, 2, 4, 6]
#Caminho do vertice  1  até o vertice  7 :  [1, 2, 4, 7]
#Caminho do vertice  1  até o vertice  8 :  [1, 3, 5, 8]
#Caminho do vertice  1  até o vertice  9 :  [1, 3, 5, 9]
#Caminho do vertice  1  até o vertice  10 :  [1, 2, 4, 6, 10]    
#Caminho do vertice  1  até o vertice  11 :  [1, 3, 5, 9, 11]    
#Caminho do vertice  1  até o vertice  12 :  [1, 2, 4, 6, 10, 12]
#Caminho do vertice  1  até o vertice  13 :  [1, 2, 4, 6, 10, 13]
#Caminho do vertice  1  até o vertice  14 :  [1, 3, 5, 9, 11, 14]
#Caminho do vertice  1  até o vertice  15 :  [1, 3, 5, 9, 11, 15]
#Caminho do vertice  1  até o vertice  16 :  [1, 2, 4, 6, 10, 12, 16]
#Caminho do vertice  1  até o vertice  17 :  [1, 2, 4, 6, 10, 13, 17]
#Caminho do vertice  1  até o vertice  18 :  [1, 3, 5, 9, 11, 14, 18]
#Caminho do vertice  1  até o vertice  19 :  [1, 3, 5, 9, 11, 15, 19]
#Caminho do vertice  1  até o vertice  20 :  [1, 2, 4, 6, 10, 12, 16, 20]
#Caminho do vertice  1  até o vertice  21 :  [1, 2, 4, 6, 10, 12, 16, 21]
#Caminho do vertice  1  até o vertice  22 :  [1, 2, 4, 6, 10, 13, 17, 22]
#Caminho do vertice  1  até o vertice  23 :  [1, 2, 4, 6, 10, 13, 17, 23]
#Caminho do vertice  1  até o vertice  24 :  [1, 3, 5, 9, 11, 14, 18, 24]
#Caminho do vertice  1  até o vertice  25 :  [1, 3, 5, 9, 11, 14, 18, 25]
#Caminho do vertice  1  até o vertice  26 :  [1, 3, 5, 9, 11, 15, 19, 26]
#Caminho do vertice  1  até o vertice  27 :  [1, 3, 5, 9, 11, 15, 19, 27]

# tempo de execução 0.310s