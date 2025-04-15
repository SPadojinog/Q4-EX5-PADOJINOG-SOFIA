function CheckTrafficLight(){
	var inputcolor = document.getElementById('InputColor').value;
			
		switch (inputcolor) {
			case "Red": document.getElementById('message').innerHTML = "STOP!"; break;
			case "Yellow": document.getElementById('message').innerHTML = "CAUTION! SLOW DOWN!"; break;
			case "Green": document.getElementById('message').innerHTML = "GO!"; break;
			default: document.getElementById('message').innerHTML = "ERROR - UNKNOWN COLOR";
		}
}