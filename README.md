# Czechitas - Databáze, aneb ukládáme data na webu

Naucime se zaklady prace s daty v dokumentove NoSQL databazi MongoDB.
Cilem je vytvoreni aplikace pro spravu ToDo listu.


## Co budete potrebovat

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com)
- [Node.js a npm](http://nodejs.org)
- [MongoDB](https://www.mongodb.com/)

## Instalace

1. Clone the repository: `git clone https://github.com/michalweiser/czechitas-data-na-webu.git`
2. Install the application: `npm install`
3. Place your own MongoDB URI in `config/database.js`
4. Run mongoDB `"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath ".\data\db"`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`
