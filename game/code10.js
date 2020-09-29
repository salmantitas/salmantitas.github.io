gdjs.Robot_32CubiclesCode = {};
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects3= [];
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects3= [];
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1= [];
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects2= [];
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects3= [];
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects3= [];
gdjs.Robot_32CubiclesCode.GDBackToCafeteriaObjects1= [];
gdjs.Robot_32CubiclesCode.GDBackToCafeteriaObjects2= [];
gdjs.Robot_32CubiclesCode.GDBackToCafeteriaObjects3= [];
gdjs.Robot_32CubiclesCode.GDInventoryBackgroundObjects1= [];
gdjs.Robot_32CubiclesCode.GDInventoryBackgroundObjects2= [];
gdjs.Robot_32CubiclesCode.GDInventoryBackgroundObjects3= [];
gdjs.Robot_32CubiclesCode.GDInventorySlotObjects1= [];
gdjs.Robot_32CubiclesCode.GDInventorySlotObjects2= [];
gdjs.Robot_32CubiclesCode.GDInventorySlotObjects3= [];
gdjs.Robot_32CubiclesCode.GDInventoryKeyObjects1= [];
gdjs.Robot_32CubiclesCode.GDInventoryKeyObjects2= [];
gdjs.Robot_32CubiclesCode.GDInventoryKeyObjects3= [];
gdjs.Robot_32CubiclesCode.GDCorrectObjects1= [];
gdjs.Robot_32CubiclesCode.GDCorrectObjects2= [];
gdjs.Robot_32CubiclesCode.GDCorrectObjects3= [];
gdjs.Robot_32CubiclesCode.GDFadeObjects1= [];
gdjs.Robot_32CubiclesCode.GDFadeObjects2= [];
gdjs.Robot_32CubiclesCode.GDFadeObjects3= [];
gdjs.Robot_32CubiclesCode.GDcubicleBackObjects1= [];
gdjs.Robot_32CubiclesCode.GDcubicleBackObjects2= [];
gdjs.Robot_32CubiclesCode.GDcubicleBackObjects3= [];
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects1= [];
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2= [];
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects3= [];
gdjs.Robot_32CubiclesCode.GDcubicleInputObjects1= [];
gdjs.Robot_32CubiclesCode.GDcubicleInputObjects2= [];
gdjs.Robot_32CubiclesCode.GDcubicleInputObjects3= [];

gdjs.Robot_32CubiclesCode.conditionTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.condition0IsTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.condition1IsTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.condition2IsTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.conditionTrue_1 = {val:false};
gdjs.Robot_32CubiclesCode.condition0IsTrue_1 = {val:false};
gdjs.Robot_32CubiclesCode.condition1IsTrue_1 = {val:false};
gdjs.Robot_32CubiclesCode.condition2IsTrue_1 = {val:false};


gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1});gdjs.Robot_32CubiclesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackToReception"), gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1);

gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
gdjs.Robot_32CubiclesCode.condition1IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val ) {
{
gdjs.Robot_32CubiclesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Robot_32CubiclesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDHUD_9595TimerObjects2Objects = Hashtable.newFrom({"HUD_Timer": gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2});gdjs.Robot_32CubiclesCode.eventsList1 = function(runtimeScene) {

{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sec")) < 10;
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("secText").setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}}

}


};gdjs.Robot_32CubiclesCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDHUD_9595TimerObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerY")), "UI");
}{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{



}


{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Timer"), gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2);
{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2[i].setString("00" + ":" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) / 60))) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("secText")));
}
}{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{


{
{runtimeScene.getVariables().get("sec").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")), 60));
}{runtimeScene.getVariables().get("secText").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}
{ //Subevents
gdjs.Robot_32CubiclesCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDCorrectObjects2Objects = Hashtable.newFrom({"Correct": gdjs.Robot_32CubiclesCode.GDCorrectObjects2});gdjs.Robot_32CubiclesCode.eventsList3 = function(runtimeScene) {

{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "correctTimer");
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Robot_32CubiclesCode.GDCorrectObjects1);
{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDCorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.Robot_32CubiclesCode.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("cubicleInput"), gdjs.Robot_32CubiclesCode.GDcubicleInputObjects2);
gdjs.copyArray(runtimeScene.getObjects("cubicleSquareEntry"), gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2);
{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDcubicleInputObjects2.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDcubicleInputObjects2[i].setString("Answer: " + (( gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2.length === 0 ) ? "" :gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2[0].getString()));
}
}}

}


{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
{gdjs.Robot_32CubiclesCode.conditionTrue_1 = gdjs.Robot_32CubiclesCode.condition0IsTrue_0;
gdjs.Robot_32CubiclesCode.condition0IsTrue_1.val = false;
gdjs.Robot_32CubiclesCode.condition1IsTrue_1.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Robot_32CubiclesCode.condition0IsTrue_1.val ) {
    gdjs.Robot_32CubiclesCode.conditionTrue_1.val = true;
}
}
{
gdjs.Robot_32CubiclesCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if( gdjs.Robot_32CubiclesCode.condition1IsTrue_1.val ) {
    gdjs.Robot_32CubiclesCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cubicleSquareEntry"), gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2);
{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cubicleSquareEntry"), gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2);

gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2.length;i<l;++i) {
    if ( gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2[i].getString() == "11" ) {
        gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = true;
        gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2[k] = gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2[i];
        ++k;
    }
}
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2.length = k;}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
gdjs.Robot_32CubiclesCode.GDCorrectObjects2.length = 0;

{runtimeScene.getGame().getVariables().get("accountingDoorLocked").setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDCorrectObjects2Objects, 270, 270, "UI");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "correctTimer");
}}

}


{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("accountingDoorLocked")) == 0;
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("cubicleInput"), gdjs.Robot_32CubiclesCode.GDcubicleInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("cubicleSquareEntry"), gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects1);
{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects1.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Robot_32CubiclesCode.GDcubicleInputObjects1.length ;i < len;++i) {
    gdjs.Robot_32CubiclesCode.GDcubicleInputObjects1[i].hide();
}
}
{ //Subevents
gdjs.Robot_32CubiclesCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Robot_32CubiclesCode.eventsList5 = function(runtimeScene) {

{


gdjs.Robot_32CubiclesCode.eventsList0(runtimeScene);
}


{



}


{


gdjs.Robot_32CubiclesCode.eventsList2(runtimeScene);
}


{


gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) <= 0;
}if (gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.Robot_32CubiclesCode.eventsList4(runtimeScene);
}


};

gdjs.Robot_32CubiclesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDInventorySlotObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDInventorySlotObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDInventorySlotObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDInventoryKeyObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDInventoryKeyObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDInventoryKeyObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDCorrectObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDCorrectObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDCorrectObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDFadeObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDFadeObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDFadeObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleBackObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleBackObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleBackObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleSquareEntryObjects3.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleInputObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleInputObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDcubicleInputObjects3.length = 0;

gdjs.Robot_32CubiclesCode.eventsList5(runtimeScene);
return;

}

gdjs['Robot_32CubiclesCode'] = gdjs.Robot_32CubiclesCode;
