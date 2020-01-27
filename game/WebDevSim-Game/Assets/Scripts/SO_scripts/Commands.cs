using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName="WebDevSim/Commands")]
public class Commands : ScriptableObject
{
    [TextArea]
    public string description;
    public string commandName;
    public Exit[] exits;
    public InteractableObject[] interactableItemInFile;

}
