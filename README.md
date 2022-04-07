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
  - [Builder](#creational-builder)
  - [Prototype](#creational-prototype)
  - [Factory](#creational-factory)
  - [Abstract Factory](#creational-abstract-factory)

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

</br>
</br>
</br>

<a id="creational-prototype"></a>

<h3 align="center"><b>Prototype</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Prototype é um padrão de design criacional que permite copiar objetos existentes sem tornar seu código dependente de suas classes.

</br>

<h4> 📌 Problema: </h4>

</br>

- Digamos que você tenha um objeto e deseje criar uma cópia exata dele. Como você faria? Primeiro, você deve criar um novo objeto da mesma classe. Então você precisa percorrer todos os campos do objeto original e copiar seus valores para o novo objeto. Por exemplo, um objeto deve ser criado após uma operação de banco de dados dispendiosa. Podemos armazenar em cache o objeto, retornar seu clone na próxima solicitação e atualizar o banco de dados conforme e quando necessário, reduzindo assim as chamadas ao banco de dados.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão Prototype delega o processo de clonagem para os objetos reais que estão sendo clonados. O padrão declara uma interface comum para todos os objetos que suportam a clonagem. Essa interface permite clonar um objeto sem acoplar seu código à classe desse objeto. Normalmente, essa interface contém apenas um único método clone. A implementação do método clone é muito semelhante em todas as classes. O método cria um objeto da classe atual e transporta todos os valores de campo do objeto antigo para o novo. Você pode até copiar campos particulares porque a maioria das linguagens de programação permite que objetos acessem campos particulares de outros objetos que pertencem à mesma classe. Um objeto que suporta a clonagem é chamado de protótipo . Quando seus objetos têm dezenas de campos e centenas de configurações possíveis, a clonagem deles pode servir como uma alternativa à subclasse. Protótipos pré-construídos podem ser uma alternativa à subclassificação. Eis como funciona: você cria um conjunto de objetos, configurado de várias maneiras. Quando você precisa de um objeto como o que você configurou, basta clonar um protótipo em vez de construir um novo objeto do zero.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/creational/prototype">Prototype</a>

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

</br>
</br>
</br>

<a id="creational-factory"></a>

<h3 align="center"><b>Factory</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Factory Method é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objeto que será criado. O Factory Method permite adiar a instanciação para as subclasses.

</br>

<h4> 📌 Problema: </h4>

</br>

- Imagine que você está criando um aplicativo de gerenciamento de logística. A primeira versão do seu aplicativo o único transporte utilizado é o de caminhões, portanto a maior parte do seu código fica dentro da classe Truck. Depois de um tempo, sua empresa cresce muito e se torna bastante popular. Então agora você precisa adicionar o transporte marítimo no aplicativo. Boas notícias para empresa, certo? Mas e o código? No momento, a maior parte do seu código é acoplada à classe Truck. A adição Ship ao aplicativo exigiria alterações em toda a base de código. Além disso, se mais tarde você decidir adicionar outro tipo de transporte ao aplicativo, provavelmente precisará fazer todas essas alterações novamente. Como resultado, você terá um código bastante acoplado, repleto de condicionais que alteram o comportamento do aplicativo, dependendo da classe de objetos de transporte.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para sua Factory Method. Objetos retornados por um Factory Method geralmente são chamados de "products". À primeira vista, essa mudança pode parecer inútil: acabamos de mover a chamada do construtor de uma parte do programa para outra. No entanto, considere o seguinte: agora você pode substituir o Factory Method em uma subclasse e alterar a classe de produtos que estão sendo criados pelo método. Porém, há uma pequena limitação: as subclasses podem retornar tipos diferentes de produtos somente se esses produtos tiverem uma classe ou interface básica comum. Além disso, o Factory Method na classe base deve ter seu tipo de retorno declarado como essa interface.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/creational/factory">Factory</a>

<br/>
<br/>
<br/>

<a id="creational-abstract-factory"></a>

<h3 align="center"><b>Abstract Factory</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

</br>

<h4> 📌 Problema: </h4>

</br>

- Imagine que você está criando um simulador de loja de móveis. Seu código consiste em classes que representam:

  - Uma família de produtos relacionados, digamos: Chair+ Sofa+ CoffeeTable.

  - Várias variantes desta família. Por exemplo, produtos Chair+ Sofa+ CoffeeTableestão disponíveis nestas variantes: Modern, Victorian, ArtDeco.

- Você precisa de uma maneira de criar objetos de móveis individuais para que eles correspondam a outros objetos da mesma família. Os clientes ficam muito bravos quando recebem móveis que não combinam. Esse padrão é encontrado no equipamento de estampagem de chapa usado na fabricação de automóveis japoneses. Além disso, você não deseja alterar o código existente ao adicionar novos produtos ou famílias de produtos ao programa. Os fornecedores de móveis atualizam seus catálogos com muita frequência e você não deseja alterar o código principal toda vez que isso acontece.

</br>

<h4> 📌 Solução: </h4>

</br>

- Forneça um nível de indireção que abstraia a criação de famílias de objetos relacionados ou dependentes sem especificar diretamente suas classes concretas. O objeto “factory” tem a responsabilidade de fornecer serviços de criação para toda a família. Os clientes nunca criam objetos diretamente, eles pedem à fábrica que faça isso por eles. Esse mecanismo facilita a troca de produtos entre famílias, porque a classe específica do objeto factory aparece apenas uma vez no aplicativo — onde é instanciada. O aplicativo pode substituir de uma vez toda a família de produtos simplesmente instanciando uma instância concreta diferente da AbstractFactory. Como o serviço fornecido pela factory é muito difundido, ele é implementado normalmente utilizando Singleton.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/creational/abstractFactory">Abstract Factory</a>

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

- <i>Design Patterns — Parte 7 — Prototype. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-7-prototype-98962514728f. Acesso em: 02/03/2022.</i>

- <i>Design Patterns - Parte 3 – Factory Method. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-factory-method-a7496ae071aa. Acesso em: 07/04/2022.</i>

- <i>Design Patterns - Parte 4 – Abstract Factory. Medium, 2019. Disponível em: https://medium.com/xp-inc/design-patterns-abstract-factory-da6b7057abce. Acesso em: 07/04/2022.</i>
