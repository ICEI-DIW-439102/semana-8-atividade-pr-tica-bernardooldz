// B.1) Definição dos dados (JSON)
const catalogo = [
  {
    id: 1,
    titulo: "O Poderoso Chefão",
    tipo: "filme",
    ano: 1972,
    generos: ["crime", "drama"],
    nota: 9.2,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["crime", "drama", "suspense"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 3,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama", "aventura"],
    nota: 8.7,
    assistido: false
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção científica", "terror", "drama"],
    nota: 8.6,
    assistido: true
  },
  {
    id: 5,
    titulo: "Clube da Luta",
    tipo: "filme",
    ano: 1999,
    generos: ["drama"],
    nota: 8.8,
    assistido: false
  },
  {
    id: 6,
    titulo: "The Last of Us",
    tipo: "serie",
    ano: 2023,
    generos: ["drama", "ação", "ficção científica"],
    nota: 8.8,
    assistido: true
  },
  {
    id: 7,
    titulo: "Parasita",
    tipo: "filme",
    ano: 2019,
    generos: ["drama", "suspense"],
    nota: 8.5,
    assistido: false
  },
  {
    id: 8,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção científica", "mistério", "drama"],
    nota: 8.7,
    assistido: true
  }
];


// B.2) Acesso e leitura dos dados
console.log(catalogo);

// título do primeiro item
console.log(catalogo[0] && catalogo[0].titulo ? catalogo[0].titulo : "Mensagem amigável no console");

// ano do último item
const ultimo = catalogo[catalogo.length - 1];
console.log(ultimo && typeof ultimo.ano === 'number' ? ultimo.ano : "Mensagem amigável no console");

// segundo gênero do terceiro item (quando existir)
const terceiro = catalogo[2];
if (terceiro && Array.isArray(terceiro.generos) && terceiro.generos[1]) {
    console.log(terceiro.generos[1]);
} else {
    console.log("Mensagem amigável no console");
}

// B.3) Iterações com iterators
// A) forEach - listar todos os títulos
console.log("== Listagem de títulos ==");
catalogo.forEach(item => console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`));

// B) map - títulos em caixa alta
const titulosEmCaixaAlta = catalogo.map(i => i.titulo.toUpperCase());
console.log("== Títulos em caixa alta ==");
console.log(titulosEmCaixaAlta);

// C) filter - não assistidos
const naoAssistidos = catalogo.filter(i => i.assistido === false);
console.log(`Quantidade de não assistidos: ${naoAssistidos.length}`);

// D) find - primeiro com nota >= 9
const primeiroNota9 = catalogo.find(i => i.nota >= 9);
if (primeiroNota9) {
  console.log(`Primeiro com nota >= 9: ${primeiroNota9.titulo} (nota: ${primeiroNota9.nota})`);
} else {
  console.log("Nenhum item com nota >= 9 encontrado");
}

// E) reduce - médias
const somaNotas = catalogo.reduce((acc, i) => acc + i.nota, 0);
const mediaGeral = somaNotas / catalogo.length;
const assistidosArray = catalogo.filter(i => i.assistido === true);
const somaAssistidos = assistidosArray.reduce((acc, i) => acc + i.nota, 0);
const mediaAssistidos = assistidosArray.length ? (somaAssistidos / assistidosArray.length) : 0;
console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);
console.log(assistidosArray.length ? `Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}` : `Média das notas dos assistidos: N/A`);

// F) some e every
const existeAntes2000 = catalogo.some(i => i.ano < 2000);
const todosTemGenero = catalogo.every(i => Array.isArray(i.generos) && i.generos.length > 0);
console.log(`Existe item com ano < 2000? ${existeAntes2000 ? "Sim" : "Não"}`);
console.log(`Todos têm pelo menos 1 gênero? ${todosTemGenero ? "Sim" : "Não"}`);

// B.4) Saída na tela (DOM)
const output = document.getElementById('output');
if (output) {
  const totalItens = catalogo.length;
  const qtdFilmes = catalogo.filter(i => i.tipo === 'filme').length;
  const qtdSeries = catalogo.filter(i => i.tipo === 'serie').length;
  const qtdNaoAssistidos = naoAssistidos.length;

  const mediaGeralStr = mediaGeral.toFixed(2);

  const ranking = [...catalogo].sort((a, b) => b.nota - a.nota).slice(0, 3);

  let html = `<h2>Resumo do Catálogo</h2>`;
  html += `<ul>`;
  html += `<li><strong>Total de itens:</strong> ${totalItens}</li>`;
  html += `<li><strong>Quantidade de filmes:</strong> ${qtdFilmes}</li>`;
  html += `<li><strong>Quantidade de séries:</strong> ${qtdSeries}</li>`;
  html += `<li><strong>Quantidade de não assistidos:</strong> ${qtdNaoAssistidos}</li>`;
  html += `<li><strong>Média geral das notas:</strong> ${mediaGeralStr}</li>`;
  html += `</ul>`;

  html += `<h3>Top 3 por nota</h3><ol>`;
  ranking.forEach(r => {
    html += `<li>${r.titulo} — ${r.nota.toFixed(1)}</li>`;
  });
  html += `</ol>`;

  output.innerHTML = html;
} else {
  console.warn('Elemento #output não encontrado no DOM');
}

