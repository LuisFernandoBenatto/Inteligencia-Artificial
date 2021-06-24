def bfsCaminhoMaisCurto(grafico, inicio, meta):
    if inicio == meta:
        print('Mesmo nó')
        return []

    visitado = []
    lista = [[inicio]]

    while lista:
        caminho = lista.pop(0)
        no = caminho[-1]

        if no in visitado:
            continue

        vizinhos = grafico[no]

        for vizinho in vizinhos:
            new_caminho = list(caminho)
            new_caminho.append(vizinho)
            lista.append(new_caminho)

            if vizinho == meta:
                return new_caminho

        visitado.append(no)

    print("Erro: caminho não exite")
    return []


if __name__ == '__main__':
    parser = {
        0: 'Arad',
        1: 'Zerind',
        2: 'Oradea',
        3: 'Sibiu',
        4: 'Timisoara',
        5: 'Lugoj',
        6: 'Mehadia',
        7: 'Dobreta',
        8: 'Craiova',
        9: 'Rimnicu Vilcea',
        10: 'Fagaras',
        11: 'Pitesti',
        12: 'Bucharest',
    }
    grafico = {
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
        12: [10, 11]
    }

    resultados = bfsCaminhoMaisCurto(grafico, 0, 12)
    print(f'Caminho mais curto => {[parser[item] for item in resultados]}')