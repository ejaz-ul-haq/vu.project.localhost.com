# Travel Mates Planner 
#### - Your ultimate travel companion 

This app is developed by using Laravel as a backend server-side development framework which is sharing data through APIs and ReactJS-based Ant Design UI framework on the frontend along with UmiJS and Ant Design ProComponents.

----

### Language & Framework Used:
1. PHP : v8+
1. Laravel : v10+
1. Nodejs : v20.11.0
1. NPM : 10.2.4
1. Reactjs : 18.2.0
1. Ant Design Pro : 6.0.0 

----

### How to Setup the Project:

#### 1. Clone Project
Open the terminal and run the following command.
```bash
git clone https://github.com/ejaz-ul-haq/vu.project.localhost.com.git
```
after clonning go to the project drectory by runing the following command.
```bash 
cd vu.project.localhost.com 
```
----

#### 2. Setup Enviornment
Create `.env` file & Copy `.env.example` file to `.env` file and setup database, currently we are using mysql database `vu_project_localhost_com` so make sure you have this databse on your server if not so create it or setup what you want.

----

#### 3. Re-build UI App
The clonned project will include the last build assets of frontend UI app but if you would like to rebuild or modify the app so, do the following steps.
1. Navigate to the `resources` -> `app-ui`
1. Instal the development dependencies by running the following command.
```bash 
npm install 
```
1. Re-build the UI app assets by running the following commands.
```bash 
npm run build
```
----

#### 4. Install PHP Dependencies
Run the following commands to install the required packages and generate the autoload files.
```bash 
composer install
```
----

#### 5. DB Tables & Dummy Data
Now migrate and seed database to complete whole project setup by running the following command.
``` bash
php artisan migrate:refresh --seed
php artisan cashier:webhook
```
It will create the app-required tables in the database and will also insert the following dummy data to set up the demonstration.
1. Users ( 21 )
1. Destinations ( 109 )
1. Accommodations ( 18 )
1. Trips ( 06 )
1. Notifications ( 03 )

----

### 6. Run the server -
``` bash
php artisan serve
```

----

### 7. Visit the following url in your browser.
http://127.0.0.1:8000 

----