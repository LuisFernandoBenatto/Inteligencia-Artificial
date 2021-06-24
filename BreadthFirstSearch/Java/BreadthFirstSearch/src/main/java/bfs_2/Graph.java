package bfs_2;

import java.util.*;

public class Graph {
    private int V;   // Numero do vertice
    private LinkedList<Integer> adj[]; //Listas de Adjacências
 
    // Construtor
    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i=0; i<v; ++i)
            adj[i] = new LinkedList();
    }
 
    // Função para adicionar uma borda ao gráfico
    void addEdge(int v,int w) {
        adj[v].add(w);
    }
 
    // imprime travessia BFS de uma determinada fonte s 
    void BFS(int s) {
        // Marque todos os vértices como não visitados (por omissão
        // definido como falso) 
        boolean visited[] = new boolean[V];
 
        // Crie uma fila para BFS 
        LinkedList<Integer> lista = new LinkedList<Integer>();
 
        // Marque o nó atual como visitado e coloque-o na fila 
        visited[s] = true;
        lista.add(s);
 
        while (!lista.isEmpty()) {
            // Retirar da fila um vértice da fila e imprimi-lo
            s = lista.poll();
            System.out.print(s + " ");

            // Pega todos os vértices adjacentes dos vértices desenfileirados
            // Se um adjacente não foi visitado, marque-o
            // visitou e enfileirou-o 
            Iterator<Integer> i = adj[s].listIterator();
            while (i.hasNext()) {
                int n = i.next();
                if (!visited[n]) {
                    visited[n] = true;
                    lista.add(n);
                }
            }
        }
    }
    public static void main(String[] args) {
        Graph g = new Graph(30);
 
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
        
 
        System.out.println("A seguir está o melhor caminho partindo de Arad até Bucharest: ");
        g.BFS(12);
    }    
}
