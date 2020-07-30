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
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects4= [];
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

gdjs.Top_32FloorCode.conditionTrue_0 = {val:false};
gdjs.Top_32FloorCode.condition0IsTrue_0 = {val:false};
gdjs.Top_32FloorCode.condition1IsTrue_0 = {val:false};
gdjs.Top_32FloorCode.condition2IsTrue_0 = {val:false};


gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDMapObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTopFloorObjects2Objects = Hashtable.newFrom({"Map": gdjs.Top_32FloorCode.GDMapObjects2, "TopFloor": gdjs.Top_32FloorCode.GDTopFloorObjects2});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.Top_32FloorCode.GDMapObjects1});gdjs.Top_32FloorCode.eventsList0x68cd4c = function(runtimeScene) {

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


}; //End of gdjs.Top_32FloorCode.eventsList0x68cd4c
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDComputerObjects2Objects = Hashtable.newFrom({"RobotChippy": gdjs.Top_32FloorCode.GDRobotChippyObjects2, "RobotSecurity": gdjs.Top_32FloorCode.GDRobotSecurityObjects2, "Table": gdjs.Top_32FloorCode.GDTableObjects2, "Computer": gdjs.Top_32FloorCode.GDComputerObjects2});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDComputerObjects1Objects = Hashtable.newFrom({"RobotChippy": gdjs.Top_32FloorCode.GDRobotChippyObjects1, "RobotSecurity": gdjs.Top_32FloorCode.GDRobotSecurityObjects1, "Table": gdjs.Top_32FloorCode.GDTableObjects1, "Computer": gdjs.Top_32FloorCode.GDComputerObjects1});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1Objects = Hashtable.newFrom({"RobotChippy": gdjs.Top_32FloorCode.GDRobotChippyObjects1});gdjs.Top_32FloorCode.eventsList0x779514 = function(runtimeScene) {

{



}


{

gdjs.Top_32FloorCode.GDComputerObjects2.createFrom(gdjs.Top_32FloorCode.GDComputerObjects1);

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
gdjs.Top_32FloorCode.GDTableObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDComputerObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDComputerObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDComputerObjects2[i].getVariables().get("use")) == "key" ) {
        gdjs.Top_32FloorCode.condition0IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDComputerObjects2[k] = gdjs.Top_32FloorCode.GDComputerObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDComputerObjects2.length = k;}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDComputerObjects2 */
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.createFrom(gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1);

/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects2 */
{runtimeScene.getVariables().get("picked_item").setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDComputerObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDTableObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDComputerObjects2[0].getVariables()).get("use"))));
}{for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotChippyObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].returnVariable(gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].getVariables().get("use")).setString((gdjs.RuntimeObject.getVariableString(gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].getVariables().get("name"))) + " is empty.");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].returnVariable(gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].getVariables().get("use")).setString((gdjs.RuntimeObject.getVariableString(gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].getVariables().get("name"))) + " is empty.");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDTableObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDTableObjects2[i].returnVariable(gdjs.Top_32FloorCode.GDTableObjects2[i].getVariables().get("use")).setString((gdjs.RuntimeObject.getVariableString(gdjs.Top_32FloorCode.GDTableObjects2[i].getVariables().get("name"))) + " is empty.");
}
for(var i = 0, len = gdjs.Top_32FloorCode.GDComputerObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDComputerObjects2[i].returnVariable(gdjs.Top_32FloorCode.GDComputerObjects2[i].getVariables().get("use")).setString((gdjs.RuntimeObject.getVariableString(gdjs.Top_32FloorCode.GDComputerObjects2[i].getVariables().get("name"))) + " is empty.");
}
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


}; //End of gdjs.Top_32FloorCode.eventsList0x779514
gdjs.Top_32FloorCode.eventsList0x68d4b4 = function(runtimeScene) {

{


gdjs.Top_32FloorCode.eventsList0x779514(runtimeScene);
}


}; //End of gdjs.Top_32FloorCode.eventsList0x68d4b4
gdjs.Top_32FloorCode.eventsList0x682fec = function(runtimeScene) {

{

gdjs.Top_32FloorCode.GDComputerObjects2.createFrom(gdjs.Top_32FloorCode.GDComputerObjects1);

gdjs.Top_32FloorCode.GDRobotChippyObjects2.createFrom(gdjs.Top_32FloorCode.GDRobotChippyObjects1);

gdjs.Top_32FloorCode.GDRobotSecurityObjects2.createFrom(gdjs.Top_32FloorCode.GDRobotSecurityObjects1);

gdjs.Top_32FloorCode.GDTableObjects2.createFrom(gdjs.Top_32FloorCode.GDTableObjects1);


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDRobotChippyObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDRobotChippyObjects2[i].getVariables().get("description")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDRobotChippyObjects2[k] = gdjs.Top_32FloorCode.GDRobotChippyObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDRobotChippyObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i].getVariables().get("description")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDRobotSecurityObjects2[k] = gdjs.Top_32FloorCode.GDRobotSecurityObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDTableObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDTableObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDTableObjects2[i].getVariables().get("description")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDTableObjects2[k] = gdjs.Top_32FloorCode.GDTableObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDTableObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDComputerObjects2.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDComputerObjects2[i].getVariableString(gdjs.Top_32FloorCode.GDComputerObjects2[i].getVariables().get("description")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDComputerObjects2[k] = gdjs.Top_32FloorCode.GDComputerObjects2[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDComputerObjects2.length = k;}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDComputerObjects2 */
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.createFrom(runtimeScene.getObjects("HUD_Description"));
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects2 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects2 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDComputerObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDTableObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects2.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects2[0].getVariables()) : gdjs.Top_32FloorCode.GDComputerObjects2[0].getVariables()).get("description"))));
}
}}

}


