# Art API With Node, Express and MySql (using Sequelize)

# Development steps

mkdir node-rest-api-postgresql-sequelize-pizza

cd node-rest-api-postgresql-sequelize-pizza

npm init

npm i -S -E express body-parser morgan

npm i -D -E chai chai-http eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react mocha


# setup postgre on docker

# *nix
docker run -d \
	--name pgserver \
	-p 5432:5432 -d \
	-e POSTGRES_USER=pguser \
	-e POSTGRES_PASSWORD=pguserpw \
	-e POSTGRES_DB=pizzadb \
	-v pgdata:/var/lib/postgresql/data \
	postgres:12.0-alpine

# PowerShell
docker run -d `
	--name pgserver `
	-p 5432:5432 `
	-e POSTGRES_USER=pguser `
	-e POSTGRES_PASSWORD=pguserpw `
	-e POSTGRES_DB=pizzadb `
	-v pgdata:/var/lib/postgresql/data `
	postgres:12.0-alpine



# setup sequelize 
npm i -g sequelize-cli

# add sequelize to the node project
npm i -S -E sequelize

npm i -S -E pg pg-hstore

# initialize sequelize
cd server

sequelize init

This creates the directories config, migrations and models

edit the config file to use postgresql

# run sequelize commands inside the server directory
### test that sequelize is working
sequelize db:migrate


add .sequelizerc to allow custom directory structure

```
const path = require('path');

module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
};
```

# add model migrations

sequelize model:create --name item --attributes 'name:string size:string status:string isExtra:boolean price:double'

sequelize model:create --name order --attributes 'customerName:string orderNumber:string email:string phoneNumber:string address:string postalCode:integer city:string total:double status:string'

sequelize model:create --name orderItem --attributes 'orderId:integer itemId:integer quantity:integer'


# seed database

sequelize seed:create --name seed-items

sequelize db:seed:all

sequelize db:seed:undo:all


# routing reasoning
https://restfulapi.net/http-methods/#post


# dockerize

update the path for the sequelize settings

