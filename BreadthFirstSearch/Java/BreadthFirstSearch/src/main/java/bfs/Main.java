package bfs;

public class Main {
    public static void main(String[] args) {
        graph g = new graph(16);

//        g.addEdge(1, 3);
//        g.addEdge(1, 6);
//        g.addEdge(2, 5);
//        g.addEdge(3, 1);
//        g.addEdge(3, 5);
//        g.addEdge(4, 6);
//        g.addEdge(4, 7);
//        g.addEdge(5, 2);
//        g.addEdge(5, 3);
//        g.addEdge(5, 6);
//        g.addEdge(6, 1);
//        g.addEdge(6, 4);
//        g.addEdge(6, 5);
//        g.addEdge(6, 7);
//        g.addEdge(7, 4);
//        g.addEdge(7, 6);

        g.addEdge(0, 1);
        g.addEdge(0, 4);
        g.addEdge(1, 0);
        g.addEdge(1, 2);
        g.addEdge(2, 3);
        g.addEdge(2, 1);
        g.addEdge(3, 2);
        g.addEdge(3, 10);
        g.addEdge(3, 9);
        g.addEdge(4, 0);
        g.addEdge(4, 5);
        g.addEdge(5, 4);
        g.addEdge(5, 6);
        g.addEdge(6, 5);
        g.addEdge(6, 7);
        g.addEdge(7, 6);
        g.addEdge(7, 8);
        g.addEdge(8, 7);
        g.addEdge(8, 9);
        g.addEdge(8, 10);
        g.addEdge(9, 3);
        g.addEdge(9, 8);
        g.addEdge(9, 11);
        g.addEdge(10, 3);
        g.addEdge(10, 12);
        g.addEdge(12, 10);
        g.addEdge(12, 11);
        
        System.out.println("Following is Breadth First");

        g.BFS(0,12);
    }
}
