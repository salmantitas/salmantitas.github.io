gdjs.Puzzle_32Robot_32PictureCode = {};
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects3= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects1= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects2= [];
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects3= [];

gdjs.Puzzle_32Robot_32PictureCode.conditionTrue_0 = {val:false};
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0 = {val:false};
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0 = {val:false};
gdjs.Puzzle_32Robot_32PictureCode.condition2IsTrue_0 = {val:false};


gdjs.Puzzle_32Robot_32PictureCode.eventsList0 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gameTimer");
}if (gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameTimer");
}{runtimeScene.getGame().getVariables().get("countdown").sub(1);
}}

}


{


{
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1.createFrom(runtimeScene.getObjects("HUD_Timer"));
{for(var i = 0, len = gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1.length ;i < len;++i) {
    gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("countdown"))));
}
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDBackToReceptionObjects1Objects = Hashtable.newFrom({"BackToReception": gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1});gdjs.Puzzle_32Robot_32PictureCode.eventsList1 = function(runtimeScene) {

{

gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1.createFrom(runtimeScene.getObjects("BackToReception"));

gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = false;
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = false;
{
gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Puzzle_32Robot_32PictureCode.mapOfGDgdjs_46Puzzle_9532Robot_9532PictureCode_46GDBackToReceptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Puzzle_32Robot_32PictureCode.condition0IsTrue_0.val ) {
{
gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Puzzle_32Robot_32PictureCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Reception", false);
}}

}


};gdjs.Puzzle_32Robot_32PictureCode.eventsList2 = function(runtimeScene) {

{


gdjs.Puzzle_32Robot_32PictureCode.eventsList0(runtimeScene);
}


{


gdjs.Puzzle_32Robot_32PictureCode.eventsList1(runtimeScene);
}


{


{
}

}


};

gdjs.Puzzle_32Robot_32PictureCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDBackToReceptionObjects3.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects1.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects2.length = 0;
gdjs.Puzzle_32Robot_32PictureCode.GDRobotPictureObjects3.length = 0;

gdjs.Puzzle_32Robot_32PictureCode.eventsList2(runtimeScene);
return;

}

gdjs['Puzzle_32Robot_32PictureCode'] = gdjs.Puzzle_32Robot_32PictureCode;
