$(document).ready(function(){
    $('.upload-btn').on('click', function(){
    $('#upload-input').click(); 
    });

    $('#upload-input').on('change', function(){
        var uploadInput = $('upload-input');
        console.log(uploadInput);

        if(uploadInput.val() !=''){
            var formData = new FormData();

            formData.append('upload', uploadInput[0].files[0]);
            console.log(uploadInput[0].files[0]);
            console.log(uploadInput);

            $.ajax({
                url: '/uploadFile',
                type: 'POST',
                data: formData,
                processdData: false,
                contentType: false,
                success: function(){
                    uploadInput.val('');
                }
            })
        }
    })
})