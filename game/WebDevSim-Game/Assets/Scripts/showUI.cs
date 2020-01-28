using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class showUI : MonoBehaviour
{
    public GameObject h1;
    public GameObject h1BG;

 


    private void Awake()
    {
        h1.SetActive(false);
        h1BG.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            h1.SetActive(true);
                      
        }

        if (Input.GetKeyDown(KeyCode.Return))
        {
            h1BG.SetActive(true);
        }
    }
}
