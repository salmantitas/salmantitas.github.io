gdjs.IntroCode = {};
gdjs.IntroCode.GDHUD_95LocationNameObjects1= [];
gdjs.IntroCode.GDHUD_95LocationNameObjects2= [];
gdjs.IntroCode.GDHUD_95LocationNameObjects3= [];
gdjs.IntroCode.GDHUD_95LocationNameObjects4= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects1= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects2= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects3= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects4= [];
gdjs.IntroCode.GDHUD_95ObjectNameObjects1= [];
gdjs.IntroCode.GDHUD_95ObjectNameObjects2= [];
gdjs.IntroCode.GDHUD_95ObjectNameObjects3= [];
gdjs.IntroCode.GDHUD_95ObjectNameObjects4= [];
gdjs.IntroCode.GDBackToReceptionObjects1= [];
gdjs.IntroCode.GDBackToReceptionObjects2= [];
gdjs.IntroCode.GDBackToReceptionObjects3= [];
gdjs.IntroCode.GDBackToReceptionObjects4= [];
gdjs.IntroCode.GDHUD_95TimerObjects1= [];
gdjs.IntroCode.GDHUD_95TimerObjects2= [];
gdjs.IntroCode.GDHUD_95TimerObjects3= [];
gdjs.IntroCode.GDHUD_95TimerObjects4= [];
gdjs.IntroCode.GDBackToCafeteriaObjects1= [];
gdjs.IntroCode.GDBackToCafeteriaObjects2= [];
gdjs.IntroCode.GDBackToCafeteriaObjects3= [];
gdjs.IntroCode.GDBackToCafeteriaObjects4= [];
gdjs.IntroCode.GDInventoryBackgroundObjects1= [];
gdjs.IntroCode.GDInventoryBackgroundObjects2= [];
gdjs.IntroCode.GDInventoryBackgroundObjects3= [];
gdjs.IntroCode.GDInventoryBackgroundObjects4= [];
gdjs.IntroCode.GDInventorySlotObjects1= [];
gdjs.IntroCode.GDInventorySlotObjects2= [];
gdjs.IntroCode.GDInventorySlotObjects3= [];
gdjs.IntroCode.GDInventorySlotObjects4= [];
gdjs.IntroCode.GDInventoryKeyObjects1= [];
gdjs.IntroCode.GDInventoryKeyObjects2= [];
gdjs.IntroCode.GDInventoryKeyObjects3= [];
gdjs.IntroCode.GDInventoryKeyObjects4= [];
gdjs.IntroCode.GDCorrectObjects1= [];
gdjs.IntroCode.GDCorrectObjects2= [];
gdjs.IntroCode.GDCorrectObjects3= [];
gdjs.IntroCode.GDCorrectObjects4= [];
gdjs.IntroCode.GDFadeObjects1= [];
gdjs.IntroCode.GDFadeObjects2= [];
gdjs.IntroCode.GDFadeObjects3= [];
gdjs.IntroCode.GDFadeObjects4= [];
gdjs.IntroCode.GDText_95IntroSkipObjects1= [];
gdjs.IntroCode.GDText_95IntroSkipObjects2= [];
gdjs.IntroCode.GDText_95IntroSkipObjects3= [];
gdjs.IntroCode.GDText_95IntroSkipObjects4= [];
gdjs.IntroCode.GDplayObjects1= [];
gdjs.IntroCode.GDplayObjects2= [];
gdjs.IntroCode.GDplayObjects3= [];
gdjs.IntroCode.GDplayObjects4= [];
gdjs.IntroCode.GDComputerObjects1= [];
gdjs.IntroCode.GDComputerObjects2= [];
gdjs.IntroCode.GDComputerObjects3= [];
gdjs.IntroCode.GDComputerObjects4= [];
gdjs.IntroCode.GDTypingTextObjects1= [];
gdjs.IntroCode.GDTypingTextObjects2= [];
gdjs.IntroCode.GDTypingTextObjects3= [];
gdjs.IntroCode.GDTypingTextObjects4= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDFadeObjects1Objects = Hashtable.newFrom({"Fade": gdjs.IntroCode.GDFadeObjects1});gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDFadeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDFadeObjects1Objects, 0, 0, "Fade");
}{for(var i = 0, len = gdjs.IntroCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade_out", 0, "linear", 1000, false);
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.IntroCode.GDplayObjects1});gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.IntroCode.GDplayObjects1});gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("TypingText"), gdjs.IntroCode.GDTypingTextObjects3);
{for(var i = 0, len = gdjs.IntroCode.GDTypingTextObjects3.length ;i < len;++i) {
    gdjs.IntroCode.GDTypingTextObjects3[i].setString(gdjs.IntroCode.GDTypingTextObjects3[i].getString() + (gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(gdjs.IntroCode.GDTypingTextObjects3[i].getVariables().getFromIndex(0))), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charPos")), 1)));
}
}{runtimeScene.getVariables().get("charPos").add(1);
}}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1 * 1 / 20 * 1 / 2, "textTimer");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "textTimer");
}
{ //Subevents
gdjs.IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.condition0IsTrue_1.val = false;
gdjs.IntroCode.condition1IsTrue_1.val = false;
{
gdjs.IntroCode.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.IntroCode.condition0IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
gdjs.IntroCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.IntroCode.condition1IsTrue_1.val ) {
    gdjs.IntroCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TypingText"), gdjs.IntroCode.GDTypingTextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDTypingTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDTypingTextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.IntroCode.GDTypingTextObjects2[i].getVariables().getFromIndex(0))));
}
}{runtimeScene.getVariables().get("typing").setNumber(0);
}}

}


};gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("click").setNumber(0);
}{runtimeScene.getVariables().get("charPos").setNumber(0);
}{runtimeScene.getVariables().get("lineState").setString("");
}{runtimeScene.getVariables().get("typing").setNumber(1);
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("typing")) == 1;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.IntroCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TypingText"), gdjs.IntroCode.GDTypingTextObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charPos")) == gdjs.evtTools.string.strLen((gdjs.RuntimeObject.getVariableString(((gdjs.IntroCode.GDTypingTextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.IntroCode.GDTypingTextObjects2[0].getVariables()).getFromIndex(0))));
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("typing").setNumber(0);
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("typing")) == 0;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.IntroCode.GDplayObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplayObjects1[i].hide(false);
}
}}

}


};gdjs.IntroCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{


gdjs.IntroCode.eventsList0(runtimeScene);
}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TypingText"), gdjs.IntroCode.GDTypingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.IntroCode.GDplayObjects1);
{runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked").setNumber(1);
}{runtimeScene.getGame().getVariables().get("sparePartsDoorLocked").setNumber(1);
}{runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound").setNumber(0);
}{runtimeScene.getGame().getVariables().get("motherboardDoorLocked").setNumber(1);
}{runtimeScene.getGame().getVariables().get("robotControl").setNumber(0);
}{runtimeScene.getGame().getVariables().get("accountingDoorLocked").setNumber(1);
}{runtimeScene.getGame().getVariables().get("countdown").setNumber(1 * 60 * 60);
}{runtimeScene.getGame().getVariables().get("monsterSolved").setNumber(0);
}{runtimeScene.getGame().getVariables().get("sparePartsSolved").setNumber(0);
}{runtimeScene.getGame().getVariables().get("motherboardSolved").setNumber(0);
}{runtimeScene.getGame().getVariables().get("memMatchState").setNumber(0);
}{runtimeScene.getGame().getVariables().get("timerX").setNumber(355);
}{runtimeScene.getGame().getVariables().get("timerY").setNumber(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "screenla.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.IntroCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDTypingTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTypingTextObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.IntroCode.GDplayObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplayObjects1[i].setColor("51;255;0");
}
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.IntroCode.GDplayObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplayObjects1[i].setColor("21;105;0");
}
}}

}


