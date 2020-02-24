using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "WebDevSim/InputActions/HelloWorld")]
public class HelloWorld : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.interactableItems.DisplayHelloWorld();
    }
}
