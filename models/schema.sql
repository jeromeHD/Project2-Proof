DROP DATABASE IF EXISTS whiskey_db;

CREATE DATABASE whiskey_db;

USE whiskey_db;

CREATE TABLE whiskeyTango (
    id INT NOT NULL AUTO_INCREMENT,
    whiskey_name TEXT,
    rating INT,
    country TEXT,
    category TEXT,
    price INT,
    abv INT,
    age INT,
    brand TEXT,
    PRIMARY KEY (id)
);

SELECT * FROM whiskeyTango;