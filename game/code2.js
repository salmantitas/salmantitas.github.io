gdjs.ReceptionCode = {};
gdjs.ReceptionCode.forEachIndex2 = 0;

gdjs.ReceptionCode.forEachObjects2 = [];

gdjs.ReceptionCode.forEachTemporary2 = null;

gdjs.ReceptionCode.forEachTotalCount2 = 0;

gdjs.ReceptionCode.GDHUD_95LocationNameObjects1= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects3= [];
gdjs.ReceptionCode.GDHUD_95LocationNameObjects4= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects3= [];
gdjs.ReceptionCode.GDHUD_95DescriptionObjects4= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3= [];
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects4= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects1= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects2= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects3= [];
gdjs.ReceptionCode.GDHUD_95TimerObjects4= [];
gdjs.ReceptionCode.GDBackToReceptionObjects1= [];
gdjs.ReceptionCode.GDBackToReceptionObjects2= [];
gdjs.ReceptionCode.GDBackToReceptionObjects3= [];
gdjs.ReceptionCode.GDBackToReceptionObjects4= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects1= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects2= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects3= [];
gdjs.ReceptionCode.GDBackToCafeteriaObjects4= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects1= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects2= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects3= [];
gdjs.ReceptionCode.GDInventoryBackgroundObjects4= [];
gdjs.ReceptionCode.GDInventorySlotObjects1= [];
gdjs.ReceptionCode.GDInventorySlotObjects2= [];
gdjs.ReceptionCode.GDInventorySlotObjects3= [];
gdjs.ReceptionCode.GDInventorySlotObjects4= [];
gdjs.ReceptionCode.GDInventoryKeyObjects1= [];
gdjs.ReceptionCode.GDInventoryKeyObjects2= [];
gdjs.ReceptionCode.GDInventoryKeyObjects3= [];
gdjs.ReceptionCode.GDInventoryKeyObjects4= [];
gdjs.ReceptionCode.GDMapObjects1= [];
gdjs.ReceptionCode.GDMapObjects2= [];
gdjs.ReceptionCode.GDMapObjects3= [];
gdjs.ReceptionCode.GDMapObjects4= [];
gdjs.ReceptionCode.GDChippyOfficeObjects1= [];
gdjs.ReceptionCode.GDChippyOfficeObjects2= [];
gdjs.ReceptionCode.GDChippyOfficeObjects3= [];
gdjs.ReceptionCode.GDChippyOfficeObjects4= [];
gdjs.ReceptionCode.GDCafeteriaObjects1= [];
gdjs.ReceptionCode.GDCafeteriaObjects2= [];
gdjs.ReceptionCode.GDCafeteriaObjects3= [];
gdjs.ReceptionCode.GDCafeteriaObjects4= [];
gdjs.ReceptionCode.GDSparePartsObjects1= [];
gdjs.ReceptionCode.GDSparePartsObjects2= [];
gdjs.ReceptionCode.GDSparePartsObjects3= [];
gdjs.ReceptionCode.GDSparePartsObjects4= [];
gdjs.ReceptionCode.GDMotherboardObjects1= [];
gdjs.ReceptionCode.GDMotherboardObjects2= [];
gdjs.ReceptionCode.GDMotherboardObjects3= [];
gdjs.ReceptionCode.GDMotherboardObjects4= [];
gdjs.ReceptionCode.GDRobotCubiclesObjects1= [];
gdjs.ReceptionCode.GDRobotCubiclesObjects2= [];
gdjs.ReceptionCode.GDRobotCubiclesObjects3= [];
gdjs.ReceptionCode.GDRobotCubiclesObjects4= [];
gdjs.ReceptionCode.GDAccountingObjects1= [];
gdjs.ReceptionCode.GDAccountingObjects2= [];
gdjs.ReceptionCode.GDAccountingObjects3= [];
gdjs.ReceptionCode.GDAccountingObjects4= [];
gdjs.ReceptionCode.GDWallCLevelObjects1= [];
gdjs.ReceptionCode.GDWallCLevelObjects2= [];
gdjs.ReceptionCode.GDWallCLevelObjects3= [];
gdjs.ReceptionCode.GDWallCLevelObjects4= [];
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1= [];
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects2= [];
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects3= [];
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects4= [];
gdjs.ReceptionCode.GDsparePartsCodePromptObjects1= [];
gdjs.ReceptionCode.GDsparePartsCodePromptObjects2= [];
gdjs.ReceptionCode.GDsparePartsCodePromptObjects3= [];
gdjs.ReceptionCode.GDsparePartsCodePromptObjects4= [];
gdjs.ReceptionCode.GDtempCodeObjects1= [];
gdjs.ReceptionCode.GDtempCodeObjects2= [];
gdjs.ReceptionCode.GDtempCodeObjects3= [];
gdjs.ReceptionCode.GDtempCodeObjects4= [];

