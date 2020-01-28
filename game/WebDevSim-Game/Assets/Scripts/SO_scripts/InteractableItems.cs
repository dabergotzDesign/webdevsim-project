using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class InteractableItems : MonoBehaviour
{
    public List<InteractableObject> usableItemList;

    public Dictionary<string, string> examineDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> createDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> addDictionary = new Dictionary<string, string>();

    [HideInInspector] public List<string> nounsInFile = new List<string>();

    List<string> nounsInInventory = new List<string>();
    gameNavigation controller;

    List<string> helpCommands = new List<string>();



    private void Awake()
    {
        controller = GetComponent<gameNavigation>();
    }

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

    public void AddActionToUse()
    {
        for (int i = 0; i < nounsInInventory.Count; i++)
        {
            string noun = nounsInInventory[i];

        }
    }

    /*
    InteractableObject GetInteractableObjectToUse(string noun)
    {
        for (int i = 0; i < usableItemList.Count; i++)
        {
            if(usableItemList[i].noun == noun)
            {
                return usableItemList[i];
            }
        }
        return null;
    }
    */

   public void DisplayHelp()
    {

        string helpCmdCreate = "> create - creates a file";
        string helpCmdGo = "> go - goes to a created file";
        string helpCmdAdd = "> add - adds element to file";
        string helpCmdCheck = "> check - lists all added elements to file";
        string helpCmdWrite = "> write - write a custom text to text element";
        string helpCmdColor = "> color - changes the color to text element";
        string helpCmdBackground = "> background - background of element will changes it's color";
        string helpCmdExamine = "> examine - examines and explains element";
        string helpCmdHelp = "> help - lists all commands";

        controller.LogStringWithReturn("You stuck? Try some of these commands, they should help you out: " + "\n" + helpCmdCreate + "\n" + helpCmdGo + "\n" + helpCmdAdd + "\n"
            + helpCmdCheck + "\n" + helpCmdWrite + "\n" + helpCmdColor + "\n" + helpCmdBackground + "\n" + helpCmdExamine + "\n" + helpCmdHelp);           

    }

 
    public void DisplayFile()
    {
        controller.LogStringWithReturn("You checking your files");

        for (int i = 0; i < nounsInInventory.Count; i++)
        {
            controller.LogStringWithReturn(nounsInInventory[i]);
        }
    }

    public void ClearCollections()
    {
        examineDictionary.Clear();
        createDictionary.Clear();
        addDictionary.Clear();
        nounsInFile.Clear();
    }

    public Dictionary<string,string> Add (string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];

        if (nounsInFile.Contains(noun))
        {
            nounsInInventory.Add(noun);
            nounsInFile.Remove(noun);
            return addDictionary;
        }
        else
        {
            controller.LogStringWithReturn("It seems like you can't use " + noun + " not in here");
            return null;
        }
    }


}
