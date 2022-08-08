# Project in Production and Development

- A web server can be used to render static or dynamic content. Static refers to the content being shown as is, while dynamic content can be updated and changed. A static web server will consist of a computer and HTTP software. It is considered static because the sever will send hosted files as is to a browser.
Dynamic web browsers will consist of a web server and other software such as an application server and database. It is considered dynamic because the application server can be used to update any hosted files before they are sent to a browser.

## Development server

#### A development server is a type of server that is designed to make easy the development and testing of programs, websites, software or applications for software programmers.
####  It provides a run-time environment, as well as all software utilities that are essential to program debugging and development.
#### For example we can use Webpack for development server which we can install from NPM with npm i webpack-dev-server command.
#### For Webpack the entry point by default is ./src/index.js, we configure that in webpack.config.js file.
#### The output property in config file tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
#### The next important concept in Webpack is loader. Webpack only understands JavaScript and JSON files, beacuse of that loaders allow webpack to process other types of files and convert them into valid modules.
#### While loaders are used to transform certain types of modules, plugins can be leveraged to perform  tasks like bundle optimization.
#### By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.


## Production server
#### A production server is the core server on which any website or Web application is being hosted and accessed by users. For example we can use Nginx for creating production server. 
#### To install Nginx in Linux OS we can use "sudo apt install nginx" command and we are pointing  browser our server IP address.
#### Default page is placed in /var/www/html/ location. We can place our static pages here or use virtual host and place it other location (Virtual host is a method of hosting multiple domain names on the same server).
#### To set up virtual host, we need to create file in /etc/nginx/sites-enabled/ directory.
#### To make our site working, we can  restart Nginx service with sudo "service nginx restart" command.

- The difference between a development server and a production server is all about  security. Typically, a server in a development environment allows unrestricted access to and control by a user or group of users. A production server, on the other hand, is configured to restrict access to authorized users and to limit control to system administrators. For example, in a development environment anyone might be allowed to shut down the server, whereas, in a production environment, only an administrator with appropriate privileges would be allowed to stop a running server.




