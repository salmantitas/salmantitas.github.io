gdjs.ReceptionCode = {};
gdjs.ReceptionCode.GDTitleObjects1= [];
gdjs.ReceptionCode.GDTitleObjects2= [];
gdjs.ReceptionCode.GDDeskObjects1= [];
gdjs.ReceptionCode.GDDeskObjects2= [];

gdjs.ReceptionCode.conditionTrue_0 = {val:false};
gdjs.ReceptionCode.condition0IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition1IsTrue_0 = {val:false};
gdjs.ReceptionCode.condition2IsTrue_0 = {val:false};


gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDDeskObjects1Objects = Hashtable.newFrom({"Desk": gdjs.ReceptionCode.GDDeskObjects1});gdjs.ReceptionCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.ReceptionCode.GDDeskObjects1.createFrom(runtimeScene.getObjects("Desk"));

gdjs.ReceptionCode.condition0IsTrue_0.val = false;
gdjs.ReceptionCode.condition1IsTrue_0.val = false;
{
gdjs.ReceptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReceptionCode.mapOfGDgdjs_46ReceptionCode_46GDDeskObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ReceptionCode.condition0IsTrue_0.val ) {
{
gdjs.ReceptionCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.ReceptionCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


}; //End of gdjs.ReceptionCode.eventsList0x5b7a18


gdjs.ReceptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ReceptionCode.GDTitleObjects1.length = 0;
gdjs.ReceptionCode.GDTitleObjects2.length = 0;
gdjs.ReceptionCode.GDDeskObjects1.length = 0;
gdjs.ReceptionCode.GDDeskObjects2.length = 0;

gdjs.ReceptionCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['ReceptionCode'] = gdjs.ReceptionCode;
