<?php
class SendMail{
    private $headers;
    private $mailto;
    private $mailfrom;
    private $message;
    private $messContent;
    private $objet;
    private $back_ligne;
    
    public function NewMail(){
        $this->message = htmlspecialchars($_POST["mailMessage"]);
        $this->mailto = htmlspecialchars($_POST["mailTo"]);
        $this->mailfrom = htmlspecialchars($_POST["mailFrom"]);
        $this->objet = htmlspecialchars($_POST["mailObject"]);

        // On filtre les serveurs qui rencontrent des bogues.
    	if(!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $this->mailto)){
    		$this->back_ligne = "\r\n";
    	}
    	else{
    		$this->back_ligne = "\n";
    	}
    	$this->messContent = "<html><body>".$this->message."</body></html>";
    	// Toujours init le content-type avec un mail html
    	$this->headers = "MIME-Version: 1.0" .$this->back_ligne;
    	$this->headers .= "Content-type:text/html;charset=UTF-8".$this->back_ligne;
    	$this->headers .= 'From: <'.$this->mailfrom.'>' .$this->back_ligne;
    	//envoi
    	mail($this->mailto,$this->objet,$this->messContent,$this->headers);  
        return 1;  	
    }
}