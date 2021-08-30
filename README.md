### Atenção - O código está na branch master ##


# __JobsNET__


####   __[Aqui você encontra o  repositório back-end](https://github.com/ludmillalopes/jobsnet_back-end)__


Esse projeto foi desenvolvido durante o Programa de bolsas Start Tech.<br />
Um treinamento intensivo full stack resultante da parceria entre Ambev Tech e Gama Academy.


O objetivo desse projeto é desenvolver uma landing page para atração de profissionais<br />
a pedido da empresa JobsNET (fictícia). O resultado é apresentado a seguir.


A landing page foi hospedada por meio da plataforma __[Heroku](https://www.heroku.com)__.<br />
Sua URL é <https://jobsnetvagas.herokuapp.com/>


![Imagem da landing page JobsNET](https://lh3.googleusercontent.com/jFW8I5GsK-aELivliNXdguGb568Ukt76HlvK8aAM-zwgGt4VYIRx5d-_EzAMjPolQu35v1uiBRwacxhHpYeuk8qeh8WB-8ZtZzwHUWbdi1EexOFoJxZXWVVQxIeBDz_NkZ-wg6VZnunVTJwwbh8P5xziRfMR369-PInHffFJ8qlr_na8YM4JTZhYji6yHhnWHPBSvoiVgdarH6iwr9fueUvlZ1ccuIryZ9-BPWsEEpajwsYQQNGaPWe0DP9-8DuXZZr8AExtDEc_Z3XPuhR_XPb-meqidICxoNYuPHJkXU1UXHFxL6I4a3y60fVairc9QWCFXbwx_LZzv82o8d31_cyUNLROJNhCKmXuCfui_kTHGxILDQ6R1eQpI3Oh6N9TEQfgmYgNuoGVN0Knrme1QzOVjiFfw2IbBtYilqXof9Zy-b9FH_pxV_vSIPUpwQFsDC5dyvxCMCZ4Vj-9HbXbNhe680CCqXoNwrW6UN-codnKeo597tr9nLSJTiCPfHiM3SDb8VC37P2LIbfxuQIwfGVQRdUedguYCEwmz5SdSqjcswBUVJ0rLjaVjBWyuaP5KRzrUJ-CaquTIVXemQi7WaQY2i_Oy9H4xrBrDegrniMx6Rz99vRdyZbHEUEOG8y3gSqJgj98upQzgiJye78S4muXtl3XiwP9MTLnuv40C-4Vy_RSekaglU64d4-Nn_FxdoaBjGqY_7G70zpdnGUcwD8=w1366-h662-no?authuser=0)


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


➙  Disponibilizada Aqui __<https://jobsnet-back-end.herokuapp.com/docs/>__


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


