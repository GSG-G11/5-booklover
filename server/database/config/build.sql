BEGIN;
drop tables if exists products;
create table products (
    id serial primary key,
    name varchar(100) not null,
    description text not null,
    price int not null,
    category varchar(100) not null,
    imageUrl text not null
)

COMMIT;