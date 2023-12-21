Império Web Components (iWC)
============================

Império Web Components é um pacote abrangente que contém todos os componentes web do projeto Kratos. Esses componentes web são projetados para serem reutilizáveis, autocontidos e facilmente integráveis em várias partes da aplicação. Ao fornecer uma coleção unificada de componentes, IWC promove a reutilização de código, a manutenibilidade e a consistência em todo o projeto.

### Configuração do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente com seus respectivos valores:

```
ANALYZER_MODE=
HINTS=warning
MAX_ASSET_SIZE=2000000
MAX_ENTRYPOINT_SIZE=2000000
PORT=9001
PUBLIC_PATH=//localhost:9001/
```

Aqui está uma descrição de cada variável:

-   ANALYZER_MODE: Essa variável determina o modo para o analisador de código e aceita valores específicos. (Forneça detalhes sobre os valores possíveis, se aplicável)
-   HINTS: Esta variável controla o nível de dicas geradas durante o processo de construção e aceita valores específicos. (Forneça detalhes sobre os valores possíveis, se aplicável)
-   MAX_ASSET_SIZE: Esta variável define o tamanho máximo de um recurso e é medido em bytes. (Especifique a unidade de medida se for diferente)
-   MAX_ENTRYPOINT_SIZE: Esta variável define o tamanho máximo de um ponto de entrada e é medido em bytes. (Especifique a unidade de medida se for diferente)
-   PORT: Esta variável define o número da porta no qual o servidor de desenvolvimento será executado. (Especifique qualquer valor padrão, se aplicável)
-   PUBLIC_PATH: Esta variável determina o caminho público do projeto e seu valor padrão. (Especifique qualquer valor padrão, se aplicável)

Certifique-se de fornecer valores apropriados para cada variável de acordo com os requisitos do seu projeto.

### Primeiros Passos

Para iniciar o projeto e executar um servidor de desenvolvimento, execute o seguinte comando:

bashCopy code

```bash
yarn dev`
```

Este comando iniciará o servidor de desenvolvimento, permitindo que você experimente os Componentes Web Império em tempo real.

### Construindo o Projeto

Para construir os Componentes Web Império para produção, use o seguinte comando:

```bash
yarn build`
```

O processo de construção gerará pacotes otimizados e minificados prontos para implantação em seu ambiente de produção.

### Contribuições

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões de melhorias, por favor, abra um problema ou envie uma solicitação de pull no repositório GitHub deste pacote.
