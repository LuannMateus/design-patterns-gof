# Design Patterns - GOF

<br/>

<img src="https://user-images.githubusercontent.com/59940855/155536285-38b13506-5d50-4d1a-a6d2-ef01555b3159.png"/>

<br/>

## Padrões

<br/>

- Padrões Criacionais (Creational Patterns)
  : Os padrões criacionais fornecem vários mecanismos de criação de objetos, que aumentam a flexibilidade e a reutilização do código existente.
- Padrões estruturais (Structural Design Patterns): Os padrões estruturais explicam como montar objetos e classes em estruturas maiores, mantendo essas estruturas flexíveis e eficientes.
- Padrões Comportamentais (Behavioral Design Patterns): Os padrões de design comportamental preocupam-se com algoritmos e a atribuição de responsabilidades entre objetos.

<br/>

## Menu

<a name="ancora"></a>

- [Creational](#creational)

  - [Singleton](#creational-singleton)

<a id="creational"></a>

<br />

## Padrões criacionais

<br/>

<div align="center">
<a id="creational-singleton"></a>
<h3><b>Singleton</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Singleton é um padrão de design criacional, que garante que apenas um objeto desse tipo exista e forneça um único ponto de acesso a ele para qualquer outro código.

</br>

<h4> 📌 Problema: </h4>

</br>

- O aplicativo precisa de uma e apenas uma instância de um objeto. Além disso, inicialização lenta e acesso global são necessários.

</br>

<h4> 📌 Solução: </h4>

</br>

- Torne a classe do objeto de instância única responsável pela criação, inicialização, acesso e aplicação. Declare a instância como um membro de dados private static. Forneça uma função de membro public static que encapsule todo o código de inicialização e forneça acesso à instância.
  O cliente chama o método usando o nome da classe e o método singleton sempre que uma referência à instância única é necessária.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="">#</a>

</div>

</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### 🔎 Fontes

<br/>

- <i>Design Patterns — Parte 2 — Os Padrões do GOF. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-2-2a61878846d. Acesso em: 24/02/2022.</i>

- <i>Design Patterns — Parte 5 — Singleton. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-5-singleton-324c6effab6f. Acesso em: 24/02/2022.</i>
