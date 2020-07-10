gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDMapObjects1= [];
gdjs.New_32sceneCode.GDMapObjects2= [];
gdjs.New_32sceneCode.GDMapObjects3= [];
gdjs.New_32sceneCode.GDTopFloorObjects1= [];
gdjs.New_32sceneCode.GDTopFloorObjects2= [];
gdjs.New_32sceneCode.GDTopFloorObjects3= [];
gdjs.New_32sceneCode.GDHUDObjects1= [];
gdjs.New_32sceneCode.GDHUDObjects2= [];
gdjs.New_32sceneCode.GDHUDObjects3= [];
gdjs.New_32sceneCode.GDHUD_95InstructionObjects1= [];
gdjs.New_32sceneCode.GDHUD_95InstructionObjects2= [];
gdjs.New_32sceneCode.GDHUD_95InstructionObjects3= [];
gdjs.New_32sceneCode.GDRobotChippyObjects1= [];
gdjs.New_32sceneCode.GDRobotChippyObjects2= [];
gdjs.New_32sceneCode.GDRobotChippyObjects3= [];
gdjs.New_32sceneCode.GDRobotSecurityObjects1= [];
gdjs.New_32sceneCode.GDRobotSecurityObjects2= [];
gdjs.New_32sceneCode.GDRobotSecurityObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.New_32sceneCode.GDMapObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTopFloorObjects1Objects = Hashtable.newFrom({"TopFloor": gdjs.New_32sceneCode.GDTopFloorObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRobotChippyObjects2Objects = Hashtable.newFrom({"RobotChippy": gdjs.New_32sceneCode.GDRobotChippyObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRobotSecurityObjects1Objects = Hashtable.newFrom({"RobotSecurity": gdjs.New_32sceneCode.GDRobotSecurityObjects1});gdjs.New_32sceneCode.eventsList0x6d9824 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDRobotChippyObjects2.createFrom(runtimeScene.getObjects("RobotChippy"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRobotChippyObjects2Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHUDObjects2.createFrom(gdjs.New_32sceneCode.GDHUDObjects1);

/* Reuse gdjs.New_32sceneCode.GDRobotChippyObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDRobotChippyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDRobotChippyObjects2[0].getVariables()).getFromIndex(0))));
}
}}

}


{

gdjs.New_32sceneCode.GDRobotSecurityObjects1.createFrom(runtimeScene.getObjects("RobotSecurity"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRobotSecurityObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDHUDObjects1 */
/* Reuse gdjs.New_32sceneCode.GDRobotSecurityObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDRobotSecurityObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDRobotSecurityObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x6d9824
gdjs.New_32sceneCode.eventsList0x6d96d4 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDTopFloorObjects1.createFrom(runtimeScene.getObjects("TopFloor"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTopFloorObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDHUDObjects1 */
/* Reuse gdjs.New_32sceneCode.GDTopFloorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDTopFloorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDTopFloorObjects1[0].getVariables()).getFromIndex(0))));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x6d9824(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.New_32sceneCode.eventsList0x6d96d4
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.New_32sceneCode.GDMapObjects1});gdjs.New_32sceneCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHUDObjects1.createFrom(runtimeScene.getObjects("HUD"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects1[i].setString("Map");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0x6d96d4(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHUDObjects1.createFrom(runtimeScene.getObjects("HUD"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects1[i].setString("");
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x5b7a18


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDMapObjects1.length = 0;
gdjs.New_32sceneCode.GDMapObjects2.length = 0;
gdjs.New_32sceneCode.GDMapObjects3.length = 0;
gdjs.New_32sceneCode.GDTopFloorObjects1.length = 0;
gdjs.New_32sceneCode.GDTopFloorObjects2.length = 0;
gdjs.New_32sceneCode.GDTopFloorObjects3.length = 0;
gdjs.New_32sceneCode.GDHUDObjects1.length = 0;
gdjs.New_32sceneCode.GDHUDObjects2.length = 0;
gdjs.New_32sceneCode.GDHUDObjects3.length = 0;
gdjs.New_32sceneCode.GDHUD_95InstructionObjects1.length = 0;
gdjs.New_32sceneCode.GDHUD_95InstructionObjects2.length = 0;
gdjs.New_32sceneCode.GDHUD_95InstructionObjects3.length = 0;
gdjs.New_32sceneCode.GDRobotChippyObjects1.length = 0;
gdjs.New_32sceneCode.GDRobotChippyObjects2.length = 0;
gdjs.New_32sceneCode.GDRobotChippyObjects3.length = 0;
gdjs.New_32sceneCode.GDRobotSecurityObjects1.length = 0;
gdjs.New_32sceneCode.GDRobotSecurityObjects2.length = 0;
gdjs.New_32sceneCode.GDRobotSecurityObjects3.length = 0;

gdjs.New_32sceneCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
