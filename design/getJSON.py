# pip install openpyxl

import codecs
import json
from openpyxl import load_workbook

wb = load_workbook(filename = 'conflux.xlsx')
mess = wb['Card']

# Map column headers to A, B, C, D...
colHeader = {}

colCount = 65
while (mess[chr(colCount) + "1"].value):
	colHeader[mess[chr(colCount) + "1"].value] = chr(colCount)
	colCount += 1

data = {}

# print(mess["B" + str(138)].value)

rowCount = 2
while (mess["B" + str(rowCount)].value):
	if (mess[colHeader['package'] + str(rowCount)].value == "Aether"):
		obj = {}

		# name
		obj['name'] = mess[colHeader['name'] + str(rowCount)].value

		# type
		types = []
		types.append(mess[colHeader['type'] + str(rowCount)].value)
		if (mess[colHeader['subType'] + str(rowCount)].value):
			types.extend(mess[colHeader['subType'] + str(rowCount)].value.split(","))
		obj['type'] = types

		# cost
		costs = {}
		costs['red'] = 0
		costs['green'] = 0
		costs['blue'] = 0
		costs['white'] = 0
		costs['mana'] = mess[colHeader['cost'] + str(rowCount)].value
		obj['cost'] = costs

		# color
		obj['color'] = mess[colHeader['color'] + str(rowCount)].value

		# power
		if (mess[colHeader['power'] + str(rowCount)].value):
			obj['power'] = mess[colHeader['power'] + str(rowCount)].value
		else:
			obj['power'] = 0

		# defense
		if (mess[colHeader['defense'] + str(rowCount)].value):
			obj['defense'] = mess[colHeader['defense'] + str(rowCount)].value
		else:
			obj['defense'] = 0

		# skill
		obj['skill'] = []

		data[mess[colHeader['id'] + str(rowCount)].value] = obj

	rowCount += 1

with codecs.open("../client/laya/assets/res/cards.json", 'w', encoding = 'utf8') as file:
    file.write(json.dumps(data, ensure_ascii=False))
