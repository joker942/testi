function IdVerification(txtBoxName, lblMsgName) {    
    document.getElementById(lblMsgName).style.display = "none";
    var ID = document.getElementById(txtBoxName).value;
    var deg = ID.split("");
    var intID = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var total = 0;
    var lastDigit;
    var temp;
    //Modified By Nasser @ 13/10/2014 to avoid using 00000000 or 2222222222 as an ID
    if (ID == "0000000000" || ID == "2222222222") {
        document.getElementById(txtBoxName).value = "";
        document.getElementById(lblMsgName).style.display = "block";
        return false;
    }
    //End of Nasser Modification
    for (var i = 1; i < 10; i++) {
        if (i % 2 != 0)
            temp = 2 * deg[i - 1];
        else
            temp = deg[i - 1];
        intID[i - 1] = temp;
        if (temp > 10) {
            var tempChar = temp.toString();
            var tempCharArr = tempChar.split("");
            temp = parseInt(tempCharArr[0].toString()) + parseInt(tempCharArr[1].toString());
            total = parseInt(total) + parseInt(temp);
        } else if (temp == 10) {
            temp = 1;
            total = parseInt(total) + parseInt(temp);
        }
        else {
            total = parseInt(total) + parseInt(temp);
        }
    }
    var totalDeg = total.toString().split("");
    lastDigit = totalDeg[totalDeg.length - 1];
    if (parseInt(lastDigit) > 0) {
        if ((10 - parseInt(lastDigit)) != deg[9]) {
            document.getElementById(txtBoxName).value = "";
            document.getElementById(lblMsgName).style.display = "block";
            return false;
        }
    } else {
        if ((parseInt(lastDigit)) != deg[9]) {
            document.getElementById(txtBoxName).value = "";
            document.getElementById(lblMsgName).style.display = "block";
            return false;
        }
    }

    return true;
}
