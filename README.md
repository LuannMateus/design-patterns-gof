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

- [Structural](#structural)
  - [Composite](#structural-composite)
  - [Adapter](#structural-adapter)
  - [Bridge](#structural-bridge)
  - [Decorator](#structural-decorator)
  - [Facade](#structural-facade)

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

- O cliente chama o método usando o nome da classe e o método singleton sempre que uma referência à instância única é necessária.

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

- Por exemplo, vamos pensar em como criar uma classe House. Para construir uma casa simples, você precisa construir quatro paredes e um piso, instalar portas, encaixar janelas e criar um telhado. Mas se você quiser uma casa maior de dois andares e com garagem para vários carros, com um quintal e outras coisas boas (como um sistema de aquecimento, encanamento e fiação elétrica)?

- A solução mais simples é estender a class House e criar um conjunto de subclasses para cobrir todas as combinações dos parâmetros. Mas, eventualmente, você terminará com um número considerável de subclasses. Qualquer novo parâmetro, como o estilo de varanda, exigirá que a hierarquia cresça ainda mais. Ou você também pode criar um construtor gigante na classe House com todos os parâmetros possíveis que controlam o objeto.

- Embora essa abordagem elimine a necessidade de subclasses, ela cria outro problema, vários parâmetros não serão utilizados, tornando o construtor grande e feio (e difícil de utilizar). Por exemplo, poucas casas tem piscinas; portanto, os parâmetros relacionados às piscinas seriam inúteis na maioria das vezes.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão Builder sugere que você extraia o código de construção do objeto de sua própria classe e o mova para objetos separados chamados builders. O padrão Builder permite construir objetos complexos passo a passo. O Builder não permite que outros objetos acessem o produto enquanto ele está sendo construído.

- O padrão organiza construção objeto organizando em um conjunto de passos. Para criar um objeto, você executa uma série dessas etapas em um objeto construtor. A parte importante é que você não precisa executar todas as etapas.

- Você pode chamar apenas as etapas necessárias para produzir uma configuração específica de um objeto. Algumas das etapas de construção podem exigir implementação diferente quando você precisa criar várias representações do produto. Nesse caso, você pode criar várias classes builders diferentes que implementam o mesmo conjunto de etapas de construção, mas de uma maneira diferente. Em seguida, você pode usar esses builders no processo de construção para produzir diferentes tipos de objetos.

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

- O padrão Prototype delega o processo de clonagem para os objetos reais que estão sendo clonados. O padrão declara uma interface comum para todos os objetos que suportam a clonagem. Essa interface permite clonar um objeto sem acoplar seu código à classe desse objeto. Normalmente, essa interface contém apenas um único método clone. A implementação do método clone é muito semelhante em todas as classes. O método cria um objeto da classe atual e transporta todos os valores de campo do objeto antigo para o novo.

- Você pode até copiar campos particulares porque a maioria das linguagens de programação permite que objetos acessem campos particulares de outros objetos que pertencem à mesma classe. Um objeto que suporta a clonagem é chamado de protótipo . Quando seus objetos têm dezenas de campos e centenas de configurações possíveis, a clonagem deles pode servir como uma alternativa à subclasse. Protótipos pré-construídos podem ser uma alternativa à subclassificação.

- Eis como funciona: você cria um conjunto de objetos, configurado de várias maneiras. Quando você precisa de um objeto como o que você configurou, basta clonar um protótipo em vez de construir um novo objeto do zero.

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

- Além disso, o padrão builder descreve uma maneira de separar um objeto de sua construção. O mesmo método de construção pode criar uma representação diferente do objeto.

</br>

<h4> 📌 Problema: </h4>

</br>

- Por exemplo, vamos pensar em como criar uma classe House. Para construir uma casa simples, você precisa construir quatro paredes e um piso, instalar portas, encaixar janelas e criar um telhado. Mas se você quiser uma casa maior de dois andares e com garagem para vários carros, com um quintal e outras coisas boas (como um sistema de aquecimento, encanamento e fiação elétrica)?

- A solução mais simples é estender a class House e criar um conjunto de subclasses para cobrir todas as combinações dos parâmetros. Mas, eventualmente, você terminará com um número considerável de subclasses. Qualquer novo parâmetro, como o estilo de varanda, exigirá que a hierarquia cresça ainda mais. Ou você também pode criar um construtor gigante na classe House com todos os parâmetros possíveis que controlam o objeto.

- Embora essa abordagem elimine a necessidade de subclasses, ela cria outro problema, vários parâmetros não serão utilizados, tornando o construtor grande e feio (e difícil de utilizar). Por exemplo, poucas casas tem piscinas; portanto, os parâmetros relacionados às piscinas seriam inúteis na maioria das vezes.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão Builder sugere que você extraia o código de construção do objeto de sua própria classe e o mova para objetos separados chamados builders. O padrão Builder permite construir objetos complexos passo a passo. O Builder não permite que outros objetos acessem o produto enquanto ele está sendo construído.

- O padrão organiza construção objeto organizando em um conjunto de passos. Para criar um objeto, você executa uma série dessas etapas em um objeto construtor. A parte importante é que você não precisa executar todas as etapas. Você pode chamar apenas as etapas necessárias para produzir uma configuração específica de um objeto.

- Algumas das etapas de construção podem exigir implementação diferente quando você precisa criar várias representações do produto. Nesse caso, você pode criar várias classes builders diferentes que implementam o mesmo conjunto de etapas de construção, mas de uma maneira diferente. Em seguida, você pode usar esses builders no processo de construção para produzir diferentes tipos de objetos.

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

- Imagine que você está criando um aplicativo de gerenciamento de logística. A primeira versão do seu aplicativo o único transporte utilizado é o de caminhões, portanto a maior parte do seu código fica dentro da classe Truck. Depois de um tempo, sua empresa cresce muito e se torna bastante popular.

- Então agora você precisa adicionar o transporte marítimo no aplicativo. Boas notícias para empresa, certo? Mas e o código? No momento, a maior parte do seu código é acoplada à classe Truck. A adição Ship ao aplicativo exigiria alterações em toda a base de código. Além disso, se mais tarde você decidir adicionar outro tipo de transporte ao aplicativo, provavelmente precisará fazer todas essas alterações novamente.

- Como resultado, você terá um código bastante acoplado, repleto de condicionais que alteram o comportamento do aplicativo, dependendo da classe de objetos de transporte.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para sua Factory Method. Objetos retornados por um Factory Method geralmente são chamados de "products".

- À primeira vista, essa mudança pode parecer inútil: acabamos de mover a chamada do construtor de uma parte do programa para outra. No entanto, considere o seguinte: agora você pode substituir o Factory Method em uma subclasse e alterar a classe de produtos que estão sendo criados pelo método.

- Porém, há uma pequena limitação: as subclasses podem retornar tipos diferentes de produtos somente se esses produtos tiverem uma classe ou interface básica comum. Além disso, o Factory Method na classe base deve ter seu tipo de retorno declarado como essa interface.

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

- Você precisa de uma maneira de criar objetos de móveis individuais para que eles correspondam a outros objetos da mesma família. Os clientes ficam muito bravos quando recebem móveis que não combinam. Esse padrão é encontrado no equipamento de estampagem de chapa usado na fabricação de automóveis japoneses. Além disso, você não deseja alterar o código existente ao adicionar novos produtos ou famílias de produtos ao programa.

- Os fornecedores de móveis atualizam seus catálogos com muita frequência e você não deseja alterar o código principal toda vez que isso acontece.

</br>

<h4> 📌 Solução: </h4>

</br>

- Forneça um nível de indireção que abstraia a criação de famílias de objetos relacionados ou dependentes sem especificar diretamente suas classes concretas. O objeto “factory” tem a responsabilidade de fornecer serviços de criação para toda a família. Os clientes nunca criam objetos diretamente, eles pedem à fábrica que faça isso por eles.

- Esse mecanismo facilita a troca de produtos entre famílias, porque a classe específica do objeto factory aparece apenas uma vez no aplicativo — onde é instanciada. O aplicativo pode substituir de uma vez toda a família de produtos simplesmente instanciando uma instância concreta diferente da AbstractFactory.

- Como o serviço fornecido pela factory é muito difundido, ele é implementado normalmente utilizando Singleton.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/creational/abstractFactory">Abstract Factory</a>

<br/>
<br/>
<br/>

<a id="structural"></a>

## Padrões Estruturais

<br/>

<a id="structural-composite"></a>

<h3 align="center"><b>Composite</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Composite é um padrão de design estrutural que permite compor objetos em estruturas de árvores e trabalhar com essas estruturas como se fossem objetos individuais. Com ele você pode:

  - Compor objetos em estruturas de árvore para representar hierarquias de peças inteiras. Composite permite que os clientes tratem objetos individuais e composições de objetos de maneira uniforme.

  - Composição recursiva

  - “Diretórios contêm entradas, cada uma das quais poderia ser um diretório.”

  - 1-para-muitos “tem uma hierarquia” acima da “é uma”

</br>

<h4> 📌 Problema: </h4>

</br>

- O aplicativo precisa manipular uma coleção hierárquica de objetos “primitivos” e “compostos”. O processamento de um objeto primitivo é tratado de uma maneira, e o processamento de um objeto composto é tratado de maneira diferente. Ter que consultar o “tipo” de cada objeto antes de tentar processá-lo não é desejável.

</br>

<h4> 📌 Solução: </h4>

</br>

- O padrão composite compõe objetos em termos de uma estrutura em árvore para representar partes e hierarquias inteiras. A chave para o padrão composite é uma classe abstrata que representa tanto o objeto primitivo como os seus recipientes.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/structural/composite">Composite</a>

<br/>

<a id="structural-adapter"></a>

<h3 align="center"><b>Adapter</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Converta a interface de uma classe em outra interface que os clientes esperam. O adapter permite que as classes trabalhem juntas que não poderiam de outra forma por causa de interfaces incompatíveis.

- Agrupe uma classe existente com uma nova interface.
- A impedância corresponde a um componente antigo a um novo sistema

</br>

<h4> 📌 Problema: </h4>

</br>

- Imagine que você está criando um aplicativo de monitoramento do mercado de ações. O aplicativo baixa os dados de estoque de várias fontes no formato XML e exibe gráficos e diagramas de boa aparência para o usuário.

- Em algum momento, você decide melhorar o aplicativo integrando uma biblioteca de análise inteligente de terceiros. Mas há um problema: a biblioteca de análise funciona apenas com dados no formato JSON.
- Você não pode usar a biblioteca de análise “como está”, pois espera os dados em um formato incompatível com seu aplicativo.
- Você pode alterar a biblioteca para trabalhar com XML. No entanto, isso pode quebrar algum código existente que depende da biblioteca. E pior, você pode não ter acesso ao código-fonte da biblioteca em primeiro lugar, tornando essa abordagem impossível.

</br>

<h4> 📌 Solução: </h4>

</br>

- Declare a interface do Adapter (Target no diagrama): essa é a interface que seu código cliente usa e todos os Adapters concretos implementam. Ela deve ter os métodos que serão encaminhados para o código que está sendo adaptado (Adaptee no diagrama).

- Crie adaptares concretos que implementam a interface do Adapter (Adapter no diagrama): você pode criar quantas classes adaptadoras precisar para seu código. Essa classe deverá encaminhar chamadas de métodos para o código que está sendo adaptado (Adaptee no diagrama).

- Encaminhe as chamadas de método do Adapter para o Adaptee: agora você só precisará encaminhar as chamadas de métodos do seu Adapter concreto para o código que está sendo adaptado (Adaptee no diagrama).

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/structural/bridge">Adapter</a>

<a id="structural-bridge"></a>

<h3 align="center"><b>Bridge</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

- Observação: abstração é um código de alto nível que geralmente delega tarefas para sua implementação; implementação é o código de baixo nível que realmente faz o trabalho (o código para o qual a abstração delega tarefas).

</br>

<h4> 📌 Problema: </h4>

</br>

- Abstração? Implementação? Parece assustador? Fique calmo e vamos considerar um exemplo simples.

- Digamos que você tenha uma classe chamada Shape com um par de subclasses: Circle e Square. Você deseja estender essa hierarquia de classes para incorporar cores, e planeja criar Red e Blue modelar subclasses. No entanto, como você já tem duas subclasses, precisará criar quatro combinações de classes, como BlueCircle e RedSquare.

- O número de combinações de classes cresce em progressão geométrica.

- Adicionar novos tipos de formas e cores à hierarquia aumentará exponencialmente. Por exemplo, para adicionar uma forma de triângulo, é necessário introduzir duas subclasses, uma para cada cor. E depois disso, adicionar uma nova cor exigiria a criação de três subclasses, uma para cada tipo de forma. Quanto mais avançamos, pior fica.

</br>

<h4> 📌 Solução: </h4>

</br>

- Esse problema ocorre porque estamos tentando estender as classes de forma em duas dimensões independentes: por forma e por cor. Esse é um problema muito comum na herança de classes.

- O padrão Bridge tenta resolver esse problema alternando da herança para a composição do objeto. O que isso significa é que você extrai uma das dimensões em uma hierarquia de classes separada, para que as classes originais façam referência a um objeto da nova hierarquia, em vez de ter todos os seus estados e comportamentos em uma classe.

- Você pode impedir a explosão de uma hierarquia de classes, transformando-a em várias hierarquias relacionadas.

- Seguindo essa abordagem, podemos extrair o código relacionado à cor em sua própria classe com duas subclasses: Red e Blue . A classe Shape obtém um campo de referência apontando para um dos objetos de cores. Agora a forma pode delegar qualquer trabalho relacionado a cores no objeto de cor vinculado. Essa referência atuará como uma ponte(Bridge) entre as classes Shape e Color. A partir de agora, adicionar novas cores não exigirá alterações na hierarquia de formas e vice-versa.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/structural/bridge">Bridge</a>

<a id="structural-adapter"></a>

<h3 align="center"><b>Adapter</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Converta a interface de uma classe em outra interface que os clientes esperam. O adapter permite que as classes trabalhem juntas que não poderiam de outra forma por causa de interfaces incompatíveis.

- Agrupe uma classe existente com uma nova interface.
- A impedância corresponde a um componente antigo a um novo sistema

</br>

<h4> 📌 Problema: </h4>

</br>

- Imagine que você está criando um aplicativo de monitoramento do mercado de ações. O aplicativo baixa os dados de estoque de várias fontes no formato XML e exibe gráficos e diagramas de boa aparência para o usuário.

- Em algum momento, você decide melhorar o aplicativo integrando uma biblioteca de análise inteligente de terceiros. Mas há um problema: a biblioteca de análise funciona apenas com dados no formato JSON.
- Você não pode usar a biblioteca de análise “como está”, pois espera os dados em um formato incompatível com seu aplicativo.
- Você pode alterar a biblioteca para trabalhar com XML. No entanto, isso pode quebrar algum código existente que depende da biblioteca. E pior, você pode não ter acesso ao código-fonte da biblioteca em primeiro lugar, tornando essa abordagem impossível.

</br>

<h4> 📌 Solução: </h4>

</br>

- Declare a interface do Adapter (Target no diagrama): essa é a interface que seu código cliente usa e todos os Adapters concretos implementam. Ela deve ter os métodos que serão encaminhados para o código que está sendo adaptado (Adaptee no diagrama).

- Crie adaptares concretos que implementam a interface do Adapter (Adapter no diagrama): você pode criar quantas classes adaptadoras precisar para seu código. Essa classe deverá encaminhar chamadas de métodos para o código que está sendo adaptado (Adaptee no diagrama).

- Encaminhe as chamadas de método do Adapter para o Adaptee: agora você só precisará encaminhar as chamadas de métodos do seu Adapter concreto para o código que está sendo adaptado (Adaptee no diagrama).

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/structural/bridge">Adapter</a>

<br />

<a id="structural-decorator"></a>

<h3 align="center"><b>Decorator</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- O Decorator é um padrão de design estrutural que permite anexar novos comportamentos aos objetos, colocando-os dentro de objetos especiais do wrapper que contêm os comportamentos.

</br>

<h4> 📌 Problema: </h4>

</br>

- Você deseja adicionar comportamento ou estado a objetos individuais em tempo de execução. A herança não é viável porque é estática e se aplica a uma classe inteira.

</br>

<h4> 📌 Solução: </h4>

</br>

- Estender uma classe é a primeira coisa que vem à mente quando você precisa alterar o comportamento de um objeto. No entanto, a herança tem várias advertências sérias que você precisa estar ciente.

- A herança é estática. Você não pode alterar o comportamento de um objeto existente no tempo de execução. Você só pode substituir o objeto inteiro por outro criado a partir de uma subclasse diferente.

- As subclasses podem ter apenas uma classe pai. Na maioria dos idiomas, a herança não permite que uma classe herde comportamentos de várias classes ao mesmo tempo.

- Uma das maneiras de superar essas advertências é usando Agregação ou Composição em vez de herança . Ambas as alternativas funcionam quase da mesma maneira: um objeto fazreferência a outro e delega-lhe algum trabalho, enquanto que com a herança, o próprio objeto é capaz de fazer esse trabalho, herdando o comportamento de sua superclasse.

- Com essa nova abordagem, você pode facilmente substituir o objeto “auxiliar” vinculado por outro, alterando o comportamento do contêiner em tempo de execução. Um objeto pode usar o comportamento de várias classes, tendo referências a vários objetos e delegando a eles todos os tipos de trabalho. A agregação / composição é o princípio principal por trás de muitos padrões de design, incluindo o Decorator. Nessa nota, vamos voltar à discussão sobre padrões.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/structural/decorator">Decorator</a>

<br />

<a id="structural-facade"></a>

<h3 align="center"><b>Facade</b></h3>

<div align="left">
<h4> 📌 Intenção: </h4>

</br>

- Facade é um padrão de design estrutural que fornece uma interface simplificada para uma biblioteca, uma estrutura ou qualquer outro conjunto complexo de classes. Quando falamos de design patterns facade é um dos mais conhecidos, assim como singleton.

</br>

<h4> 📌 Problema: </h4>

</br>

- Imagine que você deve fazer seu código funcionar com um amplo conjunto de objetos que pertencem a uma biblioteca ou estrutura sofisticada. Normalmente, você precisa inicializar todos esses objetos, acompanhar as dependências, executar métodos na ordem correta e assim por diante.

- Como resultado, a lógica comercial de suas classes ficaria fortemente acoplada aos detalhes de implementação de classes de terceiros, dificultando a compreensão e a manutenção.

</br>

<h4> 📌 Solução: </h4>

</br>

- Facade discute o encapsulamento de um subsistema complexo em um único objeto de interface. Isso reduz a curva de aprendizado necessária para alavancar com sucesso o subsistema. Também promove a dissociação do subsistema de seus muitos clientes potencialmente. Por outro lado, se a Facade for o único ponto de acesso para o subsistema, limitará os recursos e a flexibilidade que “usuários avançados” podem precisar.

- O objeto Fachada deve ser um advogado ou facilitador bastante simples. Não deve se tornar um oráculo onisciente ou um objeto “deus”.

</br>

<h4> 📌 Implementação: </h4>

</br>

- <a href="https://github.com/LuannMateus/design-patterns-gof/tree/main/src/structural/facade">Facade</a>

</div>

</div>

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

- <i>Design Patterns — Parte 10 — Composite. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-10-composite-f7600cb3aad7. Acesso em: 19/04/2022.</i>

- <i>Design Patterns — Parte 8 — Adapter. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-8-adapter-21ed67ceb9ed. Acesso em: 19/04/2022.</i>

- <i>Design Patterns — Parte 9 — Bridge. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-9-bridge-5ca127f72de. Acesso em: 11/05/2022.</i>

- <i>Design Patterns — Parte 11 — Decorator. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-11-decorator-ba348f44142f. Acesso em: 15/05/2022.</i>

- <i>Design Patterns — Parte 12 — Facade. Medium, 2019. Disponível em: https://medium.com/xp-inc/desing-patterns-parte-12-facade-ff66c68f5784. Acesso em: 15/05/2022.</i>
