/**
 *
 * IpHelloInput widget javascript controller.
 * This file initializes widget management tools (if needed) and
 * prepare data to be stored on the database.
 *
 * @package ImpressPages
 * @copyright Copyright (C) 2011 ImpressPages LTD.
 * @license GNU/GPL, see ip_license.html
 */

function IpWidget_ipCustomMenu(widgetObject) {
    /*
     * widgetObject is a jQuery object of currently edited wiget
     * you can use it to find elements inside it. Eg. widgetObject.find('.yourElementClass').val();
     * Avoid genral selectors as for eg. 'input'. Because you can select some controlls of widgets instead of wat you want.
     * Also you can use it to get your widget data from the database using function: this.widgetObject.data('ipWidget').data;
     */
    this.widgetObject = widgetObject;


    //just enable bellow described functions
    this.manageInit = manageInit;
    this.prepareData = prepareData;


    /*
     * Executed each time, when your widget goes into management state.
     * Do whathever you need to initialize it:
     * - bind events
     * - populate default form values
     * - initialize tinyMCE
     * - ...
     */
    function manageInit() {
        //get widget data currently stored in the database
//        var instanceData = this.widgetObject.data('ipWidget').data;

        var instanceData = this.widgetObject.data('ipWidget').data;

        //if widget has been already initialized

        if (instanceData.menuDepth){
            this.widgetObject.find('.ipCustomMenuDepth').val(instanceData.menuDepth);
        }

        if (instanceData.menuMode){
            this.widgetObject.find('.ipCustomMenuMode').val(instanceData.zoneName);
        }else{
            this.widgetObject.find('.ipCustomMenuMode').prop("selectedIndex",0);
        }
    }

    /*
     * This function is executed when user press "confirm" or "save".
     * This function should return data object that needs to be stored into the dabase.
     *
     */
    function prepareData() {
        //create simple data object. It will be returned as the data to be stored.
        var data = Object();

        //set text value of an object
        data.menuDepth = parseInt(this.widgetObject.find('.ipCustomMenuDepth').val());

        if (this.widgetObject.find('.ipCustomMenuMode').prop("selectedIndex") == 0){
            data.menuMode = 0;
            data.zoneName = '';
        }else{
            data.menuMode = 1;
            data.zoneName = this.widgetObject.find('.ipCustomMenuMode').val();
        }

        /* you can store as many data as you need.
         * data.var1 = x;
         * data.var2 = x;
         * data.anything = x;
         * ...
         */

        /*
         * Return data object to ImpressPages system. Data that is returned
         * will be stored to the database and will be available next time in manageInit function.
         *
         * Simple return statement will not work. You need to return value using event as it is shown bellow.
         * This is done seeking flexability. Using this syntax you can
         * initialize save process here, then wait for image uploads or other events
         * and return result in different function where you will get final response
         * about sucessfull save.
         *
         * If you don't know what that means, just use bellow example.
         * You don't need to care too much.
         */
        $(this.widgetObject).trigger('preparedWidgetData.ipWidget', [ data ]);
    }

};
/**
 * Created with JetBrains PhpStorm.
 * User: marijus
 * Date: 13.10.28
 * Time: 11.09
 * To change this template use File | Settings | File Templates.
 */
