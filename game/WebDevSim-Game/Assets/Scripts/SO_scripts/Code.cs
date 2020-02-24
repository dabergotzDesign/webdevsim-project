using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Code")]
public class Code : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        Dictionary<string, string> codeDictionary = controller.interactableItems.Code(seperatedWords);

        if (codeDictionary != null)
        {
            controller.LogStringWithReturn(controller.VerbDictionary(codeDictionary, seperatedWords[0], seperatedWords[1]));
        }
    }
}
