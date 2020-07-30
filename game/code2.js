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
gdjs.ReceptionCode.GDBackToReceptionObjects1= [];
gdjs.ReceptionCode.GDBackToReceptionObjects2= [];
gdjs.ReceptionCode.GDBackToReceptionObjects3= [];
gdjs.ReceptionCode.GDBackToReceptionObjects4= [];
gdjs.ReceptionCode.GDMapObjects1= [];
gdjs.ReceptionCode.GDMapObjects2= [];
gdjs.ReceptionCode.GDMapObjects3= [];
gdjs.ReceptionCode.GDMapObjects4= [];
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
gdjs.ReceptionCode.GDChippyOfficeObjects1= [];
gdjs.ReceptionCode.GDChippyOfficeObjects2= [];
gdjs.ReceptionCode.GDChippyOfficeObjects3= [];
gdjs.ReceptionCode.GDChippyOfficeObjects4= [];
gdjs.ReceptionCode.GDWallCLevelObjects1= [];
gdjs.ReceptionCode.GDWallCLevelObjects2= [];
gdjs.ReceptionCode.GDWallCLevelObjects3= [];
gdjs.ReceptionCode.GDWallCLevelObjects4= [];
gdjs.ReceptionCode.GDtestObjects1= [];
gdjs.ReceptionCode.GDtestObjects2= [];
gdjs.ReceptionCode.GDtestObjects3= [];
gdjs.ReceptionCode.GDtestObjects4= [];

gdjs.ReceptionCode.conditionTrue_0 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_0 = {val:false};


gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.ReceptionCode.GDMapObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.ReceptionCode.GDMapObjects1});gdjs.ReceptionCode.eventsList0x78a814 = function(runtimeScene) {

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


}; //End of gdjs.ReceptionCode.eventsList0x78a814
gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects2ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects2Objects = Hashtable.newFrom({"ChippyOffice": gdjs.ReceptionCode.GDChippyOfficeObjects2, "WallCLevel": gdjs.ReceptionCode.GDWallCLevelObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects1ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects1Objects = Hashtable.newFrom({"ChippyOffice": gdjs.ReceptionCode.GDChippyOfficeObjects1, "WallCLevel": gdjs.ReceptionCode.GDWallCLevelObjects1});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects1Objects = Hashtable.newFrom({"ChippyOffice": gdjs.ReceptionCode.GDChippyOfficeObjects1});gdjs.ReceptionCode.eventsList0x7540fc = function(runtimeScene) {

{



}


{

gdjs.ReceptionCode.GDChippyOfficeObjects2.createFrom(gdjs.ReceptionCode.GDChippyOfficeObjects1);

gdjs.ReceptionCode.GDWallCLevelObjects2.createFrom(gdjs.ReceptionCode.GDWallCLevelObjects1);


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ReceptionCode.GDChippyOfficeObjects2.length;i<l;++i) {
    if ( gdjs.ReceptionCode.GDChippyOfficeObjects2[i].getVariableString(gdjs.ReceptionCode.GDChippyOfficeObjects2[i].getVariables().get("use")) == "key" ) {
        gdjs.ReceptionCode.condition0IsTrue_0.val = true;
        gdjs.ReceptionCode.GDChippyOfficeObjects2[k] = gdjs.ReceptionCode.GDChippyOfficeObjects2[i];
        ++k;
    }
}
gdjs.ReceptionCode.GDChippyOfficeObjects2.length = k;for(var i = 0, k = 0, l = gdjs.ReceptionCode.GDWallCLevelObjects2.length;i<l;++i) {
    if ( gdjs.ReceptionCode.GDWallCLevelObjects2[i].getVariableString(gdjs.ReceptionCode.GDWallCLevelObjects2[i].getVariables().get("use")) == "key" ) {
        gdjs.ReceptionCode.condition0IsTrue_0.val = true;
        gdjs.ReceptionCode.GDWallCLevelObjects2[k] = gdjs.ReceptionCode.GDWallCLevelObjects2[i];
        ++k;
    }
}
gdjs.ReceptionCode.GDWallCLevelObjects2.length = k;}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects2 */
gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.createFrom(gdjs.ReceptionCode.GDHUD_95DescriptionObjects1);

/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects2 */
{runtimeScene.getVariables().get("picked_item").setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDWallCLevelObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects2[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects2[0].getVariables()).get("use"))));
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects2[i].setString("You found a key!");
}
}}

}


