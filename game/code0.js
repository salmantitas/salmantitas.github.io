gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDHUD_95LocationNameObjects1= [];
gdjs.MainMenuCode.GDHUD_95LocationNameObjects2= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects1= [];
gdjs.MainMenuCode.GDHUD_95DescriptionObjects2= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects1= [];
gdjs.MainMenuCode.GDHUD_95ObjectNameObjects2= [];
gdjs.MainMenuCode.GDBackToReceptionObjects1= [];
gdjs.MainMenuCode.GDBackToReceptionObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDDeskObjects1= [];
gdjs.MainMenuCode.GDDeskObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDDeskObjects1Objects = Hashtable.newFrom({"Desk": gdjs.MainMenuCode.GDDeskObjects1});gdjs.MainMenuCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.MainMenuCode.GDDeskObjects1.createFrom(runtimeScene.getObjects("Desk"));

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


}; //End of gdjs.MainMenuCode.eventsList0x5b7a18


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
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDDeskObjects1.length = 0;
gdjs.MainMenuCode.GDDeskObjects2.length = 0;

gdjs.MainMenuCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
