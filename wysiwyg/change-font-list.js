/**
 * Изменения списка шрифтов
 */

BX.addCustomEvent('OnEditorInitedBefore', function(editor) {
    BX.addCustomEvent('GetFontFamilyList', BX.delegate(function(fontFamilyList) {
        for (var i=0; i<fontFamilyList.length; i++) {
            delete fontFamilyList[i];
        }

        fontFamilyList.unshift({value: 'Playfair Display', name: 'Playfair Display'});
        fontFamilyList.unshift({value: 'Lato', name: 'Lato'});
    }, this));
});