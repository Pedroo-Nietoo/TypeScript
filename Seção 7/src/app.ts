//* Generic type ->

const names: Array<string> = ['Pedro', 'João', 'Júlia'] //string[]

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});