function getCell(value) {
	return {
		type: "left_right_cell_view",
		paddings: {
			"top": "6x",
			"bottom": "6x",
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
			"typeface": "button1",
			"style": "default",
			"type": "accept",
			"actions": [
				{
					"type": "deep_link",
					"deep_link": action
				}
			],
			"margins": {
				"left": "10x",
				"top": "5x",
				"right": "10x",
				"bottom": "5x"
			}
		},
		"paddings": {
			"left": "6x",
			"top": "0x",
			"right": "6x",
			"bottom": "8x"
		}
	}
}

function getCardTemplate(values, buttonText, buttonAction) {
	var cells = [];

	for (var i = 0; i < values.length; i++) {
		cells.push(getCell(values[i], i === values.length - 1));
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
