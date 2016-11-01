# pip install openpyxl

import codecs
import json
from openpyxl import load_workbook

wb = load_workbook(filename = 'conflux.xlsx')
mess = wb['Card']

data = []

# print(mess["B" + str(138)].value)

rowCount = 2
while (mess["B" + str(rowCount)].value):
	obj = {}
	obj['id'] = mess["A" + str(rowCount)].value
	obj['qlvl'] = mess["B" + str(rowCount)].value
	obj['name'] = mess["C" + str(rowCount)].value
	obj['color'] = mess["E" + str(rowCount)].value
	obj['type'] = mess["F" + str(rowCount)].value
	obj['cost'] = mess["G" + str(rowCount)].value
	obj['trigger'] = mess["K" + str(rowCount)].value

	if (mess["N" + str(rowCount)].value):
		obj['flavorText'] = mess["N" + str(rowCount)].value
	else:
		obj['flavorText'] = ""

	if (mess["I" + str(rowCount)].value):
		obj['power'] = mess["I" + str(rowCount)].value
	else:
		obj['power'] = 0

	if (mess["J" + str(rowCount)].value):
		obj['defense'] = mess["J" + str(rowCount)].value
	else:
		obj['defense'] = 0

	if (mess["H" + str(rowCount)].value):
		obj['subType'] = mess["H" + str(rowCount)].value.split(",")
	else:
		obj['subType'] = []

	abilities = []
	if (mess["L" + str(rowCount)].value):
		for ability in mess["L" + str(rowCount)].value.split("*"):
			token = ability.strip()
			if (len(token) != 0):
				abilities.append(token)
	obj['description'] = abilities

	data.append(obj)
	rowCount += 1

with codecs.open("../client/laya/assets/res/cards.json", 'w', encoding = 'utf8') as file:
    file.write(json.dumps(data))
