const $form = document.querySelector('#form');
const $buttonMailto =document.querySelector('#trucazo')


$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.prevenDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute(`href','mailto:felipejua9@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('mensaje')}`)

    $buttonMailto.click()

}