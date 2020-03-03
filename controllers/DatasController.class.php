<?php

class DatasController{
    
    public function __construct(array $array){
        //en fonction de l'argument on appelle une méthode
        if(isset($array["requeteSelection"])){
            switch($array["requeteSelection"]){
                case "select":
                    $this->selectDatas();
                    break;
                case "insert":
                    $this->insertDatas();
                    break;
                case "update":
                    $this->updateDatas();
                    break;
                case "delete":
                    $this->deleteDatas();
                    break;
                case "mail":
                    $this->SendMail();
                    break;
                //gestion images
                case "insertImg":
                    $this->insertImgDatas();
                    break;
                case "deleteImg":
                    $this->deleteImgDatas();
                    break;
            }
        }
    }
    
    private function selectDatas(){
        $result = new Datas();
        echo json_encode($result->selectDatas());
    }
    
    private function insertDatas(){
        $result = new Datas();
        if(is_numeric($result->insertDatas())){
            echo json_encode("Success");
        }
        else{
            echo json_encode("Fail");
        }
    }
    
    private function updateDatas(){
        $result = new Datas();
        if(is_numeric($result->updateDatas())){
            echo json_encode("Success");
        }
        else{
            echo json_encode("Fail");
        } 
    }
    
    private function deleteDatas(){
        $result = new Datas();
        if(is_numeric($result->deleteDatas())){
            echo json_encode("Success");
        }
        else{
            echo json_encode("Fail");
        } 
    }
    
    private function SendMail(){
        $newMail = new SendMail();
        if(is_numeric($newMail->NewMail())){
            echo json_encode("Success");
        }
        else{
            echo json_encode("Fail");
        } 
    }

    //gestion images  
    private function insertImgDatas(){
        $result = new Datas();
        if(is_numeric($result->insertImgDatas())){
            echo json_encode("Success");
        }
        else{
            echo json_encode("Fail");
        }
    }
    
    private function deleteImgDatas(){
        $result = new Datas();
        if(is_numeric($result->deleteImgDatas())){
            echo json_encode("Success");
        }
        else{
            echo json_encode("Fail");
        } 
    }
}