import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"
import { Roles1708945363408 } from "./migrations/1708945363408-roles"
import { Users1708950799720 } from "./migrations/1708950799720-users"
import { Authors1708951444494 } from "./migrations/1708951444494-authors"
import { Books1708961543915 } from "./migrations/1708961543915-books"
import { Loans1708962452738 } from "./migrations/1708962452738-loans"
import { BookFavorite1708963730636 } from "./migrations/1708963730636-book_favorite"


export const AppDataSource = new DataSource({
type: "mysql",
host:process.env.DB_HOST|| "localhost",
port:Number(process.env.DB_PORT)|| 3307,
username:process.env.DB_USER|| "root",
password:process.env.DB_PASSWORD|| "1234",
database:process.env.DB_DATABASE|| "typeOrmTest",
entities: [],
migrations:[Users1708950799720,Roles1708945363408,Authors1708951444494,Books1708961543915,Loans1708962452738,BookFavorite1708963730636],
synchronize: false,
logging: false,
})