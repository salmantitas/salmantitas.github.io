gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDMapObjects1= [];
gdjs.New_32sceneCode.GDMapObjects2= [];
gdjs.New_32sceneCode.GDInteractibleObjects1= [];
gdjs.New_32sceneCode.GDInteractibleObjects2= [];
gdjs.New_32sceneCode.GDHUDObjects1= [];
gdjs.New_32sceneCode.GDHUDObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.New_32sceneCode.GDMapObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects = Hashtable.newFrom({"Map": gdjs.New_32sceneCode.GDMapObjects1});gdjs.New_32sceneCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHUDObjects1.createFrom(runtimeScene.getObjects("HUD"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects1[i].setString("Map");
}
}}

}


{

gdjs.New_32sceneCode.GDMapObjects1.createFrom(runtimeScene.getObjects("Map"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDMapObjects1Objects, runtimeScene, true, true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDHUDObjects1.createFrom(runtimeScene.getObjects("HUD"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDHUDObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDHUDObjects1[i].setString("");
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x5b7a18


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDMapObjects1.length = 0;
gdjs.New_32sceneCode.GDMapObjects2.length = 0;
gdjs.New_32sceneCode.GDInteractibleObjects1.length = 0;
gdjs.New_32sceneCode.GDInteractibleObjects2.length = 0;
gdjs.New_32sceneCode.GDHUDObjects1.length = 0;
gdjs.New_32sceneCode.GDHUDObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
