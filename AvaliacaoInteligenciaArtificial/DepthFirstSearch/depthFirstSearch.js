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

g = new Graph(200);

g.addEdge(1, 54)
g.addEdge(1, 69)
g.addEdge(1, 26)
g.addEdge(1, 62)

g.addEdge(2, 97)
g.addEdge(2, 53)
g.addEdge(2, 98)
g.addEdge(2, 46)
g.addEdge(2, 15)
g.addEdge(2, 10)

g.addEdge(3, 21)
g.addEdge(3, 34)
g.addEdge(3, 25)
g.addEdge(3, 45)
g.addEdge(3, 29)
g.addEdge(3, 94)
g.addEdge(3, 46)
g.addEdge(3, 81)

g.addEdge(4, 53)
g.addEdge(4, 76)
g.addEdge(4, 13)
g.addEdge(4, 18)
g.addEdge(4, 59)
g.addEdge(4, 75)
g.addEdge(4, 83)

g.addEdge(5, 91)
g.addEdge(5, 71)
g.addEdge(5, 47)
g.addEdge(5, 70)

g.addEdge(6, 92)
g.addEdge(6, 52)
g.addEdge(6, 84)

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
g.addEdge(21, 3)

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
g.addEdge(80, 79)
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
g.addEdge(96, 78)
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

console.log("A seguir está o Depth First Search " +
            "(começando do vértice 1):")
g.DFS(1)

/* Output
 
A seguir está o Depth First Search (começando do vértice 1):
1 - 1 
2 - 54 
3 - 17 
4 - 65 
5 - 51 
6 - 78 
7 - 96 
8 - 36 
9 - 77 
10 - 62 
11 - 26 
12 - 69 
13 - 90 
14 - 19 
15 - 61 
16 - 64 
17 - 86 
18 - 27 
19 - 12 
20 - 57 
21 - 28 
22 - 67 
23 - 34 
24 - 98 
25 - 8 
26 - 97 
27 - 49 
28 - 72 
29 - 82 
30 - 20 
31 - 102 
32 - 76 
33 - 53 
34 - 4 
35 - 13 
36 - 18 
37 - 11 
38 - 101 
39 - 87 
40 - 89 
41 - 33 
42 - 22 
43 - 42 
44 - 55 
45 - 60 
46 - 14 
47 - 43 
48 - 38 
49 - 79 
50 - 50 
51 - 39 
52 - 80 
53 - 93 
54 - 71 
55 - 91 
56 - 31 
57 - 56 
58 - 59 
59 - 83 
60 - 75 
61 - 95 
62 - 47 
63 - 70 
64 - 5 
65 - 85 
66 - 23 
67 - 52 
68 - 92 
69 - 15 
70 - 2 
71 - 46 
72 - 21 
73 - 3 
74 - 25 
75 - 48 
76 - 40 
77 - 7 
78 - 37 
79 - 58 
80 - 66 
81 - 68 
82 - 9 
83 - 100 
84 - 32 
85 - 45 
86 - 16 
87 - 29 
88 - 63 
89 - 88 
90 - 81 
91 - 35 
92 - 44 
93 - 94 
94 - 99 
95 - 24 
96 - 41 
97 - 84 
98 - 6 
99 - 73 
100 - 74 
101 - 30 
102 - 10 
*/