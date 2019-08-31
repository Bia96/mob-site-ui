

# Instalando Node e npm
Para rodar o projeto localmente, você precisará instalar o [Nodejs](https://nodejs.org/en/download/) e o npm, que são responsáveis por administrar os pacotes necessários para o projeto. Ao instalar o Node, automaticamente o npm também é instalado. 

[Informação adicional sobre instalação do Nodejs/npm no Windows](https://www.guru99.com/download-install-node-js.html)


# Instalando e entendendo o SASS

O CSS deste projeto é construído usando SASS. O SASS é um pré-processador de CSS que otimiza a criação e administração de estilos. Caso você ainda não conheça, [leia este guia de introdução ao SASS](https://sass-lang.com/guide).

Por isso, você precisa instalar o Sass na sua máquina para que ele possa funcionar corretamente, e todos os arquivos `.sass` (onde editamos os estilos) possam ser automaticamente compilados para o arquivo `.css` principal do projeto.

Para instalar o SASS, basta baixá-lo e checar no Terminal se está instalado e atualizado usando ``sass --version``. [Informação adicional sobre a instalação do SASS](https://sass-lang.com/install).

É importante saber que **todas as edições de estilos CSS** devem acontecer nos respectivos arquivos `.sass` (localizados na pasta `\mob-site-ui\src\scss`) e, ao salvar, são automaticamente transcritas pelo compilador para o arquivo `mob-site-ui\dist\css\main.min.css`. 

# Baixando o projeto do GitHub e conectando seu usuário

Primeiro precisamos entender o que é o Git. [Você pode saber mais sobre neste link.](https://rogerdudler.github.io/git-guide/index.pt_BR.html)

Agora que já sabemos o que é o Git e como funciona, precisamos clonar o projeto. Caso esteja use o terminal, digite o comando:

> git clone https://github.com/Bia96/mob-site-ui.git

Provavelmente, em seguida, o terminal pedirá para você se identificar como usuário do Github. Faça login normalmente com seu usuário e senha. Ele também pedirá para você escolher uma pasta no computador onde sua cópia local será criada - escolha uma pasta de fácil acesso. Se tudo der certo, você agora estará colaborando com este repositório e terá uma cópia dele no seu computador.

Alguns programas (opcionais) podem tornar mais fáceis o fluxo de trabalho com o Git, eliminando a necessidade de se digitar comandos no Terminal para fazer commits, push ou pull (Controle de Versão). [Um deles é o GitKraken](https://www.gitkraken.com). Se você estiver utilizando o [Visual Studio Code](https://code.visualstudio.com) como seu editor, ele também possui ferramentas nativas de controle de versão.

# Rodando o Projeto

Com as ferramentas necessárias instaladas e estando conectado ao repositório do GitHub do projeto, agora você pode começar a editá-lo, com a garantia de que suas modificações serão corretamente compiladas e irão para o repositório certo.

Para rodar o projeto pela primeira vez, abra a pasta local para onde ele foi clonado, com seu editor de texto escolhido. Com o projeto aberto, abra um novo Terminal no editor de texto. Neste terminal, digite o seguinte comando.

> npm install

Isso irá instalar as dependências do projeto automaticamente no seu computador. Você só precisará fazer isso novamente caso baixe o repositório em outro computador ou atualize alguma dependência.

Cada vez que abrir o projeto, abra um Terminal na pasta do projeto e rode o comando:

>npm run sass

Este comando ficará observando e procurando por mudanças nos arquivos `.sass` e o transferindo automaticamente para o CSS do projeto. Cada vez que você salvar um arquivo `.sass`, ele irá compilar automaticamente o CSS.

# Continuous Delivery: Netlify

O site está hospedado no [Netlify](https://taniarascia.github.io/primitive/), responsável por pegar o código que está no Github e colocar o site no ar. *Cada vez que o repositório receber um novo commit*, de qualquer usuário colaborador, automaticamente as modificações são transferidas pelo Netlify para a rede. Não é necessário que novos colaboradores façam login no Netlify; basta fazer upload das modificações para o repositório do projeto, e o Netlify se encarrega do deployment.

# Informações Úteis

Este projeto foi construído usando o boilerplate [Primitive.](https://github.com/taniarascia/primitive) Ele não precisa ser instalado por você, pois se trata apenas de uma base HTML/CSS. 

Ao fazer modificações no CSS ou HTML, é importante entender as bases (classes, modificadores, etc) que o projeto utiliza e buscar reusá-las, para evitar repetição de código. Para saber mais sobre como o Primitive trabalha com HTML e CSS, clique [aqui](https://taniarascia.github.io/primitive/). No entanto, se você precisar de algo que o Primitive ou o projeto ainda não contemplam, você pode criar suas próprias classes e modificar as existentes sem problemas.

# URL do Site

https://mob-design.netlify.com/
