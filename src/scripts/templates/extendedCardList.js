var leftPadding = "8x";
var topPadding = "4x";
var bottomPadding = "4x";
var rightPadding = "8x";


function getItemValues(item) {
	var leftPadding = item.paddings.left ? item.paddings.left : 0;
	var rightPadding = item.paddings.right ? item.paddings.right : 0;
	var topPadding = item.paddings.top ? item.paddings.top : 0;
	var bottomPadding = item.paddings.bottom ? item.paddings.bottom : 0;

	return {
		title: item.title,
		typeface: item.typeface,
		color: item.color,
		paddings: {
			left: leftPadding + 'x',
			right: rightPadding + 'x',
			top: topPadding + 'x',
			bottom: bottomPadding + 'x'
		}
	}
}

function getTextCellView(item) {
	return {
		type: "text_cell_view",
		content: {
			text: item.text.title,
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

			cells.push(getTextCellView())
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

