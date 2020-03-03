<?php
session_start();
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

date_default_timezone_set('Europe/Paris');
setlocale (LC_TIME, 'fr_FR.utf8','fra');

//autoload class
spl_autoload_register(function ($className) {
    if(is_file('controllers/'.ucfirst($className).'.class.php')){
        require_once('controllers/'.ucfirst($className).'.class.php');
    }
    else if(is_file('models/'.lcfirst($className).'.class.php')){
        require_once('models/'.lcfirst($className).'.class.php');
    }
});

$page = $_GET['page']??'home';

switch($page) {
    case 'home':
        return (new HomeController())->ShowPage($page);
        break;
    case 'page1':
        return (new Page1Controller())->ShowPage($page);
        break;
    case 'bkoffice':
        return (new BkofficeController())->ShowPage($page,$_POST);
        break;
    case 'datas':
        return new DatasController($_POST);
        break;
    case 'unlog':
        return (new UnlogController())->UnlogUser();
        break;
    default:
        http_response_code(404);
        return (new ErrorController())->ShowPage();
}