$(function() {
    $.getJSON("https://jsonip.com", function (data_ip) {

        var ip = data_ip.ip;

        $.getJSON("https://ipapi.co/" + ip + "/json/", function (country) {

            if (country.country !== null) {
                $.getJSON("https://restcountries.eu/rest/v2/name/" + country.country, function (data_country) {                          
                    $("#flag").attr('src',data_country[0].flag);
                    $("#country").html(data_country[0].name);                   
                });
            }else{
            	alert("Please, reload the page !");
            }
        });
    });
});
