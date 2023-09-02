
import re
import requests
from bs4 import BeautifulSoup
import json
import time
import threading
import pprint
import certifi
import os
from dotenv import load_dotenv

# Load the environment variables from the .env file
load_dotenv()

# Now, you can access the variables using the os.environ dictionary
uri = os.environ.get("database_uri")

print(uri); 

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
# Replace the placeholder with your Atlas connection string

# Set the Stable API version when creating a new client
client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())
                          
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.nhl
Players = db.Players
Goalies = db.Goalies
PlayersV2 = db.PlayersV2
PlayersV3 = db.PlayersV3 

def imageScraper(filename): 
    with open(filename, 'r') as file:
        data = json.load(file)

    for player in data['data']: 
        try: 
            skaterFullName = player['skaterFullName']
            url = "https://www.google.com/search?q={}+espn".format(skaterFullName)
            page = requests.get(url) 
            soup = BeautifulSoup(page.text, 'html.parser')

            tag = soup.find_all(href = re.compile('/id'))[0]['href']
            espn_id = tag.split('/')[8]

            print("{} {} image created".format(espn_id, skaterFullName)) 
            headshot_url = "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/{}.png&w=350&h=254".format(espn_id)
            image = requests.get(headshot_url)

            with open('./playerImages/{}.jpeg'.format(skaterFullName), 'wb') as download:
                download.write(image.content)

            time.sleep(.25) 
        except Exception: 
            print(Exception) 

def createDocuments(filename):
    with open(filename, 'r') as file:
        data = json.load(file)

        for player in data['data']: 
            try: 
                skaterFullName = player['skaterFullName']
                url = "https://www.google.com/search?q={}+espn".format(skaterFullName)
                page = requests.get(url) 
                soup = BeautifulSoup(page.text, 'html.parser')

                tag = soup.find_all(href = re.compile('/id'))[0]['href']
                espn_id = tag.split('/')[8]

                plr = {
                    "fullname": skaterFullName,
                    "goals": player['goals'],
                    "assists": player['assists'],
                    "gamesPlayed": player['gamesPlayed'],
                    "shots": player['shots'],
                    "team": player['teamAbbrevs'], 
                    "timeOnIcePerGame": player['timeOnIcePerGame'] / 60,
                    "espnId": espn_id,
                    "positionCode": player['positionCode'], 
                    "plusMinus": player['plusMinus']
                }

                Players.insert_one(plr)

                print("{} {} added to database".format(espn_id, skaterFullName)) 

                time.sleep(.25) 
            except Exception: 
                print(Exception) 
    
def fillDatabase(): 
    for i in range(0, 9): 
        if (i == 0):
            createDocuments('data.json')
        else:
            createDocuments('data{}.json'.format(i))

def downloadImages():
    for i in range(0, 9):
        if (i == 0):
            imageScraper('data.json')
        else:
            imageScraper('data{}.json'.format(i)) 

def getGoalieImageAndData(filename): 
     with open(filename, 'r') as file:
        data = json.load(file)

        for goalie in data['data']: 
            try: 
                goalieFullName = goalie['goalieFullName']
                url = "https://www.google.com/search?q={}+espn".format(goalieFullName)
                page = requests.get(url) 
                soup = BeautifulSoup(page.text, 'html.parser')

                tag = soup.find_all(href = re.compile('/id'))[0]['href']
                espn_id = tag.split('/')[8]

                goalie = {
                    "fullname": goalieFullName,
                    "savePct": goalie['savePct'],
                    "saves": goalie['saves'],
                    "gamesPlayed": goalie['gamesPlayed'],
                    "shotsAgainst": goalie['shotsAgainst'],
                    "team": goalie['teamAbbrevs'], 
                    "goalsAgainst": goalie['goalsAgainst'],
                    "goalsAgainstAverage": goalie['goalsAgainstAverage'],
                    "wins": goalie['wins'],
                    "losses": goalie['losses'], 
                    "espnId": espn_id
                }

                Goalies.insert_one(goalie)

                print("{} {} added to database".format(espn_id, goalieFullName)) 

                headshot_url = "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/{}.png&w=350&h=254".format(espn_id)
                image = requests.get(headshot_url)

                with open('./goalieImages/{}.jpeg'.format(goalieFullName), 'wb') as download:
                    download.write(image.content)

                time.sleep(.25) 
            except Exception as e: 
                print(e) 

#getGoalieImageAndData('goalies1.json') 

