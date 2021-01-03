gdjs.Slideshow_95StartCode = {};
gdjs.Slideshow_95StartCode.GDDrawerObjects1= [];
gdjs.Slideshow_95StartCode.GDDrawerObjects2= [];
gdjs.Slideshow_95StartCode.GDDrawerObjects3= [];
gdjs.Slideshow_95StartCode.GDHUD_95ObjectNameObjects1= [];
gdjs.Slideshow_95StartCode.GDHUD_95ObjectNameObjects2= [];
gdjs.Slideshow_95StartCode.GDHUD_95ObjectNameObjects3= [];
gdjs.Slideshow_95StartCode.GDHUD_95DescriptionObjects1= [];
gdjs.Slideshow_95StartCode.GDHUD_95DescriptionObjects2= [];
gdjs.Slideshow_95StartCode.GDHUD_95DescriptionObjects3= [];
gdjs.Slideshow_95StartCode.GDHUD_95HintsObjects1= [];
gdjs.Slideshow_95StartCode.GDHUD_95HintsObjects2= [];
gdjs.Slideshow_95StartCode.GDHUD_95HintsObjects3= [];
gdjs.Slideshow_95StartCode.GDHUD_95TimerObjects1= [];
gdjs.Slideshow_95StartCode.GDHUD_95TimerObjects2= [];
gdjs.Slideshow_95StartCode.GDHUD_95TimerObjects3= [];
gdjs.Slideshow_95StartCode.GDHUD_95LocationNameObjects1= [];
gdjs.Slideshow_95StartCode.GDHUD_95LocationNameObjects2= [];
gdjs.Slideshow_95StartCode.GDHUD_95LocationNameObjects3= [];
gdjs.Slideshow_95StartCode.GDHUD_95HintTextObjects1= [];
gdjs.Slideshow_95StartCode.GDHUD_95HintTextObjects2= [];
gdjs.Slideshow_95StartCode.GDHUD_95HintTextObjects3= [];
gdjs.Slideshow_95StartCode.GDBackToReceptionObjects1= [];
gdjs.Slideshow_95StartCode.GDBackToReceptionObjects2= [];
gdjs.Slideshow_95StartCode.GDBackToReceptionObjects3= [];
gdjs.Slideshow_95StartCode.GDBackToCafeteriaObjects1= [];
gdjs.Slideshow_95StartCode.GDBackToCafeteriaObjects2= [];
gdjs.Slideshow_95StartCode.GDBackToCafeteriaObjects3= [];
gdjs.Slideshow_95StartCode.GDInventoryBackgroundObjects1= [];
gdjs.Slideshow_95StartCode.GDInventoryBackgroundObjects2= [];
gdjs.Slideshow_95StartCode.GDInventoryBackgroundObjects3= [];
gdjs.Slideshow_95StartCode.GDInventorySlotObjects1= [];
gdjs.Slideshow_95StartCode.GDInventorySlotObjects2= [];
gdjs.Slideshow_95StartCode.GDInventorySlotObjects3= [];
gdjs.Slideshow_95StartCode.GDInventoryKeyObjects1= [];
gdjs.Slideshow_95StartCode.GDInventoryKeyObjects2= [];
gdjs.Slideshow_95StartCode.GDInventoryKeyObjects3= [];
gdjs.Slideshow_95StartCode.GDCorrectObjects1= [];
gdjs.Slideshow_95StartCode.GDCorrectObjects2= [];
gdjs.Slideshow_95StartCode.GDCorrectObjects3= [];
gdjs.Slideshow_95StartCode.GDFadeObjects1= [];
gdjs.Slideshow_95StartCode.GDFadeObjects2= [];
gdjs.Slideshow_95StartCode.GDFadeObjects3= [];
gdjs.Slideshow_95StartCode.GDplayObjects1= [];
gdjs.Slideshow_95StartCode.GDplayObjects2= [];
gdjs.Slideshow_95StartCode.GDplayObjects3= [];
gdjs.Slideshow_95StartCode.GDSlideshowObjects1= [];
gdjs.Slideshow_95StartCode.GDSlideshowObjects2= [];
gdjs.Slideshow_95StartCode.GDSlideshowObjects3= [];
gdjs.Slideshow_95StartCode.GDArrowRightObjects1= [];
gdjs.Slideshow_95StartCode.GDArrowRightObjects2= [];
gdjs.Slideshow_95StartCode.GDArrowRightObjects3= [];
gdjs.Slideshow_95StartCode.GDArrowLeftObjects1= [];
gdjs.Slideshow_95StartCode.GDArrowLeftObjects2= [];
gdjs.Slideshow_95StartCode.GDArrowLeftObjects3= [];

