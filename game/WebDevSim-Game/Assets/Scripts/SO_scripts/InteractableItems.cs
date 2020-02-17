using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;



public class InteractableItems : MonoBehaviour
{

    public Dictionary<string, string> examineDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> createDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> addDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> backgroundDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> colorDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> fontDictionary = new Dictionary<string, string>();

    [HideInInspector] public List<string> nounsInFile = new List<string>();

    List<string> nounsInInventory = new List<string>();
    gameNavigation controller;

    /*//////////INTERACTABLE////////////*/
    GameObject pageElement;

    /*///BACKGROUND IMAGES/////////*/
    public Sprite backgroundImage_01; //code.jpg
    public Sprite backgroundImage_02; //grid.jpg
    public Sprite backgroundImage_03; //matrix.jpg



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

    /*//////////HELP/////////*/
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

    /*//////INVENTORY///////*/
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
        backgroundDictionary.Clear();
        colorDictionary.Clear();
        fontDictionary.Clear();
        nounsInFile.Clear();
    }

  
    /*////ADD THINGS TO WEBSITE////*/
    public Dictionary<string,string> Add (string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];


        if (nounsInFile.Contains(noun))
        {
            nounsInInventory.Add(noun);

            //Display the corresponding page element
            if(nounsInInventory != null)
            {
                pageElement = GameObject.FindWithTag(noun);

             if (pageElement.GetComponent<Text>() != null)
            {
                    pageElement.GetComponentInChildren<Text>().enabled = true;
            }

            if (pageElement.GetComponent<Image>() != null)
            {
                    pageElement.GetComponentInChildren<Image>().enabled = true;
            }

                //Debug.Log(pageElement.name);
            }

            nounsInFile.Remove(noun);             
            
                     
            return addDictionary;
           
            
        }
        else
        {
            controller.LogStringWithReturn("It seems like you can't use " + noun + " not in here");
            return null;
        }
    }


    /*////BACKGROUND////*/
    public Dictionary<string, string> Background (string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];

        string bgCode = "code.jpg";
        string bgMatrix = "matrix.jpg";
        string bgGrid = "grid.jpg";

               

        if (nounsInFile.Contains(noun))
        {
            GameObject body = GameObject.FindGameObjectWithTag("background");

            if(noun == bgCode)
            {
                body.GetComponent<Image>().sprite = backgroundImage_01;
                //Debug.Log("got code.jpg as background");
            }
            if (noun == bgGrid)
            {
                body.GetComponent<Image>().sprite = backgroundImage_02;
                //Debug.Log("got grid.jpg as background");
            }
            if (noun == bgMatrix)
            {
                body.GetComponent<Image>().sprite = backgroundImage_03;
                //Debug.Log("got matrix.jpg as background");
            }
            return backgroundDictionary;
        }
        else
        {
            controller.LogStringWithReturn("That image file doesn't exist");
            return null;
        }
    }


    public Dictionary<string, string> ColorText(string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];
                
        string h1 = "h1";
       

        GameObject h1Color = GameObject.FindGameObjectWithTag("h1");


        if (nounsInInventory.Contains(h1))
        {
            h1Color.GetComponent<Text>().supportRichText = true;
            h1Color.GetComponent<Text>().text = $"<color={noun}>Headline</color>";
            Debug.Log("changed color of Text");
            return colorDictionary;
        }
        else
        {
            controller.LogStringWithReturn("No color to change here");
            return null;
        }
    }

    public Dictionary<string, string> FontSize(string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];
        GameObject h1Size = GameObject.FindGameObjectWithTag("h1");

        string px = "px";
        int textSize = int.Parse(noun);
         
        string h1 = "h1";

        if (nounsInInventory.Contains(h1) && textSize <= 100)
        {
            h1Size.GetComponent<Text>().fontSize = textSize;
            //Debug.Log("changed size of h1");
            return fontDictionary;
        }
        else
        {
            return null;
        }
    }

}
