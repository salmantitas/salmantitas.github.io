gdjs.CafeteriaCode = {};
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1= [];
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2= [];
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects3= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects3= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects3= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects1= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects2= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects3= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects1= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects2= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects3= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects1= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects2= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects3= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects1= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects2= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects3= [];
gdjs.CafeteriaCode.GDInventorySlotObjects1= [];
gdjs.CafeteriaCode.GDInventorySlotObjects2= [];
gdjs.CafeteriaCode.GDInventorySlotObjects3= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects1= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects2= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects3= [];
gdjs.CafeteriaCode.GDCodeObjects1= [];
gdjs.CafeteriaCode.GDCodeObjects2= [];
gdjs.CafeteriaCode.GDCodeObjects3= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects1= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects2= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects3= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects1= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects2= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects3= [];
gdjs.CafeteriaCode.GDMapObjects1= [];
gdjs.CafeteriaCode.GDMapObjects2= [];
gdjs.CafeteriaCode.GDMapObjects3= [];

gdjs.CafeteriaCode.conditionTrue_0 = {val:false};
gdjs.CafeteriaCode.condition0IsTrue_0 = {val:false};
gdjs.CafeteriaCode.condition1IsTrue_0 = {val:false};
gdjs.CafeteriaCode.condition2IsTrue_0 = {val:false};


gdjs.CafeteriaCode.eventsList0 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{


{
gdjs.CafeteriaCode.GDHUD_95TimerObjects1.createFrom(runtimeScene.getObjects("HUD_Timer"));
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95TimerObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95TimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown"))));
}
}}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.CafeteriaCode.GDMapObjects2});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.CafeteriaCode.GDMapObjects1});gdjs.CafeteriaCode.eventsList1 = function(runtimeScene) {

{

gdjs.CafeteriaCode.GDMapObjects2.createFrom(runtimeScene.getObjects("Map"));

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects2Objects, runtimeScene, true, false);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.CafeteriaCode.GDMapObjects2 */
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.CafeteriaCode.GDMapObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CafeteriaCode.GDMapObjects2[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2[i].setString("");
}
}}

}


{

gdjs.CafeteriaCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects2Objects = Hashtable.newFrom({"MemoryMatch": gdjs.CafeteriaCode.GDMemoryMatchObjects2, "MonsterPuzzle": gdjs.CafeteriaCode.GDMonsterPuzzleObjects2});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects1ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects = Hashtable.newFrom({"MemoryMatch": gdjs.CafeteriaCode.GDMemoryMatchObjects1, "MonsterPuzzle": gdjs.CafeteriaCode.GDMonsterPuzzleObjects1});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2Objects = Hashtable.newFrom({"MemoryMatch": gdjs.CafeteriaCode.GDMemoryMatchObjects2});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects = Hashtable.newFrom({"MonsterPuzzle": gdjs.CafeteriaCode.GDMonsterPuzzleObjects1});gdjs.CafeteriaCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.CafeteriaCode.GDMemoryMatchObjects2.createFrom(gdjs.CafeteriaCode.GDMemoryMatchObjects1);


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
gdjs.CafeteriaCode.condition1IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2Objects, runtimeScene, true, false);
}if ( gdjs.CafeteriaCode.condition0IsTrue_0.val ) {
{
gdjs.CafeteriaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchSolved")) == 0;
}}
if (gdjs.CafeteriaCode.condition1IsTrue_0.val) {
}

}


{



}


{

/* Reuse gdjs.CafeteriaCode.GDMonsterPuzzleObjects1 */

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
gdjs.CafeteriaCode.condition1IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CafeteriaCode.condition0IsTrue_0.val ) {
{
gdjs.CafeteriaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("monsterSolved")) == 0;
}}
if (gdjs.CafeteriaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Monster Puzzle", false);
}}

}


};gdjs.CafeteriaCode.eventsList3 = function(runtimeScene) {

{


gdjs.CafeteriaCode.eventsList2(runtimeScene);
}


};gdjs.CafeteriaCode.eventsList4 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.CafeteriaCode.GDMemoryMatchObjects2.createFrom(gdjs.CafeteriaCode.GDMemoryMatchObjects1);

gdjs.CafeteriaCode.GDMonsterPuzzleObjects2.createFrom(gdjs.CafeteriaCode.GDMonsterPuzzleObjects1);

