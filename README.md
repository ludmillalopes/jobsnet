### Atenção - O código está na branch master ##

# __JobsNET__

Esse projeto foi desenvolvido durante o Programa de bolsas Start Tech.
Um treinamento intensivo full stack resultante da parceria entre Ambev Tech e Gama Academy.

#### __[Aqui você encontra o  repositório back-end desse projeto](https://github.com/ludmillalopes/jobsnet_back-end)__


O objetivo desse projeto é desenvolver uma landing page para atração de profissionais a pedido da empresa JobsNET (fictícia).
O resultado é apresentado a seguir.

![Imagem da landing page JobsNET](https://jobsnetvagas.herokuapp.com)

A landing page foi hospedada por meio da plataforma __[Heroku](https://www.npmjs.com/package/cpf-cnpj-validator)__.
Sua URL é <https://jobsnetvagas.herokuapp.com/>

## __Estrutura__

A estrutura do projeto apresenta:

* __Validação de CPF__
Realizada por meio da __[biblioteca](https://www.npmjs.com/package/cpf-cnpj-validator)__ para validação de objetos javascript,
disponível através do código:

`npm i cpf-cnpj-validator -S`


* __Consulta de CEP__
Realizada por meio da API __[VIA Cep](https://viacep.com.br)__, dispolibilizada por:

`(`https://viacep.com.br/ws/${cep}/json/`)`


* __Requisições HTTP__
Feitas por __[axios](https://axios-http.com/ptbr/docs/intro)__


* __Serviço de Banco de Dados__
O serviço de banco de dados utilizado foi o __[MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/efficiency)__, ele é o serviço de DBaaS (Banco de Dados como Serviço) oferecido pela MongoDB.


* __Web Services REST - Swagger__
A documentação dos recursos Web Services REST foi realizada com uso do __[Swagger](https://swagger.io/)__.

`npm install swagger-ui-express`

__Disponibilizada Aqui__ <https://jobsnet-back-end.herokuapp.com/docs/>
 

## Tecnologias

* React
* JavaScript
* CSS
* HTML
* Axios
* Node.js
* Express
* Mongoose
* MongoDB Atlas
* Swagger UI
* CORS

