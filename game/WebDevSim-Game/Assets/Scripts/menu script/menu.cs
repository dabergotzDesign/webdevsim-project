using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

using UnityEngine.Events;
using UnityEngine.EventSystems;

public class menu : EventTrigger
{
    /*Hover effect on menu buttons*/
    public void StartPointerEnter()
    {
        string startBtn = "<<color=#ec6463>START</color>/>";
        
        gameObject.GetComponentInChildren<Text>().text = startBtn;
   
    }

    public void StartPointerExit()
    {
        gameObject.GetComponentInChildren<Text>().text = "START";  
    }

    public void CreditsPointerEnter()
    {
      
        string creditBtn = "<<color=#ec6463>CREDITS</color>/>";
        //string quitBtn = "<QUIT/>";

        gameObject.GetComponentInChildren<Text>().text = creditBtn;

    }

    public void CreditsPointerExit()
    {
        gameObject.GetComponentInChildren<Text>().text = "CREDITS";

    }

    public void QuitPointerEnter()
    {
            
        string quitBtn = "<<color=#ec6463>QUIT</color>/>";

        gameObject.GetComponentInChildren<Text>().text = quitBtn;

    }

    public void QuitPointerExit()
    {
        gameObject.GetComponentInChildren<Text>().text = "QUIT";

    }

}
