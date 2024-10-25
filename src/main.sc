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
        a: Начинаем работу?
        state: Да
            q: * да *
            script:
                $jsapi.log("ReloadStateInit");
                var items = $Content.First.Items;
                reply(getListTemplate(items));
        state: Нет
            q: * нет *
            a: ** Ну и ладно **

    state: CatchAll || noContext=true
        q: *
        a: Я не понял
