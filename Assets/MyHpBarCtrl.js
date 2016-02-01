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
	slider.value = hp;
}

public function damegeMyHp(){
	hp -= 0.1;
	if(0 >= hp){
		Application.LoadLevel("GameOver");
	}
	Debug.Log(hp);
}