using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class hideShowUI : MonoBehaviour
{
    public GameObject InputDisplayUI;

   
    bool isDisplayed;

    Image uiImage;

    public Sprite closeImage;
    public Sprite openImage;


    private void Start()
    {
        uiImage = GetComponent<Image>();

        uiImage.sprite = closeImage;
    }

    public void HideUI()
    {
        if (InputDisplayUI == true)
        {
            isDisplayed = !isDisplayed;
            InputDisplayUI.SetActive(isDisplayed);

            uiImage.sprite = openImage;
        }

        if (!isDisplayed)
        {
            uiImage.sprite = openImage;
        }

        if (isDisplayed)
        {
            uiImage.sprite = closeImage;
        }

    }
}
