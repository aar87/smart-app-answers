function getExtendedCardList() {
	return {
		"card": {
			"type": "extended_list_card",
				"paddings": {
				"left": "9x",
					"top": "9x",
					"right": "9x",
					"bottom": "9x"
			},
			"cell_image": {
				"url": "https://content.sberdevices.ru/smartmarket-smide-prod/1334030/1248280/RQE47TcgVJJ3IW68.png",
					"hash": "84fed454b566e2e89b304d74a62e4456",
					"placeholder_color": "solid_black",
					"actions": [
					{ }
				],
				"fixed_ratio": "1:1",
				"size": {
					"height": "small",
					"aspect_ratio": "1",
				}
			},
			"cells": [
				{
					"type": "text_cell_view",
					"content": {
						"text": "Киану Ривс",
						"typeface": "headline3",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": "8x",
						"top": "10x",
						"right": "8x"
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "Канадский актёр, кинопродюсер, и музыкант. Наиболее известен своими ролями в киносериях «Матрица» и «Джон Уик»...",
						"typeface": "headline3",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": "8x",
						"top": "10x",
						"right": "8x"
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "ru.wikipedia.org",
						"typeface": "headline3",
						"text_color": "default",
						"max_lines": 0,
						"actions": [
							{
								"type": "deep_link",
								"deep_link": "https://ru.wikipedia.org"
							}
						],
						"margins": {
							"left": "10x",
							"top": "5x",
							"right": "10x",
							"bottom": "5x"
						}
					}
				}
			]
		}
	}
}
