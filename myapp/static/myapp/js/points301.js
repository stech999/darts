document.addEventListener('DOMContentLoaded', function () {
    const result_set_points_nikolay = document.getElementById('result_set_points_nikolay');
    const result_set_points_krasavchick = document.getElementById('result_set_points_krasavchick');

    const result_set_points_champion = document.getElementById('champion');
    const champion_textEl = document.getElementById('champion_text');
    const cub_championEl = document.getElementById('cub_champion');
    const champion_btn_closeEl = document.getElementById('champion_btn_close');

    let numberElements = document.querySelectorAll("[id^='number']");
    const number25El = document.getElementById('number25');
    const multi2_el = document.getElementById('multi2');
    const multi3_el = document.getElementById('multi3');

    let historynikolay = document.getElementById('historynikolay');
    let historykrasavchick = document.getElementById('historykrasavchick');

    const homeBoxCountingNikolayEl = document.getElementById('homeBoxCountingNikolay')
    const homeBoxCountingkrasavchick = document.getElementById('homeBoxCountingkrasavchick')

    const homeBoxPreviewFinishNikolay = document.getElementById('homeBoxPreviewFinishNikolay');
    const homeBoxPreviewFinishkrasavchick = document.getElementById('homeBoxPreviewFinishkrasavchick');

    let inputNumbEl = document.getElementById('inputNumb');
    let applyNumberBtnEl = document.getElementById('applyNumberBtn');

    const userNikolay = document.getElementById('userNikolay');
    const userKrasavchick = document.getElementById('userKrasavchick');


    let inputFlug = false; // для активации поля ввода очков
    let choiseUser = 'nikolay'; // krasavchick

    let initialScore = 301;

    let resultatScoreNikolay = 301; // nikolay
    let storeResultatScoreNikolay = 301; // nikolay
    let resultatPointsNikolay = []; // nikolay
    let storeResultatNikolay = 0; // nikolay

    let resultatScoreKrasavchick = 301; // krasavchick
    let storeResultatScoreKrasavchick = 301; // krasavchick
    let resultatPointsKrasavchick = []; // resultatScoreKrasavchick
    let storeResultatKrasavchick = 0; // krasavchick

    let point25 = false;

    function updateResultatScoreDisplay() {
        result_set_points_nikolay.textContent = resultatScoreNikolay;
        result_set_points_krasavchick.textContent = resultatScoreKrasavchick;
    }

    function updateResultatPointsDisplay() {
        historynikolay.textContent = resultatPointsNikolay.join(' | ');
        historykrasavchick.textContent = resultatPointsKrasavchick.join(' | ');
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

        if (resultatScoreKrasavchick % 2 === 0 && resultatScoreKrasavchick <= 50) {
            homeBoxCountingkrasavchick.style.display = 'flex';
            homeBoxPreviewFinishkrasavchick.classList.add('blinking-active');
            homeBoxPreviewFinishkrasavchick.textContent = resultatScoreKrasavchick / 2;
        } else {
            homeBoxCountingkrasavchick.style.display = 'none';
            homeBoxPreviewFinishkrasavchick.classList.remove('blinking-active');
            homeBoxPreviewFinishkrasavchick.textContent = '';
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
        if (choiseUser === 'nikolay') {
            historynikolay.classList.add('home_box_preview_color');
            setTimeout(() => {
                historynikolay.classList.remove('home_box_preview_color');
            }, 1000);
        }
        if (choiseUser === 'krasavchick') {
            historykrasavchick.classList.add('home_box_preview_color');
            setTimeout(() => {
                historykrasavchick.classList.remove('home_box_preview_color');
            }, 1000);
        }
    }

    function updatePoints() {
        updateResultatScoreDisplay();
        historyColorText();
        updateResultatPointsDisplay();
        previewScorePoints();
        proverkaLengthPoints();
    }

    function choiseUserGIF() {
        if (choiseUser === 'nikolay') {
            userNikolay.classList.add('userNikolay');
        }
        if (choiseUser === 'krasavchick') {
            userKrasavchick.classList.add('userKrasavchick');
        }
    }

    function choiceGame() {
        applyNumberBtnEl.addEventListener('click', function () {
            if (inputFlug === true) {
                let inputValue = parseInt(inputNumbEl.value, 10);
                initialScore = inputValue;
                resultatScoreKrasavchick = inputValue;
                resultatScoreNikolay = inputValue;

                inputFlug = false;

                inputNumbEl.classList.add('blinkInput');
                setTimeout(() => {
                    inputNumbEl.classList.remove('blinkInput');
                }, 1000);
                updatePoints()
            }
        })
    }

    function checkScore() {
        if (choiseUser === 'nikolay') {
            if (resultatScoreNikolay == 1) {
                updatePoints();
                resultatScoreNikolay += storeResultatNikolay;
                storeResultatScoreNikolay += storeResultatNikolay;
                resultatPointsNikolay = [];
                storeResultatNikolay = 0;
            }
        }

        if (choiseUser === 'krasavchick') {
            if (resultatScoreKrasavchick == 1) {
                updatePoints();
                resultatScoreKrasavchick += storeResultatKrasavchick;
                storeResultatScoreKrasavchick += storeResultatKrasavchick;
                resultatPointsKrasavchick = [];
                storeResultatKrasavchick = 0;
            }
        }
    }

    function checkPoints(multi) {
        if (choiseUser === 'nikolay') {
            if (multi == 2) {
                if (resultatScoreNikolay == 0) {
                    champion('Николай');
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

        if (choiseUser === 'krasavchick') {
            if (multi == 2) {
                if (resultatScoreKrasavchick == 0) {
                    champion('Красавчик');
                }
            }

            if (multi == 3) {
                if (resultatScoreKrasavchick == 0) {
                    updatePoints();
                    resultatScoreKrasavchick += storeResultatKrasavchick;
                    storeResultatScoreKrasavchick += storeResultatKrasavchick;
                    resultatPointsKrasavchick = [];
                    storeResultatKrasavchick = 0;
                }
            }
        }
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    async function jsonAwait(point) {
        try {
            const response = await fetch('/api/save-data/', { // URL вашего эндпоинта
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken') // Добавляем CSRF-токен
                },
                body: JSON.stringify({
                    points: point
                }) // Отправляем очки в JSON
            });

            if (!response.ok) {
                // Попытка получить сообщение об ошибке от сервера
                let errorData = {
                    message: `HTTP error! status: ${response.status}`
                };
                try {
                    errorData = await response.json();
                } catch (e) {
                    // Если ответ не JSON, используем стандартное сообщение
                }
                throw new Error(errorData.error || errorData.message); // Выбрасываем ошибку с сообщением от сервера
            }

            const data = await response.json();
            console.log('Ответ от сервера:', data);
            alert(`Вы попали на ${point} очков!`);
        } catch (err) {
            console.error('Произошла ошибка:', err.message); // Выводим более конкретное сообщение об ошибке
            alert(`Произошла ошибка при записи очков: ${err.message}`);
        }
    }

    function proverkaLengthPoints() { // если длина очков больше 3, то обнуляем и кстанавливаем последнюю цифру
        if (choiseUser === 'nikolay') {
            if (resultatPointsNikolay.length < 4) { // если длина выпавших чисел меньше или ровно, то суммируем выпавшие числа
                storeResultatNikolay = resultatPointsNikolay.reduce((accum, currentValue) => accum + currentValue, 0);
                storeResultatScoreNikolay -= storeResultatNikolay;
                if (resultatPointsNikolay.length == 3) {
                    resultatPointsNikolay = [];
                    choiseUser = 'krasavchick';
                    userNikolay.classList.remove('userNikolay');
                    userKrasavchick.classList.add('userKrasavchick');
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
        if (choiseUser === 'krasavchick') {
            if (resultatPointsKrasavchick.length < 4) { // если длина выпавших чисел меньше или ровно, то суммируем выпавшие числа
                storeResultatKrasavchick = resultatPointsKrasavchick.reduce((accum, currentValue) => accum + currentValue, 0);
                storeResultatScoreKrasavchick -= storeResultatKrasavchick;
                if (resultatPointsKrasavchick.length == 3) {
                    resultatPointsKrasavchick = [];
                    choiseUser = 'nikolay';
                    userKrasavchick.classList.remove('userKrasavchick');
                    userNikolay.classList.add('userNikolay');
                }
            }

            if (resultatScoreKrasavchick < -1) {
                resultatScoreKrasavchick += storeResultatKrasavchick;
                storeResultatScoreKrasavchick += storeResultatKrasavchick;
                resultatPointsKrasavchick = [];
                storeResultatKrasavchick = 0;
                updatePoints();
            }
        }
    }

    function number() {
        let multi = 1;
        numberElements.forEach(function (el) {
            el.addEventListener('click', function () {
                let points = parseInt(this.textContent);

                if (choiseUser === 'nikolay') {
                    if (multi == 1) {
                        jsonAwait(points);
                        resultatPointsNikolay.push(points);
                        resultatScoreNikolay -= points;
                    }

                    if (multi > 1) {
                        points *= multi;
                        if (multi == 2) {
                            resultatPointsNikolay.push(points);
                            resultatScoreNikolay -= points;
                            checkPoints(multi);
                        }

                        if (multi == 3) {
                            resultatPointsNikolay.push(points);
                            resultatScoreNikolay -= points;
                            checkPoints(multi);
                        }

                        multi = 1;
                    }
                }

                if (choiseUser === 'krasavchick') {
                    if (multi == 1) {
                        resultatPointsKrasavchick.push(points);
                        resultatScoreKrasavchick -= points;
                    }

                    if (multi > 1) {
                        points *= multi;
                        if (multi == 2) {
                            resultatPointsKrasavchick.push(points);
                            resultatScoreKrasavchick -= points;
                            checkPoints(multi);
                        }

                        if (multi == 3) {
                            resultatPointsKrasavchick.push(points);
                            resultatScoreKrasavchick -= points;
                            checkPoints(multi);
                        }

                        multi = 1;
                    }
                }



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
        resultatPointsKrasavchick = [];
        choiceGame();
    })


    number();
    updateResultatScoreDisplay();
    previewScorePoints();
    choiseUserGIF()

    function champion(name) {
        champion_textEl.textContent = `Чемпион ${name} !!!`;
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
            resultatPointsKrasavchick = [];
            resultatScoreNikolay = initialScore;
            resultatScoreKrasavchick = initialScore;
            result_set_points_nikolay.textContent = resultatScoreNikolay;
            result_set_points_krasavchick.textContent = resultatScoreKrasavchick;
            console.log(`resultatScoreNikolay: ${resultatScoreNikolay}`);
            console.log(`resultatScoreKrasavchick: ${resultatScoreKrasavchick}`);
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