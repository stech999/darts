document.addEventListener('DOMContentLoaded', function () {
    const result_set_points = document.getElementById('result_set_points');
    const result_set_points_champion = document.getElementById('champion');
    const champion_textEl = document.getElementById('champion_text');
    const cub_championEl = document.getElementById('cub_champion');
    const champion_btn_closeEl = document.getElementById('champion_btn_close');
    let numberElements = document.querySelectorAll("[id^='number']");
    const number25El = document.getElementById('number25');
    let historyEl = document.getElementById('history');
    const multi2_el = document.getElementById('multi2');
    const multi3_el = document.getElementById('multi3');
    const home_box_countingEl = document.getElementById('home_box_counting')
    const home_box_preview_finishEl = document.getElementById('home_box_preview_finish');

    const multi2El = document.getElementById('multi2');
    // const home_box_input_optionalEl = document.querySelectorAll('div[id^="multi"]');
    const saveEl = document.getElementById('save');


    const initialScore = 60;

    let functionActive = true;

    let resultatScore = 60;
    let resultatPoints = [];
    let point25 = false;
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
        if (point25 == true) {
            number25El.classList.add('disabled_numb27');
        } else {
            number25El.classList.remove('disabled_numb27');
        }
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

    // function multyPoints(point, multi) {
    //     if (point == 'multi2') {

    //         resultatPoints.push(point);

    //         resultatScore -= point;

    //         updateResultatScoreDisplay();
    //         historyColorText();
    //         // updateResultPoints();
    //         updateResultatPointsDisplay();
    //         previewScorePoints();
    //         functionActive = true;
    //         proverkaLengthPoints(point);
    //     }

    //     if (point == 'multi3') {
    //         resultatPoints.push(point);

    //         resultatScore -= point;

    //         updateResultatScoreDisplay();
    //         historyColorText();
    //         // updateResultPoints();
    //         updateResultatPointsDisplay();
    //         previewScorePoints();
    //         functionActive = true;
    //         proverkaLengthPoints(point);
    //     }
    // }

    function updatePoints() {
        updateResultatScoreDisplay();
        historyColorText();
        // updateResultPoints();
        updateResultatPointsDisplay();
        previewScorePoints();
    }

    function proverkaLengthPoints(points) { // если длина очков больше 3, то обнуляем и устанавливаем последнюю цифру
        if (resultatPoints.length > 2) {
            resultatPoints = [];
            storeResultat = 0;
            return storeResultat;
        }

        if (resultatPoints.length <= 3) { //  если длина выпавших чисел меньше или ровно, то суммируем выпавшие числа
            storeResultat = resultatPoints.reduce((accum, currentValue) => accum + currentValue, 0);
            return storeResultat;
        }

        if (points > resultatScore) { // если очков быльше общей суммы, мы возвращаем сумму, а очки обнуляем
            resultatScore = resultatScore + storeResultat;
            resultatPoints = [];
            storeResultat = 0;
        }
    }


    function test(aaa) {
        console.log(`true / false: ${aaa} == ${functionActive}`);
    }

    saveEl.addEventListener('click', () => {
        console.log(`save`);
    })

    numberElements.forEach(function (el) {
        el.addEventListener('click', function () {
            functionActive = true;
            if (functionActive === true) {
                if (el.textContent <= 25) {
                    let point = parseInt(this.textContent);
                    // proverkaLengthPoints(point); // кажется нужно добавить проверку на функцию

                    // resultatPoints.push(point);
                    resultatScore -= point;
                    console.log(`number: ${point}`);

                    updatePoints();
                    point25 = false;
                    numb25True();
                    test('numberElements');
                }
            }
            functionActive = false;
        })

    })

    multi2El.addEventListener('click', function () {
        functionActive = false;
        if (functionActive === false) {
            numberElements.forEach(function (el) {
                el.addEventListener('click', function () {
                    let point = parseInt(this.textContent);
                    if (point <= 25) {

                        // proverkaLengthPoints(point); // кажется нужно добавить проверку на функцию

                        resultatScore -= point * 2;
                        console.log(`point: ${point * 2}`);
                        // resultatPoints.push(point);

                        updatePoints();
                        point25 = false;
                        numb25True();

                        test('multi2El');
                    }
                })
            })
            functionActive = false;
        }
    })

    // home_box_input_optionalEl.forEach((element, multy) => {
    //     element.addEventListener('click', function () {
    //         functionActive = true;
    //         if (functionActive === true) {
    //             numberElements.forEach(function (el) {
    //                 el.addEventListener('click', function () {
    //                     let point = parseInt(this.textContent);
    //                     if (point <= 25) {

    //                         // proverkaLengthPoints(point); // кажется нужно добавить проверку на функцию

    //                         resultatScore -= point * (multy + 2);
    //                         console.log(`point: ${point * (multy + 2)}`);
    //                         // resultatPoints.push(point);

    //                         updatePoints();
    //                         point25 = false;
    //                         numb25True();
    //                         test();
    //                     }
    //                 })
    //             })
    //             functionActive = false;
    //         }
    //     })
    // })

    // multi2_el.addEventListener('click', function () {
    //     point25 = false;
    //     numb25True();
    //     functionActive = !functionActive;

    //     numberElements.forEach(function (el) {
    //         el.addEventListener('click', function () {
    //             if (functionActive === false) {

    //                 minusPoints(this.textContent, 2);
    //                 console.log(`push: 2x`);

    //             }
    //         })
    //     })
    // })

    // multi3_el.addEventListener('click', function () {

    //     functionActive = false;

    //     if (this.id == 'multi3') {
    //         point25 = true;
    //         numb25True();
    //     }
    //     console.log(`this.id: ${this.id}`);

    //     numberElements.forEach(function (el) {
    //         el.addEventListener('click', function () {
    //             if (functionActive === false) {

    //                 minusPoints(this.textContent, 3);

    //                 console.log(`push: 3x`);
    //             }
    //         })
    //     })
    // })

    // numb25True();

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
        });
    }
})