# Week 10-Advanced-Data-Storage-and-Retrieval 
## Objectives
* Connect to a SQL database using SQLAlchemy.
* Perform basic SQL queries using engine.execute().
* Create Python classes and objects.
* Create, read, update, and delete data from a SQL database using SQLAlchemy's ORM.
* Reflect existing databases.
* Use the SQLAlchemy ORM to create classes that model tables.
* Use the ORM define relationships and foreign key constraints.
* Use joins to query related data.
* Use Flask to create and run a server.
* Define endpoints using Flask's @app.route decorator.
* Extract query variable path values from GET requests.
* Use variable paths to execute database queries on behalf of the client.
* Return JSONified query results from API endpoints.

### What is SQLite and why use it?
SQLite is a dialect for using an SQL database. The syntax is very similar to the PostgreSQL syntax, with the main difference between the two being that SQLite is entirely serverless. SQLite allows for the power of database storage but with a tiny footprint. SQLite is also conveniently part of the standard Python library, so no additional setup is needed to get it up and running.

SQLite is not comparable with PostgreSQL or any other SQL language, rather it focuses on providing local data storage for individual applications.

### What does ORM mean?
ORM stands for Object-Relational Mapper. Object-relational mapping allows us to write SQL queries using the object-oriented paradigm of the language with which you prefer to work. In other words, for our purposes in class, it allows us to interact with our database using Python.

### How are classes relevant?
As you already know, Python is an "Object-Oriented Programming (OOP) language", which means that it is highly concerned with organization and reusability. Classes are crucial to OOP in that they allow us to group related things and keep them together.

A class is essentially a template that allows us to create objects, which have variables and behaviors associated with them. It helps streamline our code and create efficiencies whenever something needs to be used various times.


