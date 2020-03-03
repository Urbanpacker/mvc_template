<?php

class HomeController{
    public function ShowPage($getPage){
        $page = $getPage;
        $pageTitle = ucfirst($getPage);
        $pageDescription = "Description de la page d'accueil";
        require_once 'views/layout.html';
    }
}