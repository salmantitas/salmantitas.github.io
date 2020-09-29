gdjs.Accounting_32OfficeCode = {};
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects3= [];
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects3= [];
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1= [];
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects2= [];
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects3= [];
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects3= [];
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects1= [];
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects2= [];
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects3= [];
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects1= [];
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects2= [];
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects3= [];
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects1= [];
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects2= [];
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects3= [];
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects1= [];
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects2= [];
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects3= [];
gdjs.Accounting_32OfficeCode.GDCorrectObjects1= [];
gdjs.Accounting_32OfficeCode.GDCorrectObjects2= [];
gdjs.Accounting_32OfficeCode.GDCorrectObjects3= [];
gdjs.Accounting_32OfficeCode.GDFadeObjects1= [];
gdjs.Accounting_32OfficeCode.GDFadeObjects2= [];
gdjs.Accounting_32OfficeCode.GDFadeObjects3= [];
gdjs.Accounting_32OfficeCode.GDbackgroundObjects1= [];
gdjs.Accounting_32OfficeCode.GDbackgroundObjects2= [];
gdjs.Accounting_32OfficeCode.GDbackgroundObjects3= [];
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects1= [];
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2= [];
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects3= [];
gdjs.Accounting_32OfficeCode.GDaccountingInputObjects1= [];
gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2= [];
gdjs.Accounting_32OfficeCode.GDaccountingInputObjects3= [];

gdjs.Accounting_32OfficeCode.conditionTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.condition0IsTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.condition1IsTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.condition2IsTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.conditionTrue_1 = {val:false};
gdjs.Accounting_32OfficeCode.condition0IsTrue_1 = {val:false};
gdjs.Accounting_32OfficeCode.condition1IsTrue_1 = {val:false};
gdjs.Accounting_32OfficeCode.condition2IsTrue_1 = {val:false};


gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1});gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDHUD_9595TimerObjects2Objects = Hashtable.newFrom({"HUD_Timer": gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2});gdjs.Accounting_32OfficeCode.eventsList0 = function(runtimeScene) {

{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sec")) < 10;
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("secText").setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}}

}


};gdjs.Accounting_32OfficeCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDHUD_9595TimerObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerY")), "HUD");
}{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{



}


{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Timer"), gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2);
{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2[i].setString("00" + ":" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) / 60))) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("secText")));
}
}{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{


{
{runtimeScene.getVariables().get("sec").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")), 60));
}{runtimeScene.getVariables().get("secText").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}
{ //Subevents
gdjs.Accounting_32OfficeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDCorrectObjects2Objects = Hashtable.newFrom({"Correct": gdjs.Accounting_32OfficeCode.GDCorrectObjects2});gdjs.Accounting_32OfficeCode.eventsList2 = function(runtimeScene) {

{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "correctTimer");
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Correct"), gdjs.Accounting_32OfficeCode.GDCorrectObjects1);
{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDCorrectObjects1.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDCorrectObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.Accounting_32OfficeCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("accountingEntry"), gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2);

gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length;i<l;++i) {
    if ( gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i].getString() != "" ) {
        gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = true;
        gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[k] = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i];
        ++k;
    }
}
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length = k;}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2 */
gdjs.copyArray(runtimeScene.getObjects("accountingInput"), gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2);
{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2[i].setString((( gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length === 0 ) ? "" :gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[0].getString()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("accountingEntry"), gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2);

gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length;i<l;++i) {
    if ( gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i].getString() == "" ) {
        gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = true;
        gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[k] = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i];
        ++k;
    }
}
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length = k;}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("accountingInput"), gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2);
{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2[i].setString("__");
}
}}

}


{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
{gdjs.Accounting_32OfficeCode.conditionTrue_1 = gdjs.Accounting_32OfficeCode.condition0IsTrue_0;
gdjs.Accounting_32OfficeCode.condition0IsTrue_1.val = false;
gdjs.Accounting_32OfficeCode.condition1IsTrue_1.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.Accounting_32OfficeCode.condition0IsTrue_1.val ) {
    gdjs.Accounting_32OfficeCode.conditionTrue_1.val = true;
}
}
{
gdjs.Accounting_32OfficeCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if( gdjs.Accounting_32OfficeCode.condition1IsTrue_1.val ) {
    gdjs.Accounting_32OfficeCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("accountingEntry"), gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2);
{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("accountingEntry"), gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2);

gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length;i<l;++i) {
    if ( gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i].getString() == "19" ) {
        gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = true;
        gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[k] = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2[i];
        ++k;
    }
}
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length = k;}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
gdjs.Accounting_32OfficeCode.GDCorrectObjects2.length = 0;

{runtimeScene.getGame().getVariables().get("robotControl").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDCorrectObjects2Objects, 270, 270, "UI");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "correctTimer");
}}

}


{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("robotControl")) == 1;
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("accountingEntry"), gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("accountingInput"), gdjs.Accounting_32OfficeCode.GDaccountingInputObjects1);
{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects1.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Accounting_32OfficeCode.GDaccountingInputObjects1.length ;i < len;++i) {
    gdjs.Accounting_32OfficeCode.GDaccountingInputObjects1[i].hide();
}
}
{ //Subevents
gdjs.Accounting_32OfficeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Accounting_32OfficeCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackToReception"), gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1);

gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
gdjs.Accounting_32OfficeCode.condition1IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val ) {
{
gdjs.Accounting_32OfficeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Accounting_32OfficeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


{



}


{


gdjs.Accounting_32OfficeCode.eventsList1(runtimeScene);
}


{


gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) <= 0;
}if (gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.Accounting_32OfficeCode.eventsList3(runtimeScene);
}


};

gdjs.Accounting_32OfficeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDCorrectObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDCorrectObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDCorrectObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDFadeObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDFadeObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDFadeObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDbackgroundObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDbackgroundObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDbackgroundObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDaccountingEntryObjects3.length = 0;
gdjs.Accounting_32OfficeCode.GDaccountingInputObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDaccountingInputObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDaccountingInputObjects3.length = 0;

gdjs.Accounting_32OfficeCode.eventsList4(runtimeScene);
return;

}

gdjs['Accounting_32OfficeCode'] = gdjs.Accounting_32OfficeCode;