### **Additional Resources**  
* [SQLAlchemy Documentation](https://www.sqlalchemy.org/)

* [SQLAlchemy Tutorial](https://docs.sqlalchemy.org/en/13/orm/tutorial.html)

* [Dynamic Schema in SQLAlchemy](http://sparrigan.github.io/sql/sqla/2016/01/03/dynamic-tables.html)

* [Engine Configuration SQLAlchemy](https://docs.sqlalchemy.org/en/13/core/engines.html)

* [SQLAlchemy Basic Examples](https://towardsdatascience.com/sqlalchemy-python-tutorial-79a577141a91)

* [SQLAlchemy Practice](https://www.freecodecamp.org/news/sqlalchemy-makes-etl-magically-easy-ab2bd0df928/) # Good article with explanation of SQLAlchemy ORM properties

* [SQLAlchemy working with JOINS](https://www.tutorialspoint.com/sqlalchemy/sqlalchemy_orm_working_with_joins.htm) # good reference for join types in SQLAlchemy

* [SQLAlchemy Basics](https://leportella.com/english/2019/01/10/sqlalchemy-basics-tutorial.html)

* [SQLAlchemy Inspector](https://docs.sqlalchemy.org/en/13/core/reflection.html?highlight=inspector#sqlalchemy.engine.reflection.Inspector) #Lesson 2 Activity 7 more information on Inspector

* [SQLAlchemy .scalar()](https://docs.sqlalchemy.org/en/13/orm/query.html#sqlalchemy.orm.query.Query.scalar) # used in Lesson 3 activity 11_Stu_Chinook

* [SQLite Studio](https://sqlitestudio.pl/index.rvt) # allows you to access SQLite CLI from your computer to explore SQLite files.

* [SQLite Browse](https://sqlitebrowser.org/) # is a high quality, visual, open source tool to create, design, and edit database files compatible with SQLite.

* [DBHub.io Cloud Storage for SQLite](https://dbhub.io/about#whatis) # cloud storage to share and collaborate on SQLite DB's

* [Python Classes Explanation](https://www.w3schools.com/python/python_classes.asp)

* [Python documentation on Classes](https://docs.python.org/3/tutorial/classes.html) 

* [Python in 24 Hours](https://read.amazon.com/kp/embed?asin=B00F4PSLYS&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_J42PDbGRCESJT) # I own this book even though it is written in Python 2.7 has good explanation of classes.  Double unders and decorators

* [Explanation of Decorators](https://www.geeksforgeeks.org/decorators-in-python/) #What we are doing when we use the @app.route("/")

* [Flask Quickstart Guide](https://flask.palletsprojects.com/en/0.12.x/quickstart/#a-minimal-application) #good reference

* [Flask Mega-Tutorial FREE](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)

* [RESTful APIs with Python 3](https://www.linkedin.com/learning/building-restful-apis-with-flask/restful-apis-with-python-3-and-flask-4) # on LinkedIn learning great overview of building a RESTful API



## 10.1 Lesson Plan - Introduction to SQLAlchemy
* Students will  be able to connect to a SQL database using SQLAlchemy
* Students will learn to perform basic SQL queries using engine.execute()
* Students will learn how to create Python classes and objects
* Students will  be able to create, read, update, and delete data from a SQL database using SQLAlchemy's ORM


* To install SQLAlchemy run from terminal/GitBash `conda install -c anaconda sqlalchemy`
* 01-Ins_BasicSQL_Connection  **--BASIC HW--**
    * SQLAlchemy (Python ORM - Object Relational Mapper) allows Python developers to use external scripts to modify SQL Databases.
        * SQLAlchemy bridges the gaps between various SQL dialects (MySQL, PostgreSQL, and SQLite)
        * SQLAlchemy can be used to affect different databases without having to write new queries each time.  
        * Use the SQLAlchemy Documentation to clarify questions you have regarding dialects that are compatible [SQLAlchemy Dialects](https://docs.sqlalchemy.org/en/13/dialects/)
    * For class we will be only using SQLite DB's.  See links in additional resources.  
    * `SQLAlchemy Connection` in order for SQLAlchemy to access SQL database you to create a connection using the `create_engine()` method.
    * `execute()` method allows you to run SQL commands from Python scripts.
    
    ```python
    # first create connection to DB
    engine = create_engine(f"sqlite:///{database_path}"
    
    # to run sql commands
    data = engine.execute("SELECT * FROM Census_Data")
                           
    # in order to access information in data variable must loop through
    for record in data:
        print(record)
    ```   

        * Connection strings can also include db *username*, *password*, or *database name*.
        
* 02-Stu_IceCreamStore  

* 03-Ins_ReadSQL  **--BASIC HW--**
    * SQLAlchemy integrates with *Pandas*!  Before you are able to read a sql table into pandas must!
        * `create_engine()` point to database
        * `engine.connect()` create connection to engine
        * `pd.read_sql("SELECT <statement> FROM <table>",conn=<connection>)` read sql into a pandas dataframe.  
        
* 04-Stu_ReadAllTheSQLs  

* 05-Ins_Preview_SQL_Alchemy  
    * `Classes` in Python are blueprints for Python objects.  Allowing developers to create organized variables with keys, values, and methods on the fly.
        * SQLAlchemy uses Python classes as primary means to communicate and make changes to SQL Databases. (ie SQLAlchemy ORM using objects to map changes to SQL tables/databases - ORM)
    * See additional material above to learn more on Python Classes
        
* 06-Ins_Classes  **--BASIC HW--** #need to understand to create SQLAlchemy classes 
    * Python is an class-based programming language. `Object oriented progaramming (OOP)`  Coding is based around concept of "objects", which can contain data that is known as attributes and functions (methods).  
    * Python being a class-based programming language allows programmers to create user based blueprints containing similar structure / purpose but with different values.
    * To define a class in python pass `class <ClassName():`
    * `def_init_(self):` is a "class constructor" and Python calls every time a new instance of class is created
        * `__init__` parameters declared within __init__ excluding self must be passed whenever a new instance of this class is created.  Objects values/attributes will be defined by these parameters
        
        ```python
        #define class
        class Dog():
            genre = 'canine'   # class variable shared by all instances

            # utilize the Python constructor to initialize the object
            def __init__(self,name,color):
                self.name = name # instance variable unique to each instance

                self.color = color # instance variable unique to each instance
                self.stunts = []

            def add_stunt(self,stunt):
                self.stunts.append(stunt)
        ```        
        
        ```python
        # Create an instance of the class
        dog = Dog('Fido','brown')
        # To access objects attributes using "." dot notation
        print(dog.name)
        print(dog.color)
        # access method of dog instance
        dog.add_stunt('broad jump')
        # access dog stunts attributes
        print(dog.stunts)
        ```
    
* 07-Stu_Surfer_Class  
* 08-Ins_Classes_With_Methods  
    * To create method in a class simply provide the `def`, provide it with a name and pass a list of parameters -including the self-into the parentheses that follow.
        * See above example in Class Dog():
    
* 09-Stu_Surfer_Class_Extended  
* 10-Ins_SQL_Alchemy_Revisited  **--BASIC HW-- Review Activity!!**
    * Diving into SQLAlchemy class based methodology.  First import modules desired
    * `create_engine` SQLAlchemy to create connections to SQL Database
    * `declarative_base` allows SQLAlchemy to convert classes created in python to SQL tables. `from sqlalchemy.ext.declarative import declarative_base`
    * `Column, Integer, String, Float` are imported into python from SQLAlchemy to assign fields within the class in order to tell SQL tables should contain correct datatypes in columns
    * SQLAlchemy's Base" class server as anchor points for SQL tables.
    * must declare `__tablename__` field and provide the name of table.  If table exists, any new objects created will be added into the existing table.  If does not exist a new table will be created upon the class fields.
    * After SQLAlchemy classes have been made they can be created on SQL database by creating a connection engine then calling `Base.metadata.create_all(engine)`
    * Like how git functions `Git` in order to add/change rows of data in a SQL table..
        * First `Session` module must be imported and then a variable bound to the connection engine.
        * New rows of data can be staged by creating a new instance of SQLAlchemy class and passing `session.add(<nameVariable>)`
        * When all changes desired have been made **MUST COMMIT** `session.commit()`
        * To perform a simple query against tables use `session.quey(<ClassName>)` where the parameter is the class/table to query.  The returned data can then be looped through and printed to terminal.
* 11-Stu_Surfer_SQL  


## 10.2 Lesson Plan - Advanced Usage of the SQLAlchemy ORM
* Students will be able to use the SQLAlchemy ORM to create classes that model tables.
* Students will be able to perform database CRUD operations using the SQLAlchemy ORM.
* Students will be able to reflect existing databases.
* Students will be able to use the SQLAlchemy Inspector to view table names in the database.
* Students will be able to plot the query results from the ORM.


* 01-Ins_Basic_Querying  
    * To query database for all records use `session.query(<SQLClass>)` where ClassName is SQLAlchemy class associated with table in parameter.
    * To pass a filter to query can use `session.query(<SQLClass>).filter()` method using the dot notation
    * When passing multiple columns/conditionals us `or_()` or `and_()` within the filter method. 
    
* 02-Stu_SharkSearch  
* 03-Ins_Basic_Updating  **--Good to know future reference--**
    * When performing updates can create query for row(s) to modify and then altering the returned object(s) in desired way.  
        * make sure to call correct method for records to be updated in example we use .first().  Since record already exists do not need to pass `session.add()` but you will need to pass `session.commit()`
    * To delete a record / row in sql can pass query and then the `.delete()` method.  Again make sure you commit to have the delete take effect. `session.commit()`
    
* 04-Par_CruddyDB  
* 05-Ins_Reflection **--BASIC HW--**
    * SQLAlchemy provides tools for automagically creating ORM classes from an existing database. This process is called **reflection**
    * Four step process to reflect existing database:
    
    ```python
    # Python SQL toolkit and ORM to reflect database
    import from sqlalchemy
    from sqlalchemy.ext.automap import automap_base
    from sqlalchemy.orm import Session
    from sqlalchemy import create_engine
    ```
    
        1. Import `automap_base` from SQLAlchemy library. `automap_base` has a `prepare` method, which will "automagically" reflect the data in an existing database.
        2. Create an `engine` against existing database that should be reflected
        3. Create a `Base` by calling `Base = auotomap_base()`
        4. Call `Base.prepare` with the `engine` from step 2 and parameter of `reflect=True`
    * Possible to automagically view generated ORM classes by examining `Base.classes.keys()`
    * To access these class use dot notation and assign to a variable `<ExampleClassName> = Base.classes.<ExampleClassName>`
        * Once variable assigned can interact with database in conjunction with `session` as we have done previously.
        
        ```python
        # Assign class to a variable 
        Dow = Base.classes.dow
        # Create a session
        session = Session(engine)
        # Display rows columns and data in dictionary format
        first_row = session.query(Dow).first()
        # using double under to return dictionary of returned columns and values
        firt_row.__dict__
        ```
    
* 06-Stu_ReflectingOnSQL  
* 07-Ins_Exploration **--Basic HW Good to Know--**
    * Inspector tool allows SQLAlchemy developers to look through a connected database and explore its contents.
        * Inspector tool used to look up tables, columns, and datatypes.
        * To look up specific values stored within a table queries should be used.
    * to create an inspector, create a variable and set it equal to `inspector = inspect(engine)`
    * to get names of tables stored within connected database use `inspector.get_table_names()`
    * to get columns within a table use `inspector.get_columns(<Table Name>)`

* 08-Stu_SalaryExplore  
* 09-Par_EmojiPlotting  **--Good Practice--**


## 10.3 Lesson Plan - Introduction to Flask & Serving Data with APIs

### Overview
Today's lesson introduces you to the fundamentals of the web and client-server architecture; how to use Flask to create a database-backed server; and how to use the same to design and implement API endpoints

* Students will be able to use Flask to create and run a server
* Students will define endpoints using Flask's @app.route decorator
* Students will learn to extract query variable path values from GET requests
* Students will use variable paths to execute database queries on behalf of the client
* Student will learn to return JSONified query results from API endpoints


* 01-Ins_Joins  **--Basic HW--**
    * To perform a cross join (combining each row in one table with all rows from another table). we can use `session.query(EA.sporder,NA.sporder).all()` this is call both EA class and NA class and perform a cross join.  
    * In order to create an inner join using SQLAlchemy pass relations through `.filter()` method
    
    ```python
    # here we are first creating a variable to hold an *arg that we will pass in query 
    sel = [EA.family, EA.genus, EA.species, NA.family, NA.genus, NA.species]
    # the .filter() will join two tables together in a single database. Returning all columns listed in the *sel variable.
    same_sporder = session.query(*sel).filter(EA.sporder == NA.sporder).limit(10).all()

    ```
* 02-Ins_Dates  **--Will Need for HW--**
    * To work with dates in Python import library `datetime`
        * `date.date` or `date.datetime` can be used to retrieve and format dates and datetimes in ISO format.
        * `timedelta()` can be used to calculate the time difference.
        * to extract specific parameter, such as date, week, or hour from time object can use the `.strftime("%d")`
        * Another option is using SQLAlchemy's `func.strftime`
        
        ```python
        date_str = "14"
        session.query(Dow.date).\
        filter(func.strftime("%d", Dow.date) == date_str).all()
        ```
        
* 03-Stu_Dates  **-- HW Reference--**

* 04-Ins_First_Steps_with_Flask  **--STEP 2 BASIC HW--**
    * Internet built on model of *clients* requesting data from *servers* 
    * "Client: is asking for information.  When using API to fetch data
        * Program makes request on behalf of person
        * Can think of a **browser** as example of program making request on behalf of user.  
    * "Server" is a process running on a remote machine, that listens and knows how to respond to incoming requests.
        * Server is essentially *just a program*
    * When create API for others to use, the code we write acts as a *client* making a request to our API server.  
        * This is the code responsible for retrieving and returning whatever data that users request.  We will be using `Flask` to implement our server.
        * Servers are programs listening for *requests* to particular *URLS* otherwise known as **endpoints**.
    * Steps to starting a Flask server:
        i. Import Flask
        ii. Use Flask to create a `app`
        iii. Use `@app.route` **decorator** to define a route
            * `app.route` function which takes URL's as its argument
            * Define a function which decribes how server should respond to requests to corresponding endpoint.
            * Can use whatever names we want for the functions called **request handlers**
        iv. Define the behavor for when we start server when running file from command line with `python app.py`
    
    ```python
        # import Flask
        from flask import Flask
        
        # Create an app, and pass __name__
        app = Flask(__name__)
        
        # Define what to do when a user hits the index route
        @app.route("/")
        def home():
            print("Server received request for 'Home' page..")
            return "Welcome to my 'Home' page!"
        
        # define what name.py program should run if called 
        if __name__ == "__main__":
        # never set debug to "True" for production level environment.
        app.run(debug=True)
    
    ```
        
     * can start Flask server by either 
         * python <filename>/py OR
         * export FLASK_APP=hello.py
         * flask run
    
    * In the terminal, we see the results of the print message, but not trace of the string we return to the client.
    * In the browser, we see the string the request handler returns, but no trace of the call to print.
    * The relationship between the client—which receives a request handler's return value—and the server—where the functions associated with the response to a request are actually executed.
    *  `debug=False` in public-facing projects, otherwise they can easily leak data about their users and application accidentally.

* 05-Stu_Hello_Web  

* 06-Ins_Jsonify  
    * All returns written to this point have returned *string* responses.  API's do not return raw text: they return **JSON data** and routes must return HTTP responses.
    * To automagically convert a dictionary into a properly formatted JSON response we use `jsonify`

* 07-Stu_Justice_League  
    * Note in this example endpoint starts with `/api` to indicate to consumers that the response will contain *data*.
    * Data will be stored in memory when we run our server.
    * With real applications we typically will be running against more data that can be loaded into memory.  This is where a database comes in.  IE *database-backed-API*
* 08-Ins_Variable_Rule  **--Basic HW--**
    * We can specify a consumer request to dynamic endpoints (conditions) where response will either return
        * JSON response with what consumer looking to query if it is in the data set
        * JSON response with error information indicating server could not find the information.  
        * by passing <"query_result"> in the endpoint along with defining a parameter in our function we can create dynamic endpoints.
    * `%20` is how we represent the space character within a URL.

* 09-Stu_Variable_Rule  

* 10-Ins_Flask_with_ORM  **--HOMEWORK IMPORTANT--**
    * Useful API must make queries against data sets much too large to load into memory.  ORM queires within Flask routes allow us to perform requests with backend databases.
    * Steps to set up ORM queries within Flask routes
        1. import dependencies
        2. Initialize database connection `engine=create_engine("sqlite:///name.sqlite") `and reflect tables using `Base = automap_base`
        3. Reflect tables `Base.prepare(engine,reflect=True)`
        4. Save reference to the table will be querying and returning in API `Passenger = Base.classes.passenger`
        5. Create routes as we have done previously.  Within the routes/functions created
            * create seesion (link) from Python to the DB `session=Session(engine)`
            * save query to variable for information to populate route `results = session.query(Passenger.name).all()`
            * close the session `session.close()`
            * if returning a single list of tuples turn into normal list `all_names = list(np.ravel(results))`
            * close function by returning jsonify `return jsonfiy(all_names)`
                * if returning a multiple list of tuples unpack tuple using for loop and saving to a list of dictionaries 
                
                ```python
                    #example of unpacking tuple returned from query and saving to list of dictionaries
                    # Query all passengers
                    results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

                    session.close()

                    # Create a dictionary from the row data and append to a list of all_passengers
                    all_passengers = []
                    for name, age, sex in results:
                        passenger_dict = {}
                        passenger_dict["name"] = name
                        passenger_dict["age"] = age
                        passenger_dict["sex"] = sex
                        all_passengers.append(passenger_dict)
                ```

* 11-Stu_Chinook  
    * `import warnings` and `warnings.filterwarnings('ignore')` cell is simply to ignore the warning about using Decimal types with sqlite.


# SQLAlchemy Homework - Surfs Up!

### Before You Begin

1. Create a new repository for this project called `sqlalchemy-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Add your Jupyter notebook and `app.py` to this folder. These will be the main scripts to run for analysis.

4. Push the above changes to GitHub or GitLab.

![surfs-up.png](Images/surfs-up.png)

Congratulations! You've decided to treat yourself to a long holiday vacation in Honolulu, Hawaii! To help with your trip planning, you need to do some climate analysis on the area. The following outlines what you need to do.

## Step 1 - Climate Analysis and Exploration

To begin, use Python and SQLAlchemy to do basic climate analysis and data exploration of your climate database. All of the following analysis should be completed using SQLAlchemy ORM queries, Pandas, and Matplotlib.

* Use the provided [starter notebook](climate_starter.ipynb) and [hawaii.sqlite](Resources/hawaii.sqlite) files to complete your climate analysis and data exploration.

* Choose a start date and end date for your trip. Make sure that your vacation range is approximately 3-15 days total.

* Use SQLAlchemy `create_engine` to connect to your sqlite database.

* Use SQLAlchemy `automap_base()` to reflect your tables into classes and save a reference to those classes called `Station` and `Measurement`.

### Precipitation Analysis

* Design a query to retrieve the last 12 months of precipitation data.

* Select only the `date` and `prcp` values.

* Load the query results into a Pandas DataFrame and set the index to the date column.

* Sort the DataFrame values by `date`.

* Plot the results using the DataFrame `plot` method.

  ![precipitation](Images/precipitation.png)

* Use Pandas to print the summary statistics for the precipitation data.

### Station Analysis

* Design a query to calculate the total number of stations.

* Design a query to find the most active stations.

  * List the stations and observation counts in descending order.

  * Which station has the highest number of observations?

  * Hint: You may need to use functions such as `func.min`, `func.max`, `func.avg`, and `func.count` in your queries.

* Design a query to retrieve the last 12 months of temperature observation data (tobs).

  * Filter by the station with the highest number of observations.

  * Plot the results as a histogram with `bins=12`.

    ![station-histogram](Images/station-histogram.png)

- - -

## Step 2 - Climate App

Now that you have completed your initial analysis, design a Flask API based on the queries that you have just developed.

* Use FLASK to create your routes.

### Routes

* `/`

  * Home page.

  * List all routes that are available.

* `/api/v1.0/precipitation`

  * Convert the query results to a Dictionary using `date` as the key and `prcp` as the value.

  * Return the JSON representation of your dictionary.

* `/api/v1.0/stations`

  * Return a JSON list of stations from the dataset.

* `/api/v1.0/tobs`
  * query for the dates and temperature observations from a year from the last data point.
  * Return a JSON list of Temperature Observations (tobs) for the previous year.

* `/api/v1.0/<start>` and `/api/v1.0/<start>/<end>`

  * Return a JSON list of the minimum temperature, the average temperature, and the max temperature for a given start or start-end range.

  * When given the start only, calculate `TMIN`, `TAVG`, and `TMAX` for all dates greater than and equal to the start date.

  * When given the start and the end date, calculate the `TMIN`, `TAVG`, and `TMAX` for dates between the start and end date inclusive.

## Hints

* You will need to join the station and measurement tables for some of the analysis queries.

* Use Flask `jsonify` to convert your API data into a valid JSON response object.

- - -

### Optional: Other Recommended Analyses

* The following are optional challenge queries. These are highly recommended to attempt, but not required for the homework.

### Temperature Analysis I

* Hawaii is reputed to enjoy mild weather all year. Is there a meaningful difference between the temperature in, for example, June and December?

* You may either use SQLAlchemy or pandas's `read_csv()` to perform this portion.

* Identify the average temperature in June at all stations across all available years in the dataset. Do the same for December temperature.

* Use the t-test to determine whether the difference in the means, if any, is statistically significant. Will you use a paired t-test, or an unpaired t-test? Why?

### Temperature Analysis II

* The starter notebook contains a function called `calc_temps` that will accept a start date and end date in the format `%Y-%m-%d` and return the minimum, average, and maximum temperatures for that range of dates.

* Use the `calc_temps` function to calculate the min, avg, and max temperatures for your trip using the matching dates from the previous year (i.e., use "2017-01-01" if your trip start date was "2018-01-01").

* Plot the min, avg, and max temperature from your previous query as a bar chart.

  * Use the average temperature as the bar height.

  * Use the peak-to-peak (tmax-tmin) value as the y error bar (yerr).

    ![temperature](Images/temperature.png)

### Daily Rainfall Average

* Calculate the rainfall per weather station using the previous year's matching dates.

* Calculate the daily normals. Normals are the averages for the min, avg, and max temperatures.

* You are provided with a function called `daily_normals` that will calculate the daily normals for a specific date. This date string will be in the format `%m-%d`. Be sure to use all historic tobs that match that date string.

* Create a list of dates for your trip in the format `%m-%d`. Use the `daily_normals` function to calculate the normals for each date string and append the results to a list.

* Load the list of daily normals into a Pandas DataFrame and set the index equal to the date.

* Use Pandas to plot an area plot (`stacked=False`) for the daily normals.

  ![daily-normals](Images/daily-normals.png)

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
