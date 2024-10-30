var divider = {
	style: "default",
	size: "d5",
}

function getTitle(value) {
	return {
		type: "text_cell_view",
		content: {
			text: value,
			typeface: "headline3",
			text_color: "default",
			max_lines: 0
		},
		paddings: {
			left: "8x",
			top: "8x",
			bottom: "8x",
			right: "8x"
		}
	}
}

function getText(value, color, isOnEdge) {
	var topPadding = "2x";

	if (isOnEdge) {
		topPadding = "8x";
	}

	return {
		type: "text_cell_view",
		content: {
			text: value,
			typeface: "footnote1",
			text_color: color,
			max_lines: 0
		},
		paddings: {
			"left": "8x",
			"top": topPadding,
			"right": "8x"
		}
	}
}

function getTitleCardTemplate(values) {
	var cells = [];

	for (var i = 0; i < values.length; i++) {
		if (values[i].title) {
			cells.push(getTitle(values[i].title))
		}

		for (var j = 0; j < values[i].data.length; j++) {
			cells.push(getText(values[i].data[j].key.text, values[i].data[j].key.color));
			cells.push(getText(values[i].data[j].value.text, values[i].data[j].value.color));
		}

		if (i !== values.length - 1) {
			cells.push(divider)
		}
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
