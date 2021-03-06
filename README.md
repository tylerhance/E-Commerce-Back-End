# E-Commerce-Back-End

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description 

This app is the inclusion of the back end logic for an E-Commerce site by configuring a working Express.js API to use Sequelize (ORM) to interact with a MySQL database. The SQL database includes tables for products, categories, tags, and product tags. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Questions](#questions)

## Installation

- Make sure to have Node.js and MySQL installed before starting. 
- Clone the repo and paste it into your CLI:
    - `git clone git@github.com:tylerhance/E-Commerce-Back-End.git`
- Go to your root directory and install the dependencies by running:
    - `npm i` 
- To hook up the MySQL database in the CLI run:
    - `mysql -u root -p`
    - Then `source db/schema.sql`
    - Type `quit` to return to the root directory.
- Source the schema.sql and seed the files using:
    - `npm run seed`
- To start the server in the command line run:
    - `npm start`
## Usage

This app allows users to view, add, edit/update, and delete categories, products and tags accordingly.

- View the walk-through video for hooking up the DB and seeding data [Here](https://drive.google.com/file/d/1Z5GlOSaFW9eg69xEGYYps87O3Oni5iFK/view)
- View the walk-through video for testing the API routes [Here](https://drive.google.com/file/d/1PBUk2ddamVQ3R5WBFSibBPs9r7Mc3Bgo/view)

## Technologies Used

- Node.js
- Express
- MySQL
- Sequelize
- dotenv
- nodemon
## License

- [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Questions

- Feel free to drop me a line at <tyler.hance@gmail.com> or visit my **[GitHub Profile](https://github.com/tylerhance)** to check out my other projects.