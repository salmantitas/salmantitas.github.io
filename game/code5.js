gdjs.ReceptionCode = {};
gdjs.ReceptionCode.forEachIndex2 = 0;

gdjs.ReceptionCode.forEachObjects2 = [];

gdjs.ReceptionCode.forEachTemporary2 = null;

gdjs.ReceptionCode.forEachTotalCount2 = 0;

gdjs.ReceptionCode.stopDoWhile3 = false;

gdjs.ReceptionCode.GDDrawerObjects1= [];
gdjs.ReceptionCode.GDDrawerObjects2= [];
gdjs.ReceptionCode.GDDrawerObjects3= [];
gdjs.ReceptionCode.GDDrawerObjects4= [];
gdjs.ReceptionCode.GDDrawerObjects5= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects4= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects5= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects3= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects4= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects5= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects1= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects2= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects3= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects4= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects5= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects1= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects2= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects3= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects4= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects5= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects3= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects4= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects5= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects1= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects2= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects3= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects4= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects5= [];
gdjs.ReceptionCode.GDBackToReceptionObjects1= [];
gdjs.ReceptionCode.GDBackToReceptionObjects2= [];
gdjs.ReceptionCode.GDBackToReceptionObjects3= [];
gdjs.ReceptionCode.GDBackToReceptionObjects4= [];
gdjs.ReceptionCode.GDBackToReceptionObjects5= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects1= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects2= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects3= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects4= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects5= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects1= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects2= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects3= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects4= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects5= [];
gdjs.ReceptionCode.GDInventorySlotObjects1= [];
gdjs.ReceptionCode.GDInventorySlotObjects2= [];
gdjs.ReceptionCode.GDInventorySlotObjects3= [];
gdjs.ReceptionCode.GDInventorySlotObjects4= [];
gdjs.ReceptionCode.GDInventorySlotObjects5= [];
gdjs.ReceptionCode.GDInventoryKeyObjects1= [];
gdjs.ReceptionCode.GDInventoryKeyObjects2= [];
gdjs.ReceptionCode.GDInventoryKeyObjects3= [];
gdjs.ReceptionCode.GDInventoryKeyObjects4= [];
gdjs.ReceptionCode.GDInventoryKeyObjects5= [];
gdjs.ReceptionCode.GDCorrectObjects1= [];
gdjs.ReceptionCode.GDCorrectObjects2= [];
gdjs.ReceptionCode.GDCorrectObjects3= [];
gdjs.ReceptionCode.GDCorrectObjects4= [];
gdjs.ReceptionCode.GDCorrectObjects5= [];
gdjs.ReceptionCode.GDFadeObjects1= [];
gdjs.ReceptionCode.GDFadeObjects2= [];
gdjs.ReceptionCode.GDFadeObjects3= [];
gdjs.ReceptionCode.GDFadeObjects4= [];
gdjs.ReceptionCode.GDFadeObjects5= [];
gdjs.ReceptionCode.GDplayObjects1= [];
gdjs.ReceptionCode.GDplayObjects2= [];
gdjs.ReceptionCode.GDplayObjects3= [];
gdjs.ReceptionCode.GDplayObjects4= [];
gdjs.ReceptionCode.GDplayObjects5= [];
gdjs.ReceptionCode.GDBackgroundObjects1= [];
gdjs.ReceptionCode.GDBackgroundObjects2= [];
gdjs.ReceptionCode.GDBackgroundObjects3= [];
gdjs.ReceptionCode.GDBackgroundObjects4= [];
gdjs.ReceptionCode.GDBackgroundObjects5= [];
gdjs.ReceptionCode.GDScreenlaObjects1= [];
gdjs.ReceptionCode.GDScreenlaObjects2= [];
gdjs.ReceptionCode.GDScreenlaObjects3= [];
gdjs.ReceptionCode.GDScreenlaObjects4= [];
gdjs.ReceptionCode.GDScreenlaObjects5= [];

gdjs.ReceptionCode.conditionTrue_0 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_0 = {val:false};
gdjs.ReceptionCode.conditionTrue_1 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_1 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_1 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_1 = {val:false};


gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595TimerObjects2Objects = Hashtable.newFrom({"HUD_Timer": gdjs.ReceptionCode.GDHUD_95TimerObjects2});gdjs.ReceptionCode.eventsList0 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sec")) < 10;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("secText").setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}}

}


};gdjs.ReceptionCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDHUD_95TimerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595TimerObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerY")), "Countdown");
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95TimerObjects2[i].setZOrder(200);
}
}}

}


{



}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Timer"), gdjs.ReceptionCode.GDHUD_95TimerObjects2);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95TimerObjects2[i].setString("00" + ":" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) / 60))) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("secText")));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{


{
{runtimeScene.getVariables().get("sec").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")), 60));
}{runtimeScene.getVariables().get("secText").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}
{ //Subevents
gdjs.ReceptionCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDFadeObjects1Objects = Hashtable.newFrom({"Fade": gdjs.ReceptionCode.GDFadeObjects1});gdjs.ReceptionCode.eventsList2 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDFadeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDFadeObjects1Objects, 0, 0, "Fade");
}{for(var i = 0, len = gdjs.ReceptionCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade_out", 0, "linear", 1000, false);
}
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDBackToReceptionObjects2Objects = Hashtable.newFrom({"BackToReception": gdjs.ReceptionCode.GDBackToReceptionObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.ReceptionCode.GDBackToReceptionObjects1});gdjs.ReceptionCode.eventsList3 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDBackToReceptionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDBackToReceptionObjects2Objects, 1670, 1000, "");
}{for(var i = 0, len = gdjs.ReceptionCode.GDBackToReceptionObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDBackToReceptionObjects2[i].setZOrder(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToReception"), gdjs.ReceptionCode.GDBackToReceptionObjects1);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDDrawerObjects1Objects = Hashtable.newFrom({"Drawer": gdjs.ReceptionCode.GDDrawerObjects1});gdjs.ReceptionCode.mapOf = Hashtable.newFrom({});gdjs.ReceptionCode.eventsList4 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOf, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.ReceptionCode.GDHUD_95LocationNameObjects3);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95LocationNameObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95LocationNameObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[i].setString("");
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.ReceptionCode.GDHUD_95LocationNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95LocationNameObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95LocationNameObjects2[i].setString("");
}
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDScreenlaObjects3Objects = Hashtable.newFrom({"Screenla": gdjs.ReceptionCode.GDScreenlaObjects3});gdjs.ReceptionCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Screenla"), gdjs.ReceptionCode.GDScreenlaObjects3);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDScreenlaObjects3Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
}

}


};gdjs.ReceptionCode.eventsList6 = function(runtimeScene) {

{


gdjs.ReceptionCode.eventsList5(runtimeScene);
}


};gdjs.ReceptionCode.eventsList7 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.ReceptionCode.GDHUD_95DescriptionObjects4);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects4.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects4[i].setString("");
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.ReceptionCode.GDHUD_95DescriptionObjects3);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects3[i].setString("");
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3);
{}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[i].setString("");
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Drawer"), gdjs.ReceptionCode.GDDrawerObjects3);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDDrawerObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDDrawerObjects3[i].drawRoundedRectangle((( gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[0].getX()) - 10, (( gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[0].getY()) - 10, (( gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[0].getX()) + (( gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[0].getWidth()) + 10, (( gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[0].getY()) + (( gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3[0].getHeight()) + 10, 10);
}
}{}
{ //Subevents
gdjs.ReceptionCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintsObjects3Objects = Hashtable.newFrom({"HUD_Hints": gdjs.ReceptionCode.GDHUD_95HintsObjects3});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintTextObjects3Objects = Hashtable.newFrom({"HUD_HintText": gdjs.ReceptionCode.GDHUD_95HintTextObjects3});gdjs.ReceptionCode.eventsList9 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
{gdjs.ReceptionCode.conditionTrue_1 = gdjs.ReceptionCode.condition0IsTrue_0;
gdjs.ReceptionCode.condition0IsTrue_1.val = false;
gdjs.ReceptionCode.condition1IsTrue_1.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("hintReception")) <= 0;
if( gdjs.ReceptionCode.condition0IsTrue_1.val ) {
    gdjs.ReceptionCode.conditionTrue_1.val = true;
}
}
{
gdjs.ReceptionCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("hints")) <= 0;
if( gdjs.ReceptionCode.condition1IsTrue_1.val ) {
    gdjs.ReceptionCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDHUD_95HintsObjects3 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintsObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintsObjects3[i].setColor("148;148;148");
}
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintsObjects3Objects = Hashtable.newFrom({"HUD_Hints": gdjs.ReceptionCode.GDHUD_95HintsObjects3});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintsObjects2Objects = Hashtable.newFrom({"HUD_Hints": gdjs.ReceptionCode.GDHUD_95HintsObjects2});gdjs.ReceptionCode.eventsList10 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("hintReception").sub(1);
}}

}


};gdjs.ReceptionCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HUD_Hints"), gdjs.ReceptionCode.GDHUD_95HintsObjects3);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintsObjects3Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDHUD_95HintsObjects3 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintsObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintsObjects3[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HUD_Hints"), gdjs.ReceptionCode.GDHUD_95HintsObjects2);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintsObjects2Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDHUD_95HintsObjects2 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintsObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintsObjects2[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.eventsList12 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length = 0;

gdjs.ReceptionCode.GDHUD_95HintsObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintsObjects3Objects, 1600, 10, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDHUD_9595HintTextObjects3Objects, 1415, 650, "HUD");
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintTextObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintTextObjects3[i].setZOrder(200);
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("hintReception")) == 0;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Drawer"), gdjs.ReceptionCode.GDDrawerObjects3);
gdjs.copyArray(runtimeScene.getObjects("HUD_HintText"), gdjs.ReceptionCode.GDHUD_95HintTextObjects3);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintTextObjects3[i].setString("This is a free hint!\nPress J to access the Journal.\nRight click to check description.\nLeft click to use.");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDDrawerObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDDrawerObjects3[i].drawRoundedRectangle((( gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95HintTextObjects3[0].getX()) - 10, (( gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95HintTextObjects3[0].getY()) - 10, (( gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95HintTextObjects3[0].getX()) + (( gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95HintTextObjects3[0].getWidth()) + 10, (( gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95HintTextObjects3[0].getY()) + (( gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDHUD_95HintTextObjects3[0].getHeight()) + 10, 10);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Hints"), gdjs.ReceptionCode.GDHUD_95HintsObjects3);
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95HintsObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95HintsObjects3[i].setString("HINTS: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("hints")) + "/3");
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("hintReception")) > 0;
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("hints")) > 0;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.ReceptionCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.ReceptionCode.GDInventoryBackgroundObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects3Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects3});gdjs.ReceptionCode.eventsList13 = function(runtimeScene) {

};gdjs.ReceptionCode.eventsList14 = function(runtimeScene) {

{


gdjs.ReceptionCode.stopDoWhile3 = false;
do {gdjs.copyArray(gdjs.ReceptionCode.GDInventoryBackgroundObjects2, gdjs.ReceptionCode.GDInventoryBackgroundObjects3);

gdjs.ReceptionCode.GDInventorySlotObjects3.length = 0;

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("inv_i")) > 0;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects3Objects, (( gdjs.ReceptionCode.GDInventoryBackgroundObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDInventoryBackgroundObjects3[0].getPointX("")) + 16, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("inv_y")), "Inventory");
}{for(var i = 0, len = gdjs.ReceptionCode.GDInventorySlotObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventorySlotObjects3[i].setZOrder(20);
}
}{runtimeScene.getVariables().get("inv_i").sub(1);
}{runtimeScene.getVariables().get("inv_y").add(80);
}
{ //Subevents: 
gdjs.ReceptionCode.eventsList13(runtimeScene);} //Subevents end.
}
} else gdjs.ReceptionCode.stopDoWhile3 = true; 
} while ( !gdjs.ReceptionCode.stopDoWhile3 );

}


};gdjs.ReceptionCode.eventsList15 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDInventoryBackgroundObjects2.length = 0;

