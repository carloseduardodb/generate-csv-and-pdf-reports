<p align="center">
  <a href="#" target="blank"><img src="https://brasil.softlinegroup.com/uploads/cke/cb/f0/78/oooo.jpg" width="320" alt="Mail Logo" /></a>
</p>

## Descrição

[Nest](https://github.com/nestjs/nest) foi usado na construção deste projeto.

Código para puxar todos os emails do outlook usando o protocolo IMAP e adicionando os posteriormente em um arquivo txt para converte-los em uma planilha no excel para a visualização dos dados.   

<br>

## Instalação

```bash
$ npm install
```
- Preencha o arquivo `src/imap-listener/config.example.ts` e o renomeie 
para config.ts. 
- Adicione uma pasta com o nome temp no diretório root do projeto

## Rodando o aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testando 
- Obs: não construi testes aqui

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Entre em contato

- Autor - [Carlos Eduardo](https://portfolio-carlos-eduardo-dias-batista.vercel.app/)

## Licença

Nest is [MIT licensed](LICENSE).
