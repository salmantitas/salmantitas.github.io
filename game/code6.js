gdjs.Spare_32Parts_32RoomCode = {};
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1= [];
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects2= [];

gdjs.Spare_32Parts_32RoomCode.conditionTrue_0 = {val:false};
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0 = {val:false};
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0 = {val:false};
gdjs.Spare_32Parts_32RoomCode.condition2IsTrue_0 = {val:false};


gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1});gdjs.Spare_32Parts_32RoomCode.eventsList0 = function(runtimeScene) {

{

gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = false;
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val = false;
{
gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Spare_32Parts_32RoomCode.mapOfGDgdjs_46Spare_9532Parts_9532RoomCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Spare_32Parts_32RoomCode.condition0IsTrue_0.val ) {
{
gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Spare_32Parts_32RoomCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


{


{
}

}


};

gdjs.Spare_32Parts_32RoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects1.length = 0;
gdjs.Spare_32Parts_32RoomCode.GDBackToReceptionObjects2.length = 0;

gdjs.Spare_32Parts_32RoomCode.eventsList0(runtimeScene);
return;

}

gdjs['Spare_32Parts_32RoomCode'] = gdjs.Spare_32Parts_32RoomCode;
