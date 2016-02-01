#pragma strict
public var sceneName : String;

function Start () {

}

function Update () {

}

public function changeScene(){
	Application.LoadLevel(sceneName);
}