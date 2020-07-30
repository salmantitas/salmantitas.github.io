gdjs.Top_32FloorCode = {};
gdjs.Top_32FloorCode.forEachIndex2 = 0;

gdjs.Top_32FloorCode.forEachObjects2 = [];

gdjs.Top_32FloorCode.forEachTemporary2 = null;

gdjs.Top_32FloorCode.forEachTotalCount2 = 0;

gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects4= [];
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects4= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects4= [];
gdjs.Top_32FloorCode.GDBackToReceptionObjects1= [];
gdjs.Top_32FloorCode.GDBackToReceptionObjects2= [];
gdjs.Top_32FloorCode.GDBackToReceptionObjects3= [];
gdjs.Top_32FloorCode.GDBackToReceptionObjects4= [];
gdjs.Top_32FloorCode.GDMapObjects1= [];
gdjs.Top_32FloorCode.GDMapObjects2= [];
gdjs.Top_32FloorCode.GDMapObjects3= [];
gdjs.Top_32FloorCode.GDMapObjects4= [];
gdjs.Top_32FloorCode.GDTopFloorObjects1= [];
gdjs.Top_32FloorCode.GDTopFloorObjects2= [];
gdjs.Top_32FloorCode.GDTopFloorObjects3= [];
gdjs.Top_32FloorCode.GDTopFloorObjects4= [];
gdjs.Top_32FloorCode.GDRobotChippyObjects1= [];
gdjs.Top_32FloorCode.GDRobotChippyObjects2= [];
gdjs.Top_32FloorCode.GDRobotChippyObjects3= [];
gdjs.Top_32FloorCode.GDRobotChippyObjects4= [];
gdjs.Top_32FloorCode.GDRobotSecurityObjects1= [];
gdjs.Top_32FloorCode.GDRobotSecurityObjects2= [];
gdjs.Top_32FloorCode.GDRobotSecurityObjects3= [];
gdjs.Top_32FloorCode.GDRobotSecurityObjects4= [];
gdjs.Top_32FloorCode.GDTableObjects1= [];
gdjs.Top_32FloorCode.GDTableObjects2= [];
gdjs.Top_32FloorCode.GDTableObjects3= [];
gdjs.Top_32FloorCode.GDTableObjects4= [];
gdjs.Top_32FloorCode.GDComputerObjects1= [];
gdjs.Top_32FloorCode.GDComputerObjects2= [];
gdjs.Top_32FloorCode.GDComputerObjects3= [];
gdjs.Top_32FloorCode.GDComputerObjects4= [];
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects1= [];
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects2= [];
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects3= [];
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects4= [];
gdjs.Top_32FloorCode.GDInventorySlotObjects1= [];
gdjs.Top_32FloorCode.GDInventorySlotObjects2= [];
gdjs.Top_32FloorCode.GDInventorySlotObjects3= [];
gdjs.Top_32FloorCode.GDInventorySlotObjects4= [];
gdjs.Top_32FloorCode.GDInventoryKeyObjects1= [];
gdjs.Top_32FloorCode.GDInventoryKeyObjects2= [];
gdjs.Top_32FloorCode.GDInventoryKeyObjects3= [];
gdjs.Top_32FloorCode.GDInventoryKeyObjects4= [];
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects4= [];
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects4= [];
gdjs.Top_32FloorCode.GDHUD_95TodoObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95TodoObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95TodoObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95TodoObjects4= [];
gdjs.Top_32FloorCode.GDNewObjectObjects1= [];
gdjs.Top_32FloorCode.GDNewObjectObjects2= [];
gdjs.Top_32FloorCode.GDNewObjectObjects3= [];
gdjs.Top_32FloorCode.GDNewObjectObjects4= [];

gdjs.Top_32FloorCode.conditionTrue_0 = {val:false};
gdjs.Top_32FloorCode.condition0IsTrue_0 = {val:false};
gdjs.Top_32FloorCode.condition1IsTrue_0 = {val:false};
gdjs.Top_32FloorCode.condition2IsTrue_0 = {val:false};


gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDMapObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTopFloorObjects2Objects = Hashtable.newFrom({"Map": gdjs.Top_32FloorCode.GDMapObjects2, "TopFloor": gdjs.Top_32FloorCode.GDTopFloorObjects2});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.Top_32FloorCode.GDMapObjects1});gdjs.Top_32FloorCode.eventsList0x785f3c = function(runtimeScene) {

{

gdjs.Top_32FloorCode.GDMapObjects2.createFrom(runtimeScene.getObjects("Map"));
gdjs.Top_32FloorCode.GDTopFloorObjects2.createFrom(runtimeScene.getObjects("TopFloor"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDMapObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTopFloorObjects2Objects, runtimeScene, true, false);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects2.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.Top_32FloorCode.GDMapObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDTopFloorObjects2 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDTopFloorObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDMapObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDMapObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDTopFloorObjects2[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2[i].setString("");
}
}}

}


{

gdjs.Top_32FloorCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x785f3c
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects2Objects = Hashtable.newFrom({"RobotChippy": gdjs.Top_32FloorCode.GDRobotChippyObjects2, "RobotSecurity": gdjs.Top_32FloorCode.GDRobotSecurityObjects2, "Table": gdjs.Top_32FloorCode.GDTableObjects2});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects1Objects = Hashtable.newFrom({"RobotChippy": gdjs.Top_32FloorCode.GDRobotChippyObjects1, "RobotSecurity": gdjs.Top_32FloorCode.GDRobotSecurityObjects1, "Table": gdjs.Top_32FloorCode.GDTableObjects1});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1Objects = Hashtable.newFrom({"RobotChippy": gdjs.Top_32FloorCode.GDRobotChippyObjects1});gdjs.Top_32FloorCode.eventsList0x680e5c = function(runtimeScene) {

{



}


{

gdjs.Top_32FloorCode.GDRobotChippyObjects2.createFrom(gdjs.Top_32FloorCode.GDRobotChippyObjects1);

gdjs.Top_32FloorCode.GDRobotSecurityObjects2.createFrom(gdjs.Top_32FloorCode.GDRobotSecurityObjects1);

gdjs.Top_32FloorCode.GDTableObjects2.createFrom(gdjs.Top_32FloorCode.GDTableObjects1);


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDRobotChippyObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].getVariables().get("use")) == "key" ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDRobotChippyObjects2[k] = gdjs.Top_32FloorCode.GDRobotChippyObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDRobotChippyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].getVariables().get("use")) == "key" ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDRobotSecurityObjects2[k] = gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDTableObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDTableObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDTableObjects2[i].getVariables().get("use")) == "key" ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDTableObjects2[k] = gdjs.Top_32FloorCode.GDTableObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDTableObjects2.length = k;}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.createFrom(gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1);

/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects2 */
{runtimeScene.getVariables().get("picked_item").setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDTableObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects2[0].getVariables()).get("use"))));
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2[i].setString("You found a key!");
}
}}

}


{

gdjs.Top_32FloorCode.GDInventorySlotObjects1.createFrom(runtimeScene.getObjects("InventorySlot"));
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects1 */

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDInventorySlotObjects1.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDInventorySlotObjects1[i].getVariableString(gdjs.Top_32FloorCode.GDInventorySlotObjects1[i].getVariables().getFromIndex(0)) == "key" ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDInventorySlotObjects1[k] = gdjs.Top_32FloorCode.GDInventorySlotObjects1[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDInventorySlotObjects1.length = k;}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Puzzle 1", false);
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x680e5c
gdjs.Top_32FloorCode.eventsList0x78950c = function(runtimeScene) {

{


gdjs.Top_32FloorCode.eventsList0x680e5c(runtimeScene);
}


}; //End of gdjs.Top_32FloorCode.eventsList0x78950c
gdjs.Top_32FloorCode.eventsList0x7ae074 = function(runtimeScene) {

{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.Top_32FloorCode.GDRobotChippyObjects2.createFrom(gdjs.Top_32FloorCode.GDRobotChippyObjects1);

gdjs.Top_32FloorCode.GDRobotSecurityObjects2.createFrom(gdjs.Top_32FloorCode.GDRobotSecurityObjects1);

gdjs.Top_32FloorCode.GDTableObjects2.createFrom(gdjs.Top_32FloorCode.GDTableObjects1);

{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDTableObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects2[0].getVariables()).get("description"))));
}
}}

}


