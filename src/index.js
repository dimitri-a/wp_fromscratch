const messages =require('./messages');

var app = document.getElementById('app');

app.innerHTML =messages.hi + ' ghghgg!!'

if (module.hot) {
    module.hot.accept();
}