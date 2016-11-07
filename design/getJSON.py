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

data = []

# print(mess["B" + str(138)].value)

rowCount = 2
while (mess["B" + str(rowCount)].value):
	obj = {}

	obj['id'] = mess[colHeader['id'] + str(rowCount)].value
	obj['qlvl'] = mess[colHeader['qlvl'] + str(rowCount)].value
	obj['name'] = mess[colHeader['name'] + str(rowCount)].value
	obj['color'] = mess[colHeader['color'] + str(rowCount)].value
	obj['type'] = mess[colHeader['type'] + str(rowCount)].value
	obj['cost'] = mess[colHeader['cost'] + str(rowCount)].value
	obj['trigger'] = mess[colHeader['trigger'] + str(rowCount)].value
	obj['package'] = mess[colHeader['package'] + str(rowCount)].value

	if (mess[colHeader['flavorText'] + str(rowCount)].value):
		obj['flavorText'] = mess[colHeader['flavorText'] + str(rowCount)].value
	else:
		obj['flavorText'] = ""

	if (mess[colHeader['power'] + str(rowCount)].value):
		obj['power'] = mess[colHeader['power'] + str(rowCount)].value
	else:
		obj['power'] = 0

	if (mess[colHeader['defense'] + str(rowCount)].value):
		obj['defense'] = mess[colHeader['defense'] + str(rowCount)].value
	else:
		obj['defense'] = 0

	if (mess[colHeader['subType'] + str(rowCount)].value):
		obj['subType'] = mess[colHeader['subType'] + str(rowCount)].value.split(",")
	else:
		obj['subType'] = []

	abilities = []
	if (mess[colHeader['description'] + str(rowCount)].value):
		for ability in mess[colHeader['description'] + str(rowCount)].value.split("*"):
			token = ability.strip()
			if (len(token) != 0):
				abilities.append(token)
	obj['description'] = abilities

	data.append(obj)
	rowCount += 1

with codecs.open("../client/laya/assets/res/cards.json", 'w', encoding = 'utf8') as file:
    file.write(json.dumps(data, ensure_ascii=False))
