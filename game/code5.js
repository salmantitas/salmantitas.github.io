gdjs.Robot_32CubiclesCode = {};
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects1= [];
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2= [];
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1= [];
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects2= [];

gdjs.Robot_32CubiclesCode.conditionTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.condition0IsTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.condition1IsTrue_0 = {val:false};
gdjs.Robot_32CubiclesCode.condition2IsTrue_0 = {val:false};


gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1});gdjs.Robot_32CubiclesCode.eventsList0 = function(runtimeScene) {

{

gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = false;
gdjs.Robot_32CubiclesCode.condition1IsTrue_0.val = false;
{
gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Robot_32CubiclesCode.mapOfGDgdjs_46Robot_9532CubiclesCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Robot_32CubiclesCode.condition0IsTrue_0.val ) {
{
gdjs.Robot_32CubiclesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Robot_32CubiclesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


{


{
}

}


};

gdjs.Robot_32CubiclesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects1.length = 0;
gdjs.Robot_32CubiclesCode.GDBackToReceptionObjects2.length = 0;

gdjs.Robot_32CubiclesCode.eventsList0(runtimeScene);
return;

}

gdjs['Robot_32CubiclesCode'] = gdjs.Robot_32CubiclesCode;
