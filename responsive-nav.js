        //Added to cart info
        let inputButtonFirst = document.getElementsByClassName("product")[0].getElementsByTagName("input")[0];
        let inputButtonSecond = document.getElementsByClassName("product")[1].getElementsByTagName("input")[0];
        let inputButtonThird = document.getElementsByClassName("product")[2].getElementsByTagName("input")[0];
        let message = document.getElementsByClassName("add-to-cart-info")[0];
        let messageInterval = setInterval(() => {
            message.style.opacity = "0";
            message.style.display = "none";
        }, 3000);
        
        inputButtonFirst.addEventListener("click", () => {
            message.style.display = "block";
            message.style.opacity = "1";
            
            messageInterval;
        });
        inputButtonSecond.addEventListener("click",() => {
            message.style.display = "block";
            message.style.opacity = "1";
            
            messageInterval;
        });
        inputButtonThird.addEventListener("click",() => {
            message.style.display = "block";
            message.style.opacity = "1";
            
            messageInterval
        });

        //Mobile navbar
        const mobileScreenConfigMenuOn = {
            nav: "width: 100%; height: 100vh; position: fixed; z-index: 2; top: 0; left: 0; display: flex; justify-content: center; align-items: center; flex-direction: column;",
            navMenu: "display: block; margin: 0",
            img: "display: none;",
            ul: "width: 100%;",
            ulLi: "display: block;",
            ulLiA: "font-size: 1em; line-height: 2.5em;",
        }
        const mobileScreenConfigMenuOff = {
            nav: "width: 100%; height: 15vh; position: fixed; z-index: 2; top: 0; left: 0;background: linear-gradient(0deg, rgba(211,164,52,1) 20%, rgba(219,172,61,1) 78%);",
            navMenu: "display: block; position: static;",
            ul: "display: none;",
            img: "display: block;"
        };
        let button = document.getElementsByTagName("input")[0];
        let nav = document.getElementsByTagName("nav")[0];
        let navMenu = nav.querySelector("#navMenu");
        let ul = nav.getElementsByTagName("ul")[0];
        let ulLi = ul.getElementsByTagName("li");
        let ulLiA = nav.getElementsByTagName("a");
        let img = nav.getElementsByTagName("img")[0]
        let isMenuVisible = false;

        function navMenuIconHandler(){
            navMenu.classList.toggle("active");
            //if menuvisible {!menuvisible}
            menu();
            if(isMenuVisible) {isMenuVisible = false; return;}
            if(!isMenuVisible) {isMenuVisible = true;}
        }

        navMenu.addEventListener("click", () => navMenuIconHandler());

        if (window.innerWidth <= 650) {
            navMenu.style.display = "block";
            nav.style.cssText = mobileScreenConfigMenuOff["nav"];
            ul.style.cssText = mobileScreenConfigMenuOff["ul"];
            //navMenu.style.cssText = mobileScreenConfigMenuOff["input"];
            //navMenu.value = "MENU";
            img.style.cssText = mobileScreenConfigMenuOff["img"];
        }
        function menu() {
            if (window.innerWidth > 650) return;
            //navMenu.value == "X" ? isMenuVisible = true : isMenuVisible = false;
            console.log(isMenuVisible);

            if (isMenuVisible) {
                nav.style.cssText = mobileScreenConfigMenuOff["nav"];
                navMenu.style.cssText = mobileScreenConfigMenuOff["navMenu"];
                ul.style.cssText = mobileScreenConfigMenuOff["ul"];
                //navMenu.style.cssText = mobileScreenConfigMenuOff["input"];
                //navMenu.value = "MENU";
                img.style.cssText = mobileScreenConfigMenuOff["img"];
                //remove class active from navmenuIcon
                navMenu.classList.remove("active");
            }
            if (!isMenuVisible) {
               // navMenu.value = "X";
                nav.style.cssText = mobileScreenConfigMenuOn["nav"];
                navMenu.style.cssText = mobileScreenConfigMenuOn["navMenu"];
                ul.style.cssText = mobileScreenConfigMenuOn["ul"];
                img.style.cssText = mobileScreenConfigMenuOn["img"];
               // navMenu.getElementsByTagName("input")[0].style.cssText = "display: block;";

                for (let i = 0; i < ulLi.length; i++) {
                    ulLi[i].style.cssText = mobileScreenConfigMenuOn["ulLi"]
                }

                for (let i = 0; i < ulLiA.length; i++) {

                    ulLiA[i].style.cssText = mobileScreenConfigMenuOn["ulLiA"];
                }
            }
            console.log(isMenuVisible);
        }