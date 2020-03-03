<?php

class BkofficeController{
    
    public function ShowPage($getPage){
        $page = $getPage;
        $pageTitle = "Administration";
        $pageDescription = "Description de la page administration";
        if($_POST){
            $result = new LoginUser();
            $newLogin = $result->NewLog($_POST["userLog"],$_POST["userPass"]);
            if($newLogin){
                $_SESSION["logged"] = true;
                $_SESSION["pseudo"] = $newLogin[0]["userName"];
                echo json_encode("Success");
            }
            else{
                echo json_encode("Fail to connect");
            }
            die;
        }
        require_once 'views/layout.html';
    }
}