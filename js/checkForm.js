$(function() {
    //verification formulaire
    //indiquer l'id du formulaire dans form exemple : id="logForm"
    //indiquer l'action dans data-action du bouton du formulaire exemple: data-action_form="datas/"
    $('#errorForm p').html('');
    $('#errorForm p').css("color","black");
    
    $('.sendForm').click(function() {
        let idForm = $(this).parent("fieldset").parent("form").attr("id");
        let nbErreurs = 0;
        let actionForm = $(this).data("action_form");

        //vérification des champs input
        $('#'+idForm+' input[required]').each(function() {
            let valeur = $(this).val();
            let valTrim = $.trim(valeur);            
            if(valTrim.length == 0) {
                nbErreurs++;
                $(this).css('border','1px solid red');
            }
            else{
                $(this).css('border','1px solid grey');
            }
        });
        
        //vérification des champs textarea
        $('#'+idForm+' textarea[required]').each(function() {
            let valeur = $(this).val();
            let valTrim = $.trim(valeur);            
            if(valTrim.length == 0) {
                nbErreurs++;
                $(this).css('border','1px solid red');
            }
            else{
                $(this).css('border','1px solid grey');
            }
        });

        //vérification des champs select
        //<select required name="monselect">
        //  <option value="">Selectionner</option>
        //  <option value="option1">option1</option>
        //</select>
        $('#'+idForm+' select[required]').each(function() {
            let valeur = $(this).val();
            let valTrim = $.trim(valeur);            
            if(valTrim.length == 0) {
                nbErreurs++;
                $(this).css('border','1px solid red');
            }
            else{
                $(this).css('border','1px solid grey');
            }
        });

        //vérification des checkbox - pour radio, mettre un checked par defaut
        //<label>Name<input type="checkbox" name="myname" value="myvalue" required></label>
        $('#'+idForm+' input[type=checkbox][required]').each(function() {
            let parent = $(this).parent("label");
            if(!$(this).prop('checked')){
                nbErreurs++;
                $(parent).css('border','1px solid red');
            }
            else{
                $(parent).css('border','1px solid transparent');
            }
        });

        //envoi du formulaire
        if(nbErreurs == 0) {
            $('#errorForm p').html('');          
            $.ajax({
                url : actionForm,
                type : 'POST',
                data: $('#'+idForm).serialize(),
                dataType: 'json',
                error : function(resultat, statut, erreur){
                    console.log('erreur ajax : '+resultat+"//"+statut+"//"+erreur);
                    $('#errorForm p').css("color","red");
                    $('#errorForm p').html('Echec de l\'envoi.');
                }
            }).done(function(isDone){
                if(isDone != "Success"){
                    $('#errorForm p').css("color","red");
                    $('#errorForm p').html(isDone);
                }
                else{
                    //ajouter des cas en fonction de l'url du formulaire
                    switch(actionForm){
                        case "bkoffice/":
                            window.location.href = 'bkoffice/';
                        default:
                            $('#errorForm p').html(isDone);
                    }
                }
            });
        }//sinon alerte
        else{
            $('#errorForm p').css("color","red");
            $('#errorForm p').html('Oups, des champs sont vides');
        }
    });
});