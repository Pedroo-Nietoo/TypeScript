let appId = 'abc';

const button = document.querySelector('button')!; //'!' = garante que não é null ou undefined

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(msg: string) {
    // let userName = 'Pedro';
    console.log('Clicked!' + msg);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome"));
}