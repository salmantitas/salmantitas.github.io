gdjs.CafeteriaCode = {};
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1= [];
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2= [];
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects3= [];
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects4= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects3= [];
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects4= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects3= [];
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects4= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects1= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects2= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects3= [];
gdjs.CafeteriaCode.GDBackToReceptionObjects4= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects1= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects2= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects3= [];
gdjs.CafeteriaCode.GDHUD_95TimerObjects4= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects1= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects2= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects3= [];
gdjs.CafeteriaCode.GDBackToCafeteriaObjects4= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects1= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects2= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects3= [];
gdjs.CafeteriaCode.GDInventoryBackgroundObjects4= [];
gdjs.CafeteriaCode.GDInventorySlotObjects1= [];
gdjs.CafeteriaCode.GDInventorySlotObjects2= [];
gdjs.CafeteriaCode.GDInventorySlotObjects3= [];
gdjs.CafeteriaCode.GDInventorySlotObjects4= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects1= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects2= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects3= [];
gdjs.CafeteriaCode.GDInventoryKeyObjects4= [];
gdjs.CafeteriaCode.GDCorrectObjects1= [];
gdjs.CafeteriaCode.GDCorrectObjects2= [];
gdjs.CafeteriaCode.GDCorrectObjects3= [];
gdjs.CafeteriaCode.GDCorrectObjects4= [];
gdjs.CafeteriaCode.GDFadeObjects1= [];
gdjs.CafeteriaCode.GDFadeObjects2= [];
gdjs.CafeteriaCode.GDFadeObjects3= [];
gdjs.CafeteriaCode.GDFadeObjects4= [];
gdjs.CafeteriaCode.GDHintsObjects1= [];
gdjs.CafeteriaCode.GDHintsObjects2= [];
gdjs.CafeteriaCode.GDHintsObjects3= [];
gdjs.CafeteriaCode.GDHintsObjects4= [];
gdjs.CafeteriaCode.GDCodeObjects1= [];
gdjs.CafeteriaCode.GDCodeObjects2= [];
gdjs.CafeteriaCode.GDCodeObjects3= [];
gdjs.CafeteriaCode.GDCodeObjects4= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects1= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects2= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects3= [];
gdjs.CafeteriaCode.GDMonsterPuzzleObjects4= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects1= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects2= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects3= [];
gdjs.CafeteriaCode.GDMemoryMatchObjects4= [];
gdjs.CafeteriaCode.GDMapObjects1= [];
gdjs.CafeteriaCode.GDMapObjects2= [];
gdjs.CafeteriaCode.GDMapObjects3= [];
gdjs.CafeteriaCode.GDMapObjects4= [];

gdjs.CafeteriaCode.conditionTrue_0 = {val:false};
gdjs.CafeteriaCode.condition0IsTrue_0 = {val:false};
gdjs.CafeteriaCode.condition1IsTrue_0 = {val:false};
gdjs.CafeteriaCode.condition2IsTrue_0 = {val:false};


gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDHUD_9595TimerObjects2Objects = Hashtable.newFrom({"HUD_Timer": gdjs.CafeteriaCode.GDHUD_95TimerObjects2});gdjs.CafeteriaCode.eventsList0 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("sec")) < 10;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("secText").setString("0" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}}

}


};gdjs.CafeteriaCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.CafeteriaCode.GDHUD_95TimerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDHUD_9595TimerObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("timerY")), "UI");
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{



}


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



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HUD_Timer"), gdjs.CafeteriaCode.GDHUD_95TimerObjects2);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95TimerObjects2[i].setString("00" + ":" + gdjs.evtTools.common.toString(Math.floor((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) / 60))) + ":" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("secText")));
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95TimerObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95TimerObjects2[i].setColor("255,0,0");
}
}}

}


{


{
{runtimeScene.getVariables().get("sec").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")), 60));
}{runtimeScene.getVariables().get("secText").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("sec")));
}
{ //Subevents
gdjs.CafeteriaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.CafeteriaCode.GDMapObjects2});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.CafeteriaCode.GDMapObjects1});gdjs.CafeteriaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.CafeteriaCode.GDMapObjects2);

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects2Objects, runtimeScene, true, false);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2);
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

