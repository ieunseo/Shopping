const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');

const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    mariadb.query('SELECT * FROM product', function(err, rows) {
        console.log(rows);
    });
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(main_view);
    response.end();
}

function favicon(response) {
    // 여기에 favicon 처리 코드를 추가할 수 있습니다.
}

function redRacket(response) {
    fs.readFile('./img/redRacket.png', function(err, data) {
        if (err) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.write(data);
            response.end();
        }
    });
}

// 새로운 blueRacket 함수 추가
function blueRacket(response) {
    fs.readFile('./img/blueRacket.png', function(err, data) {
        if (err) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.write(data);
            response.end();
        }
    });
}

// 새로운 blackRacket 함수 추가
function blackRacket(response) {
    fs.readFile('./img/blackRacket.png', function(err, data) {
        if (err) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': 'image/png' });
            response.write(data);
            response.end();
        }
    });
}
function order(response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('orderpage');
    response.end();
}
let handle = {};

// 경로와 처리 함수의 매핑
handle['/'] = main;
handle['/order'] = order;
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;  // blueRacket 함수 정의 후 오류 수정됨
handle['/img/blackRacket.png'] = blackRacket; // blackRacket 함수 정의 후 오류 수정됨
handle['/favicon.ico'] = favicon;

exports.handle = handle;