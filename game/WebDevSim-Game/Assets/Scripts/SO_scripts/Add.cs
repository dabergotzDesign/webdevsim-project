using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName ="WebDevSim/InputActions/Add")]
public class Add : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        Dictionary<string, string> addDictionary = controller.interactableItems.Add(seperatedWords);

        if(addDictionary != null)
        {
            controller.LogStringWithReturn(controller.VerbDictionary(addDictionary, seperatedWords[0], seperatedWords[1]));
        }
    }
}
