using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class ActionRespond : ScriptableObject
{
    public string requiredString;

    public abstract bool DoActionResponse(gameNavigation controller);

}
