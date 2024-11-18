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

// Тут определяем код, который должен направить нас в нужный state
function getTargetIntent($request) {
    // Значения state для переходов
    var keyDeviceReload = "device_reload";
    var deviceReload = "DeviceReload";

    var keyVideoFromPhone = "video_from_phone";
    var videoFromPhone = "VideoFromPhone";

    var keyVideoOnTv = "video_on_tv";
    var videoOnTv = "VideoFromPhoneOnTv";

    var keyChannel = "key_channel";
    var channel = "Channel";

    var keySupport = "key_support";
    var support = "SupportConnection";

    var states = {}
    states[keyDeviceReload] = deviceReload;
    states[keyVideoFromPhone] = videoFromPhone;
    states[keyVideoOnTv] = videoOnTv;
    states[keyChannel] = channel;
    states[keySupport] = support;

    try {
        $jsapi.log("Init getTargetIntent with payload: " + toPrettyString($request.rawRequest.payload));

        // TODO из request получить нужное
        var intentKeyToSearch = keyChannel;

        return states[intentKeyToSearch];
    } catch (e) {

        return "Undefined"
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