gdjs.Slideshow_95StartCode.conditionTrue_0 = {val:false};
gdjs.Slideshow_95StartCode.condition0IsTrue_0 = {val:false};
gdjs.Slideshow_95StartCode.condition1IsTrue_0 = {val:false};
gdjs.Slideshow_95StartCode.condition2IsTrue_0 = {val:false};
gdjs.Slideshow_95StartCode.conditionTrue_1 = {val:false};
gdjs.Slideshow_95StartCode.condition0IsTrue_1 = {val:false};
gdjs.Slideshow_95StartCode.condition1IsTrue_1 = {val:false};
gdjs.Slideshow_95StartCode.condition2IsTrue_1 = {val:false};


gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDFadeObjects1Objects = Hashtable.newFrom({"Fade": gdjs.Slideshow_95StartCode.GDFadeObjects1});gdjs.Slideshow_95StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
gdjs.Slideshow_95StartCode.GDFadeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDFadeObjects1Objects, 0, 0, "Fade");
}{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("fade_out", 0, "linear", 1000, false);
}
}}

}


};gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDArrowRightObjects1ObjectsGDgdjs_46Slideshow_9595StartCode_46GDArrowLeftObjects1Objects = Hashtable.newFrom({"ArrowRight": gdjs.Slideshow_95StartCode.GDArrowRightObjects1, "ArrowLeft": gdjs.Slideshow_95StartCode.GDArrowLeftObjects1});gdjs.Slideshow_95StartCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Slideshow_95StartCode.GDArrowLeftObjects1, gdjs.Slideshow_95StartCode.GDArrowLeftObjects2);

gdjs.copyArray(gdjs.Slideshow_95StartCode.GDArrowRightObjects1, gdjs.Slideshow_95StartCode.GDArrowRightObjects2);


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Slideshow_95StartCode.GDArrowRightObjects2.length;i<l;++i) {
    if ( gdjs.Slideshow_95StartCode.GDArrowRightObjects2[i].getVariableString(gdjs.Slideshow_95StartCode.GDArrowRightObjects2[i].getVariables().get("direction")) == "right" ) {
        gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = true;
        gdjs.Slideshow_95StartCode.GDArrowRightObjects2[k] = gdjs.Slideshow_95StartCode.GDArrowRightObjects2[i];
        ++k;
    }
}
gdjs.Slideshow_95StartCode.GDArrowRightObjects2.length = k;for(var i = 0, k = 0, l = gdjs.Slideshow_95StartCode.GDArrowLeftObjects2.length;i<l;++i) {
    if ( gdjs.Slideshow_95StartCode.GDArrowLeftObjects2[i].getVariableString(gdjs.Slideshow_95StartCode.GDArrowLeftObjects2[i].getVariables().get("direction")) == "right" ) {
        gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = true;
        gdjs.Slideshow_95StartCode.GDArrowLeftObjects2[k] = gdjs.Slideshow_95StartCode.GDArrowLeftObjects2[i];
        ++k;
    }
}
gdjs.Slideshow_95StartCode.GDArrowLeftObjects2.length = k;}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Slideshow"), gdjs.Slideshow_95StartCode.GDSlideshowObjects2);
{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDSlideshowObjects2.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDSlideshowObjects2[i].setAnimation(gdjs.Slideshow_95StartCode.GDSlideshowObjects2[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "slideshowTimer");
}}

}


