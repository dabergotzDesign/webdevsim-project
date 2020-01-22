using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName ="WebDevSim/InputActions/Examine")]
public class Examine : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.LogStringWithReturn(controller.VerbDictionary(controller.interactableItems.examineDictionary, seperatedWords[0], seperatedWords[1]));
    }
}
