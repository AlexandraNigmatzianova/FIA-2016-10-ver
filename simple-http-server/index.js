const eol = require('os').EOL;
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var mailer = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
        user: 'mail@consapp.ru',
        pass: 'at15NyJQdCQ4'
    }
});

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/test', function (req, res) {
    console.log(req.body);
    res.json({
        result: true
    });
});

app.post('/', function (req, res) {
    var site_development = `${req.body.checkbox_site_development}`;
    var app_development = `${req.body.checkbox_app_development}`;
    var training = `${req.body.checkbox_training}`;
    var api = `${req.body.checkbox_api}`;
    var crm = `${req.body.checkbox_crm}`;
    var PC_app_development = `${req.body.checkbox_PC_app_development}`;
    var designing = `${req.body.checkbox_designing}`;
    var design = `${req.body.checkbox_design}`;
    var audit = `${req.body.checkbox_audit}`;
    var advancement = `${req.body.checkbox_advancement}`;
    var maintenance = `${req.body.checkbox_maintenance}`;
    var servArray = [site_development, app_development, training, api, crm, PC_app_development, designing, design, audit, advancement, maintenance];
    Array.prototype.clean = function (deleteValue) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    };

    servArray.clean('undefined');
    var organization = `Организация ${req.body.organization}`;
    var fio = `ФИО ${req.body.fio}`;
    var email = `E-mail ${req.body.email}`;
    var phone = `Телефон ${req.body.number}`;
    var service = `Услуга ${servArray}`;
    var problem = `Задачи: ${req.body.problem}`;
    var budget = `Бюджет ${req.body.budget}`;
    var time = `Сроки ${req.body.time}`;
    var mailOptions = {
        from: 'Служба поддержки CONSApp <mail@consapp.ru>',
        to: 'carolinaara10@gmail.com',
        subject: "FIA",
        text: [organization, fio, email, phone, service, problem, budget, time].join('\r\n'),
        html: [organization, fio, email, phone, service, problem, budget, time].join('<br>')
    };

    mailer.sendMail(mailOptions, function (error, info) {
        res.json({
            result: (!!!error)
        });
    });
})
;

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});