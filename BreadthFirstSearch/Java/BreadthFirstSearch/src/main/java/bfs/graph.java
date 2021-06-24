package bfs;
// Java program to print BFS traversal from a given source vertex.
// BFS(int s) traverses vertices reachable from s.
import java.io.*;
import java.util.*;

// This class represents a directed graph using adjacency list
// representation
public class graph {
    private int V; // No. of vertices
    private LinkedList<Integer> adj[]; // Adjacency Lists

    // Constructor
    graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i)
        adj[i] = new LinkedList();
    }

    // Function to add an edge into the graph
    void addEdge(int v, int w) {
        adj[v].add(w);
    }

    // prints BFS traversal from a given source s
    void BFS(int s, int e) {
        // Mark all the vertices as not visited(By default
        // set as false)
        boolean visited[] = new boolean[V];
        int parent[] = new int[V];
        int aux_parent = 0;
        boolean find = false;

        // Create a queue for BFS
        LinkedList<Integer> queue = new LinkedList<Integer>();

        // Mark the current node as visited and enqueue it
        visited[s] = true;
        queue.add(s);
        parent[s] = s;
        System.out.println("[0 1 2 3 4 5 6 7 8 9 10 11 12]");
        System.out.print("[");
        
        while (queue.size() != 0 && ! find) {
            // Dequeue a vertex from queue and print it
            s = queue.poll();
            System.out.print(s + " ");
            aux_parent = s;

            if (s == e){
                find = true;
            } else {
                // Get all adjacent vertices of the dequeued vertex s
                // If a adjacent has not been visited, then mark it
                // visited and enqueue it
                Iterator<Integer> i = adj[s].listIterator();
                while (i.hasNext()) {
                int n = i.next();
                    if (!visited[n]) {
                        parent[n] = aux_parent;
                        visited[n] = true;
                        queue.add(n);
                    }
                }
            }
        }
        System.out.println("]");
        System.out.println(" ");
        System.out.println("[0 1 2 3 4 5 6 7 8 9 10 11 12]");
        System.out.println("["+parent[0]+" "+parent[1]+" "+parent[2]+" "+parent[3]+" "+parent[4]+" "+parent[5]+" "+parent[6]+"]");
    }
}