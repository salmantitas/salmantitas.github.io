gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDDrawerObjects1= [];
gdjs.MainMenuCode.GDDrawerObjects2= [];
gdjs.MainMenuCode.GDDrawerObjects3= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects1= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects2= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects3= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects1= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects2= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects3= [];
gdjs.MainMenuCode.GDHUD_95HintsObjects1= [];
gdjs.MainMenuCode.GDHUD_95HintsObjects2= [];
gdjs.MainMenuCode.GDHUD_95HintsObjects3= [];
gdjs.MainMenuCode.GDHUD_95TimerObjects1= [];
gdjs.MainMenuCode.GDHUD_95TimerObjects2= [];
gdjs.MainMenuCode.GDHUD_95TimerObjects3= [];
gdjs.MainMenuCode.GDHUD_95LocationNameObjects1= [];
gdjs.MainMenuCode.GDHUD_95LocationNameObjects2= [];
gdjs.MainMenuCode.GDHUD_95LocationNameObjects3= [];
gdjs.MainMenuCode.GDHUD_95HintTextObjects1= [];
gdjs.MainMenuCode.GDHUD_95HintTextObjects2= [];
gdjs.MainMenuCode.GDHUD_95HintTextObjects3= [];
gdjs.MainMenuCode.GDBackToReceptionObjects1= [];
gdjs.MainMenuCode.GDBackToReceptionObjects2= [];
gdjs.MainMenuCode.GDBackToReceptionObjects3= [];
gdjs.MainMenuCode.GDBackToCafeteriaObjects1= [];
gdjs.MainMenuCode.GDBackToCafeteriaObjects2= [];
gdjs.MainMenuCode.GDBackToCafeteriaObjects3= [];
gdjs.MainMenuCode.GDInventoryBackgroundObjects1= [];
gdjs.MainMenuCode.GDInventoryBackgroundObjects2= [];
gdjs.MainMenuCode.GDInventoryBackgroundObjects3= [];
gdjs.MainMenuCode.GDInventorySlotObjects1= [];
gdjs.MainMenuCode.GDInventorySlotObjects2= [];
gdjs.MainMenuCode.GDInventorySlotObjects3= [];
gdjs.MainMenuCode.GDInventoryKeyObjects1= [];
gdjs.MainMenuCode.GDInventoryKeyObjects2= [];
gdjs.MainMenuCode.GDInventoryKeyObjects3= [];
gdjs.MainMenuCode.GDCorrectObjects1= [];
gdjs.MainMenuCode.GDCorrectObjects2= [];
gdjs.MainMenuCode.GDCorrectObjects3= [];
gdjs.MainMenuCode.GDFadeObjects1= [];
gdjs.MainMenuCode.GDFadeObjects2= [];
gdjs.MainMenuCode.GDFadeObjects3= [];
gdjs.MainMenuCode.GDplayObjects1= [];
gdjs.MainMenuCode.GDplayObjects2= [];
gdjs.MainMenuCode.GDplayObjects3= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDDeskObjects1= [];
gdjs.MainMenuCode.GDDeskObjects2= [];
gdjs.MainMenuCode.GDDeskObjects3= [];
gdjs.MainMenuCode.GDHUD_95Tut_951Objects1= [];
gdjs.MainMenuCode.GDHUD_95Tut_951Objects2= [];
gdjs.MainMenuCode.GDHUD_95Tut_951Objects3= [];
gdjs.MainMenuCode.GDHUD_95Tut_952Objects1= [];
gdjs.MainMenuCode.GDHUD_95Tut_952Objects2= [];
gdjs.MainMenuCode.GDHUD_95Tut_952Objects3= [];
gdjs.MainMenuCode.GDHUD_95Tut_953Objects1= [];
gdjs.MainMenuCode.GDHUD_95Tut_953Objects2= [];
gdjs.MainMenuCode.GDHUD_95Tut_953Objects3= [];
gdjs.MainMenuCode.GDGreatObjects1= [];
gdjs.MainMenuCode.GDGreatObjects2= [];
gdjs.MainMenuCode.GDGreatObjects3= [];
gdjs.MainMenuCode.GDbackgroundObjects1= [];
gdjs.MainMenuCode.GDbackgroundObjects2= [];
gdjs.MainMenuCode.GDbackgroundObjects3= [];
gdjs.MainMenuCode.GDNewObject2Objects1= [];
gdjs.MainMenuCode.GDNewObject2Objects2= [];
gdjs.MainMenuCode.GDNewObject2Objects3= [];
gdjs.MainMenuCode.GDtest_95triggerObjects1= [];
gdjs.MainMenuCode.GDtest_95triggerObjects2= [];
gdjs.MainMenuCode.GDtest_95triggerObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDFadeObjects1Objects = Hashtable.newFrom({"Fade": gdjs.MainMenuCode.GDFadeObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDFadeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDFadeObjects1Objects, 0, 0, "Fade");
}{for(var i = 0, len = gdjs.MainMenuCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade_out", 0, "linear", 1000, false);
}
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Drawer"), gdjs.MainMenuCode.GDDrawerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDDrawerObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDDrawerObjects2[i].setFillColor("173;160;249");
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDDrawerObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDDrawerObjects2[i].drawRoundedRectangle((( gdjs.MainMenuCode.GDTitleObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDTitleObjects2[0].getX()) - 10, 15, (( gdjs.MainMenuCode.GDTitleObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDTitleObjects2[0].getX()) + (( gdjs.MainMenuCode.GDTitleObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDTitleObjects2[0].getWidth()) + 10, 250, 20);
}
}}

}


