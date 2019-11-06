#import dependencies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
import datetime

#Set up database
#create engine - relative path did not work on my laptop, will need to change for each user
engine = create_engine("sqlite:///C:/Users/hchapman/Desktop/SMU GitLab/smu_assignments/HW8_HC/Resources/hawaii.sqlite")

#reflect database and tables
Base = automap_base()
Base.prepare(engine, reflect = True)

#save table references
Measurement = Base.classes.measurement
Station = Base.classes.station

#create session
session = Session(engine)

#Setup Flask
app = Flask(__name__)

# ejhagee code - return min, max, avg temperatures for a given range 
def calc_temps(start_date, end_date):
    """TMIN, TAVG, and TMAX for a list of dates.
    
    Args:
        start_date (string): A date string in the format %Y-%m-%d
        end_date (string): A date string in the format %Y-%m-%d
        
    Returns:
        TMIN, TAVE, and TMAX
    """
    
    return session.query(func.min(Measurement.tobs), func.avg(Measurement.tobs), func.max(Measurement.tobs)).\
        filter(Measurement.date >= start_date).filter(Measurement.date <= end_date).all()

#Set up routes for Flask app
@app.route("/")
def homepage():
    """List of all returnable API routes."""
    return(
        f"Welcome to Surf's Up!<br/>"
        f"- Dates from 01-01-2010 to 08-23-2017.<br/>"

        f"/api/v1.0/precipitation<br/>"
        f"- Query dates and temperature from the last year of data. <br/>"

        f"/api/v1.0/stations<br/>"
        f"- Returns a json list of stations. <br/>"

        f"/api/v1.0/tobs<br/>"
        f"- Returns a list of temperature observations (tobs) for the previous year. <br/>"

        f"/api/v1.0/<start><br/>"
        f"- Returns an average, maximum, and minimum temperature for a start date onward.<br/>"

        f"/api/v1.0/<start>/<end>"
        f"- Returns an average, maximum, and minimum temperature for a given period.<br/>"
    )

# Precipitation route
@app.route("/api/v1.0/precipitation")
def precipitation():
    """Return a JSON where the date is the key and precipitation is the value"""

    print("Received precipitation api request.")

    #Calculate last date in the database - last date code from ejhagee; present for each route
    last_date_query = session.query(func.max(func.strftime("%Y-%m-%d", Measurement.date))).all()
    max_date_string = last_date_query[0][0]
    last_date = datetime.datetime.strptime(max_date_string, "%Y-%m-%d")

    #Set start date
    begin_date = last_date - datetime.timedelta(366)

    #Query precipitation values
    prcp_data = session.query(func.strftime("%Y-%m-%d", Measurement.date), Measurement.prcp).\
        filter(func.strftime("%Y-%m-%d", Measurement.date) >= begin_date).all()
    
    #Create dictionary with date as the key and precipitation as the value
    prcp_dict = {}
    for result in prcp_data:
        prcp_dict[result[0]] = result[1]
    return jsonify(prcp_dict)

# Stations route
@app.route("/api/v1.0/stations")
def stations():
    """Return a list of stations."""

    print("Received station api request.")

    #query station list
    stations_data = session.query(Station).all()

    #create a list of dictionaries - ejhagee guidance for "id"
    stations_list = []
    for station in stations_data:
        station_dict = {}
        station_dict["id"] = station.id
        station_dict["station"] = station.station
        station_dict["name"] = station.name
        station_dict["latitude"] = station.latitude
        station_dict["longitude"] = station.longitude
        station_dict["elevation"] = station.elevation
        stations_list.append(station_dict)

    return jsonify(stations_list)

# Temperature observations route
@app.route("/api/v1.0/tobs")
def tobs():
    """Returns a JSON list of temperature observations for the previous year."""

    print("Received tobs api request.")

    #Calculate last date in the database
    last_date_query = session.query(func.max(func.strftime("%Y-%m-%d", Measurement.date))).all()
    max_date_string = last_date_query[0][0]
    last_date = datetime.datetime.strptime(max_date_string, "%Y-%m-%d")

    #Find beginning date
    begin_date = last_date - datetime.timedelta(366)

    #Query temperature
    results = session.query(Measurement).\
        filter(func.strftime("%Y-%m-%d", Measurement.date) >= begin_date).all()

    #create a list of dictionaries
    tobs_list = []
    for result in results:
        tobs_dict = {}
        tobs_dict["date"] = result.date
        tobs_dict["station"] = result.station
        tobs_dict["tobs"] = result.tobs
        tobs_list.append(tobs_dict)

    return jsonify(tobs_list)

#Dynamic start route
@app.route("/api/v1.0/<start>")
def start(start):
    """Return a JSON list of the minimum, average, and maximum temperatures from the start date onward."""

    print("Received start date api request.")

    #Calculate the last date in the database
    last_date_query = session.query(func.max(func.strftime("%Y-%m-%d", Measurement.date))).all()
    last_date = last_date_query[0][0]

    #Query temperature
    temps = calc_temps(start, last_date)

    #create a list - .append dictionary verbiage from ejhagee code
    start_list = []
    date_dict = {'start_date': start, 'end_date': last_date}
    start_list.append(date_dict)
    start_list.append({'Observation': 'TMIN', 'Temperature': temps[0][0]})
    start_list.append({'Observation': 'TAVG', 'Temperature': temps[0][1]})
    start_list.append({'Observation': 'TMAX', 'Temperature': temps[0][2]})

    return jsonify(start_list)

#Dynamic start and end route
@app.route("/api/v1.0/<start>/<end>")
def start_end(start, end):
    """Return a JSON list of the minimum, average, and maximum temperatures from the start date until
    a given end date."""

    print("Received start date and end date api request.")

    #Query temperatures
    temps = calc_temps(start, end)

    #create a list
    start_end_list = []
    date_dict = {'start_date': start, 'end_date': end}
    start_end_list.append(date_dict)
    start_end_list.append({'Observation': 'TMIN', 'Temperature': temps[0][0]})
    start_end_list.append({'Observation': 'TAVG', 'Temperature': temps[0][1]})
    start_end_list.append({'Observation': 'TMAX', 'Temperature': temps[0][2]})

    return jsonify(start_end_list)

#Run app
if __name__ == "__main__":
    app.run(debug = True)