gdjs.ReceptionCode.conditionTrue_0 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_0 = {val:false};
gdjs.ReceptionCode.conditionTrue_1 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_1 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_1 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_1 = {val:false};


gdjs.ReceptionCode.eventsList0 = function(runtimeScene) {

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


{
gdjs.ReceptionCode.GDHUD_95TimerObjects1.createFrom(runtimeScene.getObjects("HUD_Timer"));
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95TimerObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95TimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown"))));
}
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.ReceptionCode.GDMapObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.ReceptionCode.GDMapObjects1});gdjs.ReceptionCode.eventsList1 = function(runtimeScene) {

{

gdjs.ReceptionCode.GDMapObjects2.createFrom(runtimeScene.getObjects("Map"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMapObjects2Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.ReceptionCode.GDMapObjects2 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95LocationNameObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95LocationNameObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDMapObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDMapObjects2[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2[i].setString("");
}
}}

}


{

gdjs.ReceptionCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects2ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects2ObjectsGDgdjs_46ReceptionCode_46GDCafeteriaObjects2ObjectsGDgdjs_46ReceptionCode_46GDSparePartsObjects2ObjectsGDgdjs_46ReceptionCode_46GDMotherboardObjects2ObjectsGDgdjs_46ReceptionCode_46GDRobotCubiclesObjects2ObjectsGDgdjs_46ReceptionCode_46GDAccountingObjects2Objects = Hashtable.newFrom({"ChippyOffice": gdjs.ReceptionCode.GDChippyOfficeObjects2, "WallCLevel": gdjs.ReceptionCode.GDWallCLevelObjects2, "Cafeteria": gdjs.ReceptionCode.GDCafeteriaObjects2, "SpareParts": gdjs.ReceptionCode.GDSparePartsObjects2, "Motherboard": gdjs.ReceptionCode.GDMotherboardObjects2, "RobotCubicles": gdjs.ReceptionCode.GDRobotCubiclesObjects2, "Accounting": gdjs.ReceptionCode.GDAccountingObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects1ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects1ObjectsGDgdjs_46ReceptionCode_46GDCafeteriaObjects1ObjectsGDgdjs_46ReceptionCode_46GDSparePartsObjects1ObjectsGDgdjs_46ReceptionCode_46GDMotherboardObjects1ObjectsGDgdjs_46ReceptionCode_46GDRobotCubiclesObjects1ObjectsGDgdjs_46ReceptionCode_46GDAccountingObjects1Objects = Hashtable.newFrom({"ChippyOffice": gdjs.ReceptionCode.GDChippyOfficeObjects1, "WallCLevel": gdjs.ReceptionCode.GDWallCLevelObjects1, "Cafeteria": gdjs.ReceptionCode.GDCafeteriaObjects1, "SpareParts": gdjs.ReceptionCode.GDSparePartsObjects1, "Motherboard": gdjs.ReceptionCode.GDMotherboardObjects1, "RobotCubicles": gdjs.ReceptionCode.GDRobotCubiclesObjects1, "Accounting": gdjs.ReceptionCode.GDAccountingObjects1});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDWallCLevelObjects2Objects = Hashtable.newFrom({"WallCLevel": gdjs.ReceptionCode.GDWallCLevelObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects2Objects = Hashtable.newFrom({"ChippyOffice": gdjs.ReceptionCode.GDChippyOfficeObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDCafeteriaObjects2Objects = Hashtable.newFrom({"Cafeteria": gdjs.ReceptionCode.GDCafeteriaObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDRobotCubiclesObjects2Objects = Hashtable.newFrom({"RobotCubicles": gdjs.ReceptionCode.GDRobotCubiclesObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDSparePartsObjects2Objects = Hashtable.newFrom({"SpareParts": gdjs.ReceptionCode.GDSparePartsObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDsparePartsCodeEntryObjects3Objects = Hashtable.newFrom({"sparePartsCodeEntry": gdjs.ReceptionCode.GDsparePartsCodeEntryObjects3});gdjs.ReceptionCode.eventsList2 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("sparePartsDoorLocked")) == 1;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDsparePartsCodePromptObjects3.createFrom(runtimeScene.getObjects("sparePartsCodePrompt"));
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDsparePartsCodeEntryObjects3Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodePromptObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodePromptObjects3[i].hide(false);
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("sparePartsDoorLocked")) == 0;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Spare Parts Room", false);
}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMotherboardObjects2Objects = Hashtable.newFrom({"Motherboard": gdjs.ReceptionCode.GDMotherboardObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDAccountingObjects1Objects = Hashtable.newFrom({"Accounting": gdjs.ReceptionCode.GDAccountingObjects1});gdjs.ReceptionCode.eventsList3 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("accountingDoorLocked")) == 0;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Accounting Office", false);
}}

}


};gdjs.ReceptionCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.ReceptionCode.GDWallCLevelObjects2.createFrom(gdjs.ReceptionCode.GDWallCLevelObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDWallCLevelObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound")) == 0;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Puzzle Robot Picture", false);
}}

}


{

gdjs.ReceptionCode.GDChippyOfficeObjects2.createFrom(gdjs.ReceptionCode.GDChippyOfficeObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked")) == 0;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Top Floor", false);
}}

}


{



}


{

gdjs.ReceptionCode.GDCafeteriaObjects2.createFrom(gdjs.ReceptionCode.GDCafeteriaObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDCafeteriaObjects2Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cafeteria", false);
}}

}


{



}


{

gdjs.ReceptionCode.GDRobotCubiclesObjects2.createFrom(gdjs.ReceptionCode.GDRobotCubiclesObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDRobotCubiclesObjects2Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Robot Cubicles", false);
}}

}


{



}


{

gdjs.ReceptionCode.GDSparePartsObjects2.createFrom(gdjs.ReceptionCode.GDSparePartsObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDSparePartsObjects2Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ReceptionCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.ReceptionCode.GDMotherboardObjects2.createFrom(gdjs.ReceptionCode.GDMotherboardObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMotherboardObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("motherboardDoorLocked")) == 0;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Motherboard Room", false);
}}

}


