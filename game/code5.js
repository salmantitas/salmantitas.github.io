gdjs.Monster_32PuzzleCode = {};
gdjs.Monster_32PuzzleCode.forEachIndex3 = 0;

gdjs.Monster_32PuzzleCode.forEachObjects3 = [];

gdjs.Monster_32PuzzleCode.forEachTemporary3 = null;

gdjs.Monster_32PuzzleCode.forEachTotalCount3 = 0;

gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects1= [];
gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects2= [];
gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects3= [];
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects1= [];
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects2= [];
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects3= [];
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects1= [];
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects2= [];
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects3= [];
gdjs.Monster_32PuzzleCode.GDBackToReceptionObjects1= [];
gdjs.Monster_32PuzzleCode.GDBackToReceptionObjects2= [];
gdjs.Monster_32PuzzleCode.GDBackToReceptionObjects3= [];
gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects1= [];
gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects2= [];
gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects3= [];
gdjs.Monster_32PuzzleCode.GDInventoryBackgroundObjects1= [];
gdjs.Monster_32PuzzleCode.GDInventoryBackgroundObjects2= [];
gdjs.Monster_32PuzzleCode.GDInventoryBackgroundObjects3= [];
gdjs.Monster_32PuzzleCode.GDInventorySlotObjects1= [];
gdjs.Monster_32PuzzleCode.GDInventorySlotObjects2= [];
gdjs.Monster_32PuzzleCode.GDInventorySlotObjects3= [];
gdjs.Monster_32PuzzleCode.GDInventoryKeyObjects1= [];
gdjs.Monster_32PuzzleCode.GDInventoryKeyObjects2= [];
gdjs.Monster_32PuzzleCode.GDInventoryKeyObjects3= [];
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1= [];
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2= [];
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3= [];
gdjs.Monster_32PuzzleCode.GDMonsterBackgroundObjects1= [];
gdjs.Monster_32PuzzleCode.GDMonsterBackgroundObjects2= [];
gdjs.Monster_32PuzzleCode.GDMonsterBackgroundObjects3= [];
gdjs.Monster_32PuzzleCode.GDSubmitObjects1= [];
gdjs.Monster_32PuzzleCode.GDSubmitObjects2= [];
gdjs.Monster_32PuzzleCode.GDSubmitObjects3= [];
gdjs.Monster_32PuzzleCode.GDtestTextObjects1= [];
gdjs.Monster_32PuzzleCode.GDtestTextObjects2= [];
gdjs.Monster_32PuzzleCode.GDtestTextObjects3= [];

gdjs.Monster_32PuzzleCode.conditionTrue_0 = {val:false};
gdjs.Monster_32PuzzleCode.condition0IsTrue_0 = {val:false};
gdjs.Monster_32PuzzleCode.condition1IsTrue_0 = {val:false};
gdjs.Monster_32PuzzleCode.condition2IsTrue_0 = {val:false};


gdjs.Monster_32PuzzleCode.eventsList0 = function(runtimeScene) {

{


gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{


{
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects1.createFrom(runtimeScene.getObjects("HUD_Timer"));
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown"))));
}
}}

}


};gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDBackToCafeteriaObjects1Objects = Hashtable.newFrom({"BackToCafeteria": gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects1});gdjs.Monster_32PuzzleCode.eventsList1 = function(runtimeScene) {

{

gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects1.createFrom(runtimeScene.getObjects("BackToCafeteria"));

gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
gdjs.Monster_32PuzzleCode.condition1IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDBackToCafeteriaObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val ) {
{
gdjs.Monster_32PuzzleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Monster_32PuzzleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cafeteria", false);
}}

}


};gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDMonsterSlotObjects1Objects = Hashtable.newFrom({"MonsterSlot": gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1});gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.Monster_32PuzzleCode.GDSubmitObjects1});gdjs.Monster_32PuzzleCode.eventsList2 = function(runtimeScene) {

};gdjs.Monster_32PuzzleCode.eventsList3 = function(runtimeScene) {

};gdjs.Monster_32PuzzleCode.eventsList4 = function(runtimeScene) {

{

gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2.createFrom(runtimeScene.getObjects("MonsterSlot"));

for(gdjs.Monster_32PuzzleCode.forEachIndex3 = 0;gdjs.Monster_32PuzzleCode.forEachIndex3 < gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2.length;++gdjs.Monster_32PuzzleCode.forEachIndex3) {
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length = 0;


gdjs.Monster_32PuzzleCode.forEachTemporary3 = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2[gdjs.Monster_32PuzzleCode.forEachIndex3];
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.push(gdjs.Monster_32PuzzleCode.forEachTemporary3);
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length;i<l;++i) {
    if ( gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i].getVariableNumber(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i].getVariables().getFromIndex(1))) ) {
        gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = true;
        gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[k] = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i];
        ++k;
    }
}
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length = k;}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("solved").mul(1);
}}
}

}