gdjs.copyArray(runtimeScene.getObjects("Map"), gdjs.CafeteriaCode.GDMapObjects1);

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects2Objects = Hashtable.newFrom({"MemoryMatch": gdjs.CafeteriaCode.GDMemoryMatchObjects2, "MonsterPuzzle": gdjs.CafeteriaCode.GDMonsterPuzzleObjects2});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects1ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects = Hashtable.newFrom({"MemoryMatch": gdjs.CafeteriaCode.GDMemoryMatchObjects1, "MonsterPuzzle": gdjs.CafeteriaCode.GDMonsterPuzzleObjects1});gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2Objects = Hashtable.newFrom({"MemoryMatch": gdjs.CafeteriaCode.GDMemoryMatchObjects2});gdjs.CafeteriaCode.eventsList3 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 0;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Memory Match 1", false);
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 1;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Memory Match 2", false);
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 2;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Memory Match 3", false);
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 3;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Memory Match 4", false);
}}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects = Hashtable.newFrom({"MonsterPuzzle": gdjs.CafeteriaCode.GDMonsterPuzzleObjects1});gdjs.CafeteriaCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.CafeteriaCode.GDMemoryMatchObjects1, gdjs.CafeteriaCode.GDMemoryMatchObjects2);


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects2Objects, runtimeScene, true, false);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CafeteriaCode.eventsList3(runtimeScene);} //End of subevents
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


};gdjs.CafeteriaCode.eventsList5 = function(runtimeScene) {

{


gdjs.CafeteriaCode.eventsList4(runtimeScene);
}


};gdjs.CafeteriaCode.eventsList6 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2);
gdjs.copyArray(gdjs.CafeteriaCode.GDMemoryMatchObjects1, gdjs.CafeteriaCode.GDMemoryMatchObjects2);

gdjs.copyArray(gdjs.CafeteriaCode.GDMonsterPuzzleObjects1, gdjs.CafeteriaCode.GDMonsterPuzzleObjects2);

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
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1);
/* Reuse gdjs.CafeteriaCode.GDMemoryMatchObjects1 */
/* Reuse gdjs.CafeteriaCode.GDMonsterPuzzleObjects1 */
{for(var i = 0, len = gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length === 0 ) ? ((gdjs.CafeteriaCode.GDMemoryMatchObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CafeteriaCode.GDMemoryMatchObjects1[0].getVariables()) : gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[0].getVariables()).get("use"))));
}
}
{ //Subevents
gdjs.CafeteriaCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.CafeteriaCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MemoryMatch"), gdjs.CafeteriaCode.GDMemoryMatchObjects2);
gdjs.copyArray(runtimeScene.getObjects("MonsterPuzzle"), gdjs.CafeteriaCode.GDMonsterPuzzleObjects2);

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

gdjs.copyArray(runtimeScene.getObjects("MemoryMatch"), gdjs.CafeteriaCode.GDMemoryMatchObjects1);
gdjs.copyArray(runtimeScene.getObjects("MonsterPuzzle"), gdjs.CafeteriaCode.GDMonsterPuzzleObjects1);

gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDMemoryMatchObjects1ObjectsGDgdjs_46CafeteriaCode_46GDMonsterPuzzleObjects1Objects, runtimeScene, true, false);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1);
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
gdjs.CafeteriaCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.CafeteriaCode.GDBackToReceptionObjects1});gdjs.CafeteriaCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackToReception"), gdjs.CafeteriaCode.GDBackToReceptionObjects1);

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


};gdjs.CafeteriaCode.eventsList9 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 0;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hints"), gdjs.CafeteriaCode.GDHintsObjects2);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHintsObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHintsObjects2[i].setString("");
}
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 1;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hints"), gdjs.CafeteriaCode.GDHintsObjects2);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHintsObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHintsObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects2[i].getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 2;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hints"), gdjs.CafeteriaCode.GDHintsObjects2);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHintsObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHintsObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects2[i].getVariables().getFromIndex(0))) + "\n" + (gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects2[i].getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) == 3;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hints"), gdjs.CafeteriaCode.GDHintsObjects2);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHintsObjects2.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHintsObjects2[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects2[i].getVariables().getFromIndex(0))) + "\n" + (gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects2[i].getVariables().getFromIndex(1))) + "\n" + (gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects2[i].getVariables().getFromIndex(2))));
}
}}

}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("memMatchState")) > 3;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hints"), gdjs.CafeteriaCode.GDHintsObjects1);
{for(var i = 0, len = gdjs.CafeteriaCode.GDHintsObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDHintsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects1[i].getVariables().getFromIndex(0))) + "\n" + (gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects1[i].getVariables().getFromIndex(1))) + "\n" + (gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects1[i].getVariables().getFromIndex(2))) + "\n" + (gdjs.RuntimeObject.getVariableString(gdjs.CafeteriaCode.GDHintsObjects1[i].getVariables().getFromIndex(3))));
}
}}

}


};gdjs.CafeteriaCode.eventsList10 = function(runtimeScene) {

{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HUD_Description"), gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_LocationName"), gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("HUD_ObjectName"), gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1);
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



}


