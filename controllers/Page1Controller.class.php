<?php

class Page1Controller{	
    public function ShowPage($getPage){        
        $page = $getPage;
        $pageTitle = ucfirst($getPage);
        $pageDescription = "Description de la page1";
        require_once 'views/layout.html';
    }
}