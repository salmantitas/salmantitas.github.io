gdjs.IntroCode = {};
gdjs.IntroCode.GDTitleObjects1= [];
gdjs.IntroCode.GDTitleObjects2= [];
gdjs.IntroCode.GDtext1Objects1= [];
gdjs.IntroCode.GDtext1Objects2= [];
gdjs.IntroCode.GDtext2Objects1= [];
gdjs.IntroCode.GDtext2Objects2= [];
gdjs.IntroCode.GDplayObjects1= [];
gdjs.IntroCode.GDplayObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDtext1Objects1Objects = Hashtable.newFrom({"text1": gdjs.IntroCode.GDtext1Objects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDtext2Objects1Objects = Hashtable.newFrom({"text2": gdjs.IntroCode.GDtext2Objects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.IntroCode.GDplayObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.IntroCode.GDplayObjects1});gdjs.IntroCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("click").setNumber(0);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("click")) == 1;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));
gdjs.IntroCode.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
gdjs.IntroCode.GDtext1Objects1.length = 0;

{runtimeScene.getVariables().get("click").setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDtext1Objects1Objects, (( gdjs.IntroCode.GDtext2Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDtext2Objects1[0].getX()), (( gdjs.IntroCode.GDtext2Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDtext2Objects1[0].getY()), "");
}{for(var i = 0, len = gdjs.IntroCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDtext2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IntroCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDplayObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("click")) == 0;
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.IntroCode.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
gdjs.IntroCode.GDplayObjects1.length = 0;

gdjs.IntroCode.GDtext2Objects1.length = 0;

{runtimeScene.getVariables().get("click").setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDtext2Objects1Objects, (( gdjs.IntroCode.GDtext1Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDtext1Objects1[0].getX()), (( gdjs.IntroCode.GDtext1Objects1.length === 0 ) ? 0 :gdjs.IntroCode.GDtext1Objects1[0].getY()), "");
}{for(var i = 0, len = gdjs.IntroCode.GDtext1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDtext1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects, 365, 540, "");
}}

}


{

gdjs.IntroCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Top Floor", false);
}}

}


}; //End of gdjs.IntroCode.eventsList0x5b7a18


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDTitleObjects1.length = 0;
gdjs.IntroCode.GDTitleObjects2.length = 0;
gdjs.IntroCode.GDtext1Objects1.length = 0;
gdjs.IntroCode.GDtext1Objects2.length = 0;
gdjs.IntroCode.GDtext2Objects1.length = 0;
gdjs.IntroCode.GDtext2Objects2.length = 0;
gdjs.IntroCode.GDplayObjects1.length = 0;
gdjs.IntroCode.GDplayObjects2.length = 0;

gdjs.IntroCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
