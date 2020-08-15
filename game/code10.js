gdjs.Accounting_32OfficeCode = {};
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects1= [];
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2= [];
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1= [];
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects2= [];
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects1= [];
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects2= [];
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects1= [];
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects2= [];
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects1= [];
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects2= [];
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects1= [];
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects2= [];

gdjs.Accounting_32OfficeCode.conditionTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.condition0IsTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.condition1IsTrue_0 = {val:false};
gdjs.Accounting_32OfficeCode.condition2IsTrue_0 = {val:false};


gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1});gdjs.Accounting_32OfficeCode.eventsList0 = function(runtimeScene) {

{

gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = false;
gdjs.Accounting_32OfficeCode.condition1IsTrue_0.val = false;
{
gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Accounting_32OfficeCode.mapOfGDgdjs_46Accounting_9532OfficeCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Accounting_32OfficeCode.condition0IsTrue_0.val ) {
{
gdjs.Accounting_32OfficeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Accounting_32OfficeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


{


{
}

}


};

gdjs.Accounting_32OfficeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToReceptionObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDInventorySlotObjects2.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects1.length = 0;
gdjs.Accounting_32OfficeCode.GDInventoryKeyObjects2.length = 0;

gdjs.Accounting_32OfficeCode.eventsList0(runtimeScene);
return;

}

gdjs['Accounting_32OfficeCode'] = gdjs.Accounting_32OfficeCode;
