var divider = {
	"style": "default",
	"size": "d5",
}

function getCell(value, isLast) {
	var preparedCell= {
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
		},
	}

	if (!isLast) {
		preparedCell.divider = divider;
	}


	return preparedCell;
}

function getListTemplate(values) {
	var cells = [];

	for (var i = 0; i < values.length; i++) {
		cells.push(getCell(values[i], i === values.length - 1));
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