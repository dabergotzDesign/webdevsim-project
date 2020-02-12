using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Help")]
public class Help : InputAction
{ 
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.interactableItems.DisplayHelp();
    }
}
