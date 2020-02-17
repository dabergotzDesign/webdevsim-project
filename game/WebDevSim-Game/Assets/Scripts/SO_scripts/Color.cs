using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Color")]
public class Color : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        Dictionary<string, string> colorDictionary = controller.interactableItems.ColorText(seperatedWords);

        if(colorDictionary != null)
        {
            controller.LogStringWithReturn(controller.VerbDictionary(colorDictionary, seperatedWords[0], seperatedWords[1]));
        }        
    }
}
