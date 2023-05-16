# RestfulAPI_Nodejs_Mysql
This repository contains a simple person website which views all people, adds person, deletes person and updates person form the mysql database using html, bootstap, javascript for the frontend and nodejs for the backend>
## Steps to run the application using docker-compose.yml file
1- Run this command in the folder which contains the docker-compose.yml file `docker-compose up`
2- In Google Chrome browser search bar write `localhost:8080`

**Note:** The docker-compose.yml file pulls three images from dockerhub [thomasmaged/app_backend](https://hub.docker.com/r/thomasmaged/app_backend) , [thomasmaged/app_frontend](https://hub.docker.com/r/thomasmaged/app_frontend), [mysql](https://hub.docker.com/_/mysql)
**Note:** The *thomasmaged/app_backend* image was built using the dockerfile included in *backend-nodejs* folder and *thomasmaged/app_frontend* image was built using thr dockerfile included in  *frontend* folder
