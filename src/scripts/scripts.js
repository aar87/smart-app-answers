function getCell(value, isFirst, isLast) {
    var topPadding = "4x";
    var bottomPadding = "4x";

    if (isFirst) {
        topPadding = "8x";
    }

    if (isLast) {
        bottomPadding = "8x";
    }

    var data = {
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
        }
    };

    if (!isLast) {
        data.divider = {
            style: "default",
            size: "d3"
        }
    }

    return data;
}

// проверка на режим тестирования
function testMode() {
    if ($jsapi.context().testContext) {
        return true;
    }
    return false;
}

function answerPush(reply) {
    $jsapi.context().response.replies = $jsapi.context().response.replies || [];
    $jsapi.context().response.replies.push(reply);
}

function getCharacterId($request) {
    try {
        return $request.rawRequest.payload.character.id;
    } catch (e) {
        if ($request.channelType === "chatwidget") {
            return "sber";
        }
        throw e.message;
    }
}

function reply(data) {
    var reply = {
        "type": "raw",
        "body": {
            "emotion": {
                "emotionId": "zainteresovannost"
            },
            "items": data,
        },
        "messageName": "ANSWER_TO_USER"
    }

    // отправляем карточку в ответ от бота:
    answerPush(reply);
}
