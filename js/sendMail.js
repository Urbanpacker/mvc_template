function SendMail(mailFrom,mailTo,mailMsg,mailObj){
    let myMailFrom = mailFrom;
    let myMailTo = mailTo;
    let myMessage = mailMsg;
    let myObject = mailObj;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "mail", mailFrom : myMailFrom, mailTo : myMailTo, mailMessage : myMessage, mailObject : myObject},
        dataType: 'json',
        error : function(resultat, statut, erreur){
            console.log('erreur ajax : '+resultat+"//"+statut+"//"+erreur);
            $('#errorForm p').css("color","red");
            $('#errorForm p').html('Echec de l\'envoi.');
        }
    }).done(function(response){
        //do something
    });
}