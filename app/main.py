import sys
import json
import krispy

from time import sleep

for sec in range(10):
    sleep(0.5)
    print(9 - sec)

with open("survey.json", "r", encoding="utf-8") as file:
    survey = (s := json.load(file))['url'], s['receipt'], s['answers']


krispy.bot(*survey, host=sys.argv[1]).finish_survey()
