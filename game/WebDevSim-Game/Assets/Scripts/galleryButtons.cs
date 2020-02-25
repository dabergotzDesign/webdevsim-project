using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class galleryButtons : MonoBehaviour
{

    public Image image1;
    public Image image2;
    public Image image3;



    public void Button01()
    {

        image1.GetComponent<Image>().enabled = true;

        image2.GetComponent<Image>().enabled = false;

        image3.GetComponent<Image>().enabled = false;

        //Debug.Log("shows image1"); 
    }

    public void Button02()
    {

        image1.GetComponent<Image>().enabled = false;

        image2.GetComponent<Image>().enabled = true;

        image3.GetComponent<Image>().enabled = false;

        //Debug.Log("shows image2");
    }

    public void Button03()
    {
        image1.GetComponent<Image>().enabled = false;

        image2.GetComponent<Image>().enabled = false;

        image3.GetComponent<Image>().enabled = true;

        //Debug.Log("shows image3");
    }

}
