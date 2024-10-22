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

theme: /

    state: Start
        q!: *
        a: Начинаем работу!
        script:
            // Начало новой сессии: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/built_in_services/jsapi/startSession
            if ($parseTree.value === "start") { $jsapi.startSession() };
            // Переменные JS API – $session: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/variables/session
            $session.character = getCharacterId($request);
            $jsapi.log("request -> \n" + toPrettyString($request));
            $jsapi.log("injector -> \n" + toPrettyString($injector));
            $jsapi.log("context -> \n" + toPrettyString($context));
            $jsapi.log("context -> \n" + toPrettyString($Content));
            // реплика из answers.yaml, в зависимости от персонажа:

            reply(getListTemplate($Content.First.Items);
