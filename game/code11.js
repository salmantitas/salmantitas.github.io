gdjs.Spare_32Parts_32RoomCode = {};
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToCafeteriaObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToCafeteriaObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToCafeteriaObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDInventoryBackgroundObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDInventoryBackgroundObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDInventoryBackgroundObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDInventorySlotObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDInventorySlotObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDInventorySlotObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDInventoryKeyObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDInventoryKeyObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDInventoryKeyObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDCorrectObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDCorrectObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDCorrectObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDFadeObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDFadeObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDFadeObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects3= [];
gdjs.Spare_32Parts_32RoomCode.GDMapObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDMapObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDMapObjects3= [];

gdjs.Spare_32Parts_32RoomCode.conditionTrue_0 = {val:false};
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0 = {val:false};
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0 = {val:false};
gdjs.Spare_32Parts_32RoomCode.condition2IsTrue_0 = {val:false};


gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDHUD_9595TimerObjects2Objects = Hashtable.newFrom({"HUD_Timer": gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2});gdjs.Spare_32Parts_32RoomCode.eventsList0 = function(runtimeScene) {

{


gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sec")) < 10;
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("secText").setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}}

}


};gdjs.Spare_32Parts_32RoomCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDHUD_9595TimerObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerY")), "UI");
}{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{



}


{


gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Timer"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2);
{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2[i].setString("00" + ":" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) / 60))) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("secText")));
}
}{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{


{
{runtimeScene.getVariables().get("sec").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")), 60));
}{runtimeScene.getVariables().get("secText").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}
{ //Subevents
gdjs.Spare_32Parts_32RoomCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.Spare_32Parts_32RoomCode.GDMapObjects2});gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.Spare_32Parts_32RoomCode.GDMapObjects1});gdjs.Spare_32Parts_32RoomCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.Spare_32Parts_32RoomCode.GDMapObjects2);

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDMapObjects2Objects, runtimeScene, true, false);
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2);
/* Reuse gdjs.Spare_32Parts_32RoomCode.GDMapObjects2 */
{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Spare_32Parts_32RoomCode.GDMapObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Spare_32Parts_32RoomCode.GDMapObjects2[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.Spare_32Parts_32RoomCode.GDMapObjects1);

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1);
{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


};gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDSparePartsObjects2Objects = Hashtable.newFrom({"SpareParts": gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2});gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDSparePartsObjects1Objects = Hashtable.newFrom({"SpareParts": gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1});gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDSparePartsObjects1Objects = Hashtable.newFrom({"SpareParts": gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1});gdjs.Spare_32Parts_32RoomCode.eventsList3 = function(runtimeScene) {

{



}


{

/* Reuse gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1 */

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDSparePartsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val ) {
{
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("sparePartsSolved")) == 0;
}}
if (gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Drag & Drop", false);
}}

}


};gdjs.Spare_32Parts_32RoomCode.eventsList4 = function(runtimeScene) {

{


gdjs.Spare_32Parts_32RoomCode.eventsList3(runtimeScene);
}


};gdjs.Spare_32Parts_32RoomCode.eventsList5 = function(runtimeScene) {

{


gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2);
gdjs.copyArray(gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1, gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2);

{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2[0].getVariables()).get("description"))));
}
}}

}


{


gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1);
/* Reuse gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1 */
{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.Spare_32Parts_32RoomCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Spare_32Parts_32RoomCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("SpareParts"), gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2);

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDSparePartsObjects2Objects, runtimeScene, true, true);
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2 */
{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SpareParts"), gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1);

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDSparePartsObjects1Objects, runtimeScene, true, false);
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1);
/* Reuse gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1 */
{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1[i].setPosition((( gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length === 0 ) ? 0 :gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1[0].getPointX("Right")) + (( gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length === 0 ) ? 0 :gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1[0].getWidth()),(( gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length === 0 ) ? 0 :gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1[0].getPointY("Center")));
}
}{for(var i = 0, len = gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length ;i < len;++i) {
    gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.Spare_32Parts_32RoomCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1});gdjs.Spare_32Parts_32RoomCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackToReception"), gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1);

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val ) {
{
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.Spare_32Parts_32RoomCode.eventsList8 = function(runtimeScene) {

{


{
}

}


{



}


{


gdjs.Spare_32Parts_32RoomCode.eventsList1(runtimeScene);
}


{


gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) <= 0;
}if (gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.Spare_32Parts_32RoomCode.eventsList2(runtimeScene);
}


{


gdjs.Spare_32Parts_32RoomCode.eventsList6(runtimeScene);
}


{


gdjs.Spare_32Parts_32RoomCode.eventsList7(runtimeScene);
}


};

gdjs.Spare_32Parts_32RoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventorySlotObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventorySlotObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventorySlotObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventoryKeyObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventoryKeyObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDInventoryKeyObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDCorrectObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDCorrectObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDCorrectObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDFadeObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDFadeObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDFadeObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDSparePartsObjects3.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDMapObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDMapObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDMapObjects3.length = 0;

gdjs.Spare_32Parts_32RoomCode.eventsList8(runtimeScene);
return;

}

gdjs['Spare_32Parts_32RoomCode'] = gdjs.Spare_32Parts_32RoomCode;
