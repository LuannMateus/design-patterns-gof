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

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/creational/singleton">Singleton</a>

</br>
</br>
</br>

<a id="creational-builder"></a>

<h3 align="center"><b>Builder</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- O Builder é um padrão de design criacional que permite construir objetos complexos passo a passo. O padrão permite produzir diferentes tipos e representações de um objeto usando o mesmo código de construção.
  Além disso, o padrão builder descreve uma maneira de separar um objeto de sua construção. O mesmo método de construção pode criar uma representação diferente do objeto.

</br>

<h4> 📌 Problema: </h4>

</br>

- Por exemplo, vamos pensar em como criar uma classe House. Para construir uma casa simples, você precisa construir quatro paredes e um piso, instalar portas, encaixar janelas e criar um telhado. Mas se você quiser uma casa maior de dois andares e com garagem para vários carros, com um quintal e outras coisas boas (como um sistema de aquecimento, encanamento e fiação elétrica)? A solução mais simples é estender a class House e criar um conjunto de subclasses para cobrir todas as combinações dos parâmetros. Mas, eventualmente, você terminará com um número considerável de subclasses. Qualquer novo parâmetro, como o estilo de varanda, exigirá que a hierarquia cresça ainda mais. Ou você também pode criar um construtor gigante na classe House com todos os parâmetros possíveis que controlam o objeto. Embora essa abordagem elimine a necessidade de subclasses, ela cria outro problema, vários parâmetros não serão utilizados, tornando o construtor grande e feio (e difícil de utilizar). Por exemplo, poucas casas tem piscinas; portanto, os parâmetros relacionados às piscinas seriam inúteis na maioria das vezes.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão Builder sugere que você extraia o código de construção do objeto de sua própria classe e o mova para objetos separados chamados builders. O padrão Builder permite construir objetos complexos passo a passo. O Builder não permite que outros objetos acessem o produto enquanto ele está sendo construído. O padrão organiza construção objeto organizando em um conjunto de passos. Para criar um objeto, você executa uma série dessas etapas em um objeto construtor. A parte importante é que você não precisa executar todas as etapas. Você pode chamar apenas as etapas necessárias para produzir uma configuração específica de um objeto. Algumas das etapas de construção podem exigir implementação diferente quando você precisa criar várias representações do produto. Nesse caso, você pode criar várias classes builders diferentes que implementam o mesmo conjunto de etapas de construção, mas de uma maneira diferente. Em seguida, você pode usar esses builders no processo de construção para produzir diferentes tipos de objetos.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/creational/builder">Builder</a>

</div>

</div>

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

- <i>Design Patterns — Parte 6 — Builder. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-6-builder-f20752fb0c35. Acesso em: 27/02/2022.</i>
