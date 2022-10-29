$(document).ready(function () {
   // var data = {};
    //var datasent = {};
   // $('#usersProblem').serializeArray().forEach(function (field) {
   //     datasent[field.name] = field.value;
   // });
    $('#usersProblem').on('submit', function (e) {
        e.preventDefault();
        var data = {};
       // var dataserv={};
        console.log($('#usersProblem').serializeArray());
        $('#usersProblem').serializeArray().forEach(function (field) {
            data[field.name] = field.value;
        });
        /*Array.prototype.clean = function(deleteValue) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == deleteValue) {
                    this.splice(i, 1);
                    i--;
                }
            }
            return this;
        };

        data.clean(undefined);*/
     //   $('.form-check-input').serializeArray().forEach(function (item) {
     //       dataserv[item.id] = item.value;
     //   });
        //var input = document.form.children[0];
       // var dataall=data.concat(dataserv);
        console.log($('#submit-order').val());
        console.log(data);
       /* console.log(dataserv);*/
        console.log("Request start", data);
        $('#submit-order').val("Отправляется...");
        $.post('http://192.168.1.39:3000/', data, function (res) {
            console.log("Request end", res);
            $('#submit-order').val("Отправлено!");
            console.log($('#submit-order').val());
           // $('#submit-help-block').fadeTo('fast',1.00);
            $('#submit-help-block2').fadeTo(5000,1.00);
            $('#empty').fadeTo(15000,0.01,0,function (w) {
                $('#submit-order').val("ЗАКАЗАТЬ");
            });
            /*$('#usersProblem').on('submit', function (m) {
                m.preventDefault();
                $('#submit-order').val("ЗАКАЗАТЬ");
                $('#usersProblem').on('submit', function (f) {
                    f.preventDefault();
                    var data = {};
                    $('#usersProblem').serializeArray().forEach(function (field) {
                        data[field.name] = field.value;
                    });
                    //var input = document.form.children[0];
                    console.log($('#submit-order').val());
                    console.log("Request start", data);
                    $('#submit-order').val("Отправляется...");
                    $.post('http://127.0.0.1:3000/test', data, function (res) {
                        console.log("Request end", res);
                        $('#submit-order').val("Отправлено!");
                        console.log($('#submit-order').val());
                        $('#submit-help-block').fadeTo('fast', 1.00);
                    });
                });
            });*/

            //    var data = {};
            //    $('#usersProblem').serializeArray().forEach(function (field) {
            //        data[field.name] = field.value;
            //    });
                //var input = document.form.children[0];
            //    console.log($('#submit-order').val());
            //    console.log("Request start", data);
            //    $('#submit-order').val("Отправляется...");
            //    $.post('http://127.0.0.1:3000/test', data, function (res) {
            //        console.log("Request end", res);
            //        $('#submit-order').val("Отправлено!");
            //        console.log($('#submit-order').val());
            //        $('#submit-help-block').fadeTo('fast',1.00);
           // console.log(data,datasent);
           // $('#problem').onchange = function (){
             //   $('#submit-order').removeAttr('disabled');
             //   $('#submit-order').val("ЗАКАЗАТЬ");
             //   console.log('SDFGHJK', $('#submit-order').val());
            //};
          //  datasent = data;
       });
        //$('#submit-order').change(function(){
        //  if ($('#submit-order').attr('disabled') == 'disabled'){
        //    $('#submit-order').removeAttr('disabled');
        //    $('#submit-order').val("ЗАКАЗАТЬ");
        //    console.log('SDFGHJK',$('#submit-order').val());
        // }
        // });
    });
    console.log(data,datasent);

});

