using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName ="WebDevSim/InputActions/Go")]
public class Go : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.commandNavigation.AttemptToCommand(seperatedWords[1]);
    }
}
