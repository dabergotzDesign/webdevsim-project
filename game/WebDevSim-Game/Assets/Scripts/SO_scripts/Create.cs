using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Create")]
public class Create : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.LogStringWithReturn(controller.VerbDictionary(controller.interactableItems.createDictionary, seperatedWords[0], seperatedWords[1]));
    }
}
