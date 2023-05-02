type dataType = number | string
let logged;

function sendAnalytics(data: dataType) {
    console.log(data);
    logged = true;
}

sendAnalytics('The data')