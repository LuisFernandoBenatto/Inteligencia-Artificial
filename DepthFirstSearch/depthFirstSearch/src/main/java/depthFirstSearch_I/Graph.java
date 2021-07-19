package depthFirstSearch_I;
// Programa Java para imprimir DFS
// mtraversal de um dado dado
// gráfico 
import java.util.*;
 
// Esta classe representa um
// gráfico direcionado usando adjacência
// lista de representação 
public class Graph {
    private int V; // Nº de vértices 
 
    // Matriz de listas para
    // Representação da lista de adjacências 
    private LinkedList<Integer> adj[];
 
    // Construtor
    @SuppressWarnings("unchecked") Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i)
            adj[i] = new LinkedList();
    }
 
    // Função para adicionar uma borda ao gráfico 
    void addEdge(int v, int w) {
        adj[v].add(w); // Adiciona w à lista de v. 
    }
 
    // Uma função usada pelo DFS 
    void DFSUtil(int v, boolean visited[]) {
        // Marque o nó atual como visitado e imprima-o 
        visited[v] = true;
        System.out.print(v + " ");
 
        // Recorre para todos os vértices adjacentes a este
        // vértice 
        Iterator<Integer> i = adj[v].listIterator();
        while (i.hasNext())
        {
            int n = i.next();
            if (!visited[n])
                DFSUtil(n, visited);
        }
    }
 
    // A função para fazer a travessia DFS.
    // Ele usa recursivo
    // DFSUtil () 
    void DFS(int v) {
        // Marque todos os vértices como
        // não visitado (definido como
        // falso por padrão em java) 
        boolean visited[] = new boolean[V];
 
        // Chame o auxiliar recursivo
        // função para imprimir DFS
        // Travessia 
        DFSUtil(v, visited);
    }
 
    // Código do driver 
    public static void main(String[] args) {
     Graph g = new Graph(20);
 
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
        g.addEdge(12,13);
        g.addEdge(12,14);
        g.addEdge(13,12);
        g.addEdge(14,12);
        g.addEdge(14,17);
        g.addEdge(14,15);
        g.addEdge(15,14);
        g.addEdge(15,16);
        g.addEdge(16,15);
        g.addEdge(17,14);
        g.addEdge(17,18);
        g.addEdge(18,17);
        g.addEdge(18,19);
        g.addEdge(19,18);
 
        System.out.println("A seguir está o Depth First Traversal  "
            + "(começando do vértice 12)");
 
        g.DFS(12);   
    }   
}
