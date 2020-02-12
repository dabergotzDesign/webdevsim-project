using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Background")]
public class Background : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        Dictionary<string, string> backgroundDictionary = controller.interactableItems.Background(seperatedWords);

        if(backgroundDictionary != null)
        {
            controller.LogStringWithReturn(controller.VerbDictionary(backgroundDictionary, seperatedWords[0], seperatedWords[1]));
        }
    }
}
