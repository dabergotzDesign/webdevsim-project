using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName ="WebDevSim/InputActions/FileInventory")]
public class FileInventory : InputAction
{
    public override void RespondToInput(gameNavigation controller, string[] seperatedWords)
    {
        controller.interactableItems.DisplayFile();
    }
}