{

/* Reuse gdjs.Slideshow_95StartCode.GDArrowLeftObjects1 */
/* Reuse gdjs.Slideshow_95StartCode.GDArrowRightObjects1 */

gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Slideshow_95StartCode.GDArrowRightObjects1.length;i<l;++i) {
    if ( gdjs.Slideshow_95StartCode.GDArrowRightObjects1[i].getVariableString(gdjs.Slideshow_95StartCode.GDArrowRightObjects1[i].getVariables().get("direction")) == "left" ) {
        gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = true;
        gdjs.Slideshow_95StartCode.GDArrowRightObjects1[k] = gdjs.Slideshow_95StartCode.GDArrowRightObjects1[i];
        ++k;
    }
}
gdjs.Slideshow_95StartCode.GDArrowRightObjects1.length = k;for(var i = 0, k = 0, l = gdjs.Slideshow_95StartCode.GDArrowLeftObjects1.length;i<l;++i) {
    if ( gdjs.Slideshow_95StartCode.GDArrowLeftObjects1[i].getVariableString(gdjs.Slideshow_95StartCode.GDArrowLeftObjects1[i].getVariables().get("direction")) == "left" ) {
        gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = true;
        gdjs.Slideshow_95StartCode.GDArrowLeftObjects1[k] = gdjs.Slideshow_95StartCode.GDArrowLeftObjects1[i];
        ++k;
    }
}
gdjs.Slideshow_95StartCode.GDArrowLeftObjects1.length = k;}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Slideshow"), gdjs.Slideshow_95StartCode.GDSlideshowObjects1);
{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDSlideshowObjects1.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDSlideshowObjects1[i].setAnimation(gdjs.Slideshow_95StartCode.GDSlideshowObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "slideshowTimer");
}}

}


};gdjs.Slideshow_95StartCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.Slideshow_95StartCode.GDArrowLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.Slideshow_95StartCode.GDArrowRightObjects1);

gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDArrowRightObjects1ObjectsGDgdjs_46Slideshow_9595StartCode_46GDArrowLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Slideshow_95StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Slideshow_95StartCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Slideshow_95StartCode.GDplayObjects2);
{runtimeScene.getVariables().get("slideshowTimeCheck").setNumber(3);
}{runtimeScene.getVariables().get("fade").setNumber(1);
}{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDplayObjects2.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDplayObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Slideshow_95StartCode.GDFadeObjects2);

gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Slideshow_95StartCode.GDFadeObjects2.length;i<l;++i) {
    if ( gdjs.Slideshow_95StartCode.GDFadeObjects2[i].getOpacity() == 0 ) {
        gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = true;
        gdjs.Slideshow_95StartCode.GDFadeObjects2[k] = gdjs.Slideshow_95StartCode.GDFadeObjects2[i];
        ++k;
    }
}
gdjs.Slideshow_95StartCode.GDFadeObjects2.length = k;}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fade").setNumber(0);
}}

}


{


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
gdjs.Slideshow_95StartCode.condition1IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("fade")) == 0;
}if ( gdjs.Slideshow_95StartCode.condition0IsTrue_0.val ) {
{
{gdjs.Slideshow_95StartCode.conditionTrue_1 = gdjs.Slideshow_95StartCode.condition1IsTrue_0;
gdjs.Slideshow_95StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11726196);
}
}}
if (gdjs.Slideshow_95StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "slideshowTimer");
}}

}


{


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("slideshowTimeCheck")), "slideshowTimer");
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Slideshow"), gdjs.Slideshow_95StartCode.GDSlideshowObjects2);
{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDSlideshowObjects2.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDSlideshowObjects2[i].setAnimation(gdjs.Slideshow_95StartCode.GDSlideshowObjects2[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "slideshowTimer");
}}

}


