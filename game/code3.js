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
gdjs.CafeteriaCode.GDCodeObjects1= [];
gdjs.CafeteriaCode.GDCodeObjects2= [];
gdjs.CafeteriaCode.GDCodeObjects3= [];

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


};gdjs.CafeteriaCode.mapOfGDgdjs_46CafeteriaCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.CafeteriaCode.GDBackToReceptionObjects1});gdjs.CafeteriaCode.eventsList1 = function(runtimeScene) {

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


{


{
}

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
gdjs.CafeteriaCode.GDCodeObjects1.length = 0;
gdjs.CafeteriaCode.GDCodeObjects2.length = 0;
gdjs.CafeteriaCode.GDCodeObjects3.length = 0;

gdjs.CafeteriaCode.eventsList1(runtimeScene);
return;

}

gdjs['CafeteriaCode'] = gdjs.CafeteriaCode;
