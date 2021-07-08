var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.miterLimit = 1;

function mostrarGrafo(grafo) {
    var conexoes = grafo.conexoes();
    var vertices = [];
    var i = 0, j = 0, m = conexoes.length;
    //leitura
    for (i; i < m; i++) {
        if (indexOf(vertices, conexoes[i].doNo) === true)
            vertices.push(conexoes[i].doNo);
        if (indexOf(vertices, conexoes[i].paraNo) === true)
            vertices.push(conexoes[i].paraNo);
    }
    //desenho
    for (i = 0; i < m; i++)
        criarArestaTexto(conexoes[i].doNo.dado, conexoes[i].paraNo.dado, conexoes[i].custo);
    m = vertices.length;
    for (i = 0; i < m; i++) {
        criarVertice(vertices[i].dado.x, vertices[i].dado.y);
    }
}

function mostrarCaminho(arr) {
// console.log(arr, arr.total);
    var borda = 'blueviolet';
    var fill = 'black';
    var letra = 'white';
    for (var i = 0; i < arr.length; i++)
        if (arr[i - 1])
            criarAresta(arr[i].dado, arr[i - 1].dado, borda, 2);

    for (var i = 0; i < arr.length; i++)
        criarVerticeTexto(arr[i].dado.x, arr[i].dado.y, arr[i].total, fill, letra, borda);

}

function indexOf(arr, elm) {
    var i = 0, m = arr.length;
    for (i; i < m; i++)
        if (arr[i] === elm)
            return false;
    return true;
}

function criarVertice(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 6.3, false);
    ctx.fillStyle = arguments[2] || 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = arguments[3] || 'red';
    ctx.stroke();
    ctx.closePath();

}

function criarAresta(doNo, paraNo) {
    ctx.beginPath();
    ctx.moveTo(doNo.x, doNo.y);
    ctx.lineTo(paraNo.x, paraNo.y);
    ctx.lineWidth = arguments[3] || 1;
    ctx.strokeStyle = arguments[2] || 'red';
    ctx.stroke();
    ctx.closePath();
}

function criarTexto(texto, x, y) {
    ctx.font = '8pt Calibri';
    ctx.fillStyle = arguments[3] || 'lime';
    ctx.fillText("" + texto, x, y);
}

function criarArestaTexto(doNo, paraNo, texto) {
// console.log(paraNo, doNo)
    var coef = ((paraNo.y - doNo.y) / (paraNo.x - doNo.x));
    var X, Y, y, x;

    if (paraNo.x > doNo.x) {
        x = doNo.x;
        X = paraNo.x - x;
    }
    else {
        x = paraNo.x;
        X = doNo.x - x;
    }

    if (paraNo.y > doNo.y) {
        y = doNo.y;
        Y = paraNo.y - y;
    }
    else {
        y = paraNo.y;
        Y = doNo.y - y;
    }

    if (coef >= 1) {
        x += 7;
    } else if (coef < 0) {
        x -= 27;
        y += 8;
    }
    else if (coef <= -1) {
        y += 3;
        x += 3;
    }
    if (coef === Infinity || coef === -Infinity) {
        y += 7;
        if (coef > 0)
            x -= 20;
    }

    criarAresta(doNo, paraNo);
    criarTexto(texto, X * 0.5 + x, Y * 0.5 + y);
}

function criarVerticeTexto(x, y, texto) {
    criarVertice(x, y, arguments[3], arguments[5]);
    criarTexto(texto, x - 3.5, y + 3, arguments[4] || 'yellow');
}

function criarPonto(x, y) {
    return {x: x, y: y};
}

var g = new Grafo();
var arrPontos = [
    criarPonto(100, 300), criarPonto(150, 220), 
    criarPonto(200, 150), criarPonto(350, 350), 
    criarPonto(150, 400), criarPonto(250, 450), 
    criarPonto(260, 500), criarPonto(250, 580), 
    criarPonto(420, 600), criarPonto(390, 400), 
    criarPonto(500, 380), criarPonto(500, 480), 
    criarPonto(650, 550)
];

g.criarConexao(arrPontos[0], arrPontos[1], parseInt(75));
g.criarConexao(arrPontos[0], arrPontos[3], parseInt(140));
g.criarConexao(arrPontos[0], arrPontos[4], parseInt(118));
g.criarConexao(arrPontos[1], arrPontos[0], parseInt(75));
g.criarConexao(arrPontos[1], arrPontos[2], parseInt(71));
g.criarConexao(arrPontos[2], arrPontos[1], parseInt(71));
g.criarConexao(arrPontos[2], arrPontos[3], parseInt(151));
g.criarConexao(arrPontos[3], arrPontos[0], parseInt(140));
g.criarConexao(arrPontos[3], arrPontos[2], parseInt(151));
g.criarConexao(arrPontos[3], arrPontos[9], parseInt(80));
g.criarConexao(arrPontos[3], arrPontos[10], parseInt(99));
g.criarConexao(arrPontos[4], arrPontos[0], parseInt(118));
g.criarConexao(arrPontos[4], arrPontos[5], parseInt(111));
g.criarConexao(arrPontos[5], arrPontos[4], parseInt(111));
g.criarConexao(arrPontos[5], arrPontos[6], parseInt(70));
g.criarConexao(arrPontos[6], arrPontos[5], parseInt(70));
g.criarConexao(arrPontos[6], arrPontos[7], parseInt(75));
g.criarConexao(arrPontos[7], arrPontos[6], parseInt(75));
g.criarConexao(arrPontos[7], arrPontos[8], parseInt(120));
g.criarConexao(arrPontos[8], arrPontos[7], parseInt(120));
g.criarConexao(arrPontos[8], arrPontos[9], parseInt(146));
g.criarConexao(arrPontos[8], arrPontos[11], parseInt(138));
g.criarConexao(arrPontos[9], arrPontos[3], parseInt(80));
g.criarConexao(arrPontos[9], arrPontos[8], parseInt(146));
g.criarConexao(arrPontos[9], arrPontos[11], parseInt(97));
g.criarConexao(arrPontos[10], arrPontos[3], parseInt(99));
g.criarConexao(arrPontos[10], arrPontos[12], parseInt(211));
g.criarConexao(arrPontos[11], arrPontos[8], parseInt(138));
g.criarConexao(arrPontos[11], arrPontos[9], parseInt(97));
g.criarConexao(arrPontos[11], arrPontos[12], parseInt(101));
g.criarConexao(arrPontos[12], arrPontos[10], parseInt(211));
g.criarConexao(arrPontos[12], arrPontos[11], parseInt(101));

mostrarGrafo(g);

var qwe = arrPontos[0], 
    ewq = arrPontos[12];

while(qwe === ewq){
    ewq = arrPontos[parseInt(Math.random() * arrPontos.length - 1)];
}

mostrarCaminho(new Dijkstra(g, qwe, ewq));
