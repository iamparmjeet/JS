let form = document.querySelector('form')
// If we add height and weight here . It will give empty values. We only needs when we submit


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid Height.'
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid Weight.'
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // switch (bmi) {
        //     case (bmi < 18.6) : results.innerHTML = `<span>Your are Under weight: ${bmi}</span>`;
        //         break;
        //     case (bmi > 18.6 && bmi < 24.9) : results.innerHTML = `<span>You are healthy and Normal in range: ${bmi}</span>`;
        //         break;
        //     case (bmi > 24.9) : results.innerHTML = `<span>You are Overweight, Please do something :${bmi}</span>`
        //         break;
        //     default: results.innerHTML = 'Add Your Values'
        // }


        if (bmi < 18.6) {
            results.innerHTML = `<span>Your are Under weight: ${bmi}</span>`
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>You are healthy and Normal in range: ${bmi}</span>`;
        } else if (bmi > 24.9) {
            results.innerHTML = `<span>You are Overweight, Please do something :${bmi}</span>`
        }
    }
    
})