{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.CafeteriaCode.GDMonsterPuzzleObjects2.length === 0 ) ? ((gdjs.CafeteriaCode.GDMemoryMatchObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CafeteriaCode.GDMemoryMatchObjects2[0].getVariables()) : gdjs.CafeteriaCode.GDMonsterPuzzleObjects2[0].getVariables()).get("description"))));
}
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
/* Reuse gdjs.CafeteriaCode.GDMemoryMatchObjects1 */
/* Reuse gdjs.CafeteriaCode.GDMonsterPuzzleObjects1 */
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length === 0 ) ? ((gdjs.CafeteriaCode.GDMemoryMatchObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CafeteriaCode.GDMemoryMatchObjects1[0].getVariables()) : gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.CafeteriaCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.CafeteriaCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.CafeteriaCode.GDMemoryMatchObjects2.createFrom(runtimeScene.getObjects("MemoryMatch"));
gdjs.CafeteriaCode.GDMonsterPuzzleObjects2.createFrom(runtimeScene.getObjects("MonsterPuzzle"));

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects2Objects, runtimeScene, true, true);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CafeteriaCode.GDMemoryMatchObjects2 */
/* Reuse gdjs.CafeteriaCode.GDMonsterPuzzleObjects2 */
{for(var i = 0, len = gdjs.CafeteriaCode.GDMemoryMatchObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDMemoryMatchObjects2[i].setAnimationName("Normal");
}
for(var i = 0, len = gdjs.CafeteriaCode.GDMonsterPuzzleObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDMonsterPuzzleObjects2[i].setAnimationName("Normal");
}
}}

}


{

gdjs.CafeteriaCode.GDMemoryMatchObjects1.createFrom(runtimeScene.getObjects("MemoryMatch"));
gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.createFrom(runtimeScene.getObjects("MonsterPuzzle"));

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects1ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects, runtimeScene, true, false);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
/* Reuse gdjs.CafeteriaCode.GDMemoryMatchObjects1 */
/* Reuse gdjs.CafeteriaCode.GDMonsterPuzzleObjects1 */
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length === 0 ) ? ((gdjs.CafeteriaCode.GDMemoryMatchObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CafeteriaCode.GDMemoryMatchObjects1[0].getVariables()) : gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[0].getVariables()).get("name"))));
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1[i].setPosition((( gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length === 0 ) ? (( gdjs.CafeteriaCode.GDMemoryMatchObjects1.length === 0 ) ? 0 :gdjs.CafeteriaCode.GDMemoryMatchObjects1[0].getPointX("Right")) :gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[0].getPointX("Right")) + (( gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length === 0 ) ? (( gdjs.CafeteriaCode.GDMemoryMatchObjects1.length === 0 ) ? 0 :gdjs.CafeteriaCode.GDMemoryMatchObjects1[0].getWidth()) :gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[0].getWidth()),(( gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length === 0 ) ? (( gdjs.CafeteriaCode.GDMemoryMatchObjects1.length === 0 ) ? 0 :gdjs.CafeteriaCode.GDMemoryMatchObjects1[0].getPointY("Center")) :gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[0].getPointY("Center")));
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDMemoryMatchObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDMemoryMatchObjects1[i].setAnimationName("Hover");
}
for(var i = 0, len = gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.CafeteriaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.CafeteriaCode.GDBackToReceptionObjects1});gdjs.CafeteriaCode.eventsList6 = function(runtimeScene) {

{

gdjs.CafeteriaCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
gdjs.CafeteriaCode.condition1IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CafeteriaCode.condition0IsTrue_0.val ) {
{
gdjs.CafeteriaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CafeteriaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.CafeteriaCode.eventsList7 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


{


gdjs.CafeteriaCode.eventsList0(runtimeScene);
}


{


gdjs.CafeteriaCode.eventsList1(runtimeScene);
}


{


gdjs.CafeteriaCode.eventsList5(runtimeScene);
}


{


gdjs.CafeteriaCode.eventsList6(runtimeScene);
}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("monsterSolved")) == 0;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDCodeObjects1.createFrom(runtimeScene.getObjects("Code"));
{for(var i = 0, len = gdjs.CafeteriaCode.GDCodeObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDCodeObjects1[i].hide();
}
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("monsterSolved")) == 0);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDCodeObjects1.createFrom(runtimeScene.getObjects("Code"));
{for(var i = 0, len = gdjs.CafeteriaCode.GDCodeObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDCodeObjects1[i].hide(false);
}
}}

}


};

gdjs.CafeteriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects3.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects1.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects2.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects3.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects1.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects2.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects3.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects1.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects2.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects3.length = 0;
gdjs.CafeteriaCode.GDCodeObjects1.length = 0;
gdjs.CafeteriaCode.GDCodeObjects2.length = 0;
gdjs.CafeteriaCode.GDCodeObjects3.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects2.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects3.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects1.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects2.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects3.length = 0;
gdjs.CafeteriaCode.GDMapObjects1.length = 0;
gdjs.CafeteriaCode.GDMapObjects2.length = 0;
gdjs.CafeteriaCode.GDMapObjects3.length = 0;

gdjs.CafeteriaCode.eventsList7(runtimeScene);
return;

}

gdjs['CafeteriaCode'] = gdjs.CafeteriaCode;
