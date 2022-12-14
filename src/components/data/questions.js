export const questions = [
    {
        id: 1,
        q: 'A figura abaixo é considerada um(a):',
        r: { certa: 'circunferência', erradas: ['bola', 'circulo', 'esfera'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: true
    },
    {
        id: 2,
        q: 'O Bob Esponja se parece mais com um:',
        r: { certa: 'paralelepípedo', erradas: ['quadrado', 'cubo', 'retângulo'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: true
    },
    {
        id: 3,
        q: '8² é igual a:',
        r: { certa: '4³', erradas: ['16', '82', '6⁴'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },

    {
        id: 4,
        q: 'O ângulo de 90 graus é um ângulo:',
        r: { certa: 'Reto', erradas: ['Agudo ', 'Obtuso', 'Médio'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 5,
        q: 'x²-y² equivale a:',
        r: { certa: '(x-y)(x+y)', erradas: ['2x-2y', 'x²-2xy+y²', '(x-y)²'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 6,
        q: '2(5+2x8)/3 é igual a:',
        r: { certa: '14', erradas: ['37.33', '7', '15'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 7,
        q: 'O chapéu é composto por quantas figuras geométricas diferentes?',
        r: { certa: '3', erradas: ['2', '1', '4'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: true
    },
    {
        id: 8,
        q: 'O número "0.999999..." é o mesmo que:',
        r: { certa: '1', erradas: ['infinito', '0', '9/100'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 9,
        q: 'Diga quanto é 2x3! ',
        r: { certa: '12', erradas: ['6', '5', '-6'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 10,
        q: 'O triângulo com ângulos 30º,60º e 90º é conhecido como triângulo:',
        r: { certa: 'Egípcio', erradas: ['Crescente', 'Perfeito', 'de Bháskara'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: true
    },
    {
        id: 11,
        q: 'Entre as opções, qual NÃO é um poliedro de Platão?',
        r: { certa: 'Diedro', erradas: ['Tetraedro', 'Hexaedro', 'Octaedro'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 12,
        q: 'A equação x² + 4 = 0 :',
        r: { certa: 'Não tem raízes reais', erradas: ['Tem 2 e -2 como raízes ', 'é igual a 2', 'Não tem solução'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
    {
        id: 12,
        q: 'A equação x² + 4 = 0 :',
        r: { certa: 'Não tem raízes reais', erradas: ['Tem 2 e -2 como raízes ', 'é igual a 2', 'Não tem solução'] },
        img: function () { return `../assets/img${this.id}.png` },
        hasImg: false
    },
]

