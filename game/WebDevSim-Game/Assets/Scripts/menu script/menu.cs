using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

using UnityEngine.SceneManagement;

using UnityEngine.Events;
using UnityEngine.EventSystems;

public class menu : MonoBehaviour{
public Text text;
// // [HideInInspector] 
public Button button;
Color y=new Color32(242, 210, 131, 255);
Color t=new Color32(111, 252, 233, 255);

// Event e=Event.current;

 
public void LoadScene(){
    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1);
}

//PLACEHOLDER
public void StartGame(){
  Debug.Log("START THE GAME!");
}

public void Back(){
    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex-1);
}

public void Quit(){
  Application.Quit();
  Debug.Log("RAGE QUIT!");
}

/*Hover effect on menu buttons*/
 public void PointerEnter(){

  //  GameObject.Find("button.name").GetComponentInChildren<Text>().color = t;

  text.color=t;
      Debug.Log("I identify myself now as cyan");
    }
public void PointerExit(){

  //  GameObject.Find("button.name").GetComponentInChildren<Text>().color = y;
    text.color=y;
      Debug.Log("GET OUT");
    }
}
