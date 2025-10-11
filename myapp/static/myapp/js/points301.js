document.addEventListener('DOMContentLoaded', function () {
    const result_set_points_nikolay = document.getElementById('result_set_points_nikolay');
    const result_set_points_krasavchik = document.getElementById('result_set_points_krasavchik');
    const result_set_points_champion = document.getElementById('champion');
    const champion_textEl = document.getElementById('champion_text');
    const cub_championEl = document.getElementById('cub_champion');
    const champion_btn_closeEl = document.getElementById('champion_btn_close');
    let numberElements = document.querySelectorAll("[id^='number']");
    const number25El = document.getElementById('number25');
    const multi2_el = document.getElementById('multi2');
    const multi3_el = document.getElementById('multi3');
    let historynikolay = document.getElementById('historynikolay');
    const homeBoxCountingNikolayEl = document.getElementById('homeBoxCountingNikolay')
    const homeBoxPreviewFinishNikolay = document.getElementById('homeBoxPreviewFinishNikolay');


    let inputNumbEl = document.getElementById('inputNumb');
    let applyNumberBtnEl = document.getElementById('applyNumberBtn');

    let inputFlug = false; // для активации поля ввода очков
    let choiseUser = 'nikolay'; // krasavchick

    let initialScore = 301;

    let resultatScoreNikolay = 301; // nikolay
    let storeResultatScoreNikolay = 301; // nikolay
    let resultatPointsNikolay = []; // nikolay
    let storeResultatNikolay = 0; // nikolay

    let resultatScoreKrasavchick = 301; // krasavchick
    let storeResultatScoreKrasavchick = 301; // krasavchick
    let resultatPointsKrasavchick = []; // krasavchick
    let storeResultatKrasavchick = 0; // krasavchick

    let point25 = false;

    function updateResultatScoreDisplay() {
        if (choiseUser === 'nikolay') {
            result_set_points_nikolay.textContent = resultatScoreNikolay;
        }

        if (choiseUser === 'krasavchick') {
            result_set_points_krasavchik.textContent = resultatScoreNikolay;
        }
    }

    function updateResultatPointsDisplay() {
        historynikolay.textContent = resultatPointsNikolay.join(' | ');
    }

    function previewScorePoints() {
        if (resultatScoreNikolay % 2 === 0 && resultatScoreNikolay <= 50) {
            homeBoxCountingNikolayEl.style.display = 'flex';
            homeBoxPreviewFinishNikolay.classList.add('blinking-active');
            homeBoxPreviewFinishNikolay.textContent = resultatScoreNikolay / 2;
        } else {
            homeBoxCountingNikolayEl.style.display = 'none';
            homeBoxPreviewFinishNikolay.classList.remove('blinking-active');
            homeBoxPreviewFinishNikolay.textContent = '';
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
        historynikolay.classList.add('home_box_preview_color');
        setTimeout(() => {
            historynikolay.classList.remove('home_box_preview_color');
        }, 1000);
    }

    function updatePoints() {
        updateResultatScoreDisplay();
        historyColorText();
        updateResultatPointsDisplay();
        previewScorePoints();
        proverkaLengthPoints();
    }

    function choiceGame() {
        applyNumberBtnEl.addEventListener('click', function () {
            if (inputFlug === true) {
                let inputValue = parseInt(inputNumbEl.value, 10);
                initialScore = inputValue;
                resultatScoreNikolay = inputValue;
                updatePoints()
                inputFlug = false;
                inputNumbEl.classList.add('blinkInput');
            }
        })
    }

    function checkScore() {
        if (resultatScoreNikolay == 1) {
            updatePoints();
            resultatScoreNikolay += storeResultatNikolay;
            storeResultatScoreNikolay += storeResultatNikolay;
            resultatPointsNikolay = [];
            storeResultatNikolay = 0;
        }
    }

    function checkPoints(multi) {
        if (multi == 2) {
            if (resultatScoreNikolay == 0) {
                champion();
            }
        }

        if (multi == 3) {
            if (resultatScoreNikolay == 0) {
                updatePoints();
                resultatScoreNikolay += storeResultatNikolay;
                storeResultatScoreNikolay += storeResultatNikolay;
                resultatPointsNikolay = [];
                storeResultatNikolay = 0;
            }
        }
    }

    function proverkaLengthPoints() { // если длина очков больше 3, то обнуляем и кстанавливаем последнюю цифру
        // if (choiseUser === 'nikolay') {

        // }
        if (resultatPointsNikolay.length < 4) { // если длина выпавших чисел меньше или ровно, то суммируем выпавшие числа
            storeResultatNikolay = resultatPointsNikolay.reduce((accum, currentValue) => accum + currentValue, 0);
            storeResultatScoreNikolay -= storeResultatNikolay;
            if (resultatPointsNikolay.length == 3) {
                resultatPointsNikolay = [];
            }
        }

        if (resultatScoreNikolay < -1) {
            resultatScoreNikolay += storeResultatNikolay;
            storeResultatScoreNikolay += storeResultatNikolay;
            resultatPointsNikolay = [];
            storeResultatNikolay = 0;
            updatePoints();
        }
    }

    function number() {
        let multi = 1;
        numberElements.forEach(function (el) {
            el.addEventListener('click', function () {
                let points = parseInt(this.textContent);

                if (multi == 1) {
                    resultatPointsNikolay.push(points);
                    resultatScoreNikolay -= points;
                    // resultatPointsNikolay.push(`${points / 2}ᴰ`);
                }

                if (multi > 1) {

                    points *= multi;

                    if (multi == 2) {
                        resultatPointsNikolay.push(points);
                        resultatScoreNikolay -= points;
                        checkPoints(multi);
                        // resultatPointsNikolay.push(`${points / 2}ᴰ`);
                    }

                    if (multi == 3) {
                        resultatPointsNikolay.push(points);
                        resultatScoreNikolay -= points;
                        checkPoints(multi);
                        // resultatPointsNikolay.push(`${points / 3}ᵀ`);
                    }

                    multi = 1;
                }

                // resultatPointsNikolay.push(points);
                // resultatScoreNikolay -= points;
                checkScore();
                updatePoints();
                point25 = false;
                numb25True();
            })
        })

        multi2_el.addEventListener('click', function () {
            multi = 2;
            point25 = false;
            numb25True();
        })

        multi3_el.addEventListener('click', function () {
            multi = 3;
            point25 = true;
            numb25True();

        })
    }

    inputNumbEl.addEventListener('focus', function () {
        inputFlug = true;
        inputNumbEl.value = '';
        resultatPointsNikolay = [];
        choiceGame();
    })

    number();
    updateResultatScoreDisplay();
    previewScorePoints();

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
            resultatPointsNikolay = [];
            resultatScoreNikolay = initialScore;
            result_set_points_nikolay.textContent = resultatScoreNikolay;
            updateResultatPointsDisplay();
            previewScorePoints();
        });
    }
})

// numberElements.forEach((element, index) => {
//     // console.log(`--- Перебираем элемент ${index} ---`);
//     // console.log('Найденный элемент:', element); // Полный HTML-элемент
//     // console.log('ID элемента:', element.id);     // Получаем ID (например, "number0")
//     // console.log('Текст элемента:', element.textContent); // Получаем текст (например, "0")
//     // console.log('Класс элемента:', element.className); // Получаем классы (например, "home_box_input_btn")