{



}


{

/* Reuse gdjs.ReceptionCode.GDAccountingObjects1 */

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDAccountingObjects1Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ReceptionCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.eventsList5 = function(runtimeScene) {

{


gdjs.ReceptionCode.eventsList4(runtimeScene);
}


};gdjs.ReceptionCode.eventsList6 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDAccountingObjects2.createFrom(gdjs.ReceptionCode.GDAccountingObjects1);

gdjs.ReceptionCode.GDCafeteriaObjects2.createFrom(gdjs.ReceptionCode.GDCafeteriaObjects1);

gdjs.ReceptionCode.GDChippyOfficeObjects2.createFrom(gdjs.ReceptionCode.GDChippyOfficeObjects1);

gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.ReceptionCode.GDMotherboardObjects2.createFrom(gdjs.ReceptionCode.GDMotherboardObjects1);

gdjs.ReceptionCode.GDRobotCubiclesObjects2.createFrom(gdjs.ReceptionCode.GDRobotCubiclesObjects1);

gdjs.ReceptionCode.GDSparePartsObjects2.createFrom(gdjs.ReceptionCode.GDSparePartsObjects1);

gdjs.ReceptionCode.GDWallCLevelObjects2.createFrom(gdjs.ReceptionCode.GDWallCLevelObjects1);

{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDAccountingObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDRobotCubiclesObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDMotherboardObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDSparePartsObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDCafeteriaObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDWallCLevelObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects2[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects2[0].getVariables()) : gdjs.ReceptionCode.GDCafeteriaObjects2[0].getVariables()) : gdjs.ReceptionCode.GDSparePartsObjects2[0].getVariables()) : gdjs.ReceptionCode.GDMotherboardObjects2[0].getVariables()) : gdjs.ReceptionCode.GDRobotCubiclesObjects2[0].getVariables()) : gdjs.ReceptionCode.GDAccountingObjects2[0].getVariables()).get("description"))));
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDAccountingObjects1 */
/* Reuse gdjs.ReceptionCode.GDCafeteriaObjects1 */
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects1 */
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
/* Reuse gdjs.ReceptionCode.GDMotherboardObjects1 */
/* Reuse gdjs.ReceptionCode.GDRobotCubiclesObjects1 */
/* Reuse gdjs.ReceptionCode.GDSparePartsObjects1 */
/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects1 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDAccountingObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDRobotCubiclesObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDMotherboardObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDSparePartsObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDCafeteriaObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects1[0].getVariables()) : gdjs.ReceptionCode.GDCafeteriaObjects1[0].getVariables()) : gdjs.ReceptionCode.GDSparePartsObjects1[0].getVariables()) : gdjs.ReceptionCode.GDMotherboardObjects1[0].getVariables()) : gdjs.ReceptionCode.GDRobotCubiclesObjects1[0].getVariables()) : gdjs.ReceptionCode.GDAccountingObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.ReceptionCode.GDAccountingObjects2.createFrom(runtimeScene.getObjects("Accounting"));
gdjs.ReceptionCode.GDCafeteriaObjects2.createFrom(runtimeScene.getObjects("Cafeteria"));
gdjs.ReceptionCode.GDChippyOfficeObjects2.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDMotherboardObjects2.createFrom(runtimeScene.getObjects("Motherboard"));
gdjs.ReceptionCode.GDRobotCubiclesObjects2.createFrom(runtimeScene.getObjects("RobotCubicles"));
gdjs.ReceptionCode.GDSparePartsObjects2.createFrom(runtimeScene.getObjects("SpareParts"));
gdjs.ReceptionCode.GDWallCLevelObjects2.createFrom(runtimeScene.getObjects("WallCLevel"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects2ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects2ObjectsGDgdjs_46ReceptionCode_46GDCafeteriaObjects2ObjectsGDgdjs_46ReceptionCode_46GDSparePartsObjects2ObjectsGDgdjs_46ReceptionCode_46GDMotherboardObjects2ObjectsGDgdjs_46ReceptionCode_46GDRobotCubiclesObjects2ObjectsGDgdjs_46ReceptionCode_46GDAccountingObjects2Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDAccountingObjects2 */
/* Reuse gdjs.ReceptionCode.GDCafeteriaObjects2 */
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects2 */
/* Reuse gdjs.ReceptionCode.GDMotherboardObjects2 */
/* Reuse gdjs.ReceptionCode.GDRobotCubiclesObjects2 */
/* Reuse gdjs.ReceptionCode.GDSparePartsObjects2 */
/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects2 */
{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDCafeteriaObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDCafeteriaObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDSparePartsObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDSparePartsObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDMotherboardObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDMotherboardObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDRobotCubiclesObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDRobotCubiclesObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDAccountingObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDAccountingObjects2[i].setAnimationName("Normal");
}
}}

}


