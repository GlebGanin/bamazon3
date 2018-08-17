var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "gleb123",
    database: "bamazon"
});



connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("connected as id " + connection.threadId + "\n");
    
            managerView();
    }
});



function managerView() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do today?",
            choices: ["SHOW WHOLE MENU", "VIEW STOCK QUANTITY", "RESTOCK INVENTORY", "ADD MENU ITEMS"]
        }    
        ]).then(function(data) {
            if (data.options == "SHOW WHOLE MENU") {
              
                connection.query("SELECT * FROM all_products", function(err, wholeMenu) {
            
                            console.log(wholeMenu);

                });           
            }


            else if (data.options == "VIEW STOCK QUANTITY") {
              
                connection.query("SELECT product_name, stock_quantity FROM all_products", function(err, productQuantity) {
            
                            console.log(productQuantity);

                            managerView();

            });            


            } else if (data.options == "RESTOCK INVENTORY")  {

                connection.query("UPDATE all_products SET stock_quantity=10", function(err, restock) {
            
                    connection.query("SELECT product_name, stock_quantity FROM all_products", function(err, productQuantity) {
            
                        console.log(productQuantity);
                    });    

                });           


            }
            else if (data.options == "ADD MENU ITEMS") {
                inquirer.prompt([
                    {
                    type: "input",
                    name: "new_product_name",
                    message: "What is the name of the new product?",
                    },
                    {
                    type: "input",
                    name: "new_department_name",
                    message: "What department does the item belong to? (Rare Animals, Illegal Drugs, Weapons, Other)",
                    },
                    {
                    type: "input",
                    name: "new_price",
                    message: "What price will the item sell for?",
                    },
                    {
                    type: "input",
                    name: "new_stock_quantity",
                    message: "What is the starting stock quantity of the item?",
                    }
                ]).then(function(data) {
                    var name = data.new_product_name;
                    var department = data.new_department_name;
                    var price = (data.new_price);
                    var stock = (data.new_stock_quantity);
                    addItem();

                    function addItem() {
                        console.log("Inserting a new product...\n");
                        var query = connection.query(
                        "INSERT INTO all_products SET ?",
                        {
                            product_name: name,
                            department_name: department,
                            price: price,
                            stock_quantity: stock
                        },
                        function(err, res) {
                            // console.log(res.affectedRows + " product inserted!\n");
                            // Call updateProduct AFTER the INSERT completes

                            console.log("Item has been added")

                            setTimeout(function() {
                                managerView()
                            ;}, 1000) 
                        })
                    }
                });
            };
        });
};