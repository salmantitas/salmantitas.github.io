gdjs.Motherboard_32RoomCode = {};
gdjs.Motherboard_32RoomCode.GDHUD_95LocationNameObjects1= [];
gdjs.Motherboard_32RoomCode.GDHUD_95LocationNameObjects2= [];
gdjs.Motherboard_32RoomCode.GDHUD_95DescriptionObjects1= [];
gdjs.Motherboard_32RoomCode.GDHUD_95DescriptionObjects2= [];
gdjs.Motherboard_32RoomCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Motherboard_32RoomCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Motherboard_32RoomCode.GDHUD_95TimerObjects1= [];
gdjs.Motherboard_32RoomCode.GDHUD_95TimerObjects2= [];
gdjs.Motherboard_32RoomCode.GDBackToReceptionObjects1= [];
gdjs.Motherboard_32RoomCode.GDBackToReceptionObjects2= [];

gdjs.Motherboard_32RoomCode.conditionTrue_0 = {val:false};
gdjs.Motherboard_32RoomCode.condition0IsTrue_0 = {val:false};
gdjs.Motherboard_32RoomCode.condition1IsTrue_0 = {val:false};
gdjs.Motherboard_32RoomCode.condition2IsTrue_0 = {val:false};


gdjs.Motherboard_32RoomCode.mapOfGDgdjs_46Motherboard_9532RoomCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Motherboard_32RoomCode.GDBackToReceptionObjects1});gdjs.Motherboard_32RoomCode.eventsList0 = function(runtimeScene) {

{

gdjs.Motherboard_32RoomCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.Motherboard_32RoomCode.condition0IsTrue_0.val = false;
gdjs.Motherboard_32RoomCode.condition1IsTrue_0.val = false;
{
gdjs.Motherboard_32RoomCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Motherboard_32RoomCode.mapOfGDgdjs_46Motherboard_9532RoomCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Motherboard_32RoomCode.condition0IsTrue_0.val ) {
{
gdjs.Motherboard_32RoomCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Motherboard_32RoomCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


{


{
}

}


};

gdjs.Motherboard_32RoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Motherboard_32RoomCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Motherboard_32RoomCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Motherboard_32RoomCode.GDBackToReceptionObjects1.length = 0;
gdjs.Motherboard_32RoomCode.GDBackToReceptionObjects2.length = 0;

gdjs.Motherboard_32RoomCode.eventsList0(runtimeScene);
return;

}

gdjs['Motherboard_32RoomCode'] = gdjs.Motherboard_32RoomCode;
