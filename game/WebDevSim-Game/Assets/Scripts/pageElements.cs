using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class pageElements : MonoBehaviour
{
    public InputField inputField;
    private bool wasFocused;

    public InteractableObject pageObject;
    //public Text elementText;
    public Image elementBackground;


    void Start()
    {
        //elementText.text =" ";
    }

    
    public void Update()
    {
        if (wasFocused && Input.GetKeyDown(KeyCode.Return))
        {
            //elementText.text = pageObject.elementText;
        }
        wasFocused = inputField.isFocused;
    }

}
