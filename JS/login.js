        // elem = document.querySelectorAll("input, small, i, .sp ");
        // console.log(elem);
        // // sml = doccument.querySelectorAll("small");
        // // err = doccument.querySelectorAll("i");
        // // sp = doccument.querySelectorAll("sp");
        // // sml = document.getElementById("sm");
        // // err = document.getElementById("err1");
        // // sp = document.getElementById("sp");
        // var a = 0;

        // function validation() {
        //     if (elem[0].value == "") {
        //         // alert(sml);
        //         elem[3].innerText = "Enter an email or phone number";
        //         elem[2].style.display = "inline-block";
        //         elem[3].style.display = "inline-block";
        //         elem[0].style.outlineColor = "#d93025";
        //         elem[0].style.borderColor = "white";
        //         elem[0].style.borderColor = "#d93025";
        //         elem[0].style.borderWidth = "1px";
        //         elem[1].style.color = "#d93025";

        //         a = 0;
        //         return false;
        //     } else if (elem[0].value.match(/^([a-z0-9_\-\.])+\@gmail+\.com$/) || elem[0].value.match(/^([0-9]{10})$/)) {
        //         a = 1;
        //         // sml.innerHtml = "Enter a valid email anmd phone number";
        //         // err.style.display = "inline-block";
        //         // sml.style.display = "inline-block";
        //         // elem[0].style.outlineColor = "#d93025";
        //         // elem[0].style.borderColor = "#d93025";
        //         // elem[0].style.borderWidth = "1px";

        //         // return false;
        //         // } else {
        //         elem[2].style.display = "none";
        //         elem[3].style.display = "none";
        //         elem[0].style.outlineColor = "#1a73e8";
        //         elem[0].style.borderColor = "#20212427";
        //         elem[0].style.borderWidth = "1px";
        //         elem[1].style.color = "#1a73e8";
        //         // alert("done");
        //         return true;
        //     } else {
        //         elem[3].innerText = "Enter a valid email and phone number";
        //         elem[2].style.display = "inline-block";
        //         elem[3].style.display = "inline-block";
        //         elem[0].style.outlineColor = "#d93025";
        //         elem[0].style.borderColor = "#d93025";
        //         elem[0].style.borderWidth = "1px";
        //         elem[1].style.color = "#d93025";
        //         return false;
        //     }

        // }

        // function fcout() {
        //     if (elem[0].value == "") {
        //         // alert("focus out");
        //         elem[1].style.color = "#5f6368";
        //     }

        // }

        // function fcs() {
        //     if (elem[0].value == "" && er == 0) {
        //         // alert("focus in");
        //         elem[1].style.color = "#1a73e8";
        //     }
        //     if (er == 1) {
        //         elem[1].style.color = "#d93025";
        //     }
        // }

        elem = document.querySelectorAll("input, small, i, .sp ");
        console.log(elem);
        // sml = doccument.querySelectorAll("small");
        // err = doccument.querySelectorAll("i");
        // sp = doccument.querySelectorAll("sp");
        // sml = document.getElementById("sm");
        // err = document.getElementById("err1");
        // sp = document.getElementById("sp");
        var a = 0;
        var er = 0;

        function validation() {
            if (elem[0].value == "") {
                // alert(sml);
                elem[3].innerText = "Enter an email or phone number";
                elem[2].style.display = "inline-block";
                elem[3].style.display = "inline-block";
                elem[0].style.outlineColor = "#d93025";
                elem[0].style.borderColor = "white";
                elem[0].style.borderColor = "#d93025";
                elem[0].style.borderWidth = "1px";
                elem[1].style.color = "#d93025";

                a = 0;
                er = 1;
                return false;
            } else if (elem[0].value.match(/^([a-z0-9_\-\.])+\@gmail+\.com$/) || elem[0].value.match(/^([0-9]{10})$/)) {
                a = 1;
                // sml.innerHtml = "Enter a valid email anmd phone number";
                // err.style.display = "inline-block";
                // sml.style.display = "inline-block";
                // elem[0].style.outlineColor = "#d93025";
                // elem[0].style.borderColor = "#d93025";
                // elem[0].style.borderWidth = "1px";

                // return false;
                // } else {
                elem[2].style.display = "none";
                elem[3].style.display = "none";
                elem[0].style.outlineColor = "#1a73e8";
                elem[0].style.borderColor = "#20212427";
                elem[0].style.borderWidth = "1px";
                elem[1].style.color = "#1a73e8";
                // alert("done");
                er = 0;
                return true;
            } else {
                elem[3].innerText = "Enter a valid email and phone number";
                elem[2].style.display = "inline-block";
                elem[3].style.display = "inline-block";
                elem[0].style.outlineColor = "#d93025";
                elem[0].style.borderColor = "#d93025";
                elem[0].style.borderWidth = "1px";
                elem[1].style.color = "#d93025";
                er = 1;
                return false;
            }
            er = 0;

        }

        function fcout() {
            if (elem[0].value == "") {
                // alert("focus out");
                elem[1].style.color = "#5f6368";
            }

        }

        function fcs() {
            if (elem[0].value == "" && er == 0) {
                // alert("focus in");
                elem[1].style.color = "#1a73e8";
            }
            if (er == 1) {
                elem[1].style.color = "#d93025";
            }
        }