from openpyxl import Workbook, load_workbook

import requests
#download the file using the requests library
url = 'https://cloud.rampinteractive.com/hockeyedmonton/files/Arena%20Reports/ARENA_report.xlsx'
r = requests.get(url, allow_redirects=True)
open("ARENA_reports.xlsx", "wb").write(r.content)

#open the excel file

wb = load_workbook(filename = "ARENA_reports.xlsx")

#find the worksheet we want (should be ARENA_report)

sheet_ranges = wb['ARENA_report']

#now we have to start building dicts
#and then we need to input into a JSON file for our 
#front facing application to understand 

# how should we organize the data? We should do the dict like this???

# arenaDict = {
#    1: {
#   'date': '2021-11-05 00:00:00',
#   'arenaCode': 'BHA',
#   'startTime': '16:30:00',
#   'endTime': '18:00:00',
#   'day': 'FRI',
#   'type': 'PRA',    if type equals HPR then it is a half ice practice and we need additional columns
#   'area': 'SAC'     if arenaDict['type'] equals 'PRA' && arena['Home'] is empty string '' then arena['home'] will 
#                     be assigned to area. 
#   'division': 'U15 tier 1 NBC',
#   'Visitor name': '',   if type equals PRA then there will be no visitor property
#   'Home name':  'SW402',
#   'area2HPR': '',
#   'divisionHPR': '',
#   'visitor nameHPR': '',
#   'home nameHPR': ''
#   },
#   2: {
#
#
#   } etc.
# }

# find max row count to loop through     
# print(sheet_ranges.max_row) row count
# print(sheet_ranges.max_column) column count

# print(sheet_ranges['B1'].value) prints off the rink
# column. sheet_ranges['A1-99'] prints off the DATE
# ['C1'] is start time
# ['D1'] is end time
# ['E1'] day
# ['F1'] type
# ['G1'] area
# ['H1'] division
# ['I1'] visitor name
# ['J1'] home name
# everything pass here I think would be considered a timbit 
# hockey game and or practice. 

