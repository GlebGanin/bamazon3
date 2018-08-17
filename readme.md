# BAMAZON ##the black market amazon for all of your sinister needs.

###Video Link:  https://youtu.be/7AerxAEqgQ4

## Customer View

The application is launched by typing in **node bamazonCustomer.js** into the terminal. 

The first question asks you if you would like to enter the BAmazon site. If you choose **NAW DAWG** then you will be exited out of the applicatoin. If you select **HELLA READY** you will enter the site. 

The first thing that you will see is the main menu which lists all of the items that are available for sale. 

You will then be promted to enter the **item_id** of the item that you would like to purchase.

You will then be promted to enter the **quantity** you would like to purchase.

    If there is enough inventory in stock for your purchase, the application first displayes the item that you selected and then calculates your total amount and then asks you how you would like to pay.

    If there is not enough inventory in stock then the application asks you if you would like to purchase the remaining stock or go back to the main menu to select another item.
        If you purchase the remaining stock then it calculates your total.

    Both of the payment questions ask you if you would like to pay with crypto currency or with a stolen credit card.


## Manager View     

The manager view of the applicaton was created to allow me to update the SQL database without accesssing SQL. This saved me a lot of time while coding the customer portion of the app.

The manager view strts by giving you 3 options. 

    1. View menu with stock quantities.
    2. Replenish the inventory of the items.
    3. Add a new item to the menu.

The first option simply lists the entire menu so that you can see how much of each item you have in stock. 

The second option is used when the stock amounts run low. You can replenish the stock quanitty to 10 for all items by selecting this option. After the stock is replenished the menu is displayed for confirmation.

The third option is my current work in progress. It begins by asking you 4 questions about the item that you are adding. By answering the 4 questions you determine what the NAME, DEPARTMENT, PRICE, and STOCK QUANTITY will be.
    The item is then added to your menu and then the menu is displayed for confirmation.

