//select datas
function ShowDatas(table,element){
    let myTable = table;
    let myElement = element;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "select", table : myTable, element : myElement},
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

//insert datas
function InsertDatas(table,element){
    let myTable = table;
    let myElement = element;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "insert", table : myTable, element : myElement},
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

//update datas
function UpdateDatas(table,element){
    let myTable = table;
    let myElement = element;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "update", table : myTable, element : myElement},
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

//delete datas
function DeleteDatas(table,element){
    let myTable = table;
    let myElement = element;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "delete", table : myTable, element : myElement},
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

//////////////////////gestion images
//select images datas
function AdminShowImages(table,element){
    let myTable = table;
    let myElement = element;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "select", table : myTable, element : myElement},
        dataType: 'json',
        error : function(resultat, statut, erreur){
            console.log('erreur ajax : '+resultat+"//"+statut+"//"+erreur);
            $('#errorForm p').css("color","red");
            $('#errorForm p').html('Echec de l\'envoi.');
        }
    }).done(function(response){
        $('#admin_show_image div').remove();
        for (var i = 0; i < response.length; i++) {
            $('#admin_show_image').append('<div class="singleImg"><img src="'+response[i].imagePath+'">'
                +'<button data-imageid="'+response[i].imageId+'" data-pathimg="'+response[i].imagePath+'" class="delImg" type="button">X</button>'
                +'<div class="imgDetails">'                        
                    +'<input class="copyMe" data-id="'+i+'" value="'+response[i].imagePath+'"><i data-id="'+i+'" class="fas fa-copy"></i>'
                +'</div></div>'); 
        }
    });
}

//delete images
function AdminDeleteImages(imgid,imgpath){
    let myTable = "images";
    let myId = imgid;
    let myPath = imgpath;

    $.ajax({
        url : 'datas/',
        type : 'POST',
        data: { requeteSelection : "deleteImg", imageId : myId, imagePath : myPath},
        dataType: 'json',
        error : function(resultat, statut, erreur){
            console.log('erreur ajax : '+resultat+"//"+statut+"//"+erreur);
            $('#errorForm p').css("color","red");
            $('#errorForm p').html('Echec de l\'envoi.');
        }
    }).done(function(response){        
        AdminShowImages("images","");
    });
}

//copier dans le presse papier le lien de l'image
$('#admin_show_image').on('click','.imgDetails i',function(){
    //toutes les icones deviennent noires
    $('.imgDetails i').css('color','#d11920');
    //l'icone sur laquelle on clique devient verte
    $(this).css('color','#4dbb4d');
    //selectionne et copie le chemin de l'image
    $('input[data-id='+$(this).data('id')+']').select();
    document.execCommand('copy');
});

//supprimer l'image et mise à jour de la page
$('#admin_show_image').on('click','.delImg',function(){
    let myImgId = $(this).data('imageid');
    let myImgPath = $(this).data('pathimg');
    if(confirm("Etes-vous sur vouloir supprimer cette image ?")){
        AdminDeleteImages(myImgId,myImgPath);
    }
});