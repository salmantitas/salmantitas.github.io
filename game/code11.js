gdjs.The_32EndCode = {};
gdjs.The_32EndCode.GDHUD_95LocationNameObjects1= [];
gdjs.The_32EndCode.GDHUD_95LocationNameObjects2= [];
gdjs.The_32EndCode.GDHUD_95DescriptionObjects1= [];
gdjs.The_32EndCode.GDHUD_95DescriptionObjects2= [];
gdjs.The_32EndCode.GDHUD_95ObjectNameObjects1= [];
gdjs.The_32EndCode.GDHUD_95ObjectNameObjects2= [];
gdjs.The_32EndCode.GDHUD_95TimerObjects1= [];
gdjs.The_32EndCode.GDHUD_95TimerObjects2= [];
gdjs.The_32EndCode.GDBackToReceptionObjects1= [];
gdjs.The_32EndCode.GDBackToReceptionObjects2= [];
gdjs.The_32EndCode.GDEndObjects1= [];
gdjs.The_32EndCode.GDEndObjects2= [];
gdjs.The_32EndCode.GDPlayObjects1= [];
gdjs.The_32EndCode.GDPlayObjects2= [];

gdjs.The_32EndCode.conditionTrue_0 = {val:false};
gdjs.The_32EndCode.condition0IsTrue_0 = {val:false};
gdjs.The_32EndCode.condition1IsTrue_0 = {val:false};


gdjs.The_32EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.The_32EndCode.condition0IsTrue_0.val = false;
{
gdjs.The_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.The_32EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};

gdjs.The_32EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32EndCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.The_32EndCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.The_32EndCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.The_32EndCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.The_32EndCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.The_32EndCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.The_32EndCode.GDHUD_95TimerObjects1.length = 0;
gdjs.The_32EndCode.GDHUD_95TimerObjects2.length = 0;
gdjs.The_32EndCode.GDBackToReceptionObjects1.length = 0;
gdjs.The_32EndCode.GDBackToReceptionObjects2.length = 0;
gdjs.The_32EndCode.GDEndObjects1.length = 0;
gdjs.The_32EndCode.GDEndObjects2.length = 0;
gdjs.The_32EndCode.GDPlayObjects1.length = 0;
gdjs.The_32EndCode.GDPlayObjects2.length = 0;

gdjs.The_32EndCode.eventsList0(runtimeScene);
return;

}

gdjs['The_32EndCode'] = gdjs.The_32EndCode;
