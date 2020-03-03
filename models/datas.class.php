<?php

class Datas{
    private $result;

    public function selectDatas(){
        $datasArray = array ($_POST["element"]);//array ($_POST["val1"],$_POST["val2"])
        $bdd = new Database();
        $this->result = $bdd->query('SELECT * FROM '.$_POST["table"].'', $datasArray);
        return $this->result;
    }
    
    public function insertDatas(){
        $datasArray = array ($_POST["element"]);//array ($_POST["val1"],$_POST["val2"])
        $bdd = new Database();
        $this->result = $bdd->prepare('INSERT INTO '.$_POST["table"].'(colonne1, colonne2) VALUES(?,?)', $datasArray);
        return $this->result;
    }
    
    public function updateDatas(){
        $datasArray = array ($_POST["element"]);//array ($_POST["val1"],$_POST["val2"])
        $bdd = new Database();
        $this->result = $bdd->prepare('UPDATE '.$_POST["table"].' SET colonne1 = ? WHERE colonne2 = ?', $datasArray);
        return $this->result;
    }
    
    public function deleteDatas(){
        $datasArray = array ($_POST["element"]);//array ($_POST["val1"],$_POST["val2"])
        $bdd = new Database();
        $this->result = $bdd->prepare('DELETE FROM '.$_POST["table"].' WHERE dataId = ?', $datasArray);
        return $this->result;
    } 

    //gestion images    
    public function insertImgDatas(){
        $bdd = new Database();

        //verificaiton d'erreur
        $uploadError = 0;
        //construction du chemin final - folderPath = choix radio dans le formulaire
        $target_dir = $_POST["folderPath"]."/";
        //adresse du fichier à uploader
        $target_file = $target_dir . basename($_FILES["imgPath"]["name"]);
        //récupération de l'extension du fichier
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        //vérification de la taille de l'image > 0
        $check = getimagesize($_FILES["imgPath"]["tmp_name"]);
        if($check == false || $target_dir == "0" || $target_dir == "o" || $target_dir == null || $target_dir == "" || empty($target_dir) ) {
            echo "Erreur : Ce n'est pas une image.<br>";
            $uploadError = 1;
        }

        //si il y a une erreur
        if ($uploadError == 1) {
            echo "Le fichier n'a pas été envoyé. <a href=\"index.php?page=bkoffice\">Retour</a><br>";
            exit;
        } 
        //pas d'erreur
        else {
            //envoi du fichier sur le serveur puis dans la base de données
            if (move_uploaded_file($_FILES["imgPath"]["tmp_name"], $target_file)) {
                $datasArray = array ($target_dir.$_FILES["imgPath"]["name"]);
                $this->result = $bdd->prepare('INSERT INTO images(imagePath) VALUES(?)', $datasArray);
            } 
            else {
                echo "Une erreur s'est produite lors de l'upload. <a href=\"index.php?page=bkoffice\">Retour</a>";
                exit;
            }
        }
        header('location: ../index.php?page=bkoffice');
    }
    
    public function deleteImgDatas(){
        $datasArray = array ($_POST["imageId"]);//array ($_POST["val1"],$_POST["val2"])
        $bdd = new Database();
        $this->result = $bdd->prepare('DELETE FROM images WHERE imageId = ?', $datasArray);
        if(file_exists($_POST["imagePath"])){
            unlink($_POST["imagePath"]);
        }
        return $this->result;
    } 
}