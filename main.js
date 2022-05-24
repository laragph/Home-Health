function round_number(num) {
    num = num * 100;
    num = Math.round(num);
    num = num / 100;
    num = num.toFixed(2);

    return num;
}

const inputs = document.querySelectorAll("[name='qty']");
inputs.forEach(function (input) {
    input.addEventListener('change', function(e) {
        const this_input = e.target;
        const input_value = parseFloat(this_input.value);
        const this_row = this_input.closest(".row");

        const dollar = this_row.querySelector(".dollar");
        const dollar_price = parseFloat(dollar.dataset.price);
        const dollar_cost = input_value * dollar_price;
        const dollar_span = dollar.querySelector("span");
        dollar_span.innerHTML = round_number(dollar_cost);

        const hour = this_row.querySelector(".hour");
        const hour_price = parseFloat(hour.dataset.price);
        const hour_cost = input_value * hour_price;
        const hour_span = hour.querySelector("span");
        hour_span.innerHTML = round_number(hour_cost);

        dollar.classList.add("active");
        hour.classList.add("active");

    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(function(dot) {
        dot.addEventListener("click", function(e) {
            e.preventDefault();
            const clicked_dot = e.target.closest(".dot");
            if (clicked_dot.classList.contains("active")) {
                clicked_dot.classList.remove("active");
            } else {
                clicked_dot.classList.add("active");
            }
            });
        });
    });