{


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Slideshow_95StartCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDplayObjects2Objects = Hashtable.newFrom({"play": gdjs.Slideshow_95StartCode.GDplayObjects2});gdjs.Slideshow_95StartCode.eventsList4 = function(runtimeScene) {

{


gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.Slideshow_95StartCode.GDplayObjects1});gdjs.Slideshow_95StartCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Slideshow"), gdjs.Slideshow_95StartCode.GDSlideshowObjects2);

gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Slideshow_95StartCode.GDSlideshowObjects2.length;i<l;++i) {
    if ( gdjs.Slideshow_95StartCode.GDSlideshowObjects2[i].getAnimation() == 8 ) {
        gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = true;
        gdjs.Slideshow_95StartCode.GDSlideshowObjects2[k] = gdjs.Slideshow_95StartCode.GDSlideshowObjects2[i];
        ++k;
    }
}
gdjs.Slideshow_95StartCode.GDSlideshowObjects2.length = k;}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Slideshow_95StartCode.GDplayObjects2);
{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDplayObjects2.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDplayObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Slideshow_95StartCode.GDplayObjects2);

gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDplayObjects2Objects, runtimeScene, true, false);
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Slideshow_95StartCode.GDplayObjects2 */
{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDplayObjects2.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDplayObjects2[i].setColor("51;255;0");
}
}
{ //Subevents
gdjs.Slideshow_95StartCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Slideshow_95StartCode.GDplayObjects1);

gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Slideshow_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Slideshow_95StartCode.mapOfGDgdjs_46Slideshow_9595StartCode_46GDplayObjects1Objects, runtimeScene, true, true);
}if (gdjs.Slideshow_95StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Slideshow_95StartCode.GDplayObjects1 */
{for(var i = 0, len = gdjs.Slideshow_95StartCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.Slideshow_95StartCode.GDplayObjects1[i].setColor("21;105;0");
}
}}

}


};gdjs.Slideshow_95StartCode.eventsList6 = function(runtimeScene) {

{



}


{


gdjs.Slideshow_95StartCode.eventsList0(runtimeScene);
}


{


gdjs.Slideshow_95StartCode.eventsList3(runtimeScene);
}


{


gdjs.Slideshow_95StartCode.eventsList5(runtimeScene);
}


};

gdjs.Slideshow_95StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Slideshow_95StartCode.GDDrawerObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDDrawerObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDDrawerObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95ObjectNameObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95ObjectNameObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95ObjectNameObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95DescriptionObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95DescriptionObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95DescriptionObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95HintsObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95HintsObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95HintsObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95TimerObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95TimerObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95TimerObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95LocationNameObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95LocationNameObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95LocationNameObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95HintTextObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95HintTextObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDHUD_95HintTextObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDBackToReceptionObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDBackToReceptionObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDBackToReceptionObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDBackToCafeteriaObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDBackToCafeteriaObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDBackToCafeteriaObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDInventorySlotObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDInventorySlotObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDInventorySlotObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDInventoryKeyObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDInventoryKeyObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDInventoryKeyObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDCorrectObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDCorrectObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDCorrectObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDFadeObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDFadeObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDFadeObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDplayObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDplayObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDplayObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDSlideshowObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDSlideshowObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDSlideshowObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDArrowRightObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDArrowRightObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDArrowRightObjects3.length = 0;
gdjs.Slideshow_95StartCode.GDArrowLeftObjects1.length = 0;
gdjs.Slideshow_95StartCode.GDArrowLeftObjects2.length = 0;
gdjs.Slideshow_95StartCode.GDArrowLeftObjects3.length = 0;

gdjs.Slideshow_95StartCode.eventsList6(runtimeScene);
return;

}

gdjs['Slideshow_95StartCode'] = gdjs.Slideshow_95StartCode;
