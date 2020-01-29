using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class showUI : MonoBehaviour
{
   public Text submitText;
   public Image h1BG;

 

    public InputField inputField;
    private bool wasFocused;

 
    private void Awake()
    {
        /*submitText.GetComponent<Text>().enabled = false;
        h1BG.GetComponent<Image>().enabled = false;*/
    }

    // Update is called once per frame
    void Update()
    {
         if(wasFocused && Input.GetKeyDown(KeyCode.Return))
        {
            submitText.GetComponent<Text>().enabled = true;
        }
        wasFocused = inputField.isFocused;
    }

  /*  private void Submit(string text)
    {
        Debug.Log("Submit= " + text);
    }*/
}
