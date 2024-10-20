require: scripts/scripts.js
require: scripts/cards.js

require: answers.yaml
  var = $Answers

init:
    bind("onAnyError", function($context) {
        // выбор формулировки для ошибки, в зависимости от режима тестирования:
        showCardExample();
        if (!testMode()) {
            log("ERROR! " + $context.exception.message);
            $reactions.answer($Answers.Error);
        } else {
            throw "ERROR! " + $context.exception.message;
        }
    });

theme: /

    state: Start
        q!: * *start
        q!: * {(как*/шаблон*) (карт*/кард*/card*) * [есть/имеется/созда*/запусти*]} *
        q!: * (что * умее*/меню/помо*) *
        q!: Подписка Okko в подарок
        script:
            // Начало новой сессии: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/built_in_services/jsapi/startSession
            // if ($parseTree.value === "start") { $jsapi.startSession() };
            $jsapi.startSession();
            showCardExample();
            // Переменные JS API – $session: https://developer.sberdevices.ru/docs/ru/developer_tools/ide/JS_API/variables/session
            $session.character = getCharacterId($request);
            // реплика из answers.yaml, в зависимости от персонажа:
            
            $reactions.answer($Answers["Start"][$session.character]);
        buttons:
            "Обычная"
            "Грид"
            "Галерея"
            "Список"
    
    state: card
        q!: * (card/карточк*/прост*/обычн*) *
        a: Пример карточки типа card:
        script:
            showCardExample();
        go!: /Start
    
    state: grid_card
        q!: * (grid_card/grid/грид) *
        script:
            showGridCardExample($request);
        go!: /Start
        
    state: gallery_card
        q!: * (gallery_card/gallery/галлер*/галер*) *
        script:
            showGalleryCardExample($request);
        go!: /Start
        
    state: cardList
        q!: * (cardList/list/лист/список/списки) *
        a: Это карточка типа cardList:
        script:
            showCardListExample();
        a: Похожий тип карточек, но с настраиваемыми параметрами, можно передавать в сообщении бота типа raw. Пример оформления таких карточек можно посмотреть в комментарии к коду (строки 67–73 и 75–81). 
        go!: /Start

    # raw ответы используются для для передачи кастомного типа ответа: 
    # https://developer.sberdevices.ru/docs/ru/developer_tools/ide/bot_answers/message_types/#raw
    # state: text_cell_view
    #     q!: * (text_cell_view/text/вертикаль*/столбик) *
    #     a: Вот карточка типа  cardList с вертикальным списком ячеек:
    #     script:
    #         showTextCellViewCardExample();

    # подробнее о работе с карточками данного типа можно почитать тут: 
    # https://developer.sberdevices.ru/docs/ru/developer_tools/amp/smartapp_interface_elements/#list-card
    # state: left_right_cell_view
    #     q!: * (left_right_cell_view/left_right/горизонт*/карусель*) *
    #     a: Вот карточка типа  cardList с горизонтальным списком ячеек:
    #     script:
    #         showLeftRightCellViewCardExample();

    # Если мы не распознали запрос:
    state: CatchAll
        q!: *
        event!: noMatch
        script:
            // реплика из answers.yaml, в зависимости от персонажа:
            $reactions.answer($Answers.CatchAll[$session.character]);
            $reactions.answer($Answers.CatchAll[$session.character]);
        buttons:
            "Обычная"
            "Грид"
            "Галерея"
            "Список"
