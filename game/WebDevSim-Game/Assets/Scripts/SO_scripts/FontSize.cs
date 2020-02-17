using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/FontSize")]
public class FontSize : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        Dictionary<string, string> fontDictionary = controller.interactableItems.FontSize(seperatedWords);

        if (fontDictionary != null)
        {
            controller.LogStringWithReturn(controller.VerbDictionary(fontDictionary, seperatedWords[0], seperatedWords[1]));
        }
    }
}
