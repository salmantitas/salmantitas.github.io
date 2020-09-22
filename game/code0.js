gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDHUD_95LocationNameObjects1= [];
gdjs.MainMenuCode.GDHUD_95LocationNameObjects2= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects1= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects2= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects1= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects2= [];
gdjs.MainMenuCode.GDBackToReceptionObjects1= [];
gdjs.MainMenuCode.GDBackToReceptionObjects2= [];
gdjs.MainMenuCode.GDHUD_95TimerObjects1= [];
gdjs.MainMenuCode.GDHUD_95TimerObjects2= [];
gdjs.MainMenuCode.GDBackToCafeteriaObjects1= [];
gdjs.MainMenuCode.GDBackToCafeteriaObjects2= [];
gdjs.MainMenuCode.GDInventoryBackgroundObjects1= [];
gdjs.MainMenuCode.GDInventoryBackgroundObjects2= [];
gdjs.MainMenuCode.GDInventorySlotObjects1= [];
gdjs.MainMenuCode.GDInventorySlotObjects2= [];
gdjs.MainMenuCode.GDInventoryKeyObjects1= [];
gdjs.MainMenuCode.GDInventoryKeyObjects2= [];
gdjs.MainMenuCode.GDCorrectObjects1= [];
gdjs.MainMenuCode.GDCorrectObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDDeskObjects1= [];
gdjs.MainMenuCode.GDDeskObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects1Objects = Hashtable.newFrom({"Desk": gdjs.MainMenuCode.GDDeskObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Desk"), gdjs.MainMenuCode.GDDeskObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.MainMenuCode.GDBackToReceptionObjects1.length = 0;
gdjs.MainMenuCode.GDBackToReceptionObjects2.length = 0;
gdjs.MainMenuCode.GDHUD_95TimerObjects1.length = 0;
gdjs.MainMenuCode.GDHUD_95TimerObjects2.length = 0;
gdjs.MainMenuCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.MainMenuCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.MainMenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDInventorySlotObjects1.length = 0;
gdjs.MainMenuCode.GDInventorySlotObjects2.length = 0;
gdjs.MainMenuCode.GDInventoryKeyObjects1.length = 0;
gdjs.MainMenuCode.GDInventoryKeyObjects2.length = 0;
gdjs.MainMenuCode.GDCorrectObjects1.length = 0;
gdjs.MainMenuCode.GDCorrectObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDDeskObjects1.length = 0;
gdjs.MainMenuCode.GDDeskObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