{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "titleTimer");
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12431860);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("trigger").setNumber(0);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects1Objects = Hashtable.newFrom({"Desk": gdjs.MainMenuCode.GDDeskObjects1});gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Desk"), gdjs.MainMenuCode.GDDeskObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("trigger").setNumber(1);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDGreatObjects2Objects = Hashtable.newFrom({"Great": gdjs.MainMenuCode.GDGreatObjects2});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects2Objects = Hashtable.newFrom({"Desk": gdjs.MainMenuCode.GDDeskObjects2});gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12435332);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.MainMenuCode.GDGreatObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDGreatObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 200, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 200, "UI");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "messageTimer");
}{for(var i = 0, len = gdjs.MainMenuCode.GDGreatObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGreatObjects2[i].setZOrder(100);
}
}}

}


{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("displaySplash")), "messageTimer");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Great"), gdjs.MainMenuCode.GDGreatObjects2);
gdjs.copyArray(runtimeScene.getObjects("HUD_Tut_2"), gdjs.MainMenuCode.GDHUD_95Tut_952Objects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDGreatObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGreatObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDHUD_95Tut_952Objects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHUD_95Tut_952Objects2[i].getBehavior("Tween").addObjectPositionYTween("MoveUp", 900, "linear", 500, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "messageTimer");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Desk"), gdjs.MainMenuCode.GDDeskObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HUD_Tut_2"), gdjs.MainMenuCode.GDHUD_95Tut_952Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainMenuCode.GDHUD_95Tut_952Objects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDHUD_95Tut_952Objects1[i].getBehavior("Tween").hasFinished("MoveUp") ) {
        gdjs.MainMenuCode.condition0IsTrue_0.val = true;
        gdjs.MainMenuCode.GDHUD_95Tut_952Objects1[k] = gdjs.MainMenuCode.GDHUD_95Tut_952Objects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDHUD_95Tut_952Objects1.length = k;}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Tut_3"), gdjs.MainMenuCode.GDHUD_95Tut_953Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDHUD_95Tut_953Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHUD_95Tut_953Objects1[i].getBehavior("Tween").addObjectPositionXTween("MoveLeft", 1400, "linear", 500, false);
}
}}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Desk"), gdjs.MainMenuCode.GDDeskObjects1);
{runtimeScene.getVariables().get("trigger").setNumber(-(1));
}{runtimeScene.getGame().getVariables().get("displaySplash").setNumber(0.5);
}{for(var i = 0, len = gdjs.MainMenuCode.GDDeskObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDDeskObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "titleTimer");
}}

}


{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("trigger")) == 0;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Tut_1"), gdjs.MainMenuCode.GDHUD_95Tut_951Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDHUD_95Tut_951Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDHUD_95Tut_951Objects1[i].getBehavior("Tween").addObjectPositionXTween("MoveRight", 60, "linear", 2000, false);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("trigger")) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDDrawerObjects1.length = 0;
gdjs.MainMenuCode.GDDrawerObjects2.length = 0;
gdjs.MainMenuCode.GDDrawerObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95HintsObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95HintsObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95HintsObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95TimerObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95TimerObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95TimerObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95HintTextObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95HintTextObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95HintTextObjects3.length = 0;
gdjs.MainMenuCode.GDBackToReceptionObjects1.length = 0;
gdjs.MainMenuCode.GDBackToReceptionObjects2.length = 0;
gdjs.MainMenuCode.GDBackToReceptionObjects3.length = 0;
gdjs.MainMenuCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.MainMenuCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.MainMenuCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.MainMenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDInventorySlotObjects1.length = 0;
gdjs.MainMenuCode.GDInventorySlotObjects2.length = 0;
gdjs.MainMenuCode.GDInventorySlotObjects3.length = 0;
gdjs.MainMenuCode.GDInventoryKeyObjects1.length = 0;
gdjs.MainMenuCode.GDInventoryKeyObjects2.length = 0;
gdjs.MainMenuCode.GDInventoryKeyObjects3.length = 0;
gdjs.MainMenuCode.GDCorrectObjects1.length = 0;
gdjs.MainMenuCode.GDCorrectObjects2.length = 0;
gdjs.MainMenuCode.GDCorrectObjects3.length = 0;
gdjs.MainMenuCode.GDFadeObjects1.length = 0;
gdjs.MainMenuCode.GDFadeObjects2.length = 0;
gdjs.MainMenuCode.GDFadeObjects3.length = 0;
gdjs.MainMenuCode.GDplayObjects1.length = 0;
gdjs.MainMenuCode.GDplayObjects2.length = 0;
gdjs.MainMenuCode.GDplayObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDDeskObjects1.length = 0;
gdjs.MainMenuCode.GDDeskObjects2.length = 0;
gdjs.MainMenuCode.GDDeskObjects3.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_951Objects1.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_951Objects2.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_951Objects3.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_952Objects1.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_952Objects2.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_952Objects3.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_953Objects1.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_953Objects2.length = 0;
gdjs.MainMenuCode.GDHUD_95Tut_953Objects3.length = 0;
gdjs.MainMenuCode.GDGreatObjects1.length = 0;
gdjs.MainMenuCode.GDGreatObjects2.length = 0;
gdjs.MainMenuCode.GDGreatObjects3.length = 0;
gdjs.MainMenuCode.GDbackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDbackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDbackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects1.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects2.length = 0;
gdjs.MainMenuCode.GDNewObject2Objects3.length = 0;
gdjs.MainMenuCode.GDtest_95triggerObjects1.length = 0;
gdjs.MainMenuCode.GDtest_95triggerObjects2.length = 0;
gdjs.MainMenuCode.GDtest_95triggerObjects3.length = 0;

gdjs.MainMenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
