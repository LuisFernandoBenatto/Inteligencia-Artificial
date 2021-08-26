package depthFirstSearch;
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
     Graph g = new Graph(28);
 
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
 
        System.out.println("A seguir está o Depth First Traversal  "
            + "(começando do vértice 1)");
 
        g.DFS(1);   
    }   
}
/*
   A seguir está o Depth First Traversal  (começando do vértice 1)
    1 2 3 5 8 7 4 6 10 12 13 17 22 21 16 20 23 24 18 14 11 9 15 19 26 25 27 
*/

// tempo de execução 0.348s