DROP DATABASE IF EXISTS whiskey_db;

CREATE DATABASE whiskey_db;

USE whiskey_db;

CREATE TABLE whiskeyTango (
    id INT NOT NULL AUTO_INCREMENT,
    whiskey_name VARCHAR(50) NULL,
    rating INT NULL,
    country VARCHAR(50) NULL,
    category VARCHAR(50) NULL,
    price INT NULL,
    abv INT NULL,
    age INT NULL,
    brand INT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM whiskey_db
