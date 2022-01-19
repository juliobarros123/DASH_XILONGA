//new PerfectScrollbar('#appication');

const appication = document.querySelector('#appication');
const ps = new PerfectScrollbar(appication);



window.addEventListener('load', function () {
    const inputs = document.querySelectorAll('.toggle-password')
    console.log(inputs)
    if (inputs)
    inputs.forEach(element => {
        const toggler = element.querySelector('.toggler');
        const input = element.querySelector('.input--')
        toggler.addEventListener('click', function () {
            input.type = input.type == 'password' ? 'text' : 'password';

            if (toggler.classList.contains('fa-eye')) {
                toggler.classList.remove('fa-eye')
                toggler.classList.add('fa-eye-slash')
            }
            else {
                toggler.classList.remove('fa-eye-slash')
                toggler.classList.add('fa-eye')
            }

        })
    });

})