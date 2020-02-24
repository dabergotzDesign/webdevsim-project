using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/Finish")]
public class Finish : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.interactableItems.Finish();
    }

}
