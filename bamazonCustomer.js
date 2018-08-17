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


function paymentOption() {
    inquirer.prompt([
        {
            type: "list",
            name: "payment",
            message: "How would you like to pay?",
            choices: ["PAY WITH CRYPTO", "PAY WITH STOLEN CREDIT CARD"]
        }    
        ]).then(function(data3) {
            if (data3.payment == "PAY WITH CRYPTO") {
                console.log("You cutty B! Good luck out there!")
                // setTimeout(function() {
                    // connection.end();
                // ;}, 1000)

                // setTimeout(function() {
                exitBamazon();
            //     ;}, 1000)
            }
            else {
                console.log("Max that baby out!")
                // setTimeout(function() {
                    // connection.end();
                // ;}, 1000)

                // setTimeout(function() {
                exitBamazon();
                // ;}, 1000)
            }
        });
};


function exitBamazon() {
    inquirer.prompt([
        {
            type: "list",
            name: "exit",
            message: "What would you like to do next?",
            choices: ["BUY MORE ITEMS", "EXIT BAMAZON"]
        }    
        ]).then(function(data4) {
            if (data4.exit == "BUY MORE ITEMS") {               
                    showMenu();
            }
            else {
                console.log("Thanks for stopping by!")
                setTimeout(function() {
                    connection.end();
                ;}, 1000)
            }
        });
};



connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("connected as id " + connection.threadId + "\n");
    
            showMenu();
    }
});




function showMenu(){

    setTimeout(function() {
        console.log("HELLO! and welcome to BAmazon the black market Amazon for all of your sinister needs.");

            inquirer.prompt([
                {
                    type: "list",
                    name: "enter",
                    message: "Are you ready to enter the black market?",
                    choices: ["HELLA READY", "NAW DAWG"]
                }]).then(function(data3) {

                    if (data3.enter == "HELLA READY") {
                        runApp();                    

                    } else {
                        connection.end();
                    }
                });
    ;}, 1000)        
}
    






function runApp(){
    console.log ("Here are all of the items that we have for sale:")

    connection.query("SELECT item_id, product_name, price FROM all_products", function(err, allproducts) {
            
        console.log(allproducts);

            inquirer.prompt([
                {
                type: "input",
                name: "item_id",
                message: "What item would you like to purchase? [INPUT item_id]",
                },
                {
                type: "input",
                name: "quantity",
                message: "What quantity of the item do you want to purchase? [INPUT # of items]",
                }
              
            ]).then(function(data) {
                var selection
                var item = data.item_id;
                var quantity = data.quantity;
                
               
                connection.query("SELECT product_name,price,stock_quantity FROM all_products WHERE item_id = ?", [item] , function(err, selection) {
                    if (err) throw err;


                    console.log("so you would like " + quantity + " of the " + selection[0].product_name);
                  

                    if (quantity <= selection[0].stock_quantity) {

                        newQuantity = (selection[0].stock_quantity - quantity)

                        var query = connection.query(
                            "UPDATE all_products SET ? WHERE ?",
                            [
                              {
                                stock_quantity: newQuantity
                              },
                              {
                                item_id: item
                              }
                            ],)

                            console.log(selection);

                        
                        // connection.query("UPDATE all_products SET stock_quantity=? WHERE item_id=?", [newQuantity, item])
                            

                          


                        total_cost = (quantity * selection[0].price);

                        setTimeout(function() {
                            console.log("Your total for the purchase is: $" + total_cost)
                        
                        paymentOption();

                        ;}, 1000);
                        
                    } else {
                        console.log("We don't have that much in stock! We only have " + selection[0].stock_quantity + " left.")
                        
                        
                            setTimeout(function() {
                                    inquirer.prompt([
                                        {
                                            type: "list",
                                            name: "action",
                                            message: "How do you want to proceed?",
                                            choices: ["PURCHASE REMAINING STOCK", "RETURN TO MAIN MENU"]
                                        }    
                                        ]).then(function(data2) {

                                        if (data2.action == "PURCHASE REMAINING STOCK") {
                                            alltotal = (selection[0].stock_quantity * selection[0].price);
                                            console.log("Your total for the purchase is: " + alltotal);
                                            paymentOption();
                        
                                        } else {
                                            runApp();
                                        }
                                    });
                                    ;}, 1000)

                    }

                  

                })
            });
               
            });
        };
