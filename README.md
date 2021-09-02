### Atenção - O código está na branch master ##


# __JobsNET__


####   __[Aqui você encontra o  repositório back-end](https://github.com/ludmillalopes/jobsnet_back-end)__


Esse projeto foi desenvolvido durante o Programa de bolsas Start Tech.<br />
Um treinamento intensivo full stack resultante da parceria entre Ambev Tech e Gama Academy.


O objetivo desse projeto é desenvolver uma landing page para atração de profissionais<br />
a pedido da empresa JobsNET (fictícia). O resultado é apresentado a seguir.


A landing page foi hospedada por meio da plataforma __[Heroku](https://www.heroku.com)__.<br />
Sua URL é __<https://jobsnetvagas.herokuapp.com/>__


![Imagem da landing page JobsNET](https://i.ibb.co/bBYVbWy/Jobsnet.png)


## __Estrutura__<br />

A estrutura do projeto apresenta:

* __Validação de CPF__<br />
Realizada por meio da __[biblioteca](https://www.npmjs.com/package/cpf-cnpj-validator)__ para validação de objetos javascript,<br />
disponível através do código:

      `npm i cpf-cnpj-validator -S`




* __Consulta de CEP__<br />
Realizada por meio da API __[VIA Cep](https://viacep.com.br)__, dispolibilizada por:

      `(`https://viacep.com.br/ws/${cep}/json/`)`




* __Requisições HTTP__<br />
Feitas por __[axios](https://axios-http.com/ptbr/docs/intro)__


* __Serviço de Banco de Dados__<br />
O serviço de banco de dados utilizado foi o __[MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/efficiency)__, ele é o serviço de DBaaS (Banco de Dados como Serviço)<br /> oferecido pela MongoDB.


* __Web Services REST - Swagger__<br />
A documentação dos recursos Web Services REST foi realizada com uso do __[Swagger](https://swagger.io/)__.

      `npm install swagger-ui-express`


➙  Disponibilizada aqui - __<https://jobsnet-back-end.herokuapp.com/docs/>__


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


