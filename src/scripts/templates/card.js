function getCell(value, isFirst, isLast) {
	var topPadding = "8x";
	var bottomPadding = "8x";

	if (isFirst) {
		topPadding = "16x";
	}

	if (isLast) {
		bottomPadding = "16x";
	}

	return {
		type: "left_right_cell_view",
		paddings: {
			"top": topPadding,
			"bottom": bottomPadding,
			"left": "8x",
			"right": "8x"
		},
		left: {
			type: "simple_left_view",
			texts: {
				title: {
					text: value,
					typeface: "footnote1",
					text_color: "secondary",
					max_lines: 0
				},
				subtitle: {
					text: "",
					typeface: "body1",
					text_color: "secondary",
					margins: {
						"top": "0px"
					}
				}
			}
		}
	}
}

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
		var isFirst = i === 0;
		var isLast = !buttonText && i === values.length - 1;
		cells.push(getCell(values[i], i === values.length - 1), isFirst, isLast);
	}

	if (buttonText || buttonAction) {
		cells.push(getButton(buttonText, buttonAction));
	}

	return {
		card: {
			type: "list_card",
			paddings: {
				bottom: "0px",
				top: "0px"
			},
			cells: cells
		}
	}
}
