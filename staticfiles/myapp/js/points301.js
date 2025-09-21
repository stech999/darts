document.addEventListener('DOMContentLoaded', function () {
    const result_set_points = document.getElementById('result_set_points');
    const result_set_points_champion = document.getElementById('champion');
    let numberElements = document.querySelectorAll("[id^='number']");

    let sum = 301;
    result_set_points.textContent = sum;

    numberElements.forEach(function (el) {
        el.addEventListener('click', function () {
            let number = parseInt(el.textContent);
            if (!isNaN(number)) {
                sum -= number;
                result_set_points.textContent = sum;
                if (sum == 0) {
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
                else if (sum < 0) {
                    console.log('сумма возвращается');
                } else {

                }
            }
        })
    })
})