{

/* Reuse gdjs.Top_32FloorCode.GDComputerObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects1 */

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
gdjs.Top_32FloorCode.condition1IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Top_32FloorCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDRobotChippyObjects1.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDRobotChippyObjects1[i].getVariableString(gdjs.Top_32FloorCode.GDRobotChippyObjects1[i].getVariables().get("use")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDRobotChippyObjects1[k] = gdjs.Top_32FloorCode.GDRobotChippyObjects1[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDRobotChippyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDRobotSecurityObjects1[i].getVariableString(gdjs.Top_32FloorCode.GDRobotSecurityObjects1[i].getVariables().get("use")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDRobotSecurityObjects1[k] = gdjs.Top_32FloorCode.GDRobotSecurityObjects1[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDTableObjects1.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDTableObjects1[i].getVariableString(gdjs.Top_32FloorCode.GDTableObjects1[i].getVariables().get("use")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDTableObjects1[k] = gdjs.Top_32FloorCode.GDTableObjects1[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDTableObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Top_32FloorCode.GDComputerObjects1.length;i<l;++i) {
    if ( gdjs.Top_32FloorCode.GDComputerObjects1[i].getVariableString(gdjs.Top_32FloorCode.GDComputerObjects1[i].getVariables().get("use")) != gdjs.evtTools.common.toString(0) ) {
        gdjs.Top_32FloorCode.condition1IsTrue_0.val = true;
        gdjs.Top_32FloorCode.GDComputerObjects1[k] = gdjs.Top_32FloorCode.GDComputerObjects1[i];
        ++k;
    }
}
gdjs.Top_32FloorCode.GDComputerObjects1.length = k;}}
if (gdjs.Top_32FloorCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDComputerObjects1 */
gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects1 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDComputerObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDComputerObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x68d4b4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x682fec
gdjs.Top_32FloorCode.eventsList0x6c95b4 = function(runtimeScene) {

{



}


{

gdjs.Top_32FloorCode.GDComputerObjects2.createFrom(runtimeScene.getObjects("Computer"));
gdjs.Top_32FloorCode.GDRobotChippyObjects2.createFrom(runtimeScene.getObjects("RobotChippy"));
gdjs.Top_32FloorCode.GDRobotSecurityObjects2.createFrom(runtimeScene.getObjects("RobotSecurity"));
gdjs.Top_32FloorCode.GDTableObjects2.createFrom(runtimeScene.getObjects("Table"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects2ObjectsGDgdjs_46Top_9532FloorCode_46GDComputerObjects2Objects, runtimeScene, true, true);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
{}}

}


{

gdjs.Top_32FloorCode.GDComputerObjects1.createFrom(runtimeScene.getObjects("Computer"));
gdjs.Top_32FloorCode.GDRobotChippyObjects1.createFrom(runtimeScene.getObjects("RobotChippy"));
gdjs.Top_32FloorCode.GDRobotSecurityObjects1.createFrom(runtimeScene.getObjects("RobotSecurity"));
gdjs.Top_32FloorCode.GDTableObjects1.createFrom(runtimeScene.getObjects("Table"));

gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDRobotChippyObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDRobotSecurityObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDTableObjects1ObjectsGDgdjs_46Top_9532FloorCode_46GDComputerObjects1Objects, runtimeScene, true, false);
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Top_32FloorCode.GDComputerObjects1 */
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.Top_32FloorCode.GDRobotChippyObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDRobotSecurityObjects1 */
/* Reuse gdjs.Top_32FloorCode.GDTableObjects1 */
{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Top_32FloorCode.GDComputerObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDTableObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotSecurityObjects1.length === 0 ) ? ((gdjs.Top_32FloorCode.GDRobotChippyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Top_32FloorCode.GDRobotChippyObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDRobotSecurityObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDTableObjects1[0].getVariables()) : gdjs.Top_32FloorCode.GDComputerObjects1[0].getVariables()).get("name"))));
}
}{}{for(var i = 0, len = gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1[i].setPosition(0,0);
}
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x682fec(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x6c95b4
gdjs.Top_32FloorCode.eventsList0x6c844c = function(runtimeScene) {

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


}; //End of gdjs.Top_32FloorCode.eventsList0x6c844c
gdjs.Top_32FloorCode.eventsList0x6c837c = function(runtimeScene) {

{


gdjs.Top_32FloorCode.condition0IsTrue_0.val = false;
{
gdjs.Top_32FloorCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.Top_32FloorCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("i_released").setNumber(1);
}
{ //Subevents
gdjs.Top_32FloorCode.eventsList0x6c844c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x6c837c
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.Top_32FloorCode.GDInventorySlotObjects2});gdjs.Top_32FloorCode.eventsList0x77f964 = function(runtimeScene) {

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


}; //End of gdjs.Top_32FloorCode.eventsList0x77f964
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.Top_32FloorCode.GDInventorySlotObjects2});gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.Top_32FloorCode.GDInventoryBackgroundObjects2});gdjs.Top_32FloorCode.eventsList0x68d8c4 = function(runtimeScene) {

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


}; //End of gdjs.Top_32FloorCode.eventsList0x68d8c4
gdjs.Top_32FloorCode.mapOfGDgdjs_46Top_9532FloorCode_46GDInventoryKeyObjects3Objects = Hashtable.newFrom({"InventoryKey": gdjs.Top_32FloorCode.GDInventoryKeyObjects3});gdjs.Top_32FloorCode.eventsList0x6b4804 = function(runtimeScene) {

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


}; //End of gdjs.Top_32FloorCode.eventsList0x6b4804
gdjs.Top_32FloorCode.eventsList0x680604 = function(runtimeScene) {

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


gdjs.Top_32FloorCode.eventsList0x6c837c(runtimeScene);
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
gdjs.Top_32FloorCode.eventsList0x77f964(runtimeScene);} //End of subevents
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
gdjs.Top_32FloorCode.eventsList0x68d8c4(runtimeScene);} //End of subevents
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
gdjs.Top_32FloorCode.eventsList0x6b4804(runtimeScene);} //Subevents end.
}
}

}


}; //End of gdjs.Top_32FloorCode.eventsList0x680604
gdjs.Top_32FloorCode.eventsList0x5b7a18 = function(runtimeScene) {

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


gdjs.Top_32FloorCode.eventsList0x68cd4c(runtimeScene);
}


{


gdjs.Top_32FloorCode.eventsList0x6c95b4(runtimeScene);
}


{


gdjs.Top_32FloorCode.eventsList0x680604(runtimeScene);
}


{


{
}

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
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Top_32FloorCode.GDHUD_95ObjectNameObjects4.length = 0;
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

gdjs.Top_32FloorCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['Top_32FloorCode'] = gdjs.Top_32FloorCode;
