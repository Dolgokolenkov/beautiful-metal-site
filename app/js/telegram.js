$('.contact--form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')
    data.append( 'ФИО', 		$('[name="name"]', form).val() );
    data.append( 'Телефон', 		$('[name="phone"]', form).val() );
 
    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'php/ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();
            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }
            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
        },
        complete: function() {
            console.log('Complete')
            form.reset();
            let modalComplete=document.querySelector(".modal--complete");
            modalComplete.classList.remove("modal--complete__close--window");
            modalComplete.classList.add("modal--complete__show");
            console.log(modalComplete);
            form.upload();
        }
    });

    return false;
});




