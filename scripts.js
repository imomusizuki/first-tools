// 電卓
const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            display.value = eval(display.value); // 計算結果
        } else {
            display.value += button.textContent; // 値を追加
        }
    });
});

// タイマー
let timer;
let seconds = 0;

document.getElementById('start-timer').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('timer-display').textContent = new Date(seconds * 1000).toISOString().substr(11, 8);
        }, 1000);
    }
});

document.getElementById('stop-timer').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.getElementById('timer-display').textContent = "00:00:00";
});

// 為替計算
document.getElementById('convert').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    const rates = { USD: 0.0091, EUR: 0.0083, JPY: 1 }; // 為替レートの例
    const result = amount * (rates[currency] || 1);
    document.getElementById('conversion-result').textContent = `結果: ${result.toFixed(2)} ${currency}`;
});
