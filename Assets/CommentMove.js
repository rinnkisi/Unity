#pragma strict
//hit
public var power : float = 6.5;
public var commentmove : float = -0.5;
static var selectedGameObject : GameObject;

//hit and hp
private var target : GameObject;
private var enemyZone : GameObject;
public var myHpBarCtrl : GameObject;
public var enemyHpBarCtrl : GameObject;

function Start () {
	//get Object
	target = GameObject.Find("DeathZone");
	enemyZone = GameObject.Find("EnemyZone");
	myHpBarCtrl = GameObject.Find("MyHpBarCtrl");
	enemyHpBarCtrl = GameObject.Find("EnemyHpBarCtrl");
}

function Update (){
	if (Input.GetMouseButtonDown(0)) {
      	// クリックしたスクリーン座標をrayに変換
      	var ray : Ray;
      	ray = Camera.main.ScreenPointToRay(Input.mousePosition);
      	// Rayの当たったオブジェクトの情報を格納する
      	var hit : RaycastHit;
      	// オブジェクトにrayが当たった時
      	if (Physics.Raycast(ray, hit, 100f)){
        	// rayが当たったオブジェクトの名前を取得
        	selectedGameObject = hit.collider.gameObject;
        	Debug.Log(selectedGameObject.name);
        	if(selectedGameObject.name == "comment(Clone)"){
        		commentmove = 1.5;
        	}
      	}
    }

	var direction : Vector3 = target.transform.position - transform.position;
	//GetComponent.<Rigidbody>().AddForce(direction.normalized * power);
	//transform.Translate(0, 0, 1);

	transform.position.z += commentmove;
	//transform.Rotate(0,0,1);
	//transform.LookAt(direction);
}

function OnCollisionEnter(collision: Collision) {
	Debug.Log("OnCollisionEnter Hit");
	Debug.Log(collision.gameObject.name);
	if(collision.gameObject.name == "DeathZone"){
		//My HP
		var myhp:MyHpBarCtrl;
		myhp = myHpBarCtrl.GetComponent("MyHpBarCtrl");
		myhp.damegeMyHp();
		Debug.Log(myhp.gameObject.name);
	}else if(collision.gameObject.name == "EnemyZone"){
		//Enemy HP
		var enhp:EnemyHpBarCtrl;
		enhp = enemyHpBarCtrl.GetComponent("EnemyHpBarCtrl");
		enhp.damegeMyHp();
		Debug.Log(enhp.gameObject.name);	
	}
//		Debug.Log(myHpBarCtrl);
//		myHpBarCtrl.damegeMyHp();
    	Destroy(gameObject);
}