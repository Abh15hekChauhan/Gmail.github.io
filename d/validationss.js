            //VARIABLES DECLARATION
            // var a = 0;
            // var b = 0;
            // var c = 0;
            // var c1 = 0;
            // var c2 = 0;      
            // var d = 0;
            // var d1 = 0;
            // var d2 = 0;
            // var d3 = 0;
            // var d4 = 0;
            // var e = 0;
            // var de = 0;
            // var z = 0;
            // var sc = 0;
            // var sc1 = 0;
            // var ero = 0;
            // var clk = 0;
            // var v = 0;


            // input tag's variables defined
            elem = document.querySelectorAll("input,i,small,span");
            console.log(elem);
            // var elem[6] = document.getElementById("fname");
            // elem[8] = document.getElementById("lname");
            // elem[14] = document.getElementById("eml");
            // elem[19] = document.getElementById("pwd1");
            // elem[23] = document.getElementById("pwd2");
            // // vsub = document.getElementById("sub");

            // // Error variables defined
            // elem[13] = document.getElementById("sm1");
            // elem[12] = document.getElementById("err1");

            // elem[11] = document.getElementById("sm2");
            // elem[10] = document.getElementById("err2");

            // elem[18] = document.getElementById("sm3");
            // elem[17] = document.getElementById("err3");

            // elem[22] = document.getElementById("sm4");
            // elem[21] = document.getElementById("err4");

            // // SPAN defined
            // elem[7] = document.getElementById("elem[7]");
            // elem[9] = document.getElementById("elem[9]");
            // elem[15] = document.getElementById("elem[15]");
            // elem[20] = document.getElementById("elem[20]");
            // elem[24] = document.getElementById("elem[24]");




            function validation() {
                z = 0;
                // LOGIC STARTS HERE
                if (z == 0) {

                    // FIRST NAME
                    if (elem[6].value == "" && elem[8].value == "") {

                        elem[13].innerText = "Enter first and last names";

                        error1(elem[6], elem[11], elem[12], elem[7], elem[13]);
                        // elem[13].style.position = "relative";
                        // elem[13].style.left = "-150px"
                        // elem[11].style.display = "block";
                        error1(elem[8], elem[11], elem[10], elem[9], elem[13]);
                        elem[11].style.display = "none";

                        a = 0;
                        b = 0;

                        // return false;
                    } else if (elem[6].value == "" || elem[8].value == "") {
                        if (elem[6].value == "") {
                            elem[13].innerText = "Enter first name";
                            error1(elem[6], elem[11], elem[12], elem[7], elem[13]);

                            a = 0;
                        } else {
                            a = 1;
                            success(elem[6], elem[11], elem[12], elem[7], elem[13]);


                        }
                        if (elem[8].value == "") {
                            elem[13].innerText = "Enter last name";
                            error1(elem[8], elem[11], elem[12], elem[9], elem[13]);

                            b = 0;
                        } else {
                            b = 1;
                            success(elem[8], elem[11], elem[10], elem[9], elem[13]);

                        }
                        error1(elem[8], elem[11], elem[12], elem[9], elem[13]);
                    } else {
                        success(elem[6], elem[11], elem[12], elem[7], elem[13]);
                        success(elem[8], elem[11], elem[10], elem[9], elem[13]);

                        // elem[11].style.display = "none";
                        b = 1;
                        a = 1;
                    }




                    // EMAIL
                    if (elem[14].value == "") {
                        //      There will be 3 errors 
                        // 1. Choose a Gmail password
                        // 2. Sorry, your username must be between 6 and 30 characters long
                        // 3. Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed

                        setErrorFor(eml, "Choose a Gmail address");

                        error1(elem[14], elem[18], elem[17], elem[15], elem[18]);
                        elem[18].style.position = "relative";
                        elem[18].style.left = " 17px";
                        elem[18].style.top = "-20px";


                        c = 0;
                        // return false;
                    } else {
                        c1 = 0;
                        c2 = 0;
                        if (c1 == 0 || c2 == 0) {

                            if (elem[14].value.match(/^[a-z0-9_\-\.]+[a-z0-9]+$/)) {

                                c1 = 1;
                            } else {
                                if (!elem[14].value.match(/^[a-z0-9_\-\.]+$/)) {
                                    setErrorFor(eml, "Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.");

                                    error1(elem[14], elem[18], elem[17], elem[15], elem[18]);
                                    elem[18].style.position = "relative";
                                    elem[18].style.left = "15px";
                                    elem[18].style.top = "-22px";

                                    c1 = 0;
                                } else if (!elem[14].value.match(/^[a-z0-9_\-\.]+[a-z0-9]+$/)) {
                                    setErrorFor(eml, "Sorry, the last characters of your user name must be an ascii letter (a-z) or number (0-9).");
                                    error1(elem[14], elem[18], elem[17], elem[15], elem[18]);
                                    elem[18].style.position = "relative";
                                    elem[18].style.left = "15px";
                                    elem[18].style.top = "-22px";
                                    c1 = 0;
                                } else {
                                    c1 = 0;
                                }
                            }
                            if (elem[14].value.length < 6 || elem[14].value.length > 30 && c1 == 1) {
                                setErrorFor(eml, "Sorry, your username must be between 6 and 30 characters long.");
                                elem[18].style.position = "relative";
                                elem[18].style.top = "-21.5px";
                                elem[18].style.left = "17px";
                                elem[18].style.width = "320px";

                                error1(elem[14], elem[18], elem[17], elem[15], elem[18]);
                                c2 = 0;

                                // alert(c2);

                            } else {

                                c2 = 1;

                            }
                            // alert(c1);


                        }
                        if (c1 == 1 && c2 == 1) {
                            c = 1;
                            success(elem[14], elem[18], elem[17], elem[15], elem[18]);
                            elem[18].innerText = "You can use letters, numbers & periods";
                            elem[18].style.position = "relative";
                            elem[18].style.left = "0px";
                            elem[18].style.top = "-4xpx";
                            elem[17].style.visibility = "hidden";
                        }

                    }



                    // PASSWORD1
                    d1 = 0;
                    if (d1 == 0) {
                        if (elem[19].value == "") {

                            setErrorFor(pwd1, "Enter a password");

                            elem[22].style.position = "relative";
                            elem[22].style.left = "17px";
                            error1(elem[19], elem[22], elem[21], elem[20], elem[22]);




                            d1 = 0;

                            // return false;
                        } else {
                            d1 = 1;
                        }
                    }
                    d2 = 0;
                    if (d1 == 1 && d2 == 0) {

                        // elem[6]= elem[6].trim()



                        if (elem[19].value.length < 8) {
                            setErrorFor(pwd1, "Use 8 characters or more for your password");

                            elem[22].style.position = "relative";
                            elem[22].style.left = "17px";
                            error1(elem[19], elem[22], elem[21], elem[20], elem[22]);
                            d2 = 0;


                        } else {
                            d2 = 1;
                        }

                    }
                    d3 = 0;
                    d4 = 0;
                    d = 0;
                    if (d1 == 1 && d == 0 && d2 == 1 && d3 == 0) {

                        //PASSWORD2 STARTS HERE
                        if (elem[23].value == "") {
                            setErrorFor(pwd1, "Confirm your password");

                            error1(elem[23], elem[22], elem[21], elem[24], elem[22]);
                            elem[22].style.position = "relative";
                            elem[22].style.left = "17px";
                            d3 = 0;

                        } else {
                            d3 = 1;
                        }
                        d4 = 0;
                        // alert(d3);
                        if ((elem[19].value != elem[23].value) && d3 == 1) {
                            setErrorFor(pwd1, "Those passwords didn’t match. Try again.");

                            elem[22].style.position = "relative";
                            elem[22].style.left = "17px";
                            elem[23].value = "";

                            error1(elem[19], elem[22], elem[21], elem[20], elem[22]);
                            error1(elem[23], elem[22], elem[21], elem[24], elem[22]);
                            d4 = 0;
                            ero = 00;

                        } else {
                            d4 = 1;
                        }

                    }
                    if (d1 == 1 && d2 == 1 && d3 == 1 && d4 == 1) {
                        d = 1
                    } //PASSWORD2 ENDS HERE



                    //Z's IF ENDS HERE
                } else { //Z's ELSE 
                    z = 1;
                }
                //Z's ELSE ENDED




                if (d == 1) {
                    elem[22].innerText = "Use 8 or more characters with a mix of letters, numbers & symbols";
                    elem[22].style.position = "relative";
                    elem[22].style.left = "3px";

                    success(elem[19], elem[22], elem[21], elem[20], elem[22]);
                    success(elem[23], elem[22], elem[21], elem[24], elem[22]);
                    // elem[19].style.borderColor = "rgb(228, 231, 228)";
                    // elem[22].style.visibility = "hidden";
                    // elem[21].style.visibility = "hidden";

                    // return validation();

                }


                if (a == 0 || c == 0 || d == 0) {
                    z = 0;
                    return false;
                }
                if (z == 1) {


                    return true;
                }




            }

            function fcs(v) {

            } //fcs()


            function fcout(v, u) {

                if (!elem[6] == "") {
                    elem[7].style.color = "#5f6368";
                }
                if (!elem[8] == "") {
                    elem[9].style.color = "#5f6368";
                }

            }


            // alert(sc1);

            function success(x1, x2, x3, x4, x5) {
                x1.style.outlineColor = "#1a73e8";
                x1.style.borderWidth = "1px";
                x1.style.borderColor = "rgb(228, 231, 228)"; //light black
                x2.style.visibility = "hidden";
                x3.style.visibility = "hidden";
                x4.style.color = "#5f6368" //light black
                if (x5 == elem[13]) {
                    x5.style.display = "none";
                }
                if (x5 == elem[18]) {
                    x5.style.color = "rgba(0, 0, 0, 0.658)";
                    x5.style.visibility = "visible";
                }
                if (x5 == elem[22]) {
                    x5.style.color = "rgba(0, 0, 0, 0.658)";
                    x5.style.visibility = "visible";
                }

            }


            function error1(x1, x2, x3, x4, x5) {
                x1.style.outlineColor = "#d93025";
                x1.style.borderColor = "#d93025";
                x1.style.borderWidth = "1px";
                x2.style.color = "#d93025";
                x2.style.visibility = "visible";
                x3.style.visibility = "visible";
                x4.style.color = "#d93025";
                if (x5 == elem[13]) {
                    x5.style.display = "block";
                    x5.style.color = "#d93025";
                }
                if (x5 == elem[18]) {
                    x5.style.color = "#d93025";
                    x5.style.visibility = "visible";
                }
            }




            function show() {
                var fnc = document.getElementById("pwd1");
                // fnc.type = "text";
                // alert(fnc.value);
                var fnc2 = document.getElementById("pwd2")
                if (fnc.type === "password" && fnc2.type === "password") {
                    fnc.type = "text";
                    // alert(fnc.value);
                    fnc2.type = "text";
                } else {
                    fnc.type = "password";
                    fnc2.type = "password";
                }
            }

            function clickk() {
                // alert("clicked");
                fn = document.getElementById("fname");
                fn.style.borderColor = "blue";
                fn.style.visible;
                fn.style.visibility = "hidden";
                return false;
            }



            function setErrorFor(input, message) {
                const parentControl = input.parentElement;
                const small = parentControl.querySelector('small');

                small.innerText = message;

                // parentControl.className = "parent error";    
            }