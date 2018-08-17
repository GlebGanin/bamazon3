DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

USE products;


CREATE TABLE selected_item(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE cart(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("rhino_Horn", "rare_animals", 499.99, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Polar_Bear_Pelt", "Rare_Animals", 359.99, 10); 

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Shark_Fins", "Rare_Animals", 9.99, 10); 

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Liger", "Rare_Animals", 20,000.00, 2);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Opium", "Illegal_Drugs", 99.99, 10);;

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Hashish", "Illegal_Drugs", 49.99, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Mushrooms", "Illegal_Drugs", 29.99, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Baby_Asprin", "Illegal_Drugs", 3.99, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Nuclear_Missle", "Weapons", 3000.00, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("50_Caliber_Riffle", "Weapons", 500.00, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Hand_Granade", "Weapons", 50.00, 10);

INSERT INTO all_products (product_name, department_name, price, stock_quantity)
VALUES ("Anthrax", "Weapons", 500.00, 10);






INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rhino_Horn", "Rare_Animals", 499.99, 10);
        ("Polar_Bear_Pelt", "Rare_Animals", 359.99, 10),
        ("Shark_Fins", "Rare_Animals", 9.99, 10),
        ("Liger", "Rare_Animals", 20,000.00, 2),
        ("Opium", "Illegal_Drugs", 99.99, 10),
        ("Hashish", "Illegal_Drugs", 49.99, 10),
        ("Mushrooms", "Illegal_Drugs", 29.99, 10),
        ("Baby_Asprin", "Illegal_Drugs", 3.99, 10),
        ("Nuclear_Missle", "Weapons", 3000.00, 10),
        ("50_Caliber_Riffle", "Weapons", 500.00, 10),
        ("Hand_Granade", "Weapons", 50.00, 10),
        ("Anthrax", "Weapons", 500.00, 10),;
