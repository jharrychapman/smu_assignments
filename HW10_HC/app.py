#This app initiates Flask and runs the program - Harry Chapman

#Import dependencies
from flask import Flask, render_template, redirect
import pymongo
import scrape_mars

#Create app
app = Flask(__name__)

#Create MDB connection
client = pymongo.MongoClient()
db = client.mars_db

#Alexander wanted me to take this out so it's more clear in the routes
# collection = db.mars_data_entries

@app.route("/")
def home():
    mars_data = list(db.mars_data_entries.find())[0]
    print(mars_data)
    return  render_template('index.html', mars_data=mars_data)
    
@app.route("/scrape")
def web_scrape():
    db.mars_data_entries.remove({})
    mars_data = scrape_mars.scrape()
    db.mars_data_entries.update({}, mars_data, upsert=True)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)