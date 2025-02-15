const nomeAprovado = [
    'Raul', 'raul', 'Raul Volpi', 'raul volpi',
    'Manuela', 'manuela', 'Manuh', 'manuh',
    'Manu', 'manu', 'Botelho', 'botelho',
    'Manuh Botelho', 'manuh botelho', 'Manu Botelho', 'manu botelho',
    'Manuela Botelho', 'manuela botelho'
];
const nome = prompt('Qual seu Nome??')
if (!nomeAprovado.includes(nome)) {
    alert('Você não pode entrar no site!!!')
    window.location.replace("");
} else {
    alert('Bem-vindo ao site!')
}
