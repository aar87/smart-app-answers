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
