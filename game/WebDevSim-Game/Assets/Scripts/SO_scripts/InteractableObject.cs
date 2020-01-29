using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


[CreateAssetMenu (menuName ="WebDevSim/Interactable Object")]
public class InteractableObject : ScriptableObject
{
    public string noun = "name";

    public string pageText;
    [TextArea]
    public string description = "Description of file"; //file = command
    public Interaction[] interactions;
}