{

gdjs.ReceptionCode.GDAccountingObjects1.createFrom(runtimeScene.getObjects("Accounting"));
gdjs.ReceptionCode.GDCafeteriaObjects1.createFrom(runtimeScene.getObjects("Cafeteria"));
gdjs.ReceptionCode.GDChippyOfficeObjects1.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDMotherboardObjects1.createFrom(runtimeScene.getObjects("Motherboard"));
gdjs.ReceptionCode.GDRobotCubiclesObjects1.createFrom(runtimeScene.getObjects("RobotCubicles"));
gdjs.ReceptionCode.GDSparePartsObjects1.createFrom(runtimeScene.getObjects("SpareParts"));
gdjs.ReceptionCode.GDWallCLevelObjects1.createFrom(runtimeScene.getObjects("WallCLevel"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects1ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects1ObjectsGDgdjs_46ReceptionCode_46GDCafeteriaObjects1ObjectsGDgdjs_46ReceptionCode_46GDSparePartsObjects1ObjectsGDgdjs_46ReceptionCode_46GDMotherboardObjects1ObjectsGDgdjs_46ReceptionCode_46GDRobotCubiclesObjects1ObjectsGDgdjs_46ReceptionCode_46GDAccountingObjects1Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDAccountingObjects1 */
/* Reuse gdjs.ReceptionCode.GDCafeteriaObjects1 */
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects1 */
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.ReceptionCode.GDMotherboardObjects1 */
/* Reuse gdjs.ReceptionCode.GDRobotCubiclesObjects1 */
/* Reuse gdjs.ReceptionCode.GDSparePartsObjects1 */
/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects1 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDAccountingObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDRobotCubiclesObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDMotherboardObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDSparePartsObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDCafeteriaObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects1[0].getVariables()) : gdjs.ReceptionCode.GDCafeteriaObjects1[0].getVariables()) : gdjs.ReceptionCode.GDSparePartsObjects1[0].getVariables()) : gdjs.ReceptionCode.GDMotherboardObjects1[0].getVariables()) : gdjs.ReceptionCode.GDRobotCubiclesObjects1[0].getVariables()) : gdjs.ReceptionCode.GDAccountingObjects1[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setPosition((( gdjs.ReceptionCode.GDAccountingObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDRobotCubiclesObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDMotherboardObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDSparePartsObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDCafeteriaObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? 0 :gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDWallCLevelObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDCafeteriaObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDSparePartsObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDMotherboardObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDRobotCubiclesObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDAccountingObjects1[0].getPointX("Right")) + (( gdjs.ReceptionCode.GDAccountingObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDRobotCubiclesObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDMotherboardObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDSparePartsObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDCafeteriaObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? 0 :gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getWidth()) :gdjs.ReceptionCode.GDWallCLevelObjects1[0].getWidth()) :gdjs.ReceptionCode.GDCafeteriaObjects1[0].getWidth()) :gdjs.ReceptionCode.GDSparePartsObjects1[0].getWidth()) :gdjs.ReceptionCode.GDMotherboardObjects1[0].getWidth()) :gdjs.ReceptionCode.GDRobotCubiclesObjects1[0].getWidth()) :gdjs.ReceptionCode.GDAccountingObjects1[0].getWidth()),(( gdjs.ReceptionCode.GDAccountingObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDRobotCubiclesObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDMotherboardObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDSparePartsObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDCafeteriaObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? 0 :gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDWallCLevelObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDCafeteriaObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDSparePartsObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDMotherboardObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDRobotCubiclesObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDAccountingObjects1[0].getPointY("Center")));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDCafeteriaObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDCafeteriaObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDSparePartsObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDSparePartsObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDMotherboardObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDMotherboardObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDRobotCubiclesObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDRobotCubiclesObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDAccountingObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDAccountingObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.eventsList8 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI"));
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


};gdjs.ReceptionCode.eventsList9 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("i_released").setNumber(1);
}
{ //Subevents
gdjs.ReceptionCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects2});gdjs.ReceptionCode.eventsList10 = function(runtimeScene) {

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


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.ReceptionCode.GDInventoryBackgroundObjects2});gdjs.ReceptionCode.eventsList11 = function(runtimeScene) {

{

gdjs.ReceptionCode.GDInventoryBackgroundObjects2.createFrom(runtimeScene.getObjects("InventoryBackground"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{}}

}


};gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryKeyObjects3Objects = Hashtable.newFrom({"InventoryKey": gdjs.ReceptionCode.GDInventoryKeyObjects3});gdjs.ReceptionCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.ReceptionCode.GDInventorySlotObjects3.createFrom(gdjs.ReceptionCode.GDInventorySlotObjects2);


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
gdjs.ReceptionCode.GDChippyOfficeObjects3.createFrom(runtimeScene.getObjects("ChippyOffice"));
/* Reuse gdjs.ReceptionCode.GDInventorySlotObjects3 */
gdjs.ReceptionCode.GDInventoryKeyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryKeyObjects3Objects, (( gdjs.ReceptionCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDInventorySlotObjects3[0].getPointX("Left")), (( gdjs.ReceptionCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.ReceptionCode.GDInventorySlotObjects3[0].getPointY("Top")), "UI");
}{for(var i = 0, len = gdjs.ReceptionCode.GDInventoryKeyObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDInventoryKeyObjects3[i].setZOrder(20);
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects3.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects3[i].returnVariable(gdjs.ReceptionCode.GDChippyOfficeObjects3[i].getVariables().getFromIndex(1)).setString((gdjs.RuntimeObject.getVariableString(gdjs.ReceptionCode.GDChippyOfficeObjects3[i].getVariables().getFromIndex(1))) + "You have a key which might open this door.");
}
}{runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound").setNumber(1);
}{runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked").setNumber(0);
}}

}


};gdjs.ReceptionCode.eventsList13 = function(runtimeScene) {

{



}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("picked_item").setString("");
}}

}