{runtimeScene.getVariables().get("picked_item").setString("");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects, 17, 804, "Inventory");
}{for(var i = 0, len = gdjs.ReceptionCode.GDInventoryBackgroundObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventoryBackgroundObjects2[i].setZOrder(17);
}
}{runtimeScene.getVariables().get("inv_i").setNumber(3);
}{runtimeScene.getVariables().get("inv_y").setNumber((( gdjs.ReceptionCode.GDInventoryBackgroundObjects2.length === 0 ) ? 0 :gdjs.ReceptionCode.GDInventoryBackgroundObjects2[0].getPointY("")) + 16);
}
{ //Subevents
gdjs.ReceptionCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.eventsList16 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Inventory");
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Inventory");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Inventory"));
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Inventory");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


};gdjs.ReceptionCode.eventsList17 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("i_released").setNumber(1);
}
{ //Subevents
gdjs.ReceptionCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects2});gdjs.ReceptionCode.eventsList18 = function(runtimeScene) {

{

/* Reuse gdjs.ReceptionCode.GDInventorySlotObjects2 */

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ReceptionCode.GDInventorySlotObjects2.length;i<l;++i) {
    if ( gdjs.ReceptionCode.GDInventorySlotObjects2[i].getVariableNumber(gdjs.ReceptionCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.ReceptionCode.condition0IsTrue_0.val = true;
        gdjs.ReceptionCode.GDInventorySlotObjects2[k] = gdjs.ReceptionCode.GDInventorySlotObjects2[i];
        ++k;
    }
}
gdjs.ReceptionCode.GDInventorySlotObjects2.length = k;}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.ReceptionCode.GDInventoryBackgroundObjects2});gdjs.ReceptionCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InventoryBackground"), gdjs.ReceptionCode.GDInventoryBackgroundObjects2);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryKeyObjects3Objects = Hashtable.newFrom({"InventoryKey": gdjs.ReceptionCode.GDInventoryKeyObjects3});gdjs.ReceptionCode.eventsList20 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.ReceptionCode.GDInventorySlotObjects2, gdjs.ReceptionCode.GDInventorySlotObjects3);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ReceptionCode.GDInventorySlotObjects3.length;i<l;++i) {
    if ( gdjs.ReceptionCode.GDInventorySlotObjects3[i].getVariableString(gdjs.ReceptionCode.GDInventorySlotObjects3[i].getVariables().getFromIndex(0)) == "key" ) {
        gdjs.ReceptionCode.condition0IsTrue_0.val = true;
        gdjs.ReceptionCode.GDInventorySlotObjects3[k] = gdjs.ReceptionCode.GDInventorySlotObjects3[i];
        ++k;
    }
}
gdjs.ReceptionCode.GDInventorySlotObjects3.length = k;}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDInventorySlotObjects3 */
gdjs.ReceptionCode.GDInventoryKeyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryKeyObjects3Objects, (( gdjs.ReceptionCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDInventorySlotObjects3[0].getPointX("Left")), (( gdjs.ReceptionCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDInventorySlotObjects3[0].getPointY("Top")), "UI");
}{for(var i = 0, len = gdjs.ReceptionCode.GDInventoryKeyObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventoryKeyObjects3[i].setZOrder(20);
}
}{}{runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound").setNumber(1);
}{runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked").setNumber(0);
}}

}


};gdjs.ReceptionCode.eventsList21 = function(runtimeScene) {

{



}


{


gdjs.ReceptionCode.eventsList15(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList17(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.ReceptionCode.GDInventorySlotObjects2);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDInventorySlotObjects2 */
{for(var i = 0, len = gdjs.ReceptionCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventorySlotObjects2[i].setAnimationName("Hover");
}
}{}
{ //Subevents
gdjs.ReceptionCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.ReceptionCode.GDInventorySlotObjects2);

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDInventorySlotObjects2 */
{for(var i = 0, len = gdjs.ReceptionCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventorySlotObjects2[i].setAnimationName("Normal");
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.ReceptionCode.GDInventorySlotObjects1);

for(gdjs.ReceptionCode.forEachIndex2 = 0;gdjs.ReceptionCode.forEachIndex2 < gdjs.ReceptionCode.GDInventorySlotObjects1.length;++gdjs.ReceptionCode.forEachIndex2) {
gdjs.ReceptionCode.GDInventorySlotObjects2.length = 0;


gdjs.ReceptionCode.forEachTemporary2 = gdjs.ReceptionCode.GDInventorySlotObjects1[gdjs.ReceptionCode.forEachIndex2];
gdjs.ReceptionCode.GDInventorySlotObjects2.push(gdjs.ReceptionCode.forEachTemporary2);
gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ReceptionCode.GDInventorySlotObjects2.length;i<l;++i) {
    if ( gdjs.ReceptionCode.GDInventorySlotObjects2[i].getVariableNumber(gdjs.ReceptionCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.ReceptionCode.condition0IsTrue_0.val = true;
        gdjs.ReceptionCode.GDInventorySlotObjects2[k] = gdjs.ReceptionCode.GDInventorySlotObjects2[i];
        ++k;
    }
}
gdjs.ReceptionCode.GDInventorySlotObjects2.length = k;}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("picked_item")) != "";
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.ReceptionCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventorySlotObjects2[i].returnVariable(gdjs.ReceptionCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("picked_item")));
}
}{runtimeScene.getVariables().get("picked_item").setString("");
}
{ //Subevents: 
gdjs.ReceptionCode.eventsList20(runtimeScene);} //Subevents end.
}
}

}


};gdjs.ReceptionCode.eventsList22 = function(runtimeScene) {

{


gdjs.ReceptionCode.eventsList4(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList8(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList12(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList21(runtimeScene);
}


};gdjs.ReceptionCode.eventsList23 = function(runtimeScene) {

{


gdjs.ReceptionCode.eventsList22(runtimeScene);
}


};gdjs.ReceptionCode.eventsList24 = function(runtimeScene) {

{



}


{


gdjs.ReceptionCode.eventsList1(runtimeScene);
}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) <= 0;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{



}


{


gdjs.ReceptionCode.eventsList2(runtimeScene);
}


{



}


{


gdjs.ReceptionCode.eventsList3(runtimeScene);
}


{



}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.ReceptionCode.GDHUD_95DescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Screenla"), gdjs.ReceptionCode.GDScreenlaObjects1);
gdjs.ReceptionCode.GDDrawerObjects1.length = 0;

{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setPosition(12,32);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDDrawerObjects1Objects, 0, 0, "UI");
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDScreenlaObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDScreenlaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDDrawerObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDDrawerObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setZOrder(200);
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setLayer("HUD");
}
}}

}


