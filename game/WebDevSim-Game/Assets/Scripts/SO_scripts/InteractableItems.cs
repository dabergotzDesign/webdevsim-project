using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;



public class InteractableItems : MonoBehaviour
{

    public Dictionary<string, string> examineDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> createDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> addDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> backgroundDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> colorDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> fontDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> constDictionary = new Dictionary<string, string>();

    public Dictionary<string, string> codeDictionary = new Dictionary<string, string>();

    [HideInInspector] public List<string> nounsInFile = new List<string>();

    public List<string> nounsInInventory = new List<string>();
    gameNavigation controller;

    /*//////////INTERACTABLE////////////*/
    GameObject pageElement;

    /*///BACKGROUND IMAGES/////////*/
    public Sprite backgroundImage_01; //code.jpg
    public Sprite backgroundImage_02; //grid.jpg
    public Sprite backgroundImage_03; //matrix.jpg

    /*///BUTTONS///*/
    public Button buttonToUnlock1;
    public Button buttonToUnlock2;
    public Button buttonToUnlock3;

    /*///SceneTransition///*/
    public Animator transition;
    public float transitionTime = 1f;


    private void Awake()
    {
        controller = GetComponent<gameNavigation>();

        //disable buttons
        buttonToUnlock1.interactable = false;
        buttonToUnlock2.interactable = false;
        buttonToUnlock3.interactable = false;

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
        string helpCmdGo = "> open - opens file";
        string helpCmdAdd = "> add - adds element to file";
        string helpCmdCheck = "> check - lists all added elements in file";
        //string helpCmdWrite = "> write - write a custom text to text element";
        string helpCmdColor = "> color: - changes the color of text element";
        string helpCmdSize = "> font-size - changes the size of text element";
        string helpCmdBackground = "> background: - background of element will changes it's color";
        string helpCmdExamine = "> examine - examines and explains element";
        string helpCmdConst = "> const - adds a variable to javascript";
        string helpCmdCode = "> code - write a function to javascript";
        string helpCmdHelp = "> help - lists all commands";

        controller.LogStringWithReturn("You stuck? Try some of these commands, they should help you out: " + "\n" + helpCmdCreate + "\n" + helpCmdGo + "\n" + helpCmdAdd + "\n"
            + helpCmdCheck + "\n" + helpCmdColor + "\n" + helpCmdSize + "\n" + helpCmdBackground + "\n" + helpCmdExamine + "\n" + helpCmdConst + "\n" + helpCmdCode + "\n" + helpCmdHelp);           

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
        constDictionary.Clear();
        nounsInFile.Clear();
    }

  
    /*////ADD THINGS TO WEBSITE////*/
    public Dictionary<string,string> Add (string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];

        string button01 = "<button>Image01</button>";
        string button02 = "<button>Image02</button>";
        string button03 = "<button>Image03</button>";


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
            if(noun == button01 || noun == button02 || noun == button03 && pageElement.GetComponent<Image>() !=null && pageElement.GetComponentInChildren<Text>() != null)
            {
                pageElement.GetComponent<Image>().enabled = true;
                pageElement.GetComponentInChildren<Text>().enabled = true;
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

        string bgCode = "url(\"images/code.jpg\");";      
        string bgMatrix = "url(\"images/matrix.jpg\");";
        string bgGrid = "url(\"images/grid.jpg\");";
    
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
                
        string h1 = "<h1>gallery</h1>";

        string colorMessage = "changed color of h1.\nFor the h1, it’s still way to small to read easily. Let’s change the size of it.\nWe still focus on our h1 so we can change the size of the headline by writing\n<color=#ec6463>font-size: number px;</color> \nThe unit we use are pixels and we should <color=#ec6463>not</color> go higher than <color=#ec6463>100px</color>.";
       

        GameObject h1Color = GameObject.FindGameObjectWithTag("<h1>gallery</h1>");


        if (nounsInInventory.Contains(h1))
        {
            h1Color.GetComponent<Text>().supportRichText = true;
            h1Color.GetComponent<Text>().text = $"<color={noun}>Gallery</color>";
            //Debug.Log("changed color of Text");
            controller.LogStringWithReturn(colorMessage);
            return null;

        }
        else
        {
            controller.LogStringWithReturn("Sorry the color " + noun + "is not provided");
            return null;
        }
    }

    public Dictionary<string, string> FontSize(string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];
        GameObject h1Size = GameObject.FindGameObjectWithTag("<h1>gallery</h1>");

        string sizeMessage = "changed size of h1. \nNow we’re fine. CSS provides you with way more things to edit, but we are good now.\nLet’s focus back on our images in our gallery.\nSo we go back to our <color=#ec6463>index.html</color> and add three buttons to our website.";
        //string px = "px";
        int textSize = int.Parse(noun);
         
        string h1 = "<h1>gallery</h1>";

