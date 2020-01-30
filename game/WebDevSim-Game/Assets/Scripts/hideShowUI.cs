using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class hideShowUI : MonoBehaviour
{
    public GameObject InputDisplayUI;
    bool isDisplayed;   
 

    public void HideUI()
    {
        if (InputDisplayUI == true)
        {
            isDisplayed = !isDisplayed;
            InputDisplayUI.SetActive(isDisplayed);
        }
       
    }
}
