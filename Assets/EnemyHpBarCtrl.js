#pragma strict
public var slider:UI.Slider;
public var hp : float;

function Start () {
	hp = 1;
}
function Update () {
//if hit{
// hp -=
//}
//	hp -= Time.deltaTime;
	if(hp<0){
		hp = 1;
	}
	slider.value = hp;
}

public function damegeMyHp(){
	hp -= 0.1;
	if(hp <= 0){
		Application.LoadLevel("Clear");
	}
}