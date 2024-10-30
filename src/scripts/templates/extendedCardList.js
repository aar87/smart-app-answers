var leftPadding = "8x";
var topPadding = "8x";
var doubleTopPadding = "16x";
var rigthPadding = "8x";
var bottomPadding = "8x";

var textPadding = "6x";


function getExtendedCardList() {
	return {
		"card": {
			"type": "extended_list_card",
			"paddings": {
				"left": leftPadding,
				"top": topPadding,
				"right": rigthPadding,
				"bottom": bottomPadding
			},
			"cell_image": {
				"url": "https://content.sberdevices.ru/smartmarket-smide-prod/1334030/1248280/RQE47TcgVJJ3IW68.png",
					"hash": "84fed454b566e2e89b304d74a62e4456",
					"placeholder_color": "solid_black",
					"actions": [
						{ }
					],
				"fixed_ratio": "1:1",
				"height": "32x",
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
						"typeface": "body3",
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
						"typeface": "body3",
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
						"typeface": "body3",
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
						"typeface": "body3",
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
						"typeface": "body3",
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
						"typeface": "body3",
						"text_color": "secondary",
						"max_lines": 0
					},
					"paddings": {
						"left": leftPadding,
						"bottom": textPadding
					}
				},
			]
		}
	}
}
