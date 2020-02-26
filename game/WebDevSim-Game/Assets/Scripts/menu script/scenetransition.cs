using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class scenetransition : MonoBehaviour
{
    public Animator transition;

    public float transitionTime = 1f;

    private void Start()
    {
        transition.Play("crossfade_start");
    }

    public void StartGame()
    {
        StartCoroutine(SceneTransitionStart());
    }

    public void Credits()
    {
        StartCoroutine(SceneTransitionCredits());
    }

    public void Back()
    {
        StartCoroutine(SceneTransitionBack());
    }

    //START
    IEnumerator SceneTransitionStart()
    {
        //Play Animation
        transition.SetTrigger("start");

        yield return new WaitForSeconds(transitionTime);
        SceneManager.LoadScene(sceneBuildIndex: 1);
    }

    //CREDITS
    IEnumerator SceneTransitionCredits()
    {
        //Play Animation
        transition.SetTrigger("start");

        yield return new WaitForSeconds(transitionTime);
        SceneManager.LoadScene(sceneBuildIndex: 2);
    }

    //BACK_MENU
    IEnumerator SceneTransitionBack()
    {
        //Play Animation
        transition.SetTrigger("start");

        yield return new WaitForSeconds(transitionTime);
        SceneManager.LoadScene(sceneBuildIndex: 0);
    }
}