{


gdjs.ReceptionCode.eventsList9(runtimeScene);
}


{

gdjs.ReceptionCode.GDInventorySlotObjects2.createFrom(runtimeScene.getObjects("InventorySlot"));

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
gdjs.ReceptionCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.ReceptionCode.GDInventorySlotObjects2.createFrom(runtimeScene.getObjects("InventorySlot"));

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
gdjs.ReceptionCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.ReceptionCode.GDInventorySlotObjects1.createFrom(runtimeScene.getObjects("InventorySlot"));

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
gdjs.ReceptionCode.eventsList12(runtimeScene);} //Subevents end.
}
}

}


};gdjs.ReceptionCode.eventsList14 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDAccountingObjects1.createFrom(runtimeScene.getObjects("Accounting"));
gdjs.ReceptionCode.GDCafeteriaObjects1.createFrom(runtimeScene.getObjects("Cafeteria"));
gdjs.ReceptionCode.GDChippyOfficeObjects1.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
gdjs.ReceptionCode.GDMotherboardObjects1.createFrom(runtimeScene.getObjects("Motherboard"));
gdjs.ReceptionCode.GDRobotCubiclesObjects1.createFrom(runtimeScene.getObjects("RobotCubicles"));
gdjs.ReceptionCode.GDSparePartsObjects1.createFrom(runtimeScene.getObjects("SpareParts"));
gdjs.ReceptionCode.GDWallCLevelObjects1.createFrom(runtimeScene.getObjects("WallCLevel"));
gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.createFrom(runtimeScene.getObjects("sparePartsCodePrompt"));
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects1[i].hide();
}
for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects1[i].hide();
}
for(var i = 0, len = gdjs.ReceptionCode.GDCafeteriaObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDCafeteriaObjects1[i].hide();
}
for(var i = 0, len = gdjs.ReceptionCode.GDSparePartsObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDSparePartsObjects1[i].hide();
}
for(var i = 0, len = gdjs.ReceptionCode.GDMotherboardObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDMotherboardObjects1[i].hide();
}
for(var i = 0, len = gdjs.ReceptionCode.GDRobotCubiclesObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDRobotCubiclesObjects1[i].hide();
}
for(var i = 0, len = gdjs.ReceptionCode.GDAccountingObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDAccountingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodePromptObjects1[i].hide();
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound")) == 1;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDChippyOfficeObjects1.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDWallCLevelObjects1.createFrom(runtimeScene.getObjects("WallCLevel"));
{for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects1[i].returnVariable(gdjs.ReceptionCode.GDWallCLevelObjects1[i].getVariables().getFromIndex(2)).setString("There is nothing of interest here.");
}
}{runtimeScene.getVariables().get("picked_item").setString("key");
}{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects1[i].returnVariable(gdjs.ReceptionCode.GDChippyOfficeObjects1[i].getVariables().getFromIndex(2)).setString("");
}
}}

}