{

/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects1 */

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked")) == 0;
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Top Floor", false);
}}

}


}; //End of gdjs.ReceptionCode.eventsList0x7540fc
gdjs.ReceptionCode.eventsList0x791084 = function(runtimeScene) {

{


gdjs.ReceptionCode.eventsList0x7540fc(runtimeScene);
}


}; //End of gdjs.ReceptionCode.eventsList0x791084
gdjs.ReceptionCode.eventsList0x788e04 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDChippyOfficeObjects2.createFrom(gdjs.ReceptionCode.GDChippyOfficeObjects1);

gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.ReceptionCode.GDWallCLevelObjects2.createFrom(gdjs.ReceptionCode.GDWallCLevelObjects1);

{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDWallCLevelObjects2.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects2[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects2[0].getVariables()).get("description"))));
}
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects1 */
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects1 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList0x791084(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ReceptionCode.eventsList0x788e04
gdjs.ReceptionCode.eventsList0x788524 = function(runtimeScene) {

{



}


{

gdjs.ReceptionCode.GDChippyOfficeObjects2.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDWallCLevelObjects2.createFrom(runtimeScene.getObjects("WallCLevel"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects2ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects2Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects2 */
/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects2 */
{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects2.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects2[i].setAnimationName("Normal");
}
}}

}


{

gdjs.ReceptionCode.GDChippyOfficeObjects1.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDWallCLevelObjects1.createFrom(runtimeScene.getObjects("WallCLevel"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDChippyOfficeObjects1ObjectsGDgdjs_46ReceptionCode_46GDWallCLevelObjects1Objects, runtimeScene, true, false);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ReceptionCode.GDChippyOfficeObjects1 */
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.ReceptionCode.GDWallCLevelObjects1 */
{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? ((gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getVariables()) : gdjs.ReceptionCode.GDWallCLevelObjects1[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1[i].setPosition((( gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? 0 :gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getPointX("Right")) :gdjs.ReceptionCode.GDWallCLevelObjects1[0].getPointX("Right")) + (( gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? 0 :gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getWidth()) :gdjs.ReceptionCode.GDWallCLevelObjects1[0].getWidth()),(( gdjs.ReceptionCode.GDWallCLevelObjects1.length === 0 ) ? (( gdjs.ReceptionCode.GDChippyOfficeObjects1.length === 0 ) ? 0 :gdjs.ReceptionCode.GDChippyOfficeObjects1[0].getPointY("Center")) :gdjs.ReceptionCode.GDWallCLevelObjects1[0].getPointY("Center")));
}
}{for(var i = 0, len = gdjs.ReceptionCode.GDChippyOfficeObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDChippyOfficeObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.ReceptionCode.eventsList0x788e04(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ReceptionCode.eventsList0x788524
gdjs.ReceptionCode.eventsList0x6d2ecc = function(runtimeScene) {

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


}; //End of gdjs.ReceptionCode.eventsList0x6d2ecc
gdjs.ReceptionCode.eventsList0x78724c = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "i");
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("i_released").setNumber(1);
}
{ //Subevents
gdjs.ReceptionCode.eventsList0x6d2ecc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ReceptionCode.eventsList0x78724c
gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects2});gdjs.ReceptionCode.eventsList0x7a78bc = function(runtimeScene) {

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


}; //End of gdjs.ReceptionCode.eventsList0x7a78bc
gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventorySlotObjects2Objects = Hashtable.newFrom({"InventorySlot": gdjs.ReceptionCode.GDInventorySlotObjects2});gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects = Hashtable.newFrom({"InventoryBackground": gdjs.ReceptionCode.GDInventoryBackgroundObjects2});gdjs.ReceptionCode.eventsList0x6d1ee4 = function(runtimeScene) {

{

gdjs.ReceptionCode.GDInventoryBackgroundObjects2.createFrom(runtimeScene.getObjects("InventoryBackground"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryBackgroundObjects2Objects, runtimeScene, true, true);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
{}}

}


}; //End of gdjs.ReceptionCode.eventsList0x6d1ee4
gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDInventoryKeyObjects3Objects = Hashtable.newFrom({"InventoryKey": gdjs.ReceptionCode.GDInventoryKeyObjects3});gdjs.ReceptionCode.eventsList0x78510c = function(runtimeScene) {

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


}; //End of gdjs.ReceptionCode.eventsList0x78510c
gdjs.ReceptionCode.eventsList0x78f68c = function(runtimeScene) {

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


gdjs.ReceptionCode.eventsList0x78724c(runtimeScene);
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
gdjs.ReceptionCode.eventsList0x7a78bc(runtimeScene);} //End of subevents
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
gdjs.ReceptionCode.eventsList0x6d1ee4(runtimeScene);} //End of subevents
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
gdjs.ReceptionCode.eventsList0x78510c(runtimeScene);} //Subevents end.
}
}

}


}; //End of gdjs.ReceptionCode.eventsList0x78f68c
gdjs.ReceptionCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDChippyOfficeObjects1.createFrom(runtimeScene.getObjects("ChippyOffice"));
gdjs.ReceptionCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.ReceptionCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.ReceptionCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
gdjs.ReceptionCode.GDWallCLevelObjects1.createFrom(runtimeScene.getObjects("WallCLevel"));
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
}}

}


