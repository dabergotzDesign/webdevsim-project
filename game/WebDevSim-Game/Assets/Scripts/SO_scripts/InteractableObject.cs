
using UnityEngine;


/*///////ITEM////////*/

[CreateAssetMenu (menuName ="WebDevSim/Interactable Object")]
public class InteractableObject : ScriptableObject
{
    //Page Part, used by the elements to display
    public string noun = "name";
    public Sprite imageElement = null;
    public string textElement;

    public bool elementEnabled = false;

    
    //Text Part, used by the diplay text
    [TextArea]
    public string description = "Description of file"; //file = command
    public Interaction[] interactions;

}
