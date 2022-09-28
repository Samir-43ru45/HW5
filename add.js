const inputs = document.querySelectorAll('input');
document.body.addEventListener('input',(event) => {
    const target = event.target;
    const request = new XMLHttpRequest();
    request.open('GET','data.json');
    request.setRequestHeader('Content-type','application/json');
    request.send();
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response);
        inputs.forEach((input) => {
            if (target === input) return
            if (!target.value) return input.value = '';
            if (target.id === 'som') input.value = (target.value / data[input.id]).toFixed(2);
            else input.value = (target.value * data[target.id] / data[input.id]).toFixed(2);
        })
    })
})