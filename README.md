# Desafio SBF

Projeto realizado a partir de desafio proposto pela empresa SBF conforme enunciado abaixo:
## Enunciado

Considerando um plano X,Y de tamanho MxN, em que o usuário estará numa determinada coordenada e as lojas em outras coordenadas, crie um algoritmo que seja capaz de ordenar as lojas pela menor distância e trazer as 3 lojas mais próximas.

Como entradas do algoritmo, considere os seguintes parâmetros:

```text
posicaoDoCliente = [X,Y], onde a entrada é um vetor de inteiros;
lojas = [[X,Y]...[Xn, Yn]], onde a entrada é uma matriz 2xN de inteiros;
plano = [M,N], onde a entrada é um vetor de inteiros.
0 ≤ X ≤ M
0 ≤ Y ≤ N
0 ≤ M ≤ 1000
0 ≤ N ≤ 1000
```

## Exemplo

```text
posicaoCliente = [20, 32],
lojas = [[40,88], [18, 56], [99, 2]]
plano = [100,100]
```

## Resultado esperado

```text
[[18,56],[40,88],[99,2]]
```

Considere a seguinte equação como fórmula para cálculo da distância entre o cliente e as lojas:

![image](https://s2.static.brasilescola.uol.com.br/be/2020/02/1-formula-distancia-entre-dois-pontos.jpeg)

## Material de apoio

Para esse desafio temos o layout proposto pelo time de Design:

[Figma - Interface](https://www.figma.com/file/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?node-id=16%3A3570)

[Figma - Protótipo](https://www.figma.com/proto/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?page-id=0%3A1&node-id=16%3A3055&viewport=2221%2C1362%2C0.37684541940689087&scaling=min-zoom&starting-point-node-id=16%3A3055&show-proto-sidebar=1)

[API disponível](https://api.gruposbf.com.br/geolocation-api/stores)


## Solução técnica

Foi escolhido React para desenvolver o projeto.
Para estilo foi utilizado Sass.
O mapa foi feito utilizando a lib google-maps-react.

Foram criados componentes, containers e rotas. Além da chamada da API.