document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const dateString = `${year}年${month}月${day}日`;
        const timeString = `${hours}時${minutes}分${seconds}秒`;
        const dateTimeString = `${dateString} ${timeString}`;

        document.getElementById('clock').textContent = dateTimeString;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

function calculate() {
    let input_num = parseInt(document.getElementById('input_num').value);
    const result_container = document.getElementById('result_container');
    result_container.innerHTML = '';

    if (isNaN(input_num)) {
        document.getElementById('warning').textContent = '数値を入力してください';
        return;
    } else if (input_num < 1) {
        document.getElementById('warning').textContent = '自然数を入力してください';
        return;
    } else {
        document.getElementById('warning').textContent = '';
    }

    let result_array = [input_num];
    while(input_num != 1) {
        if (input_num % 2 == 0) {
            input_num = input_num / 2;
            result_array.push(input_num);
        } else {
            input_num = input_num * 3 + 1;
            result_array.push(input_num);
        }
    }

    result_array.forEach((result) => {
        const result_p = document.createElement('p');
        result_p.textContent = result;
        result_container.appendChild(result_p);
    });

    // const sum = input_num + 100;

    // // 結果を表示
    // document.getElementById('result').textContent = '計算結果: ' + sum;
}