<?php

class Database
{
	private $pdo;
	private $bddHostName = "";
	private $bddName = "";
	private $bddUser = "";
	private $bddPasse = "";

	public function __construct()
	{
		try {
			$this->pdo = new PDO('mysql:host='.$this->bddHostName.';dbname='.$this->bddName.';charset=utf8', $this->bddUser,$this->bddPasse, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch (Exeption $e) { 
			die('Erreur lors de la connexion: ' .$e->getMessage())  or die(print_r($bdd->errorInfo()));
		}
	}
	
	//select
	public function query($sql, array $values)
	{
		$query = $this->pdo->prepare($sql);
		$query->execute($values);
		return $query->fetchAll(PDO::FETCH_ASSOC);
	}
	
	//insert/delete/update
	public function prepare($sql, array $values)
	{
		$query = $this->pdo->prepare($sql);
		$query->execute($values);
		return $this->pdo->lastInsertId();
	}
}
