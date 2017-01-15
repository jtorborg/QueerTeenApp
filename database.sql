CREATE DATABASE hackgap;

CREATE TABLE volunteers (
id SERIAL PRIMARY KEY,
firstname varchar(50) NOT NULL,
lastname varchar(50),
phonenumber bigint UNIQUE,
zipcode integer NOT NULL,
info varchar(200),
image_path varchar(255),
speciality varchar(100)
);

CREATE TABLE admin (
id SERIAL PRIMARY KEY,
username varchar(50),
password varchar(300)
);



-- CREATE TABLE resources (
--
--
--
-- );
