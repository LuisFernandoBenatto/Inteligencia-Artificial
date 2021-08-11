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
    g.nodes = set(range(1, 102))
    g.addEdge(1, 54, 45)
    g.addEdge(1, 69, 26)
    g.addEdge(1, 26, 38)
    g.addEdge(1, 62, 36)

    g.addEdge(2, 97, 14)
    g.addEdge(2, 53, 21)
    g.addEdge(2, 98, 28)
    g.addEdge(2, 46, 27)
    g.addEdge(2, 15, 27)
    g.addEdge(2, 10, 11)

    g.addEdge(3, 21, 19)
    g.addEdge(3, 34, 38)
    g.addEdge(3, 25, 34)
    g.addEdge(3, 45, 21)
    g.addEdge(3, 29, 19)
    g.addEdge(3, 94, 40)
    g.addEdge(3, 46, 34)
    g.addEdge(3, 81, 36)

    g.addEdge(4, 53, 45)
    g.addEdge(4, 76, 37)
    g.addEdge(4, 13, 26)
    g.addEdge(4, 18, 28)
    g.addEdge(4, 59, 21)
    g.addEdge(4, 75, 15)
    g.addEdge(4, 83, 12)

    g.addEdge(5, 91, 5)
    g.addEdge(5, 71, 16)
    g.addEdge(5, 47, 35)
    g.addEdge(5, 70, 8)

    g.addEdge(6, 92, 27)
    g.addEdge(6, 52, 5)
    g.addEdge(6, 84, 9)

    g.addEdge(7, 48)
    g.addEdge(7, 37)
    g.addEdge(7, 40)
    g.addEdge(7, 9)
    g.addEdge(7, 100)

    g.addEdge(8, 98)
    g.addEdge(8, 97)

    g.addEdge(9, 68)
    g.addEdge(9, 100)
    g.addEdge(9, 7)

    g.addEdge(10, 2)
    g.addEdge(10, 53)
    g.addEdge(10, 75)
    g.addEdge(10, 92)

    g.addEdge(11, 101)
    g.addEdge(11, 18)
    g.addEdge(11, 59)

    g.addEdge(12, 27)
    g.addEdge(12, 57)
    g.addEdge(12, 28)
    g.addEdge(12, 34)
    g.addEdge(12, 48)

    g.addEdge(13, 102)
    g.addEdge(13, 18)
    g.addEdge(13, 4)

    g.addEdge(14, 60)
    g.addEdge(14, 43)
    g.addEdge(14, 38)

    g.addEdge(15, 2)
    g.addEdge(15, 44)
    g.addEdge(15, 99)
    g.addEdge(15, 92)
    g.addEdge(15, 41)

    g.addEdge(16, 32)
    g.addEdge(16, 45)
    g.addEdge(16, 29)
    g.addEdge(16, 63)
    g.addEdge(16, 81)

    g.addEdge(17, 54)
    g.addEdge(17, 65)
    g.addEdge(17, 51)
    g.addEdge(17, 96)
    g.addEdge(17, 36)

    g.addEdge(18, 13)
    g.addEdge(18, 11)
    g.addEdge(18, 59)
    g.addEdge(18, 4)

    g.addEdge(19, 96)
    g.addEdge(19, 90)
    g.addEdge(19, 61)
    g.addEdge(19, 86)

    g.addEdge(20, 82)
    g.addEdge(20, 102)
    g.addEdge(20, 87)

    g.addEdge(21, 34)
    g.addEdge(21, 98)
    g.addEdge(21, 46)
    g.addEdge(21, 13)

    g.addEdge(22, 33)
    g.addEdge(22, 42)
    g.addEdge(22, 60)

    g.addEdge(23, 47)
    g.addEdge(23, 85)
    g.addEdge(23, 52)

    g.addEdge(24, 99)
    g.addEdge(24, 41)
    g.addEdge(24, 73)
    g.addEdge(24, 30)

    g.addEdge(25, 34)
    g.addEdge(25, 48)
    g.addEdge(25, 40)
    g.addEdge(25, 3)
    g.addEdge(25, 32)

    g.addEdge(26, 1)
    g.addEdge(26, 69)
    g.addEdge(26, 62)

    g.addEdge(27, 86)
    g.addEdge(27, 12)
    g.addEdge(27, 48)

    g.addEdge(28, 57)
    g.addEdge(28, 67)
    g.addEdge(28, 12)
    g.addEdge(28, 34)

    g.addEdge(29, 45)
    g.addEdge(29, 3)
    g.addEdge(29, 16)

    g.addEdge(30, 73)
    g.addEdge(30, 24)
    g.addEdge(30, 74)

    g.addEdge(31, 42)
    g.addEdge(31, 91)
    g.addEdge(31, 56)
    g.addEdge(31, 47)

    g.addEdge(32, 40)
    g.addEdge(32, 25)
    g.addEdge(32, 45)
    g.addEdge(32, 16)
    g.addEdge(32, 100)

    g.addEdge(33, 89)
    g.addEdge(33, 101)
    g.addEdge(33, 22)

    g.addEdge(34, 12)
    g.addEdge(34, 28)
    g.addEdge(34, 98)
    g.addEdge(34, 67)
    g.addEdge(34, 48)
    g.addEdge(34, 25)
    g.addEdge(34, 21)
    g.addEdge(34, 3)

    g.addEdge(35, 44)
    g.addEdge(35, 94)
    g.addEdge(35, 81)
    g.addEdge(35, 73)

    g.addEdge(36, 54)
    g.addEdge(36, 17)
    g.addEdge(36, 96)
    g.addEdge(36, 77)
    g.addEdge(36, 62)

    g.addEdge(37, 7)
    g.addEdge(37, 58)
    g.addEdge(37, 66)

    g.addEdge(38, 14)
    g.addEdge(38, 43)
    g.addEdge(38, 79)
    g.addEdge(38, 50)

    g.addEdge(39, 79)
    g.addEdge(39, 50)
    g.addEdge(39, 80)

    g.addEdge(40, 48)
    g.addEdge(40, 7)
    g.addEdge(40, 25)
    g.addEdge(40, 32)
    g.addEdge(40, 100)

    g.addEdge(41, 15)
    g.addEdge(41, 24)
    g.addEdge(41, 92)
    g.addEdge(41, 84)

    g.addEdge(42, 101)
    g.addEdge(42, 22)
    g.addEdge(42, 55)
    g.addEdge(42, 91)
    g.addEdge(42, 31)

    g.addEdge(43, 60)
    g.addEdge(43, 14)
    g.addEdge(43, 38)
    g.addEdge(43, 79)

    g.addEdge(44, 15)
    g.addEdge(44, 94)
    g.addEdge(44, 35)
    g.addEdge(44, 99)

    g.addEdge(45, 32)
    g.addEdge(45, 16)
    g.addEdge(45, 29)
    g.addEdge(45, 3)

    g.addEdge(46, 2)
    g.addEdge(46, 98)
    g.addEdge(46, 21)
    g.addEdge(46, 3)

    g.addEdge(47, 70)
    g.addEdge(47, 5)
    g.addEdge(47, 31)
    g.addEdge(47, 83)
    g.addEdge(47, 95)
    g.addEdge(47, 85)
    g.addEdge(47, 23)

    g.addEdge(48, 64)
    g.addEdge(48, 27)
    g.addEdge(48, 12)
    g.addEdge(48, 34)
    g.addEdge(48, 25)
    g.addEdge(48, 40)
    g.addEdge(48, 7)

    g.addEdge(49, 67)
    g.addEdge(49, 72)
    g.addEdge(49, 102)
    g.addEdge(49, 97)
    g.addEdge(49, 76)

    g.addEdge(50, 38)
    g.addEdge(50, 79)
    g.addEdge(50, 39)

    g.addEdge(51, 65)
    g.addEdge(51, 17)
    g.addEdge(51, 78)

    g.addEdge(52, 75)
    g.addEdge(52, 23)
    g.addEdge(52, 92)
    g.addEdge(52, 6)

    g.addEdge(53, 97)
    g.addEdge(53, 76)
    g.addEdge(53, 4)
    g.addEdge(53, 2)
    g.addEdge(53, 10)

    g.addEdge(54, 1)
    g.addEdge(54, 17)
    g.addEdge(54, 36)

    g.addEdge(55, 60)
    g.addEdge(55, 79)
    g.addEdge(55, 42)
    g.addEdge(55, 91)
    g.addEdge(55, 71)
    g.addEdge(55, 80)

    g.addEdge(56, 59)
    g.addEdge(56, 31)
    g.addEdge(56, 83)

    g.addEdge(57, 12)
    g.addEdge(57, 28)

    g.addEdge(58, 90)
    g.addEdge(58, 61)
    g.addEdge(58, 64)
    g.addEdge(58, 66)
    g.addEdge(58, 37)

    g.addEdge(59, 11)
    g.addEdge(59, 18)
    g.addEdge(59, 4)
    g.addEdge(59, 56)

    g.addEdge(60, 14)
    g.addEdge(60, 43)
    g.addEdge(60, 55)
    g.addEdge(60, 22)

    g.addEdge(61, 19)
    g.addEdge(61, 64)
    g.addEdge(61, 58)

    g.addEdge(62, 1)
    g.addEdge(62, 26)
    g.addEdge(62, 36)
    g.addEdge(62, 77)

    g.addEdge(63, 100)
    g.addEdge(63, 88)
    g.addEdge(63, 16)
    g.addEdge(63, 81)

    g.addEdge(64, 86)
    g.addEdge(64, 61)
    g.addEdge(64, 58)
    g.addEdge(64, 48)

    g.addEdge(65, 17)
    g.addEdge(65, 51)

    g.addEdge(66, 68)
    g.addEdge(66, 58)
    g.addEdge(66, 37)

    g.addEdge(67, 28)
    g.addEdge(67, 34)
    g.addEdge(67, 97)
    g.addEdge(67, 49)
    g.addEdge(67, 72)
    g.addEdge(67, 82)

    g.addEdge(68, 77)
    g.addEdge(68, 90)
    g.addEdge(68, 66)
    g.addEdge(68, 9)

    g.addEdge(69, 1)
    g.addEdge(69, 26)

    g.addEdge(70, 5)
    g.addEdge(70, 47)

    g.addEdge(71, 55)
    g.addEdge(71, 91)
    g.addEdge(71, 5)
    g.addEdge(71, 93)

    g.addEdge(72, 82)
    g.addEdge(72, 102)
    g.addEdge(72, 67)
    g.addEdge(72, 49)

    g.addEdge(73, 74)
    g.addEdge(73, 30)
    g.addEdge(73, 35)
    g.addEdge(73, 99)
    g.addEdge(73, 24)

    g.addEdge(74, 73)
    g.addEdge(74, 30)

    g.addEdge(75, 95)
    g.addEdge(75, 52)
    g.addEdge(75, 10)
    g.addEdge(75, 4)
    g.addEdge(75, 83)

    g.addEdge(76, 49)
    g.addEdge(76, 53)
    g.addEdge(76, 4)
    g.addEdge(76, 102)

    g.addEdge(77, 62)
    g.addEdge(77, 36)
    g.addEdge(77, 90)
    g.addEdge(77, 68)

    g.addEdge(78, 51)
    g.addEdge(78, 96)
    g.addEdge(78, 86)

    g.addEdge(79, 43)
    g.addEdge(79, 38)
    g.addEdge(79, 50)
    g.addEdge(79, 55)
    g.addEdge(79, 80)
    g.addEdge(79, 39)

    g.addEdge(80, 55)
    g.addEdge(80, 70)
    g.addEdge(80, 39)
    g.addEdge(80, 93)

    g.addEdge(81, 35)
    g.addEdge(81, 88)
    g.addEdge(81, 63)
    g.addEdge(81, 16)
    g.addEdge(81, 94)
    g.addEdge(81, 3)

    g.addEdge(82, 67)
    g.addEdge(82, 72)
    g.addEdge(82, 20)

    g.addEdge(83, 4)
    g.addEdge(83, 56)
    g.addEdge(83, 75)
    g.addEdge(83, 95)
    g.addEdge(83, 47)

    g.addEdge(84, 92)
    g.addEdge(84, 6)
    g.addEdge(84, 41)

    g.addEdge(85, 95)
    g.addEdge(85, 47)
    g.addEdge(85, 23)

    g.addEdge(86, 78)
    g.addEdge(86, 96)
    g.addEdge(86, 19)
    g.addEdge(86, 64)
    g.addEdge(86, 27)

    g.addEdge(87, 20)
    g.addEdge(87, 89)
    g.addEdge(87, 101)

    g.addEdge(88, 100)
    g.addEdge(88, 63)
    g.addEdge(88, 81)

    g.addEdge(89, 87)
    g.addEdge(89, 101)
    g.addEdge(89, 33)

    g.addEdge(90, 77)
    g.addEdge(90, 19)
    g.addEdge(90, 96)
    g.addEdge(90, 58)
    g.addEdge(90, 68)

    g.addEdge(91, 42)
    g.addEdge(91, 55)
    g.addEdge(91, 31)
    g.addEdge(91, 71)
    g.addEdge(91, 5)

    g.addEdge(92, 15)
    g.addEdge(92, 10)
    g.addEdge(92, 99)
    g.addEdge(92, 41)
    g.addEdge(92, 84)
    g.addEdge(92, 6)
    g.addEdge(92, 52)

    g.addEdge(93, 71)
    g.addEdge(93, 80)

    g.addEdge(94, 3)
    g.addEdge(94, 44)
    g.addEdge(94, 81)
    g.addEdge(94, 35)

    g.addEdge(95, 83)
    g.addEdge(95, 47)
    g.addEdge(95, 75)
    g.addEdge(95, 85)

    g.addEdge(96, 36)
    g.addEdge(96, 17)
    g.addEdge(96, 79)
    g.addEdge(96, 86)
    g.addEdge(96, 19)
    g.addEdge(96, 90)

    g.addEdge(97, 67)
    g.addEdge(97, 98)
    g.addEdge(97, 8)
    g.addEdge(97, 49)
    g.addEdge(97, 2)
    g.addEdge(97, 53)

    g.addEdge(98, 8)
    g.addEdge(98, 34)
    g.addEdge(98, 2)
    g.addEdge(98, 97)
    g.addEdge(98, 21)
    g.addEdge(98, 46)

    g.addEdge(99, 44)
    g.addEdge(99, 15)
    g.addEdge(99, 92)
    g.addEdge(99, 24)
    g.addEdge(99, 73)

    g.addEdge(100, 7)
    g.addEdge(100, 9)
    g.addEdge(100, 40)
    g.addEdge(100, 32)
    g.addEdge(100, 63)
    g.addEdge(100, 88)

    g.addEdge(101, 11)
    g.addEdge(101, 87)
    g.addEdge(101, 89)
    g.addEdge(101, 33)
    g.addEdge(101, 42)

    g.addEdge(102, 20)
    g.addEdge(102, 72)
    g.addEdge(102, 49)
    g.addEdge(102, 76)
    g.addEdge(102, 13)

    inicial = 1

    print('Digite o numero do vertice inicial: ')
    inicial=int(input())

    if inicial > 0 and inicial < 103:
        for i in range(1, len(g.nodes) + 1):
            if i != inicial:
                print("Caminho do vertice ", inicial, " até o vertice ", i, ": ", shortest_path(g, inicial, i))
    else:
        print('Cidade não encontrada')