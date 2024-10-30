var leftPadding = "8x";
var topPadding = "4x";
var bottomPadding = "4x";
var doubleTopPadding = "16x";
var rightPadding = "8x";

var textPadding = "6x";


function getExtendedCardList() {
	return {
		"card": {
			"type": "extended_list_card",
			"paddings": {
				"left": leftPadding,
				"top": topPadding,
				"right": rightPadding,
				"bottom": bottomPadding
			},
			"cell_image": {
				"url": "https://content.sberdevices.ru/smartmarket-smide-prod/1334030/1248280/Fj7ZCsSNZXJkaSjT.png",
				"hash": "1e3fb0081c93a397a85b347a1c2506d1",
				"placeholder_color": "solid_black",
				"actions": [
					{ }
				],
				"fixed_ratio": "1:1",
				"height": "10",
			},
			"cells": [
				{
					"type": "text_cell_view",
					"content": {
						"text": "В Telegram",
						"typeface": "headline3",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"top": doubleTopPadding,
						"bottom": textPadding,
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "Чат-бот со специалистом поддержки",
						"typeface": "footnote1",
						"text_color": "secondary",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"top": textPadding,
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"left": leftPadding,
						"text": "sberdevices_support_bot",
						"typeface": "footnote1",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"bottom": textPadding,
					},
					"divider": {
						"style": "default",
						"size": "d5"
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "По телефону",
						"typeface": "headline3",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"top": textPadding,
						"bottom": textPadding
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "900",
						"typeface": "footnote1",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"top": textPadding,
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "Бесплатно по России",
						"typeface": "footnote1",
						"text_color": "secondary",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"bottom": textPadding
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "+ 7 495 500-55-50",
						"typeface": "footnote1",
						"text_color": "default",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"top": textPadding,
					}
				},
				{
					"type": "text_cell_view",
					"content": {
						"text": "из любой точки мира по тарифу вашего оператора связи",
						"typeface": "footnote1",
						"text_color": "secondary",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
					}
				},
			]
		}
	}
}
