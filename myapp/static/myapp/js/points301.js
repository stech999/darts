document.addEventListener('DOMContentLoaded', function () {
    const result_set_points = document.getElementById('result_set_points');
    const result_set_points_champion = document.getElementById('champion');
    const champion_textEl = document.getElementById('champion_text');
    const cub_championEl = document.getElementById('cub_champion');
    const champion_btn_closeEl = document.getElementById('champion_btn_close');
    let numberElements = document.querySelectorAll("[id^='number']");
    let historyEl = document.getElementById('history');
    const push3_el = document.getElementById('number27');


    let resultatScore = 30;
    let resultatPoints = [];
    let countPoints = 0;

    function updateResultatScoreDisplay() {
        result_set_points.textContent = resultatScore;
        choiseResultatScore();
    }

    function updateResultatPointsDisplay() {
        historyEl.textContent = resultatPoints.join(' | ');
    }

    function updateResultPoints() {
        resultatScore -= countPoints;
        if (resultatScore <= 0) {
            resultatScore = 0;
        }

        updateResultatScoreDisplay();
    }

    function getMultiplyBy(number) {
        resultatScore -= countPoints * number - countPoints;
        updateResultatScoreDisplay();
    }

    function choiseResultatScore() {
        if (resultatScore === 0) {
            champion();
        }
    }

    function numb25True() {
        push3_el.classList.add('disabled_numb27');
    }

    function numb25Disab() {
        push3_el.classList.remove('disabled_numb27');
    }

    function historyColorText() {
        historyEl.classList.add('home_box_preview_color');
        setTimeout(() => {
            historyEl.classList.remove('home_box_preview_color');
        }, 1000);
    }

    numberElements.forEach(function (el) {
        el.addEventListener('click', function () {
            if (this.textContent <= 24) {
                let number = parseInt(this.textContent);
                resultatPoints.push(number);
                countPoints = number;
                if (resultatPoints.length > 3) {
                    resultatPoints = [];
                    resultatPoints.push(number);
                }

                historyColorText();
                updateResultPoints();
                updateResultatPointsDisplay();
                numb25Disab();
            }

            else if (this.id === 'number25') {
                countPoints = 25;
                resultatPoints.push(25);
                historyColorText();
                updateResultatPointsDisplay();
                updateResultPoints();
                numb25True();
            }

            else if (this.id === 'number26') {
                getMultiplyBy(2);
            }
            else if (this.id === 'number27') {
                getMultiplyBy(3);
            }

        })
    })

    updateResultatScoreDisplay();



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
            resultatScore = 30;
            result_set_points.textContent = resultatScore;
            updateResultatPointsDisplay();
            numb25Disab();
        });
    }
})