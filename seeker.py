import webbrowser
import time
import random

while True:
    sites = random.choice(['google.com','theonion.com','petco.com','bca-admissions.bergen.org'])
    visit = "http://{}".format(sites)
    webbrowser.open(visit)
    seconds = random.randrange(5,30)
    time.sleep(seconds)