        if (nounsInInventory.Contains(h1) && textSize <= 101)
        {
            h1Size.GetComponent<Text>().fontSize = textSize;
            //Debug.Log("changed size of h1");
            controller.LogStringWithReturn(sizeMessage);
            return null;
            
        }
        else
        {
            controller.LogStringWithReturn("whoa hold up, I think we're going to big here");
            return null;
        }
    }

    /*///HELLO WORLD///*/
    //Command: console.log("HelloWorld");
    public void DisplayHelloWorld()
    {
        string ifResponded = "It works, now we can go on.\nWhen we want to see the images we are going to connect them to the buttons.\nIf you click on one button one image a different image will be shown, for every button.\nSo we are going to first refer to an image component.The best way to refer to a component is to give it either an \"id\" or a \"class\". In our case the images will have an \"<color=#ec6463>id</color>\",\nlike: <color=#ec6463>id=\"galleryImage\"</color>.";
        string getElement = "Since we’re now on our javascript file, we can refer to an image component by adding a variable. Which goes like this:\n<color=#ec6463>const image1= document.getElementById(\"IdName\");</color>\nOur Images have the IDs <color=#ec6463>img1</color>,<color=#ec6463>img2</color> and <color=#ec6463>img3</color>.";
        
        controller.LogStringWithReturn("<color=#ec6463>HelloWorld</color>");

        controller.LogStringWithReturn(ifResponded + getElement);
    }

    /*//CONST - ADD A CONST VARIABLE TO MAIN.JS//*/
    public Dictionary<string, string> Const(string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];

        string gImg1 = "image1=document.getelementbyid(\"img1\");";
        string gImg2 = "image2=document.getelementbyid(\"img2\");";
        string gImg3 = "image3=document.getelementbyid(\"img3\");";

        string gbtn1 = "button1=document.getelementbyid(\"btn1\");";
        string gbtn2 = "button2=document.getelementbyid(\"btn2\");";
        string gbtn3 = "button3=document.getelementbyid(\"btn3\");";



        if (nounsInFile.Contains(noun))
        {
            nounsInInventory.Add(noun);

            //CONST IMAGES
            if (nounsInInventory.Contains(noun) && noun == gImg1)
            {
                return constDictionary;
                //controller.LogStringWithReturn("added const image to your main.js" + "\n" + "after all three buttons got an id, we have to code what they have to do.\nWe want to make them to display the images from the gallery.");
            }
            if (nounsInInventory.Contains(noun) && noun == gImg2)
            {
                return constDictionary;
                //controller.LogStringWithReturn("added const image to your main.js" + "\n" + "after all three buttons got an id, we have to code what they have to do.\nWe want to make them to display the images from the gallery.");
            }
            if (nounsInInventory.Contains(noun) && noun == gImg3)
            {
                return constDictionary;
                //controller.LogStringWithReturn("added const image to your main.js" + "\n" + "after all three buttons got an id, we have to code what they have to do.\nWe want to make them to display the images from the gallery.");
            }

            //CONST BUTTONS
            if (nounsInInventory.Contains(noun) && noun == gbtn1)
            {
                return constDictionary;
                //controller.LogStringWithReturn("added const image to your main.js" + "\n" + "after all three buttons got an id, we have to code what they have to do.\nWe want to make them to display the images from the gallery.");
            }
            if (nounsInInventory.Contains(noun) && noun == gbtn2)
            {
                return constDictionary;
                //controller.LogStringWithReturn("added const image to your main.js" + "\n" + "after all three buttons got an id, we have to code what they have to do.\nWe want to make them to display the images from the gallery.");
            }
            if (nounsInInventory.Contains(noun) && noun == gbtn3)
            {
                return constDictionary;
                //controller.LogStringWithReturn("added const image to your main.js" + "\n" + "after all three buttons got an id, we have to code what they have to do.\nWe want to make them to display the images from the gallery.");
            }
            return null;
        }
        else
        {
            controller.LogStringWithReturn("Id not found with: " + noun);
            return null;
        }
    }

    /*//CONST - ADD A CONST VARIABLE TO MAIN.JS//*/
    public Dictionary<string, string> Code(string[] seperatedInputWords)
    {
        string noun = seperatedInputWords[1];

        string addEvent1 = "button1.addeventlistener(\"click\",()=>{image.src=\"images/fishes.jpg\")};";
        string addEvent2 = "button2.addeventlistener(\"click\",()=>{image.src=\"images/fox.jpg\")};";
        string addEvent3 = "button3.addeventlistener(\"click\",()=>{image.src=\"images/monkey.jpg\")};";
   
        if (nounsInFile.Contains(noun))
        {
            nounsInInventory.Add(noun);

            //BUTTON EVENTS, unlock buttons
            if (nounsInInventory.Contains(noun) && noun == addEvent1)
            {
                buttonToUnlock1.interactable = true;
                return codeDictionary;
            }
            if (nounsInInventory.Contains(noun) && noun == addEvent2)
            {
                buttonToUnlock2.interactable = true;
                return codeDictionary;
            }
            if (nounsInInventory.Contains(noun) && noun == addEvent3)
            {
                buttonToUnlock3.interactable = true;
                return codeDictionary;
            }
            return null;
        }
        else
        {
            controller.LogStringWithReturn("It seems like " + noun + " has a either a wrong image or the button has a wrong reference");
            return null;
        }
    }

    public void Finish()
    {
        controller.LogStringWithReturn("Congratulations, You're finished WebDevSim!");
        StartCoroutine(LoadCredits()); 
    }

    IEnumerator LoadCredits()
    {

        //wait for message
        yield return new WaitForSeconds(3);

        //start transition
        transition.SetTrigger("start");
        yield return new WaitForSeconds(transitionTime);
        SceneManager.LoadScene(sceneBuildIndex: 2);
    
    }
}
