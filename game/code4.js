gdjs.ReceptionCode = {};
gdjs.ReceptionCode.GDDrawerObjects1= [];
gdjs.ReceptionCode.GDDrawerObjects2= [];
gdjs.ReceptionCode.GDDrawerObjects3= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects3= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects1= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects2= [];
gdjs.ReceptionCode.GDHUD_95HintsObjects3= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects1= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects2= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects3= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects3= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects1= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects2= [];
gdjs.ReceptionCode.GDHUD_95HintTextObjects3= [];
gdjs.ReceptionCode.GDBackToReceptionObjects1= [];
gdjs.ReceptionCode.GDBackToReceptionObjects2= [];
gdjs.ReceptionCode.GDBackToReceptionObjects3= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects1= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects2= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects3= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects1= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects2= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects3= [];
gdjs.ReceptionCode.GDInventorySlotObjects1= [];
gdjs.ReceptionCode.GDInventorySlotObjects2= [];
gdjs.ReceptionCode.GDInventorySlotObjects3= [];
gdjs.ReceptionCode.GDInventoryKeyObjects1= [];
gdjs.ReceptionCode.GDInventoryKeyObjects2= [];
gdjs.ReceptionCode.GDInventoryKeyObjects3= [];
gdjs.ReceptionCode.GDCorrectObjects1= [];
gdjs.ReceptionCode.GDCorrectObjects2= [];
gdjs.ReceptionCode.GDCorrectObjects3= [];
gdjs.ReceptionCode.GDFadeObjects1= [];
gdjs.ReceptionCode.GDFadeObjects2= [];
gdjs.ReceptionCode.GDFadeObjects3= [];
gdjs.ReceptionCode.GDplayObjects1= [];
gdjs.ReceptionCode.GDplayObjects2= [];
gdjs.ReceptionCode.GDplayObjects3= [];

gdjs.ReceptionCode.conditionTrue_0 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_0 = {val:false};


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


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDDrawerObjects1Objects = Hashtable.newFrom({"Drawer": gdjs.ReceptionCode.GDDrawerObjects1});gdjs.ReceptionCode.eventsList4 = function(runtimeScene) {

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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Slideshow_Start", false);
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
gdjs.ReceptionCode.GDDrawerObjects1.length = 0;

{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setPosition(12,32);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDDrawerObjects1Objects, 0, 0, "HUD");
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{}{for(var i = 0, len = gdjs.ReceptionCode.GDDrawerObjects1.length ;i < len;++i) {
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


};

gdjs.ReceptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ReceptionCode.GDDrawerObjects1.length = 0;
gdjs.ReceptionCode.GDDrawerObjects2.length = 0;
gdjs.ReceptionCode.GDDrawerObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95HintsObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95HintTextObjects3.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects1.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects2.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects3.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects1.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects2.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects3.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects1.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects2.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects3.length = 0;
gdjs.ReceptionCode.GDCorrectObjects1.length = 0;
gdjs.ReceptionCode.GDCorrectObjects2.length = 0;
gdjs.ReceptionCode.GDCorrectObjects3.length = 0;
gdjs.ReceptionCode.GDFadeObjects1.length = 0;
gdjs.ReceptionCode.GDFadeObjects2.length = 0;
gdjs.ReceptionCode.GDFadeObjects3.length = 0;
gdjs.ReceptionCode.GDplayObjects1.length = 0;
gdjs.ReceptionCode.GDplayObjects2.length = 0;
gdjs.ReceptionCode.GDplayObjects3.length = 0;

gdjs.ReceptionCode.eventsList4(runtimeScene);
return;

}

gdjs['ReceptionCode'] = gdjs.ReceptionCode;