def getSalary(filename):
    with open (filename, 'r') as file: 
        data = json.load(file) 

        try:
            for player in data['data']: 
                url = "https://www.google.com/search?q={}+capfriendly".format(player['skaterFullName'])
                page = requests.get(url) 
                soup = BeautifulSoup(page.text, 'html.parser')
                h3Tag = soup.find_all('h3')[0]

                text = soup.find_all("div", class_="BNeawe s3v9rd AP7Wnd")[1].text

                text = text.split(' ')
                foundCap = False 
                count = 0
                caphit = ''

                url = "https://www.google.com/search?q={}+espn".format(player['skaterFullName'])
                page = requests.get(url) 
                soup = BeautifulSoup(page.text, 'html.parser')

                tag = soup.find_all(href = re.compile('/id'))[0]['href']
                espn_id = tag.split('/')[8]

                for substring in text:
                    if substring == 'cap':
                        foundCap = True

                    if foundCap: 
                        count+=1
                        if count == 4:
                            caphit = substring
                            print(substring) 

                plr = {
                    "fullname": player['skaterFullName'],
                    "goals": player['goals'],
                    "assists": player['assists'],
                    "gamesPlayed": player['gamesPlayed'],
                    "shots": player['shots'],
                    "team": player['teamAbbrevs'], 
                    "timeOnIcePerGame": player['timeOnIcePerGame'] / 60,
                    "espnId": espn_id,
                    "positionCode": player['positionCode'], 
                    "plusMinus": player['plusMinus'], 
                    "espnId": espn_id, 
                    "caphit": caphit
                }
                PlayersV3.insert_one(plr) 

                pprint.pprint(plr) 

                time.sleep(1) 

        except Exception as e:
            print(e) 


def getUpdatedDataWSalary():
    for i in range(0, 9):
        if (i == 0):
            getSalary('data.json')
        else:
            getSalary('data{}.json'.format(i)) 



def getTeamData(teamname):
    headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"}
    page = requests.get("https://www.dailyfaceoff.com/teams/{}/line-combinations".format(teamname), headers=headers) 
    soup = BeautifulSoup(page.text,'html.parser'); 
    spanList = soup.find_all("span", class_="text-xs font-bold uppercase xl:text-base")
    counter = 0

    players = []

    for i in spanList:

        name = i.text
        counter+=1

        if (counter < 19): 
            if (counter < 13): 
                if (name == 'Mitch Marner'):
                    name = 'Mitchell Marner' 

                document = PlayersV3.find_one({"fullname": name})
                if (document == None): 
                    plr = {
                        'assists': 0,
                        'caphit': 'N/A', 
                        'fullname': name, 
                        'gamesPlayed': 'N/A', 
                        'goals': 0,
                        'plusMinus': 'N/A', 
                        'positionCode': 'N/A', 
                        'shots': 'N/A',
                        'team': 'N/A', 
                        'timeOnIcePerGame': 'N/A' 
                    }
                    players.append(plr)
                else: 
                    plr = {
                        'assists': document['assists'],
                        'caphit': document['caphit'], 
                        'fullname': name, 
                        'gamesPlayed': document['gamesPlayed'], 
                        'goals': document['goals'],
                        'plusMinus': document['plusMinus'], 
                        'positionCode': document['positionCode'], 
                        'shots': document['shots'],
                        'team': document['team'], 
                        'timeOnIcePerGame': document['timeOnIcePerGame'] 
                    }

                    players.append(plr)
            else: 
                document = PlayersV3.find_one({"fullname": name})
                if (document == None): 
                    plr = {
                        'assists': 0,
                        'caphit': 'N/A', 
                        'fullname': i.text, 
                        'gamesPlayed': 'N/A', 
                        'goals': 0,
                        'plusMinus': 'N/A', 
                        'positionCode': 'N/A', 
                        'shots': 'N/A',
                        'team': 'N/A', 
                        'timeOnIcePerGame': 'N/A' 
                    }
                    players.append(plr) 
                else:
                    plr = {
                        'assists': document['assists'],
                        'caphit': document['caphit'], 
                        'fullname': i.text, 
                        'gamesPlayed': document['gamesPlayed'], 
                        'goals': document['goals'],
                        'plusMinus': document['plusMinus'], 
                        'positionCode': document['positionCode'], 
                        'shots': document['shots'],
                        'team': document['team'], 
                        'timeOnIcePerGame': document['timeOnIcePerGame'] 
                    }
                    players.append(plr)                
        else:
            g1 = Goalies.find_one({"fullname": spanList[36].text})
            g2 = Goalies.find_one({"fullname": spanList[37].text})

            if g1 == None:
                goalie={
                    'fullname': spanList[36].text,
                    'savePct': 'N/A', 
                    'saves': 'N/A',
                    'gamesPlayed': 'N/A', 
                    'shotsAgainst': 'N/A', 
                    'team': 'N/A', 
                    'goalsAgainst': 'N/A', 
                    'goalsAgainstAverage': 'N/A', 
                    'wins': 'N/A', 
                    'losses': 'N/A', 
                }
                players.append(goalie)
            else:
                del g1['_id'] 
                players.append(g1)

            if g2 == None: 
                goalie={
                    'fullname': spanList[36].text,
                    'savePct': 'N/A', 
                    'saves': 'N/A',
                    'gamesPlayed': 'N/A', 
                    'shotsAgainst': 'N/A', 
                    'team': 'N/A', 
                    'goalsAgainst': 'N/A', 
                    'goalsAgainstAverage': 'N/A', 
                    'wins': 'N/A', 
                    'losses': 'N/A', 
                }
                players.append(goalie)

            else: 
                del g2['_id']

                players.append(g2) 

            return players
        
"""
thread = threading.Thread(target=fillDatabase)
thread.start()

downloadImages() 

thread.join() 
"""





    
