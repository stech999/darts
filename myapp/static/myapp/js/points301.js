document.addEventListener('DOMContentLoaded', function () {
    const result_set_points = document.getElementById('result_set_points');
    const result_set_points_champion = document.getElementById('champion');
    const champion_textEl = document.getElementById('champion_text');
    const cub_championEl = document.getElementById('cub_champion');
    const champion_btn_closeEl = document.getElementById('champion_btn_close');
    let numberElements = document.querySelectorAll("[id^='number']");
    let historyEl = document.getElementById('history');
    const multi2_el = document.getElementById('multi2');
    const multi3_el = document.getElementById('multi3');
    const home_box_countingEl = document.getElementById('home_box_counting')
    const home_box_preview_finishEl = document.getElementById('home_box_preview_finish');


    const initialScore = 30;

    let functionActive = true;

    let resultatScore = 30;
    let resultatPoints = [];
    let countPoints = 0;
    let storeResultat = 0;

    function updateResultatScoreDisplay() {
        result_set_points.textContent = resultatScore;
        choiseResultatScore();
    }

    function updateResultatPointsDisplay() {
        historyEl.textContent = resultatPoints.join(' | ');
    }

    function previewScorePoints() {
        if (resultatScore % 2 === 0 && resultatScore <= 50) {
            home_box_countingEl.style.display = 'flex';
            home_box_preview_finishEl.classList.add('blinking-active');
            home_box_preview_finishEl.textContent = resultatScore / 2;
        }
        else {
            home_box_countingEl.style.display = 'none';
            home_box_preview_finishEl.classList.remove('blinking-active');
            home_box_preview_finishEl.textContent = '';
        }
    }

    // function updateResultPoints() {
    //     if (countPoints >= resultatScore) {
    //         historyEl.classList.remove('home_box_preview_color');
    //         setTimeout(() => {
    //             historyEl.classList.add('home_box_preview_error');
    //         }, 1000);
    //         setTimeout(() => {
    //             historyEl.classList.remove('home_box_preview_error');
    //         }, 3000)
    //     }

    // }

    // function getMultiplyBy(milti) {
    //     numberElements.forEach(function (el) {
    //         el.addEventListener('click', function () {
    //             let number = parseInt(this.textContent);
    //             let points = resultatScore - number * milti;
    //             resultatScore -= points;
    //             resultatPoints.push(resultatPoints);
    //             updateResultatScoreDisplay();
    //             previewScorePoints();
    //         })
    //     })
    // }

    function choiseResultatScore() {
        if (resultatScore == 0) {
            champion();
        }
    }

    function numb25True() {
        multi3_el.classList.add('disabled_numb27');
    }

    function numb25Disab() {
        multi3_el.classList.remove('disabled_numb27');
    }

    function historyColorText() {
        historyEl.classList.add('home_box_preview_color');
        setTimeout(() => {
            historyEl.classList.remove('home_box_preview_color');
        }, 1000);
    }


    // numberElements.forEach(function (el) {
    //     el.addEventListener('click', function () {
    //         console.log('functionActive: ' + functionActive);
    //         if (functionActive === true) {

    //             if (this.textContent <= 24) {
    //                 let points = parseInt(this.textContent);
    //                 resultatPoints.push(points);

    //                 if (resultatPoints.length > 3) {
    //                     resultatPoints = [];
    //                     storeResultat = 0;
    //                     storeResultat = resultatPoints.push(points);
    //                 }

    //                 if (resultatPoints.length <= 3) {
    //                     storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
    //                 }

    //                 if (points > resultatScore) {
    //                     resultatScore = resultatScore + storeResultat;
    //                     resultatPoints = [];
    //                     storeResultat = 0;
    //                 }

    //                 // countPoints = points;
    //                 resultatScore -= points;

    //                 updateResultatScoreDisplay();
    //                 historyColorText();
    //                 // updateResultPoints();
    //                 updateResultatPointsDisplay();
    //                 previewScorePoints();
    //                 numb25Disab();

    //                 console.log(`function1`);
    //             }

    //             if (this.textContent == 25) {
    //                 let points = parseInt(this.textContent);
    //                 resultatPoints.push(points);

    //                 if (resultatPoints.length > 3) {
    //                     resultatPoints = [];
    //                     storeResultat = 0;
    //                     storeResultat = resultatPoints.push(points);
    //                 }

    //                 if (resultatPoints.length <= 3) {
    //                     storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
    //                 }

    //                 if (points >= resultatScore) {
    //                     resultatScore = resultatScore + storeResultat;
    //                     resultatPoints = [];
    //                     storeResultat = 0;
    //                 }

    //                 // countPoints = 25;
    //                 resultatScore -= points;

    //                 updateResultatScoreDisplay();
    //                 numb25True();
    //                 historyColorText();
    //                 updateResultatPointsDisplay();
    //                 // updateResultPoints();
    //                 previewScorePoints();
    //             }

    //             console.log('f1: ' + this.textContent);
    //         }

    //     })

    // })

    function minusPoints(point) {
        if (point <= 24) {
            let points = parseInt(point) * 2;
            resultatPoints.push(points);

            resultatScore -= points;

            updateResultatScoreDisplay();
            historyColorText();
            // updateResultPoints();
            updateResultatPointsDisplay();
            previewScorePoints();
            numb25Disab();
            functionActive = true;
            proverkaLengthPoints(points);
            console.log(`resultatScore: ${resultatScore}`);
        }
    }

    function proverkaLengthPoints(points) { // если длина очков больше 3, то обнуляем и кстанавливаем последнюю цифру
        if (resultatPoints.length > 3) {
            console.log('object1');
            resultatPoints = [];
            storeResultat = 0;
            storeResultat = resultatPoints.push(points);
            return storeResultat;
        }

        if (resultatPoints.length <= 3) { //  если длина выпавших чисел меньше или ровно, то суммируем выпавшие числа
            storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
            console.log('object2: ' + storeResultat);
            return storeResultat;
        }

        if (points > resultatScore) { // если очков быльше общей суммы, мы возвращаем сумму, а очки обнуляем
            console.log('object3');
            resultatScore = resultatScore + storeResultat;
            resultatPoints = [];
            storeResultat = 0;
        }
    }

    multi2_el.addEventListener('click', function () {

        functionActive = !functionActive;

        numberElements.forEach(function (el) {
            el.addEventListener('click', function () {
                if (functionActive === false) {
                    minusPoints(this.textContent);
                }
            })

            // if (this.textContent == 25) {
            //     let points = parseInt(this.textContent);
            //     resultatPoints.push(points);


            //     if (resultatPoints.length > 3) {
            //         resultatPoints = [];
            //         storeResultat = 0;
            //         storeResultat = resultatPoints.push(points);
            //     }

            //     if (resultatPoints.length <= 3) {
            //         storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
            //     }

            //     if (points >= resultatScore) {
            //         resultatScore = resultatScore + storeResultat;
            //         resultatPoints = [];
            //         storeResultat = 0;
            //     }

            //     // countPoints = 25;
            //     resultatScore -= points;

            //     updateResultatScoreDisplay();
            //     numb25True();
            //     historyColorText();
            //     updateResultatPointsDisplay();
            //     // updateResultPoints();
            //     previewScorePoints();
            // }
        })

    })



    // if (!functionActive) {

    //     console.log(`textContent * 2: ${this.textContent}`);
    //     if (this.textContent <= 24) {
    //         let points = parseInt(this.textContent) * 2;

    //         resultatPoints.push(points);

    //         if (resultatPoints.length > 3) {
    //             resultatPoints = [];
    //             storeResultat = 0;
    //             storeResultat = resultatPoints.push(points);
    //         }

    //         if (resultatPoints.length <= 3) {
    //             storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
    //         }

    //         if (points > resultatScore) {
    //             resultatScore = resultatScore + storeResultat;
    //             resultatPoints = [];
    //             storeResultat = 0;
    //         }

    //         countPoints = points;
    //         resultatScore -= points;


    //         updateResultatScoreDisplay();
    //         historyColorText();
    //         // updateResultPoints();
    //         updateResultatPointsDisplay();
    //         previewScorePoints();
    //         numb25Disab();
    //     }

    //     if (this.textContent == 25) {
    //         let points = parseInt(this.textContent);
    //         resultatPoints.push(points);


    //         if (resultatPoints.length > 3) {
    //             resultatPoints = [];
    //             storeResultat = 0;
    //             storeResultat = resultatPoints.push(points);
    //         }

    //         if (resultatPoints.length <= 3) {
    //             storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
    //         }

    //         if (points >= resultatScore) {
    //             resultatScore = resultatScore + storeResultat;
    //             resultatPoints = [];
    //             storeResultat = 0;
    //         }

    //         countPoints = 25;
    //         resultatScore -= points;

    //         updateResultatScoreDisplay();
    //         numb25True();
    //         historyColorText();
    //         updateResultatPointsDisplay();
    //         // updateResultPoints();
    //         previewScorePoints();
    //     }

    //     // console.log(`button: ${this.textContent}`);

    //     // let number = parseInt(this.id);
    //     // let points = resultatScore - number * 2;
    //     // resultatPoints.push(points);

    //     // if (resultatPoints.length > 3) {
    //     //     resultatPoints = [];
    //     //     storeResultat = 0;
    //     //     storeResultat = resultatPoints.push(points);
    //     // }

    //     // if (resultatPoints.length <= 3) {
    //     //     storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
    //     // }

    //     // if (points > resultatScore) {
    //     //     resultatScore = resultatScore + storeResultat;
    //     //     resultatPoints = [];
    //     //     storeResultat = 0;
    //     // }

    //     // countPoints = points;

    //     // updateResultatScoreDisplay();
    //     // historyColorText();
    //     // // updateResultPoints();
    //     // updateResultatPointsDisplay();
    //     // previewScorePoints();
    //     // numb25Disab();
    //     functionActive = true;
    // }





    // if (this.id === 'number27') {
    //     getMultiplyBy(3);
    // }



    updateResultatScoreDisplay();
    previewScorePoints();


    // numberElements.forEach((element, index) => {
    //     // console.log(`--- Перебираем элемент ${index} ---`);
    //     // console.log('Найденный элемент:', element); // Полный HTML-элемент
    //     // console.log('ID элемента:', element.id);     // Получаем ID (например, "number0")
    //     // console.log('Текст элемента:', element.textContent); // Получаем текст (например, "0")
    //     // console.log('Класс элемента:', element.className); // Получаем классы (например, "home_box_input_btn")



    function champion() {
        champion_textEl.textContent = 'Чемпион Красавчик !!!';
        result_set_points_champion.style.display = 'flex';
        champion_btn_closeEl.textContent = 'Закрыть';
        cub_championEl.style.display = 'flex';

        function centerWindow() {
            let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            let windowElementWidth = result_set_points_champion.offsetWidth;
            let windowElementHeight = result_set_points_champion.offsetHeight;

            let left = (windowWidth - windowElementWidth) / 2;
            let top = (windowHeight - windowElementHeight) / 2;

            result_set_points_champion.style.left = left + "px";
            result_set_points_champion.style.top = top + "px";
        }

        centerWindow();
        window.addEventListener("resize", centerWindow);

        champion_btn_closeEl.addEventListener('click', function () {
            result_set_points_champion.style.display = 'none';
            resultatPoints = [];
            resultatScore = initialScore;
            result_set_points.textContent = resultatScore;
            updateResultatPointsDisplay();
            previewScorePoints();
            numb25Disab();
        });
    }
})