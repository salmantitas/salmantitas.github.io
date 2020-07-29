gdjs.The_32EndCode = {};
gdjs.The_32EndCode.GDEndObjects1= [];
gdjs.The_32EndCode.GDEndObjects2= [];
gdjs.The_32EndCode.GDPlayObjects1= [];
gdjs.The_32EndCode.GDPlayObjects2= [];

gdjs.The_32EndCode.conditionTrue_0 = {val:false};
gdjs.The_32EndCode.condition0IsTrue_0 = {val:false};
gdjs.The_32EndCode.condition1IsTrue_0 = {val:false};


gdjs.The_32EndCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.The_32EndCode.condition0IsTrue_0.val = false;
{
gdjs.The_32EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.The_32EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


}; //End of gdjs.The_32EndCode.eventsList0x5b7a18


gdjs.The_32EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.The_32EndCode.GDEndObjects1.length = 0;
gdjs.The_32EndCode.GDEndObjects2.length = 0;
gdjs.The_32EndCode.GDPlayObjects1.length = 0;
gdjs.The_32EndCode.GDPlayObjects2.length = 0;

gdjs.The_32EndCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['The_32EndCode'] = gdjs.The_32EndCode;
