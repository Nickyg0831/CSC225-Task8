$(document).ready(function(){

    var apiBase = "https://jsonplaceholder.typicode.com/photos";

    axios.get(apiBase).then(function(response){
        $('.btn-primary').on('click', function(){
            var HTMLimage = response.data.map(function (image) {

                var imgTag = '<img src=" ' + image.url + '" alt="' + image.title + '">' + '<p>' + image.title + '</p>';
                console.log(imgTag);
                return $('<div>').addClass('image').html(imgTag);
            });

            $('#tasks').html(HTMLimage);

        });

    });

});
