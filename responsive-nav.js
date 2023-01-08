        //Added to cart info
        let inputButtonFirst = document.getElementsByClassName("product")[0].getElementsByTagName("input")[0];
        let inputButtonSecond = document.getElementsByClassName("product")[1].getElementsByTagName("input")[0];
        let inputButtonThird = document.getElementsByClassName("product")[2].getElementsByTagName("input")[0];
        let message = document.getElementsByClassName("add-to-cart-info")[0];
        let messageInterval = setInterval(() => {
            message.style.opacity = "0";
        }, 3000);
        
        inputButtonFirst.addEventListener("click", () => {
            message.style.opacity = "1";
            messageInterval;
        });
        inputButtonSecond.addEventListener("click",() => {
            message.style.opacity = "1";
            messageInterval;
        });
        inputButtonThird.addEventListener("click",() => {
            message.style.opacity = "1";
            messageInterval
        });

        //Mobile navbar
        const mobileScreenConfigMenuOn = {
            nav: "width: 100%; height: 100vh; position: fixed; z-index: 2; top: 0px; left: 0px;",
            img: "display: none;",
            ul: "display: block;",
            ulLi: "display: block;",
            ulLiA: "font-size: 1.5em; line-height: 3.5em;",
            input: "color: white; display: block;position:absolute; top: .5em; right: .8em;font-size: 3em;background: none;border: none;"
        }
        const mobileScreenConfigMenuOff = {
            nav: "width: 100%; height: 15vh; position: fixed; z-index: 2; top: 0px; left: 0px;background-color: rgba(194, 155, 65);",
            ul: "display: none;",
            input: "color: white; display: block; margin-right: .5em; font-size: 3em;background: none;border: none; font-family: 'Montserrat', sans-serif;",
            img: "display: block;"
        };
        let button = document.getElementsByTagName("input")[0];
        let nav = document.getElementsByTagName("nav")[0];
        let navMenu = nav.getElementsByTagName("input")[0];
        let ul = nav.getElementsByTagName("ul")[0];
        let ulLi = ul.getElementsByTagName("li");
        let ulLiA = nav.getElementsByTagName("a");
        let img = nav.getElementsByTagName("img")[0]
        let isMenuVisible = false;

        if (window.innerWidth <= 650) {
            console.log("okno")
            nav.style.cssText = mobileScreenConfigMenuOff["nav"];
            ul.style.cssText = mobileScreenConfigMenuOff["ul"];
            navMenu.style.cssText = mobileScreenConfigMenuOff["input"];
            navMenu.value = "MENU";
            img.style.cssText = mobileScreenConfigMenuOff["img"];
        }
        function menu() {
            if (window.innerWidth > 650) return;
            navMenu.value == "X" ? isMenuVisible = true : isMenuVisible = false;

            console.log("klik" + isMenuVisible);
            if (isMenuVisible) {
                nav.style.cssText = mobileScreenConfigMenuOff["nav"];
                ul.style.cssText = mobileScreenConfigMenuOff["ul"];
                navMenu.style.cssText = mobileScreenConfigMenuOff["input"];
                navMenu.value = "MENU";
                img.style.cssText = mobileScreenConfigMenuOff["img"];
            }
            if (!isMenuVisible) {
                navMenu.value = "X";
                nav.style.cssText = mobileScreenConfigMenuOn["nav"];
                ul.style.cssText = mobileScreenConfigMenuOn["ul"];
                img.style.cssText = mobileScreenConfigMenuOn["img"];
                navMenu.getElementsByTagName("input")[0].style.cssText = "display: block;";

                for (let i = 0; i < ulLi.length; i++) {
                    ulLi[i].style.cssText = mobileScreenConfigMenuOn["ulLi"]
                }

                for (let i = 0; i < ulLiA.length; i++) {

                    ulLiA[i].style.cssText = mobileScreenConfigMenuOn["ulLiA"];
                }
            }
        }