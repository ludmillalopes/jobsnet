### Atenção - O código está na branch master ##
<br />
<br />
# __JobsNET__
<br />
<br />
* #### __[Aqui você encontra o  repositório back-end desse projeto](https://github.com/ludmillalopes/jobsnet_back-end)__
<br />
<br />
<br />
<br />
Esse projeto foi desenvolvido durante o Programa de bolsas Start Tech.<br />
Um treinamento intensivo full stack resultante da parceria entre Ambev Tech e Gama Academy.
<br />
<br />
O objetivo desse projeto é desenvolver uma landing page para atração de profissionais a pedido da empresa JobsNET (fictícia).<br />
O resultado é apresentado a seguir.
<br />
<br />
A landing page foi hospedada por meio da plataforma __[Heroku](https://www.npmjs.com/package/cpf-cnpj-validator)__.<br />
Sua URL é <https://jobsnetvagas.herokuapp.com/>
<br />
<br />
![Imagem da landing page JobsNET](https://drive.google.com/file/d/1RW5IntF4tCLnHNd8WWRopbv4KjZX9YgF/view?usp=sharing)
<br />
<br />
<br />
<br />
## __Estrutura__
<br /><br />
A estrutura do projeto apresenta:
<br />
* __Validação de CPF__
Realizada por meio da __[biblioteca](https://www.npmjs.com/package/cpf-cnpj-validator)__ para validação de objetos javascript,<br />
disponível através do código:
<br />
      `npm i cpf-cnpj-validator -S`
<br />
<br />
<br />
<br />
* __Consulta de CEP__
Realizada por meio da API __[VIA Cep](https://viacep.com.br)__, dispolibilizada por:
<br />
      `(`https://viacep.com.br/ws/${cep}/json/`)`
<br />
<br />
<br />
<br />
* __Requisições HTTP__
Feitas por __[axios](https://axios-http.com/ptbr/docs/intro)__
<br />
<br />
<br />
<br />
* __Serviço de Banco de Dados__
O serviço de banco de dados utilizado foi o __[MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/efficiency)__, ele é o serviço de DBaaS (Banco de Dados como Serviço)<br /> oferecido pela MongoDB.
<br />
<br />
<br />
<br />
* __Web Services REST - Swagger__
A documentação dos recursos Web Services REST foi realizada com uso do __[Swagger](https://swagger.io/)__.
<br />
      `npm install swagger-ui-express`
<br />
<br />
➙ Disponibilizada Aqui__ <https://jobsnet-back-end.herokuapp.com/docs/>__
<br />
<br />
<br />
<br />
## Tecnologias
<br />
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
<br />
<br />
<br />
<br />
