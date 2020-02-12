/**
 * Изменение видимости элементов на панели инструментов
 */

BX.addCustomEvent('OnEditorInitedBefore', function() {
    BX.addCustomEvent('GetControlsMap', BX.delegate(function(res) {
        for (var i=0; i<res.length; i++) {
            if (typeof(res[i].id) == 'undefined') {
                continue;
            }

            switch(res[i].id) {
                case "FontSelector":
                case "FontSize":
                case "Color":
                case "AlignList":
                case "More":
                    res[i].hidden = true;
                    break;

                case "InsertHr":
                case "Sub":
                case "Sup":
                    res[i].hidden = false;
                    break;
            }
        }
    }, this));
});