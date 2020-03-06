using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InteractableItems : MonoBehaviour
{
    public Dictionary<string, string> examineDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> createDictionary = new Dictionary<string, string>();

    [HideInInspector] public List<string> nounsInFile = new List<string>();

    List<string> nounsInInventory = new List<string>();

    public string ObjectsNotInInventory(Commands currentCommand, int i)
    {
        InteractableObject interactableInFile = currentCommand.interactableItemInFile[i];

        if (!nounsInInventory.Contains(interactableInFile.noun))
        {
            nounsInFile.Add(interactableInFile.noun);
            return interactableInFile.description;

        }

        return null;

    }

    public void ClearCollections()
    {
        examineDictionary.Clear();
        createDictionary.Clear();
        nounsInFile.Clear();
    }

}
