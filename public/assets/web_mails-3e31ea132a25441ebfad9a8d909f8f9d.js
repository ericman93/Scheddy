function testConnection(s){var e={user_name:$("#user_name").val(),password:$("#password").val(),server:$("#server").val()},a=$(s);a.attr("disabled",!0),a.removeClass("btn-danger").removeClass("btn-success"),$.post("/exchange/test",{echange_info:e},function(){a.removeClass("btn-danger").addClass("btn-success")}).fail(function(){a.removeClass("btn-success").addClass("btn-danger")}).always(function(){a.attr("disabled",!1)})}