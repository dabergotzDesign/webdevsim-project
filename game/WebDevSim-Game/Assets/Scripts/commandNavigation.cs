using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class commandNavigation : MonoBehaviour
{
    public Commands currentCommand;

    Dictionary<string, Commands> exitDictionary = new Dictionary<string, Commands>();
    gameNavigation controller;

     private void Awake()
    {
        controller = GetComponent<gameNavigation>();
    }

    public void PerformExitsInCommand()
    {
        for (int i = 0; i < currentCommand.exits.Length; i++)
        {
            exitDictionary.Add(currentCommand.exits [i].keyString, currentCommand.exits [i].valueCommand);
            controller.interactionDescriptions.Add(currentCommand.exits [i].exitDescription);
        }
    }

    public void AttemptToCommand(string directionNoun)
    {
        if (exitDictionary.ContainsKey(directionNoun))
        {
            currentCommand = exitDictionary [directionNoun];
            controller.LogStringWithReturn("You're now on " + directionNoun);
            controller.DisplayCommandText();
        }
        else
        {
            controller.LogStringWithReturn("Error " + directionNoun + " not found, is there maybe a typo?");
        }
    }

    public void ClearExits()
    {
        exitDictionary.Clear();
    }
}
