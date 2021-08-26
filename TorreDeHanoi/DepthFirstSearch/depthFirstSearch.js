class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v)
        this.j = 1
        for(let i = 0; i <= v; i++)
            this.adj[i] = []
    }
    addEdge(v, w) {
        this.adj[v].push(w)
    }
    
    DFSUtil(v, visited) {
        visited[v] = true
        console.log(this.j + " - " + v + " ");
        this.j++
        for(let i of this.adj[v].values())
        {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited)
        }
        
    }
    DFS(v) {
        let visited = new Array(this.V)
        for(let i = 0; i <= this.V; i++)
            visited[i] = false

        this.DFSUtil(v, visited)
    }
}

g = new Graph(27);

g.addEdge(1, 2)
g.addEdge(1, 3)

g.addEdge(2, 1)
g.addEdge(2, 3)
g.addEdge(2, 4)

g.addEdge(3, 1)
g.addEdge(3, 2)
g.addEdge(3, 5)

g.addEdge(4, 2)
g.addEdge(4, 6)
g.addEdge(4, 7)

g.addEdge(5, 3)
g.addEdge(5, 8)
g.addEdge(5, 9)

g.addEdge(6, 4)
g.addEdge(6, 7)
g.addEdge(6, 10)

g.addEdge(7, 4)
g.addEdge(7, 6)
g.addEdge(7, 8)

g.addEdge(8, 5)
g.addEdge(8, 7)
g.addEdge(8, 9)

g.addEdge(9, 5)
g.addEdge(9, 8)
g.addEdge(9, 11)

g.addEdge(10, 6)
g.addEdge(10, 12)
g.addEdge(10, 13)

g.addEdge(11, 9)
g.addEdge(11, 14)
g.addEdge(11, 15)

g.addEdge(12, 10)
g.addEdge(12, 13)
g.addEdge(12, 16)

g.addEdge(13, 10)
g.addEdge(13, 12)
g.addEdge(13, 17)

g.addEdge(14, 11)
g.addEdge(14, 15)
g.addEdge(14, 18)

g.addEdge(15, 11)
g.addEdge(15, 14)
g.addEdge(15, 19)

g.addEdge(16, 12)
g.addEdge(16, 20)
g.addEdge(16, 21)

g.addEdge(17, 13)
g.addEdge(17, 22)
g.addEdge(17, 23)

g.addEdge(18, 14)
g.addEdge(18, 24)
g.addEdge(18, 25)

g.addEdge(19, 15)
g.addEdge(19, 26)
g.addEdge(19, 27)

g.addEdge(20, 16)
g.addEdge(20, 21)

g.addEdge(21, 16)
g.addEdge(21, 20)
g.addEdge(21, 22)

g.addEdge(22, 17)
g.addEdge(22, 21)
g.addEdge(22, 23)

g.addEdge(23, 17)
g.addEdge(23, 22)
g.addEdge(23, 24)

g.addEdge(24, 18)
g.addEdge(24, 23)
g.addEdge(24, 25)

g.addEdge(25, 18)
g.addEdge(25, 24)
g.addEdge(25, 26)

g.addEdge(26, 19)
g.addEdge(26, 25)
g.addEdge(26, 27)

g.addEdge(27, 19)
g.addEdge(27, 26)

console.log("A seguir está o Depth First Search " +
            "(começando do vértice 1):")
g.DFS(1)

/* Output
 
A seguir está o Depth First Search (começando do vértice 1):
1 - 1 
2 - 2 
3 - 3 
4 - 5 
5 - 8 
6 - 7 
7 - 4 
8 - 6 
9 - 10 
10 - 12 
11 - 13 
12 - 17 
13 - 22 
14 - 21 
15 - 16 
16 - 20 
17 - 23 
18 - 24 
19 - 18 
20 - 14 
21 - 11 
22 - 9 
23 - 15 
24 - 19 
25 - 26 
26 - 25 
27 - 27 
*/

// tempo de execução 0.323s