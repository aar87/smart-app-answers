require: scripts/scripts.js
require: scripts/cards.js
require: scripts/templates/list.js

require: answers.yaml
  var = $Answers

require: content.yaml
  var = $Content

init:
    bind("onAnyError", function($context) {
        // выбор формулировки для ошибки, в зависимости от режима тестирования:
        if (!testMode()) {
            log("ERROR! " + $context.exception.message);
            $reactions.answer($Answers.Error);
        } else {
            throw "ERROR! " + $context.exception.message;
        }
    });
    bind("preProcess", function($context) {
        $jsapi.log(">> pre >> " + $context.currentState);

        if (
            $context.currentState != "/Repeat" &&
            $context.currentState != "/Back" &&
            $context.currentState != "/Fallback" &&
            !$context.session.returned
        ) {
            $jsapi.log(">>> pre");
            $context.session.returned = false
            $context.session.lastState = $context.session.currentState
            $context.session.currentState = $context.currentState
        }
    }, "/");


theme: /

    state: Start
        q!: *
        buttons:
            "Как перезапустить устройство?" -> /DeviceReload
            "Как транслировать видео с телефона?" -> /VideoFromPhone
        script:
            if ($parseTree.value === "start") { $jsapi.startSession() };
            // Переменные JS API – $session: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/variables/session
            $session.character = getCharacterId($request);
            $jsapi.log("request -> \n" + toPrettyString($request));
            $jsapi.log("injector -> \n" + toPrettyString($injector));
            $jsapi.log("context -> \n" + toPrettyString($context));
            $jsapi.log("context -> \n" + toPrettyString($Content));
            $jsapi.log("ReloadStateInit");

    state: DeviceReload
        q!: (как перезагру*|перезагруз*|перезапус*)
        a: Хорошо
        script:
            var items = $Content.DeviceReload.details.items;
            $jsapi.log("DeviceReload -> " + toPrettyString(items));
            var template = getListTemplate(items);
            $jsapi.log("DeviceReload -> " + toPrettyString(template));
            reply(template);
            $reactions.transition("/Start")

    state: VideoFromPhone
        q!: (как транслировать*|видео с телефона*|видео на телефоне*)
        a: Хорошо
        script:
            var items = $Content.VideoFromPhone.details.items;
            $jsapi.log("VideoFromPhone -> " + toPrettyString(items));
            var template = getListTemplate(items);
            $jsapi.log("VideoFromPhone -> " + toPrettyString(template));
            reply(template);
            $reactions.transition("/Start")

    state: CatchAll || noContext=true
        q: *
        a: Я не понял вас
