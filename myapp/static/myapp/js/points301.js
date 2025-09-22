document.addEventListener('DOMContentLoaded', function () {
    const result_set_points = document.getElementById('result_set_points');
    const result_set_points_champion = document.getElementById('champion');
    let numberElements = document.querySelectorAll("[id^='number']");
    let historyEl = document.getElementById('history');
    const push2_el = document.getElementById('number26');
    const push3_el = document.getElementById('number27');
    const push_clear_el = document.getElementById('number28');


    let resultat = 301;
    let resultatPoints = [];
    let clickCount = 0;

    updatePoints();

    function updateScore() {
        result_set_points.textContent = resultat;
    }

    function updatePoints(element) {
        console.log('ready: ' + element);
    }

    function updateResultDisplay() {
        historyEl.textContent = resultatPoints.join(' | ');
    }

    function getPoints(pt) {
        resultatPoints.push(pt);
        updatePoints();
        return pt;
    }

    function performAction() {
        
    }

    numberElements.forEach(function (el) {
        el.addEventListener('click', function () {
            let number = parseInt(this.textContent);
            resultatPoints.push(number);
            updateResultDisplay();
            clickCount++;

            if (clickCount == 3) {
                performAction();
            }

        })
    })


    getPoints();
















    // console.log('mass: ' + resultatPoints);

    // push2_el.addEventListener('click', () => {
    //     getMultiplyBy(2);
    // })

    // push3_el.addEventListener('click', () => {
    //     getMultiplyBy(3);
    // })

    // let multiplyBy = getMultiplyBy();
    // resMultiply(resPoints, multiplyBy);
    // minus(resPoints);

    // numberElements.forEach((element, index) => {
    //     // console.log(`--- Перебираем элемент ${index} ---`);
    //     // console.log('Найденный элемент:', element); // Полный HTML-элемент
    //     // console.log('ID элемента:', element.id);     // Получаем ID (например, "number0")
    //     // console.log('Текст элемента:', element.textContent); // Получаем текст (например, "0")
    //     // console.log('Класс элемента:', element.className); // Получаем классы (например, "home_box_input_btn")

    //     element.addEventListener('click', function () {
    //         if (this.textContent <= 25) {
    //             let number = parseInt(this.textContent);
    //             sum -= number;
    //             result_set_points.textContent = sum;
    //             console.log(number);
    //         }
    //         else if (this.id === 'number26') {

    //         }
    //     })

    // })

    // numberElements.forEach(function (el) {
    //     el.addEventListener('click', function () {
    //         let number = parseInt(el.textContent);    // !isNaN(number)
    //         console.log('push' + el);
    //         if (number) {

    //         }
    //         else if (push3_el) {
    //             sum -= number * 3;
    //             result_set_points.textContent = sum;
    //         }
    //         else {
    //             sum -= number;
    //             result_set_points.textContent = sum;

    //             if (sum == 0) {
    //                 champion();
    //             }
    //             else if (sum < 0) {
    //                 console.log('сумма возвращается');
    //             } else {
    //                 console.log('загрушка');
    //             }
    //         }
    //     })
    // })

    function champion() {
        result_set_points_champion.textContent = 'Чемпион'
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
        result_set_points_champion.style.display = 'flex';
        centerWindow();
        window.addEventListener("resize", centerWindow);
    }
})