{


{
}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("paused")) == 0;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ReceptionCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.ReceptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ReceptionCode.GDDrawerObjects1.length = 0;
gdjs.ReceptionCode.GDDrawerObjects2.length = 0;
gdjs.ReceptionCode.GDDrawerObjects3.length = 0;
gdjs.ReceptionCode.GDDrawerObjects4.length = 0;
gdjs.ReceptionCode.GDDrawerObjects5.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects5.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects5.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects5.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects5.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects5.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects5.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects1.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects2.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects3.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects4.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects5.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects4.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects5.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects5.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects1.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects2.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects3.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects4.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects5.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects1.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects2.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects3.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects4.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects5.length = 0;
gdjs.ReceptionCode.GDCorrectObjects1.length = 0;
gdjs.ReceptionCode.GDCorrectObjects2.length = 0;
gdjs.ReceptionCode.GDCorrectObjects3.length = 0;
gdjs.ReceptionCode.GDCorrectObjects4.length = 0;
gdjs.ReceptionCode.GDCorrectObjects5.length = 0;
gdjs.ReceptionCode.GDFadeObjects1.length = 0;
gdjs.ReceptionCode.GDFadeObjects2.length = 0;
gdjs.ReceptionCode.GDFadeObjects3.length = 0;
gdjs.ReceptionCode.GDFadeObjects4.length = 0;
gdjs.ReceptionCode.GDFadeObjects5.length = 0;
gdjs.ReceptionCode.GDplayObjects1.length = 0;
gdjs.ReceptionCode.GDplayObjects2.length = 0;
gdjs.ReceptionCode.GDplayObjects3.length = 0;
gdjs.ReceptionCode.GDplayObjects4.length = 0;
gdjs.ReceptionCode.GDplayObjects5.length = 0;
gdjs.ReceptionCode.GDBackgroundObjects1.length = 0;
gdjs.ReceptionCode.GDBackgroundObjects2.length = 0;
gdjs.ReceptionCode.GDBackgroundObjects3.length = 0;
gdjs.ReceptionCode.GDBackgroundObjects4.length = 0;
gdjs.ReceptionCode.GDBackgroundObjects5.length = 0;
gdjs.ReceptionCode.GDScreenlaObjects1.length = 0;
gdjs.ReceptionCode.GDScreenlaObjects2.length = 0;
gdjs.ReceptionCode.GDScreenlaObjects3.length = 0;
gdjs.ReceptionCode.GDScreenlaObjects4.length = 0;
gdjs.ReceptionCode.GDScreenlaObjects5.length = 0;

gdjs.ReceptionCode.eventsList24(runtimeScene);
return;

}

gdjs['ReceptionCode'] = gdjs.ReceptionCode;
