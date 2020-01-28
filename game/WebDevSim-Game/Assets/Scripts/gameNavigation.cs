using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class gameNavigation : MonoBehaviour
{
    public Text displayText;
    public InputAction[] inputActions;

    [HideInInspector] public commandNavigation commandNavigation;
    [HideInInspector] public List<string> interactionDescriptions = new List<string>();
    [HideInInspector] public InteractableItems interactableItems;

    List<string> actionLog = new List<string>();

   
    void Awake()
    {
        interactableItems = GetComponent<InteractableItems>();
        commandNavigation = GetComponent<commandNavigation>();
    }

    void Start()
    {
        DisplayCommandText();
        DisplayLoggedText();
    }

    public void DisplayLoggedText()
    {
        string logAsText = string.Join("\n", actionLog.ToArray ());

        displayText.text = logAsText;
    }

    public void DisplayCommandText()
    {
        ClearCollectionsForNewCommand();

        PerformCommand();

        string joinedInteractionDescriptions = string.Join("\n", interactionDescriptions.ToArray());

        string combinedText = commandNavigation.currentCommand.description + "\n" + joinedInteractionDescriptions;

        LogStringWithReturn(combinedText);
    }

   void PerformCommand()//= UnpackRoom in tutorial
    {
        commandNavigation.PerformExitsInCommand();
        PrepareObjects(commandNavigation.currentCommand);
    }

    void PrepareObjects(Commands currentCommand)
    {
        for (int i = 0; i < currentCommand.interactableItemInFile.Length; i++)
        {
            string descriptionNotInInventory = interactableItems.ObjectsNotInInventory(currentCommand, i);
            if(descriptionNotInInventory != null)
            {
                interactionDescriptions.Add(descriptionNotInInventory);
            }

            //interactables = interactableInRoom from tutorial
            InteractableObject interactables = currentCommand.interactableItemInFile[i];

            for (int j = 0; j < interactables.interactions.Length; j++)
            {
                Interaction interaction = interactables.interactions[j];
                if(interaction.inputAction.keyWord == "examine") //"examine" is filler, change up for either "help" or "?"
                {
                    interactableItems.examineDictionary.Add(interactables.noun, interaction.textResponse);
                }
                if (interaction.inputAction.keyWord == "create") //"create", used for "create" the files (index.html, style.css, main.js)
                {
                    interactableItems.createDictionary.Add(interactables.noun, interaction.textResponse);
                }
                if (interaction.inputAction.keyWord == "add") //"add", used for "add" elements to site (HTML lines, exp. <h1>)
                {
                    interactableItems.addDictionary.Add(interactables.noun, interaction.textResponse);
                }
            }
        }
    }

    public string VerbDictionary(Dictionary<string, string> verbDictionary, string verb, string noun)
    {
        if (verbDictionary.ContainsKey(noun))
        {
            return verbDictionary[noun];
        }

        return "Not a possible action" + verb + " " + noun;
    }

    void ClearCollectionsForNewCommand()
    {
        interactableItems.ClearCollections();
        interactionDescriptions.Clear();
        commandNavigation.ClearExits();
    }

    public void LogStringWithReturn(string stringToAdd)
    {
        actionLog.Add(stringToAdd + "\n");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