{


gdjs.CafeteriaCode.eventsList1(runtimeScene);
}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown")) <= 0;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.CafeteriaCode.eventsList2(runtimeScene);
}


{


gdjs.CafeteriaCode.eventsList7(runtimeScene);
}


{


gdjs.CafeteriaCode.eventsList8(runtimeScene);
}


{


gdjs.CafeteriaCode.condition0IsTrue_0.val = false;
{
gdjs.CafeteriaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("monsterSolved")) == 0;
}if (gdjs.CafeteriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.CafeteriaCode.GDCodeObjects1);
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
gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.CafeteriaCode.GDCodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("MonsterPuzzle"), gdjs.CafeteriaCode.GDMonsterPuzzleObjects1);
{for(var i = 0, len = gdjs.CafeteriaCode.GDCodeObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDCodeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length ;i < len;++i) {
    gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[i].returnVariable(gdjs.CafeteriaCode.GDMonsterPuzzleObjects1[i].getVariables().get("use")).setString("There is nothing of any interest here.");
}
}}

}


{


{

{ //Subevents
gdjs.CafeteriaCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.CafeteriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CafeteriaCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95LocationNameObjects4.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95DescriptionObjects4.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95ObjectNameObjects4.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects1.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects2.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects3.length = 0;
gdjs.CafeteriaCode.GDBackToReceptionObjects4.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects1.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects2.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects3.length = 0;
gdjs.CafeteriaCode.GDHUD_95TimerObjects4.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.CafeteriaCode.GDBackToCafeteriaObjects4.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.CafeteriaCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects1.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects2.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects3.length = 0;
gdjs.CafeteriaCode.GDInventorySlotObjects4.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects1.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects2.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects3.length = 0;
gdjs.CafeteriaCode.GDInventoryKeyObjects4.length = 0;
gdjs.CafeteriaCode.GDCorrectObjects1.length = 0;
gdjs.CafeteriaCode.GDCorrectObjects2.length = 0;
gdjs.CafeteriaCode.GDCorrectObjects3.length = 0;
gdjs.CafeteriaCode.GDCorrectObjects4.length = 0;
gdjs.CafeteriaCode.GDFadeObjects1.length = 0;
gdjs.CafeteriaCode.GDFadeObjects2.length = 0;
gdjs.CafeteriaCode.GDFadeObjects3.length = 0;
gdjs.CafeteriaCode.GDFadeObjects4.length = 0;
gdjs.CafeteriaCode.GDHintsObjects1.length = 0;
gdjs.CafeteriaCode.GDHintsObjects2.length = 0;
gdjs.CafeteriaCode.GDHintsObjects3.length = 0;
gdjs.CafeteriaCode.GDHintsObjects4.length = 0;
gdjs.CafeteriaCode.GDCodeObjects1.length = 0;
gdjs.CafeteriaCode.GDCodeObjects2.length = 0;
gdjs.CafeteriaCode.GDCodeObjects3.length = 0;
gdjs.CafeteriaCode.GDCodeObjects4.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects1.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects2.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects3.length = 0;
gdjs.CafeteriaCode.GDMonsterPuzzleObjects4.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects1.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects2.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects3.length = 0;
gdjs.CafeteriaCode.GDMemoryMatchObjects4.length = 0;
gdjs.CafeteriaCode.GDMapObjects1.length = 0;
gdjs.CafeteriaCode.GDMapObjects2.length = 0;
gdjs.CafeteriaCode.GDMapObjects3.length = 0;
gdjs.CafeteriaCode.GDMapObjects4.length = 0;

gdjs.CafeteriaCode.eventsList10(runtimeScene);
return;

}

gdjs['CafeteriaCode'] = gdjs.CafeteriaCode;
