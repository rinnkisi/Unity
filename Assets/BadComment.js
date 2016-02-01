﻿#pragma strict


public var obj : GameObject;
public var interval : float = 3;
private var time : float;

function Start () {

}

function Update () {
	time += Time.deltaTime;
	
	if(time >= interval)
	{
		time = 0;
		var comment : GameObject = Instantiate(obj)as GameObject;
		comment.transform.localPosition = Vector3(
			Random.Range(-3.0, 3.0),
			Random.Range(1.0, 5.0),
			Random.Range(17.0, 20.0));
	}
}