# Node Storage API

Olá, como vai você?
-------------------

Meu nome é __Lucas Nascimento__ e eu sou um desenvolvedor Android,  
estudante de Sistemas de informação no centro universitário Estácio.

Sobre
------
Eu sempre quis entender como as APIs funcionam, eu queria entender como o processo de enviar json  por URLs e retornar Json por URLs, eu sempre usei isso, mas nunca dei uma olhada em como tudo funciona, como eu disse que queria entender como as APIs funcionam e sempre quis criar uma, então um dia eu sentei na frente do computador e comecei a assistir video aulas, e é assim que esse projeto nasce.


ok, vamos ao que interessa.
-------------------------------

Bem, este projeto foi criado com Java Script usando NodeJS para gerenciar o backend do aplicativo, e para o banco de dados MongoDB foi usado online, você poderia clonar este projeto em sua máquina, mas para o banco de dados do MongoDB requer autenticação com nome de usuário e senha, precisa entrar em contato comigo para obter

o projeto é básico, apenas com dois tipos de solicitação, __GET__ e __POST__, os métodos __PUT__ e __DELETE__ que você pode encontrar no arquivo __'product-route' não tem suas funcionalidades reais__.

A API é para registrar e ler produtos e você pode testar no Postman da seguinte forma:

Utilizando a URL __http>//(seu link local):(porta)/products__   
__ex:__ localhost:3000/products

se a requisição estiver marcada com tipo GET  
o servidor irá retornar um JSON da seguinte forma:
```json
  {
    "product": [
        {
            "active": true,
            "tags": [
                "tecnologia",
                "informatica"
            ],
            "_id": "5cba8ef45481102a98de1aec",
            "title": "Teclado Gamer",
            "slug": "teclado-gamer",
            "description": "Teclado Gamer com Leds RGB",
            "price": 18200
        }
    ]
  }        
```

fique atento ao log do seu terminal quando executar este servidor,  
pois é lá que você pode ver a porta que o servidor vai está rodando
  
Utilizando a mesma URL mas com requisição tipo POST você vai estar tentando persistir  
algum dado no banco de dados, mas para que isso não lhe retorne um erro 400  
você precisa enviar um body da seguinte forma: 

```json
  {
	"title": "Teclado Gamer",
	"slug":"teclado-gamer",
	"description": "Teclado Gamer com Leds RGB",
	"price": 18200,
	"active": true,
	"tags":[
	    "informatica",
            "tecnologia"
      ]
}
```

dessa forma você terá apenas dois tipos de retorno:  

__201 -> Produto cadastrado com sucesso  
400 -> Falha ao cadastrar produto__

Contato
-------
Instagram - @blessed7170  
Linkedin  - [Linkedin](https://www.linkedin.com/in/lucasnascimento7170/)  
Facebook  - Lucas Nascimento
