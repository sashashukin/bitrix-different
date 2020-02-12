# Различные скрипты для визуального редактора

## Установка


Чтобы скрипты заработали Вам их надо подключить в папке `bitrix/php_interface/init.php`:
```php
AddEventHandler("fileman", "OnBeforeHTMLEditorScriptRuns", "changeWYSIWYG");
function changeWYSIWYG() {
    CJSCore::RegisterExt('change_wysiwyg', array(
        'js' => 'ПУТЬ_К_СКРИПТУ',
    ));

    CJSCore::Init(array('change_wysiwyg'));
}
```

## Список скриптов:
  
  * изменение видимости элементов на панели инструментов (change-elements-visibility.js);
  * изменение списка шрифтов (change-font-list.js);