gdjs.IntroCode = {};
gdjs.IntroCode.GDHUD_95LocationNameObjects1= [];
gdjs.IntroCode.GDHUD_95LocationNameObjects2= [];
gdjs.IntroCode.GDHUD_95LocationNameObjects3= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects1= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects2= [];
gdjs.IntroCode.GDHUD_95DescriptionObjects3= [];
gdjs.IntroCode.GDtext1Objects1= [];
gdjs.IntroCode.GDtext1Objects2= [];
gdjs.IntroCode.GDtext1Objects3= [];
gdjs.IntroCode.GDtext2Objects1= [];
gdjs.IntroCode.GDtext2Objects2= [];
gdjs.IntroCode.GDtext2Objects3= [];
gdjs.IntroCode.GDplayObjects1= [];
gdjs.IntroCode.GDplayObjects2= [];
gdjs.IntroCode.GDplayObjects3= [];
gdjs.IntroCode.GDComputerObjects1= [];
gdjs.IntroCode.GDComputerObjects2= [];
gdjs.IntroCode.GDComputerObjects3= [];
gdjs.IntroCode.GDTypingTextObjects1= [];
gdjs.IntroCode.GDTypingTextObjects2= [];
gdjs.IntroCode.GDTypingTextObjects3= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.IntroCode.GDplayObjects1});gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.IntroCode.GDplayObjects1});gdjs.IntroCode.eventsList0x782c64 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("lineState")) == 0;
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDTypingTextObjects2.createFrom(runtimeScene.getObjects("TypingText"));
{for(var i = 0, len = gdjs.IntroCode.GDTypingTextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDTypingTextObjects2[i].setString(gdjs.IntroCode.GDTypingTextObjects2[i].getString() + (gdjs.evtTools.string.subStr((gdjs.RuntimeObject.getVariableString(gdjs.IntroCode.GDTypingTextObjects2[i].getVariables().getFromIndex(0))), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charPos")), 1)));
}
}{runtimeScene.getVariables().get("charPos").add(1);
}}

}


{

gdjs.IntroCode.GDTypingTextObjects1.createFrom(runtimeScene.getObjects("TypingText"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("charPos")) == gdjs.evtTools.string.strLen((gdjs.RuntimeObject.getVariableString(((gdjs.IntroCode.GDTypingTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.IntroCode.GDTypingTextObjects1[0].getVariables()).getFromIndex(0))));
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDTypingTextObjects1 */
{runtimeScene.getVariables().get("charPos").setNumber(0);
}{for(var i = 0, len = gdjs.IntroCode.GDTypingTextObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTypingTextObjects1[i].setString(gdjs.IntroCode.GDTypingTextObjects1[i].getString() + ("\n"));
}
}}

}


}; //End of gdjs.IntroCode.eventsList0x782c64
gdjs.IntroCode.eventsList0x5b7a18 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDplayObjects1.length = 0;

{runtimeScene.getVariables().get("click").setNumber(0);
}{runtimeScene.getVariables().get("charPos").setNumber(0);
}{runtimeScene.getVariables().get("lineState").setString("");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDplayObjects1Objects, 365, 540, "");
}}

}


{



}


{



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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "textTimer");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "textTimer");
}
{ //Subevents
gdjs.IntroCode.eventsList0x782c64(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.IntroCode.eventsList0x5b7a18


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.IntroCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.IntroCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.IntroCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.IntroCode.GDtext1Objects1.length = 0;
gdjs.IntroCode.GDtext1Objects2.length = 0;
gdjs.IntroCode.GDtext1Objects3.length = 0;
gdjs.IntroCode.GDtext2Objects1.length = 0;
gdjs.IntroCode.GDtext2Objects2.length = 0;
gdjs.IntroCode.GDtext2Objects3.length = 0;
gdjs.IntroCode.GDplayObjects1.length = 0;
gdjs.IntroCode.GDplayObjects2.length = 0;
gdjs.IntroCode.GDplayObjects3.length = 0;
gdjs.IntroCode.GDComputerObjects1.length = 0;
gdjs.IntroCode.GDComputerObjects2.length = 0;
gdjs.IntroCode.GDComputerObjects3.length = 0;
gdjs.IntroCode.GDTypingTextObjects1.length = 0;
gdjs.IntroCode.GDTypingTextObjects2.length = 0;
gdjs.IntroCode.GDTypingTextObjects3.length = 0;

gdjs.IntroCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