{


gdjs.IntroCode.eventsList4(runtimeScene);
}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.IntroCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.IntroCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.IntroCode.GDHUD_95LocationNameObjects4.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects4.length = 0;
gdjs.IntroCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.IntroCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.IntroCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.IntroCode.GDHUD_95ObjectNameObjects4.length = 0;
gdjs.IntroCode.GDBackToReceptionObjects1.length = 0;
gdjs.IntroCode.GDBackToReceptionObjects2.length = 0;
gdjs.IntroCode.GDBackToReceptionObjects3.length = 0;
gdjs.IntroCode.GDBackToReceptionObjects4.length = 0;
gdjs.IntroCode.GDHUD_95TimerObjects1.length = 0;
gdjs.IntroCode.GDHUD_95TimerObjects2.length = 0;
gdjs.IntroCode.GDHUD_95TimerObjects3.length = 0;
gdjs.IntroCode.GDHUD_95TimerObjects4.length = 0;
gdjs.IntroCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.IntroCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.IntroCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.IntroCode.GDBackToCafeteriaObjects4.length = 0;
gdjs.IntroCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.IntroCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.IntroCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.IntroCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.IntroCode.GDInventorySlotObjects1.length = 0;
gdjs.IntroCode.GDInventorySlotObjects2.length = 0;
gdjs.IntroCode.GDInventorySlotObjects3.length = 0;
gdjs.IntroCode.GDInventorySlotObjects4.length = 0;
gdjs.IntroCode.GDInventoryKeyObjects1.length = 0;
gdjs.IntroCode.GDInventoryKeyObjects2.length = 0;
gdjs.IntroCode.GDInventoryKeyObjects3.length = 0;
gdjs.IntroCode.GDInventoryKeyObjects4.length = 0;
gdjs.IntroCode.GDCorrectObjects1.length = 0;
gdjs.IntroCode.GDCorrectObjects2.length = 0;
gdjs.IntroCode.GDCorrectObjects3.length = 0;
gdjs.IntroCode.GDCorrectObjects4.length = 0;
gdjs.IntroCode.GDFadeObjects1.length = 0;
gdjs.IntroCode.GDFadeObjects2.length = 0;
gdjs.IntroCode.GDFadeObjects3.length = 0;
gdjs.IntroCode.GDFadeObjects4.length = 0;
gdjs.IntroCode.GDText_95IntroSkipObjects1.length = 0;
gdjs.IntroCode.GDText_95IntroSkipObjects2.length = 0;
gdjs.IntroCode.GDText_95IntroSkipObjects3.length = 0;
gdjs.IntroCode.GDText_95IntroSkipObjects4.length = 0;
gdjs.IntroCode.GDplayObjects1.length = 0;
gdjs.IntroCode.GDplayObjects2.length = 0;
gdjs.IntroCode.GDplayObjects3.length = 0;
gdjs.IntroCode.GDplayObjects4.length = 0;
gdjs.IntroCode.GDComputerObjects1.length = 0;
gdjs.IntroCode.GDComputerObjects2.length = 0;
gdjs.IntroCode.GDComputerObjects3.length = 0;
gdjs.IntroCode.GDComputerObjects4.length = 0;
gdjs.IntroCode.GDTypingTextObjects1.length = 0;
gdjs.IntroCode.GDTypingTextObjects2.length = 0;
gdjs.IntroCode.GDTypingTextObjects3.length = 0;
gdjs.IntroCode.GDTypingTextObjects4.length = 0;

gdjs.IntroCode.eventsList5(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
