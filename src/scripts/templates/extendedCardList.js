var leftPadding = "8x";
var topPadding = "4x";
var bottomPadding = "4x";
var rightPadding = "8x";


function getItemValues(item) {
	var result = {
		title: item.title,
		typeface: item.typeface,
		color: item.color,
		paddings: {
			left: item.paddings.left,
			right: item.paddings.right,
			top: item.paddings.top,
			bottom: item.paddings.bottom,
		}
	}

	if (!item.paddings.left) {
		delete result.paddings.left
	}

	if (!item.paddings.right) {
		delete result.paddings.right
	}

	if (!item.paddings.top) {
		delete result.paddings.top
	}

	if (!item.paddings.bottom) {
		delete result.paddings.bottom
	}

	return result
}

function getTextCellView(item) {
	return {
		type: "text_cell_view",
		content: {
			text: item.title,
			typeface: item.typeface,
			text_color: item.color,
			max_lines: 0
		},
		paddings: item.paddings,
	}
}

function getExtendedCellTitleView(values, image, hash) {
	var cells = [];

	for (var i = 0; i < values.length; i++) {
		var titleValue = getItemValues(values[i]);
		cells.push(getTextCellView(titleValue));

		for (var j = 0; j < values[i].data.length; j++) {
			cells.push(getTextCellView(values[i].data[j]));
		}
	}

	return {
		card: {
			type: "extended_list_card",
			paddings: {
				left: leftPadding,
				top: topPadding,
				right: rightPadding,
				bottom: bottomPadding
			},
			cell_image: {
				url: image,
				hash: hash,
				placeholder_color: "solid_black",
				actions: [
					{}
				],
				fixed_ratio: "1:1",
				height: "10",
			},
			cells: cells
		}
	}
}

