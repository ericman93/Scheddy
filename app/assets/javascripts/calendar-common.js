var event_colors = ['green', 'purple', 'orange', 'turquoise']
var BORDER_SPACE = 10

function fixEventsPosition(element){
    element.css('top', parseInt(element.css('top'))-BORDER_SPACE);
    element.css('bottom', parseInt(element.css('bottom'))+BORDER_SPACE);
}   

function add_button(event_id, image_name, callback){
    var close_btn = $("<div/>",{
        class: image_name+'-event',
    })
    .click(function(){
    	callback(event_id)
    })

    $('.fc-event.'+event_id).prepend(close_btn)
}

function send_option_selection(option_name){
    popupLoading();

    var defferd = $.Deferred();

    option_id = option_name.substring(5) // remove the 'prop-' in the begging of the name
    $.ajax({
        type: "POST",
        url: "/requests/"+option_id,
        dataType: 'json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        }
    })
    .success(function (d) {
        closeLoading();
        removeProposels()
        //$('.fc-event.'+option_name+' .approve-event').remove()
        defferd.resolve();

        showPopup("Woo Hoo!", "The option has selected :)", "btn-success");
    })
    .fail(function (data) {
        closeLoading();
        console.log(data)
        defferd.reject('error');

        showError(getErrorFromData(data))
    });

    return defferd.promise();
}

function removeProposels(){
    $('.fc-event.option_event').remove()
}