{


gdjs.ReceptionCode.eventsList0(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList1(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList7(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList13(runtimeScene);
}


{


{
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.createFrom(runtimeScene.getObjects("sparePartsCodeEntry"));
gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.createFrom(runtimeScene.getObjects("sparePartsCodePrompt"));
gdjs.ReceptionCode.GDtempCodeObjects1.createFrom(runtimeScene.getObjects("tempCode"));
{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodePromptObjects1[i].setString("Input: " + (( gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.length === 0 ) ? "" :gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDtempCodeObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDtempCodeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("sparePartsDoorLocked")) + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("tempCodeEntry")));
}
}}

}


{


{
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.createFrom(runtimeScene.getObjects("sparePartsCodeEntry"));
{runtimeScene.getVariables().get("tempCodeEntry").setString((( gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.length === 0 ) ? "" :gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1[0].getString()));
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("tempCodeEntry")) == "698105";
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.createFrom(runtimeScene.getObjects("sparePartsCodeEntry"));
gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.createFrom(runtimeScene.getObjects("sparePartsCodePrompt"));
{runtimeScene.getGame().getVariables().get("sparePartsDoorLocked").setNumber(0);
}{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodePromptObjects1[i].hide();
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
{gdjs.ReceptionCode.conditionTrue_1 = gdjs.ReceptionCode.condition0IsTrue_0;
gdjs.ReceptionCode.condition0IsTrue_1.val = false;
gdjs.ReceptionCode.condition1IsTrue_1.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if( gdjs.ReceptionCode.condition0IsTrue_1.val ) {
    gdjs.ReceptionCode.conditionTrue_1.val = true;
}
}
{
gdjs.ReceptionCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if( gdjs.ReceptionCode.condition1IsTrue_1.val ) {
    gdjs.ReceptionCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.createFrom(runtimeScene.getObjects("sparePartsCodeEntry"));
gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.createFrom(runtimeScene.getObjects("sparePartsCodePrompt"));
{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDsparePartsCodePromptObjects1[i].hide();
}
}}

}


};

gdjs.ReceptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95LocationNameObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95DescriptionObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects4.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects1.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects2.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects3.length = 0;
gdjs.ReceptionCode.GDHUD_95TimerObjects4.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects1.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects2.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects3.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects4.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.ReceptionCode.GDBackToCafeteriaObjects4.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.ReceptionCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects1.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects2.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects3.length = 0;
gdjs.ReceptionCode.GDInventorySlotObjects4.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects1.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects2.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects3.length = 0;
gdjs.ReceptionCode.GDInventoryKeyObjects4.length = 0;
gdjs.ReceptionCode.GDMapObjects1.length = 0;
gdjs.ReceptionCode.GDMapObjects2.length = 0;
gdjs.ReceptionCode.GDMapObjects3.length = 0;
gdjs.ReceptionCode.GDMapObjects4.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects1.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects2.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects3.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects4.length = 0;
gdjs.ReceptionCode.GDCafeteriaObjects1.length = 0;
gdjs.ReceptionCode.GDCafeteriaObjects2.length = 0;
gdjs.ReceptionCode.GDCafeteriaObjects3.length = 0;
gdjs.ReceptionCode.GDCafeteriaObjects4.length = 0;
gdjs.ReceptionCode.GDSparePartsObjects1.length = 0;
gdjs.ReceptionCode.GDSparePartsObjects2.length = 0;
gdjs.ReceptionCode.GDSparePartsObjects3.length = 0;
gdjs.ReceptionCode.GDSparePartsObjects4.length = 0;
gdjs.ReceptionCode.GDMotherboardObjects1.length = 0;
gdjs.ReceptionCode.GDMotherboardObjects2.length = 0;
gdjs.ReceptionCode.GDMotherboardObjects3.length = 0;
gdjs.ReceptionCode.GDMotherboardObjects4.length = 0;
gdjs.ReceptionCode.GDRobotCubiclesObjects1.length = 0;
gdjs.ReceptionCode.GDRobotCubiclesObjects2.length = 0;
gdjs.ReceptionCode.GDRobotCubiclesObjects3.length = 0;
gdjs.ReceptionCode.GDRobotCubiclesObjects4.length = 0;
gdjs.ReceptionCode.GDAccountingObjects1.length = 0;
gdjs.ReceptionCode.GDAccountingObjects2.length = 0;
gdjs.ReceptionCode.GDAccountingObjects3.length = 0;
gdjs.ReceptionCode.GDAccountingObjects4.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects1.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects2.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects3.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects4.length = 0;
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects1.length = 0;
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects2.length = 0;
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects3.length = 0;
gdjs.ReceptionCode.GDsparePartsCodeEntryObjects4.length = 0;
gdjs.ReceptionCode.GDsparePartsCodePromptObjects1.length = 0;
gdjs.ReceptionCode.GDsparePartsCodePromptObjects2.length = 0;
gdjs.ReceptionCode.GDsparePartsCodePromptObjects3.length = 0;
gdjs.ReceptionCode.GDsparePartsCodePromptObjects4.length = 0;
gdjs.ReceptionCode.GDtempCodeObjects1.length = 0;
gdjs.ReceptionCode.GDtempCodeObjects2.length = 0;
gdjs.ReceptionCode.GDtempCodeObjects3.length = 0;
gdjs.ReceptionCode.GDtempCodeObjects4.length = 0;

gdjs.ReceptionCode.eventsList14(runtimeScene);
return;

}

gdjs['ReceptionCode'] = gdjs.ReceptionCode;
