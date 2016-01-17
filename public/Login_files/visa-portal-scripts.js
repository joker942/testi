
$(document).ready(function () {
    if (!(window.location.href.indexOf("addHajjVisa") > -1)) {

        //$("script[src='/Scripts/2011.2.712/jquery-1.5.1.min.js']").remove();
        /* tooltips */
        //$('.tooltip').tipsy({gravity: 's'});
        //$('.b_tooltip').tipsy({gravity: 'n'}); 

    }
    if ($("div#main").hasClass("t-ltr")) {
        if (!($('div#main').find('div.below-header-img').length)) {
            $("div#main.t-ltr").parent().parent().addClass("bodymain-top");
        }

    }
    $('.Wizard-Step+.divformtable+.btndiv').wrap("<div class='btndiv-border-wrapper' />")
    changesearch();

    if (window.location.href.indexOf("Print") > -1 || window.location.href.indexOf("print") > -1 || window.location.href.indexOf("RatificationVisaRequest") > -1) {
        $("div.printhead+table.formtable tr,div.printhead+p+table.formtable tr").addClass("table-row-class");
        $("div.printhead+table.formtable tr td,div.printhead+p+table.formtable tr td").addClass("table-label");
        $("div.printhead+table.formtable tr td+td,div.printhead+p+table.formtable tr td+td").removeClass("table-label");
        $("div.printhead+table.formtable tr td.table-label+td+td,div.printhead+p+table.formtable tr td.table-label+td+td").addClass("table-label");
    }



    $(".t-widget.t-dropdown.t-header").trigger("click");
    $(".t-widget.t-dropdown.t-header").trigger("click");
});

function changesearch() {
    if (document.getElementById('searchtype') == null) return;
    var searchT = document.getElementById('searchtype').value;
    if (searchT == 'ApplicationNumber') {
        document.getElementById('req2').style.display = 'none';
        document.getElementById('req3').style.display = 'none';
        document.getElementById('req4').style.display = 'none';
        document.getElementById('req5').style.display = 'none';
        document.getElementById('req1').style.display = 'block';
    }
    else if (searchT == 'VisaNumber') {
        document.getElementById('req1').style.display = 'none';
        document.getElementById('req3').style.display = 'none';
        document.getElementById('req4').style.display = 'none';
        document.getElementById('req5').style.display = 'none';
        document.getElementById('req2').style.display = 'block';
    }
    else if (searchT == 'Omra') {
        document.getElementById('req1').style.display = 'none';
        document.getElementById('req2').style.display = 'none';
        document.getElementById('req4').style.display = 'none';
        document.getElementById('req5').style.display = 'none';
        document.getElementById('req3').style.display = 'block';
    }
    else if (searchT == 'InvitationLetter') {
        document.getElementById('req1').style.display = 'none';
        document.getElementById('req2').style.display = 'none';
        document.getElementById('req3').style.display = 'none';
        document.getElementById('req5').style.display = 'none';
        document.getElementById('req4').style.display = 'block';
    }
    else if (searchT == 'HajRequest') {
        document.getElementById('req1').style.display = 'none';
        document.getElementById('req2').style.display = 'none';
        document.getElementById('req3').style.display = 'none';
        document.getElementById('req4').style.display = 'none';
        document.getElementById('req5').style.display = 'block';
    }
}
