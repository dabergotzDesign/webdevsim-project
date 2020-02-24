using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Const")]
public class Const : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        Dictionary<string, string> constDictionary = controller.interactableItems.Const(seperatedWords);

        if (constDictionary != null)
        {
            controller.LogStringWithReturn(controller.VerbDictionary(constDictionary, seperatedWords[0], seperatedWords[1]));
        }
    }
}
