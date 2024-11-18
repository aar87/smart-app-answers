require: scripts/scripts.js
require: scripts/templates/list.js
require: scripts/templates/card.js
require: scripts/templates/titleCard.js
require: scripts/templates/extendedCardList.js

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
        $jsapi.log("Application version: " + $injector.version);
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
        script:
            if ($parseTree.value === "start") { $jsapi.startSession() };
            // Переменные JS API – $session: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/variables/session
            $session.character = getCharacterId($request);
            $jsapi.log("request -> \n" + toPrettyString($request));
            $jsapi.log("injector -> \n" + toPrettyString($injector));
            $jsapi.log("context -> \n" + toPrettyString($context));
            $jsapi.log("context -> \n" + toPrettyString($Content));
            var intentState = getTargetIntent($request);

            $jsapi.log("Intent state -> " + intentState);
            $reactions.transition("/" + intentState);

    state: DeviceReload
        q!: (как перезагру*|перезагруз*|перезапус*)
        a: {{ $Content.DeviceReload.title }}
        script:
            var items = $Content.DeviceReload.details.items;
            $jsapi.log("DeviceReload -> " + toPrettyString(items));
            var template = getListTemplate(items);
            $jsapi.log("DeviceReload -> " + toPrettyString(template));
            reply(template);

    state: VideoFromPhone
        q!: (транслировать видео|видео с телефон*|видео на телефоне*)
        a: {{ $Content.VideoFromPhone.title }}
        script:
            var items = $Content.VideoFromPhone.details.items;
            $jsapi.log("VideoFromPhone -> " + toPrettyString(items));
            var template = getListTemplate(items);
            $jsapi.log("VideoFromPhone -> " + toPrettyString(template));
            reply(template);

    state: VideoFromPhoneOnTv
        q!: (транслировать экран*)
        a: {{ $Content.VideoFromPhoneOnTv.title }}
        script:
            var items = $Content.VideoFromPhoneOnTv.details.items;
            var text = $Content.VideoFromPhoneOnTv.details.button.text;
            var action = $Content.VideoFromPhoneOnTv.details.button.link;
            $jsapi.log("VideoFromPhone -> " + toPrettyString(items));
            $jsapi.log("VideoFromPhone -> " + toPrettyString(text));
            $jsapi.log("VideoFromPhone -> " + toPrettyString(action));
            var template = getCardTemplate(items, text, action);
            $jsapi.log("VideoFromPhoneOnTv -> " + toPrettyString(template));
            reply(template);

    state: Channel
        q!: (настроить эфир*|ТВ канал*)
        a: {{ $Content.Channel.question }}
        buttons:
            "Эфирные" -> /Channel/Satellite
            "Онлайн" -> /Channel/Online
        script:
            var items = $Content.Channel.details.items;
            $jsapi.log("Channel -> " + toPrettyString(items));
            var template = getListTemplate(items);
            $jsapi.log("Channel -> " + toPrettyString(template));
            reply(template);

        state: Satellite
            q!: (спутник*|кабельн*|эфир*)
            a: {{ $Content.ChannelSettings.channel.title }}
            script:
                var items = $Content.ChannelSettings.channel.details.items;
                var text = $Content.ChannelSettings.channel.details.button.text;
                var action = $Content.ChannelSettings.channel.details.button.link;
                $jsapi.log("Satellite -> " + toPrettyString(items));
                var template = getCardTemplate(items, text, action);
                $jsapi.log("Satellite -> " + toPrettyString(template));
                reply(template);

        state: Online
            q!: (онлайн*)
            a: {{ $Content.ChannelSettings.online.title }}
            script:
                var items = $Content.ChannelSettings.online.details.items;
                var text = $Content.ChannelSettings.online.details.button.text;
                var action = $Content.ChannelSettings.online.details.button.link;
                $jsapi.log("Online -> " + toPrettyString(items));
                var template = getCardTemplate(items, text, action);
                $jsapi.log("Online -> " + toPrettyString(template));
                reply(template);

    state: SupportConnection
        q!: (связаться с техпод*|техпод*)
        a: {{ $Content.SupportConnection.title }}
        script:
            var items = $Content.SupportConnection.details.items;
            var image = $Content.SupportConnection.details.image;
            var hash = $Content.SupportConnection.details.hash;
            $jsapi.log("SupportConnection -> " + toPrettyString(items));
            var template = getExtendedCellTitleView(items, image, hash);
            $jsapi.log("SupportConnection -> " + toPrettyString(template));
            reply(template);

    state: CatchAll || noContext=true
        q: *
        a: Я не понял вас