{

gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2.createFrom(runtimeScene.getObjects("MonsterSlot"));

for(gdjs.Monster_32PuzzleCode.forEachIndex3 = 0;gdjs.Monster_32PuzzleCode.forEachIndex3 < gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2.length;++gdjs.Monster_32PuzzleCode.forEachIndex3) {
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length = 0;


gdjs.Monster_32PuzzleCode.forEachTemporary3 = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2[gdjs.Monster_32PuzzleCode.forEachIndex3];
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.push(gdjs.Monster_32PuzzleCode.forEachTemporary3);
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length;i<l;++i) {
    if ( !(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i].getVariableNumber(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i].getVariables().getFromIndex(1)))) ) {
        gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = true;
        gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[k] = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3[i];
        ++k;
    }
}
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length = k;}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("solved").mul(0);
}}
}

}


{


gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("solved")) == 1;
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("monsterSolved").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cafeteria", false);
}}

}


{


gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("solved")) == 1);
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.createFrom(runtimeScene.getObjects("MonsterSlot"));
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].returnVariable(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.Monster_32PuzzleCode.eventsList5 = function(runtimeScene) {

{


gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("solved").setNumber(1);
}
{ //Subevents
gdjs.Monster_32PuzzleCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.Monster_32PuzzleCode.GDSubmitObjects1});gdjs.Monster_32PuzzleCode.eventsList6 = function(runtimeScene) {

{


gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects1.createFrom(runtimeScene.getObjects("HUD_Description"));
gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects1.createFrom(runtimeScene.getObjects("HUD_LocationName"));
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects1.createFrom(runtimeScene.getObjects("HUD_ObjectName"));
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects1[i].setString("");
}
}}

}


{


gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("solved").setNumber(0);
}}

}


{


gdjs.Monster_32PuzzleCode.eventsList0(runtimeScene);
}


{


gdjs.Monster_32PuzzleCode.eventsList1(runtimeScene);
}


{

gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.createFrom(runtimeScene.getObjects("MonsterSlot"));

gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
gdjs.Monster_32PuzzleCode.condition1IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDMonsterSlotObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val ) {
{
gdjs.Monster_32PuzzleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Monster_32PuzzleCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1 */
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].returnVariable(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.mod(((gdjs.RuntimeObject.getVariableNumber(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].getVariables().getFromIndex(0))) + 1), 2));
}
}}

}


{


{
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.createFrom(runtimeScene.getObjects("MonsterSlot"));
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].setAnimation((gdjs.RuntimeObject.getVariableNumber(gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.Monster_32PuzzleCode.GDSubmitObjects1.createFrom(runtimeScene.getObjects("Submit"));

gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDSubmitObjects1Objects, runtimeScene, true, false);
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Monster_32PuzzleCode.GDSubmitObjects1 */
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDSubmitObjects1[i].setColor("0;255;0");
}
}
{ //Subevents
gdjs.Monster_32PuzzleCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.Monster_32PuzzleCode.GDSubmitObjects1.createFrom(runtimeScene.getObjects("Submit"));

gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = false;
{
gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Monster_32PuzzleCode.mapOfGDgdjs_46Monster_9532PuzzleCode_46GDSubmitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Monster_32PuzzleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Monster_32PuzzleCode.GDSubmitObjects1 */
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDSubmitObjects1[i].setColor("255;0;0");
}
}}

}


{


{
}

}


{


{
gdjs.Monster_32PuzzleCode.GDtestTextObjects1.createFrom(runtimeScene.getObjects("testText"));
{for(var i = 0, len = gdjs.Monster_32PuzzleCode.GDtestTextObjects1.length ;i < len;++i) {
    gdjs.Monster_32PuzzleCode.GDtestTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("solved")));
}
}}

}


};

gdjs.Monster_32PuzzleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDBackToReceptionObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDBackToReceptionObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDBackToReceptionObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDInventorySlotObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDInventorySlotObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDInventorySlotObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDInventoryKeyObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDInventoryKeyObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDInventoryKeyObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDMonsterSlotObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDMonsterBackgroundObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDMonsterBackgroundObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDMonsterBackgroundObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDSubmitObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDSubmitObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDSubmitObjects3.length = 0;
gdjs.Monster_32PuzzleCode.GDtestTextObjects1.length = 0;
gdjs.Monster_32PuzzleCode.GDtestTextObjects2.length = 0;
gdjs.Monster_32PuzzleCode.GDtestTextObjects3.length = 0;

gdjs.Monster_32PuzzleCode.eventsList6(runtimeScene);
return;

}

gdjs['Monster_32PuzzleCode'] = gdjs.Monster_32PuzzleCode;
