# Sub-item Tax Calculator
Built to speed up a tedious process in invoicing at my current job. The items often have to go to seperate cost centers, thus the need to seperate the items.
In agriculture, one can aquire a tax exemption to reduce the tax cost of a purchase, so I let the user calculate the tax amount. As well as being usable in any region with taxes.
Built using React for speedy calculations and display.

# Getting the tool
## Running Local
Firstly run `npm install` to install needed modules, then use `npm start` in directory to run a local version of the web app.

## Online
The tool can be used at https://womtaxapp1.web.app/.
Currently hosted and deployed with [Firebase](https://firebase.google.com/).

# Usage
Firstly input the subtotal and final total of the receipt, this will calculate the tax amount to be used.
Then put in the *untaxed* amount of each sub item into the following input fields. Right below will the the amount plus tax to then be inputted into the bookkeeping software.

At the bottom is a double check that has the final total, which should match your physical receipt, and a difference amount if there is a mistake.

# Future Developments
- Currently hard coded to four sub items, in the future I want to let the user click a button to add more inputs.
- Different layout to site pending feedback.
- Potential of exporting the values to a text file.