{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects1 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x78950c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x7ae074
gdjs.Top_32FloorCode.eventsList0x68cf74 = function(runtimeScene) {

{



}


{

gdjs.Top_32FloorCode.GDRobotChippyObjects2.createFrom(runtimeScene.getObjects("RobotChippy"));
gdjs.Top_32FloorCode.GDRobotSecurityObjects2.createFrom(runtimeScene.getObjects("RobotSecurity"));
gdjs.Top_32FloorCode.GDTableObjects2.createFrom(runtimeScene.getObjects("Table"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects2Objects, runtimeScene, true, true);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects2 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotChippyObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDTableObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDTableObjects2[i].setAnimationName("Normal");
}
}}

}


{

gdjs.Top_32FloorCode.GDRobotChippyObjects1.createFrom(runtimeScene.getObjects("RobotChippy"));
gdjs.Top_32FloorCode.GDRobotSecurityObjects1.createFrom(runtimeScene.getObjects("RobotSecurity"));
gdjs.Top_32FloorCode.GDTableObjects1.createFrom(runtimeScene.getObjects("Table"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects1Objects, runtimeScene, true, false);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects1 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects1[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1[i].setPosition((( gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? (( gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? (( gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? 0 :gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getPointX("Right")) :gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getPointX("Right")) :gdjs.Top_32FloorCode.GDTableObjects1[0].getPointX("Right")) + (( gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? (( gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? (( gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? 0 :gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getWidth()) :gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getWidth()) :gdjs.Top_32FloorCode.GDTableObjects1[0].getWidth()),(( gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? (( gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? (( gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? 0 :gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getPointY("Center")) :gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getPointY("Center")) :gdjs.Top_32FloorCode.GDTableObjects1[0].getPointY("Center")));
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotChippyObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotChippyObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotSecurityObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDTableObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDTableObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x7ae074(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x68cf74
gdjs.Top_32FloorCode.eventsList0x695a64 = function(runtimeScene) {

{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
gdjs.Top_32FloorCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI"));
}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
gdjs.Top_32FloorCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("i_released")) == 1;
}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}{runtimeScene.getVariables().get("i_released").setNumber(0);
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x695a64
gdjs.Top_32FloorCode.eventsList0x68da4c = function(runtimeScene) {

{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("i_released").setNumber(1);
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x695a64(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x68da4c
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.Top_32FloorCode.GDInventorySlotObjects2});gdjs.Top_32FloorCode.eventsList0x787084 = function(runtimeScene) {

{

/* Reuse gdjs.Top_32FloorCode.GDInventorySlotObjects2 */

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDInventorySlotObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].getVariableNumber(gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDInventorySlotObjects2[k] = gdjs.Top_32FloorCode.GDInventorySlotObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDInventorySlotObjects2.length = k;}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2[i].setString("Inventory slot is empty");
}
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x787084
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.Top_32FloorCode.GDInventorySlotObjects2});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.Top_32FloorCode.GDInventoryBackgroundObjects2});gdjs.Top_32FloorCode.eventsList0x7937ec = function(runtimeScene) {

{

gdjs.Top_32FloorCode.GDInventoryBackgroundObjects2.createFrom(runtimeScene.getObjects("InventoryBackground"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventoryBackgroundObjects2Objects, runtimeScene, true, true);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2.createFrom(runtimeScene.getObjects("HUD_Inventory"));
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2[i].setString("Inventory:");
}
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x7937ec
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventoryKeyObjects3Objects = Hashtable.newFrom({"InventoryKey": gdjs.Top_32FloorCode.GDInventoryKeyObjects3});gdjs.Top_32FloorCode.eventsList0x78010c = function(runtimeScene) {

{

gdjs.Top_32FloorCode.GDInventorySlotObjects3.createFrom(gdjs.Top_32FloorCode.GDInventorySlotObjects2);


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDInventorySlotObjects3.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDInventorySlotObjects3[i].getVariableString(gdjs.Top_32FloorCode.GDInventorySlotObjects3[i].getVariables().getFromIndex(0)) == "key" ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDInventorySlotObjects3[k] = gdjs.Top_32FloorCode.GDInventorySlotObjects3[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDInventorySlotObjects3.length = k;}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDInventorySlotObjects3 */
gdjs.Top_32FloorCode.GDRobotChippyObjects3.createFrom(runtimeScene.getObjects("RobotChippy"));
gdjs.Top_32FloorCode.GDInventoryKeyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventoryKeyObjects3Objects, (( gdjs.Top_32FloorCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.Top_32FloorCode.GDInventorySlotObjects3[0].getPointX("Left")), (( gdjs.Top_32FloorCode.GDInventorySlotObjects3.length === 0 ) ? 0 :gdjs.Top_32FloorCode.GDInventorySlotObjects3[0].getPointY("Top")), "UI");
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDInventoryKeyObjects3.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDInventoryKeyObjects3[i].setZOrder(20);
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotChippyObjects3.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotChippyObjects3[i].returnVariable(gdjs.Top_32FloorCode.GDRobotChippyObjects3[i].getVariables().getFromIndex(1)).setString("Chippy Blipman is not moving. There is a tiny keyhole in his chestplate. And you have a key!");
}
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x78010c
gdjs.Top_32FloorCode.eventsList0x72515c = function(runtimeScene) {

{



}


{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("picked_item").setString("");
}}

}


{


gdjs.Top_32FloorCode.eventsList0x68da4c(runtimeScene);
}


{

gdjs.Top_32FloorCode.GDInventorySlotObjects2.createFrom(runtimeScene.getObjects("InventorySlot"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventorySlotObjects2Objects, runtimeScene, true, false);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2.createFrom(runtimeScene.getObjects("HUD_Inventory"));
/* Reuse gdjs.Top_32FloorCode.GDInventorySlotObjects2 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].setAnimationName("Hover");
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2[i].setString("Inventory slot contains a " + (gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDInventorySlotObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDInventorySlotObjects2[0].getVariables()).getFromIndex(0))));
}
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x787084(runtimeScene);} //End of subevents
}

}


{

gdjs.Top_32FloorCode.GDInventorySlotObjects2.createFrom(runtimeScene.getObjects("InventorySlot"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventorySlotObjects2Objects, runtimeScene, true, true);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDInventorySlotObjects2 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].setAnimationName("Normal");
}
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x7937ec(runtimeScene);} //End of subevents
}

}


{

gdjs.Top_32FloorCode.GDInventorySlotObjects1.createFrom(runtimeScene.getObjects("InventorySlot"));

for(gdjs.Top_32FloorCode.forEachIndex2 = 0;gdjs.Top_32FloorCode.forEachIndex2 < gdjs.Top_32FloorCode.GDInventorySlotObjects1.length;++gdjs.Top_32FloorCode.forEachIndex2) {
gdjs.Top_32FloorCode.GDInventorySlotObjects2.length = 0;


gdjs.Top_32FloorCode.forEachTemporary2 = gdjs.Top_32FloorCode.GDInventorySlotObjects1[gdjs.Top_32FloorCode.forEachIndex2];
gdjs.Top_32FloorCode.GDInventorySlotObjects2.push(gdjs.Top_32FloorCode.forEachTemporary2);
gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDInventorySlotObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].getVariableNumber(gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDInventorySlotObjects2[k] = gdjs.Top_32FloorCode.GDInventorySlotObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDInventorySlotObjects2.length = k;}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
gdjs.Top_32FloorCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("picked_item")) != "";
}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.Top_32FloorCode.GDInventorySlotObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].returnVariable(gdjs.Top_32FloorCode.GDInventorySlotObjects2[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("picked_item")));
}
}{runtimeScene.getVariables().get("picked_item").setString("");
}
{ //Subevents: 
gdjs.Top_32FloorCode.eventsList0x78010c(runtimeScene);} //Subevents end.
}
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x72515c
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Top_32FloorCode.GDBackToReceptionObjects1});gdjs.Top_32FloorCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


{


gdjs.Top_32FloorCode.eventsList0x785f3c(runtimeScene);
}


{


gdjs.Top_32FloorCode.eventsList0x68cf74(runtimeScene);
}


{


gdjs.Top_32FloorCode.eventsList0x72515c(runtimeScene);
}


{

gdjs.Top_32FloorCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
gdjs.Top_32FloorCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x5b7a18


gdjs.Top_32FloorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95LocationNameObjects4.length = 0;
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects4.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects4.length = 0;
gdjs.Top_32FloorCode.GDBackToReceptionObjects1.length = 0;
gdjs.Top_32FloorCode.GDBackToReceptionObjects2.length = 0;
gdjs.Top_32FloorCode.GDBackToReceptionObjects3.length = 0;
gdjs.Top_32FloorCode.GDBackToReceptionObjects4.length = 0;
gdjs.Top_32FloorCode.GDMapObjects1.length = 0;
gdjs.Top_32FloorCode.GDMapObjects2.length = 0;
gdjs.Top_32FloorCode.GDMapObjects3.length = 0;
gdjs.Top_32FloorCode.GDMapObjects4.length = 0;
gdjs.Top_32FloorCode.GDTopFloorObjects1.length = 0;
gdjs.Top_32FloorCode.GDTopFloorObjects2.length = 0;
gdjs.Top_32FloorCode.GDTopFloorObjects3.length = 0;
gdjs.Top_32FloorCode.GDTopFloorObjects4.length = 0;
gdjs.Top_32FloorCode.GDRobotChippyObjects1.length = 0;
gdjs.Top_32FloorCode.GDRobotChippyObjects2.length = 0;
gdjs.Top_32FloorCode.GDRobotChippyObjects3.length = 0;
gdjs.Top_32FloorCode.GDRobotChippyObjects4.length = 0;
gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length = 0;
gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length = 0;
gdjs.Top_32FloorCode.GDRobotSecurityObjects3.length = 0;
gdjs.Top_32FloorCode.GDRobotSecurityObjects4.length = 0;
gdjs.Top_32FloorCode.GDTableObjects1.length = 0;
gdjs.Top_32FloorCode.GDTableObjects2.length = 0;
gdjs.Top_32FloorCode.GDTableObjects3.length = 0;
gdjs.Top_32FloorCode.GDTableObjects4.length = 0;
gdjs.Top_32FloorCode.GDComputerObjects1.length = 0;
gdjs.Top_32FloorCode.GDComputerObjects2.length = 0;
gdjs.Top_32FloorCode.GDComputerObjects3.length = 0;
gdjs.Top_32FloorCode.GDComputerObjects4.length = 0;
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Top_32FloorCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.Top_32FloorCode.GDInventorySlotObjects1.length = 0;
gdjs.Top_32FloorCode.GDInventorySlotObjects2.length = 0;
gdjs.Top_32FloorCode.GDInventorySlotObjects3.length = 0;
gdjs.Top_32FloorCode.GDInventorySlotObjects4.length = 0;
gdjs.Top_32FloorCode.GDInventoryKeyObjects1.length = 0;
gdjs.Top_32FloorCode.GDInventoryKeyObjects2.length = 0;
gdjs.Top_32FloorCode.GDInventoryKeyObjects3.length = 0;
gdjs.Top_32FloorCode.GDInventoryKeyObjects4.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InventoryObjects4.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95InstructionObjects4.length = 0;
gdjs.Top_32FloorCode.GDHUD_95TodoObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95TodoObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95TodoObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95TodoObjects4.length = 0;
gdjs.Top_32FloorCode.GDNewObjectObjects1.length = 0;
gdjs.Top_32FloorCode.GDNewObjectObjects2.length = 0;
gdjs.Top_32FloorCode.GDNewObjectObjects3.length = 0;
gdjs.Top_32FloorCode.GDNewObjectObjects4.length = 0;

gdjs.Top_32FloorCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['Top_32FloorCode'] = gdjs.Top_32FloorCode;
