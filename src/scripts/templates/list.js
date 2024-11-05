function getCell(value, isFirst, isLast) {
	var topPadding = "4x";
	var bottomPadding = "4x";

	if (isFirst) {
		topPadding = "8x";
	}

	if (isLast) {
		bottomPadding = "8x";
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
						"top": "0x"
					}
				}
			}
		},
		divider: {
			style: "default",
			size: "d5"
		}
	};
}

function getListTemplate(values) {
	var cells = [];

	for (var i = 0; i < values.length; i++) {
		var isFirst = i === 0;
		var isLast = i === values.length - 1;

		cells.push(getCell(values[i], isFirst, isLast));
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