{


gdjs.ReceptionCode.condition0IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("chippyOfficeKeyFound")) == 1;
}if (gdjs.ReceptionCode.condition0IsTrue_0.val) {
gdjs.ReceptionCode.GDWallCLevelObjects1.createFrom(runtimeScene.getObjects("WallCLevel"));
{for(var i = 0, len = gdjs.ReceptionCode.GDWallCLevelObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDWallCLevelObjects1[i].returnVariable(gdjs.ReceptionCode.GDWallCLevelObjects1[i].getVariables().getFromIndex(2)).setString("There is nothing of interest here.");
}
}}

}


{


{
gdjs.ReceptionCode.GDtestObjects1.createFrom(runtimeScene.getObjects("test"));
{for(var i = 0, len = gdjs.ReceptionCode.GDtestObjects1.length ;i < len;++i) {
    gdjs.ReceptionCode.GDtestObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("chippyOfficeDoorLocked"))));
}
}}

}


{


gdjs.ReceptionCode.eventsList0x78a814(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList0x788524(runtimeScene);
}


{


gdjs.ReceptionCode.eventsList0x78f68c(runtimeScene);
}


}; //End of gdjs.ReceptionCode.eventsList0x5b7a18


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
gdjs.ReceptionCode.GDBackToReceptionObjects1.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects2.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects3.length = 0;
gdjs.ReceptionCode.GDBackToReceptionObjects4.length = 0;
gdjs.ReceptionCode.GDMapObjects1.length = 0;
gdjs.ReceptionCode.GDMapObjects2.length = 0;
gdjs.ReceptionCode.GDMapObjects3.length = 0;
gdjs.ReceptionCode.GDMapObjects4.length = 0;
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
gdjs.ReceptionCode.GDChippyOfficeObjects1.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects2.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects3.length = 0;
gdjs.ReceptionCode.GDChippyOfficeObjects4.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects1.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects2.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects3.length = 0;
gdjs.ReceptionCode.GDWallCLevelObjects4.length = 0;
gdjs.ReceptionCode.GDtestObjects1.length = 0;
gdjs.ReceptionCode.GDtestObjects2.length = 0;
gdjs.ReceptionCode.GDtestObjects3.length = 0;
gdjs.ReceptionCode.GDtestObjects4.length = 0;

gdjs.ReceptionCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['ReceptionCode'] = gdjs.ReceptionCode;
