function getButton(text, action) {
	return {
		"type": "button_cell_view",
		"content": {
			"text": text,
			"typeface": "button2",
			"style": "default",
			"type": "accept",
			"actions": [
				{
					"type": "deep_link",
					"deep_link": action
				}
			],
			"margins": {
				"left": "8p",
				"top": "6x",
				"right": "8x",
				"bottom": "8x"
			}
		},
		"paddings": {
			"left": "8x",
			"top": "6x",
			"right": "8x",
			"bottom": "8x"
		}
	}
}

function getCardTemplate(values, buttonText, buttonAction) {
	var cells = [];

	for (var i = 0; i < values.length; i++) {
		var isFirst = false;
		var isLast = false;

		if (i === 0) {
			isFirst = true;
		}

		if (i === values.length - 1) {
			isLast = true;
		}

		cells.push(getCell(values[i], isFirst, isLast));
	}

	if (buttonText || buttonAction) {
		cells.push(getButton(buttonText, buttonAction));
	}

	return {
		card: {
			type: "list_card",
			paddings: {
				bottom: "0x",
				top: "0x"
			},
			cells: cells
		}
	}
}
