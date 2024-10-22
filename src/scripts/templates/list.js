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
		right: {
			type: "media_gallery_item",
			"image": {
				"url": "https://cdn.sberdevices.ru/static/services/target/ddfde726-4ec5-4eb1-a303-bc5f22c90331/99d9f6bd-8216-4bb0-880f-b5b3be7c5c5f.png",
				"hash": "string",
				"placeholder": "string",
				"scale_mode": "scale_aspect_fill",
				"height": 100,
				"placeholder_color": "solid_black",
				"actions": [],
				"size": {}
			},
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