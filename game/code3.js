gdjs.Puzzle_32Robot_32PictureCode = {};
gdjs.Puzzle_32Robot_32PictureCode.forEachIndex2 = 0;

gdjs.Puzzle_32Robot_32PictureCode.forEachObjects2 = [];

gdjs.Puzzle_32Robot_32PictureCode.forEachTemporary2 = null;

gdjs.Puzzle_32Robot_32PictureCode.forEachTotalCount2 = 0;

gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects4= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects4= [];

gdjs.Puzzle_32Robot_32PictureCode.conditionTrue_0 = {val:false};
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0 = {val:false};
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0 = {val:false};
gdjs.Puzzle_32Robot_32PictureCode.condition2IsTrue_0 = {val:false};


gdjs.Puzzle_32Robot_32PictureCode.eventsList0 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Timer"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1);
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown"))));
}
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1});gdjs.Puzzle_32Robot_32PictureCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackToReception"), gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1);

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val ) {
{
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDRobotPictureKeyObjects2Objects = Hashtable.newFrom({"RobotPictureKey": gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2});gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDRobotPictureKeyObjects1Objects = Hashtable.newFrom({"RobotPictureKey": gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1});gdjs.Puzzle_32Robot_32PictureCode.eventsList2 = function(runtimeScene) {

{



}


{

/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1 */

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length;i<l;++i) {
    if ( gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[i].getVariableString(gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[i].getVariables().get("use")) == "key" ) {
        gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = true;
        gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[k] = gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[i];
        ++k;
    }
}
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length = k;}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1 */
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1 */
{runtimeScene.getVariables().get("picked_item").setString((gdjs.RuntimeObject.getVariableString(((gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[0].getVariables()).get("use"))));
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1[i].setString("You found a key!");
}
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList3 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.eventsList2(runtimeScene);
}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList4 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2);
gdjs.copyArray(gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1, gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2);

{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2[0].getVariables()).get("description"))));
}
}}

}


{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1);
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1 */
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.Puzzle_32Robot_32PictureCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RobotPictureKey"), gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2);

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDRobotPictureKeyObjects2Objects, runtimeScene, true, true);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2 */
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RobotPictureKey"), gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1);

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDRobotPictureKeyObjects1Objects, runtimeScene, true, false);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1);
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1 */
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1[i].setPosition((( gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length === 0 ) ? 0 :gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[0].getPointX("Right")) + (( gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length === 0 ) ? 0 :gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[0].getWidth()),(( gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length === 0 ) ? 0 :gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[0].getPointY("Center")));
}
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.Puzzle_32Robot_32PictureCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList6 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
}if ( gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val ) {
{
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI"));
}if ( gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val ) {
{
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList7 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("i_released").setNumber(1);
}
{ //Subevents
gdjs.Puzzle_32Robot_32PictureCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2});gdjs.Puzzle_32Robot_32PictureCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2 */

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length;i<l;++i) {
    if ( gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].getVariableNumber(gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = true;
        gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[k] = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i];
        ++k;
    }
}
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length = k;}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
{}}

}


};gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2});gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects2});gdjs.Puzzle_32Robot_32PictureCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InventoryBackground"), gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects2);

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventoryBackgroundObjects2Objects, runtimeScene, true, true);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
{}}

}


};gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventoryKeyObjects3Objects = Hashtable.newFrom({"InventoryKey": gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects3});gdjs.Puzzle_32Robot_32PictureCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2, gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3);


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3.length;i<l;++i) {
    if ( gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3[i].getVariableString(gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3[i].getVariables().getFromIndex(0)) == "key" ) {
        gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = true;
        gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3[k] = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3[i];
        ++k;
    }
}
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3.length = k;}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3 */
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventoryKeyObjects3Objects, (( gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3[0].getPointX("Left")), (( gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3[0].getPointY("Top")), "UI");
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects3.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects3[i].setZOrder(30);
}
}{}{runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound").setNumber(1);
}{runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked").setNumber(0);
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("picked_item").setString("");
}}

}


{


gdjs.Puzzle_32Robot_32PictureCode.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2);

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventorySlotObjects2Objects, runtimeScene, true, false);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2 */
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].setAnimationName("Hover");
}
}{}
{ //Subevents
gdjs.Puzzle_32Robot_32PictureCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2);

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDInventorySlotObjects2Objects, runtimeScene, true, true);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2 */
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].setAnimationName("Normal");
}
}
{ //Subevents
gdjs.Puzzle_32Robot_32PictureCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InventorySlot"), gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects1);

for(gdjs.Puzzle_32Robot_32PictureCode.forEachIndex2 = 0;gdjs.Puzzle_32Robot_32PictureCode.forEachIndex2 < gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects1.length;++gdjs.Puzzle_32Robot_32PictureCode.forEachIndex2) {
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length = 0;


gdjs.Puzzle_32Robot_32PictureCode.forEachTemporary2 = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects1[gdjs.Puzzle_32Robot_32PictureCode.forEachIndex2];
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.push(gdjs.Puzzle_32Robot_32PictureCode.forEachTemporary2);
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length;i<l;++i) {
    if ( gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].getVariableNumber(gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = true;
        gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[k] = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i];
        ++k;
    }
}
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length = k;}if ( gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val ) {
{
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("picked_item")) != "";
}}
if (gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].returnVariable(gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("picked_item")));
}
}{runtimeScene.getVariables().get("picked_item").setString("");
}
{ //Subevents: 
gdjs.Puzzle_32Robot_32PictureCode.eventsList10(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList12 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("RobotPictureKey"), gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1);
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1[i].hide();
}
}}

}


{


gdjs.Puzzle_32Robot_32PictureCode.eventsList0(runtimeScene);
}


{


gdjs.Puzzle_32Robot_32PictureCode.eventsList1(runtimeScene);
}


{


gdjs.Puzzle_32Robot_32PictureCode.eventsList5(runtimeScene);
}


{


gdjs.Puzzle_32Robot_32PictureCode.eventsList11(runtimeScene);
}


{


{
}

}


};

gdjs.Puzzle_32Robot_32PictureCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToCafeteriaObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventorySlotObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDInventoryKeyObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects4.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureKeyObjects4.length = 0;

gdjs.Puzzle_32Robot_32PictureCode.eventsList12(runtimeScene);
return;

}

gdjs['Puzzle_32Robot_32PictureCode'] = gdjs.Puzzle_32Robot_32PictureCode;
